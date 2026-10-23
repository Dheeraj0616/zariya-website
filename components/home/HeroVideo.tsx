"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !mediaQuery.matches) {
          if (!hasStarted) {
            setHasStarted(true);
          }
          video.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay policy or paused by user
            setIsPlaying(false);
          });
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    const handleMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        video.pause();
        setIsPlaying(false);
      }
    };
    mediaQuery.addEventListener("change", handleMotion);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleMotion);
    };
  }, [hasStarted]);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/brand/zariya-hero.mp4"
        poster="/assets/brand/zariya-hero-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="The Zariya Collective film showcasing Studio, Academy and Aayaam"
      >
        Your browser does not support HTML video.
      </video>

      {/* Accessible play/pause toggle button in bottom corner */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute bottom-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-sm border border-white/30 bg-[#012745]/75 text-white backdrop-blur-sm transition-all hover:bg-[#012745] hover:border-[#DA8F0E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E]"
      >
        {isPlaying ? (
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5 fill-current translate-x-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default HeroVideo;
