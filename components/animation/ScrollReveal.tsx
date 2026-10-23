"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export type Direction = "up" | "down" | "left" | "right" | "none";

export type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  distance?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

/**
 * ScrollReveal
 * Flagship motion entrance reveal retaining original props signature.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 750,
  distance = 28,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.08,
    margin: "0px 0px -40px 0px",
  });
  const prefersReducedMotion = useReducedMotion();
  const offset = getOffset(direction, distance);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: direction === "none" ? "blur(0px)" : "blur(3px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }
          : undefined
      }
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   REVEAL TEXT
   Masked headline reveal for flagship typography.
   ========================================= */

export type RevealTextProps = {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

export function RevealText({
  children,
  className,
  delay = 0,
  duration = 750,
  as: Component = "span",
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={className} style={{ display: "block" }}>
      <span
        ref={ref}
        aria-label={children}
        style={{ display: "block", overflow: "hidden" }}
      >
        <motion.span
          aria-hidden="true"
          initial={{ y: "105%", opacity: 0 }}
          animate={isInView ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 }}
          transition={{
            duration: duration / 1000,
            delay: delay / 1000,
            ease: EASE,
          }}
          style={{ display: "block" }}
        >
          {children}
        </motion.span>
      </span>
    </Component>
  );
}

/* =========================================
   PARALLAX BOX
   Restrained 60fps scroll-linked translation.
   ========================================= */

export type ParallaxBoxProps = {
  children: ReactNode;
  className?: string;
  /** Maximum vertical displacement in pixels. */
  distance?: number;
  offset?: ["start end" | "start start", "end start" | "end end"];
};

export function ParallaxBox({
  children,
  className,
  distance = 32,
  offset = ["start end", "end start"],
}: ParallaxBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.25,
  });

  const y = useTransform(smoothProgress, [0, 1], [distance, -distance]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/* =========================================
   SHEET COUNTER
   Animated technical index / counter.
   ========================================= */

export type SheetCounterProps = {
  value: number;
  className?: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export function SheetCounter({
  value,
  className,
  duration = 1200,
  prefix = "",
  suffix = "",
}: SheetCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let frame = 0;
    let startTime: number | null = null;
    let cancelled = false;

    const animate = (timestamp: number) => {
      if (cancelled) return;

      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [duration, isInView, prefersReducedMotion, value]);

  const outputNumber = prefersReducedMotion ? value : displayValue;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {outputNumber.toLocaleString()}
      {suffix}
    </span>
  );
}

export default ScrollReveal;
