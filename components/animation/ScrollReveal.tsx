"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before the animation starts, in ms. */
  delay?: number;
  /** Which side the element slides in from. "none" is a plain fade. */
  direction?: Direction;
  /** Animation length, in ms. */
  duration?: number;
  /** How far the element travels, in px. */
  distance?: number;
};

// useLayoutEffect on the client (no flash before the hidden state applies),
// useEffect on the server (avoids the SSR warning).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return `translate3d(0, ${distance}px, 0)`;
    case "down":
      return `translate3d(0, ${-distance}px, 0)`;
    case "left":
      return `translate3d(${-distance}px, 0, 0)`;
    case "right":
      return `translate3d(${distance}px, 0, 0)`;
    default:
      return "none";
  }
}

/**
 * idle    : server render / reduced motion / no IntersectionObserver.
 *           No styles applied, so content is always visible.
 * hidden  : mounted and waiting to scroll into view.
 * visible : scrolled into view, transitions to its final position.
 */
type Phase = "idle" | "hidden" | "visible";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 900,
  distance = 32,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useIsomorphicLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Keep content visible when motion is reduced or observers are unavailable.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    setPhase("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setPhase("visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        // Small bottom margin so elements near the very end of the page
        // can still reach the trigger line.
        rootMargin: "0px 0px -48px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // The transition lives only on the "visible" state, so moving from
  // idle -> hidden snaps instantly and hidden -> visible animates.
  let style: CSSProperties | undefined;

  if (phase === "hidden") {
    style = {
      opacity: 0,
      transform: getOffset(direction, distance),
      willChange: "opacity, transform",
    };
  } else if (phase === "visible") {
    style = {
      opacity: 1,
      transform: "none",
      transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
    };
  }

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
}