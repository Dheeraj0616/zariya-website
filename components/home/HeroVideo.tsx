"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function handleMotionPreference(
      event: MediaQueryListEvent | MediaQueryList,
    ) {
      if (!video) return;
      if (event.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Autoplay policy may prevent unprompted playback
        });
      }
    }

    // Initial check on mount
    handleMotionPreference(mediaQuery);

    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full origin-top-left scale-[1.04] object-cover"
      src="/assets/brand/zariya-hero.mp4"
      poster="/assets/brand/zariya-hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label="Zariya brand film showcasing Consulting, Architecture, and Academy"
    >
      Your browser does not support HTML video.
    </video>
  );
}
