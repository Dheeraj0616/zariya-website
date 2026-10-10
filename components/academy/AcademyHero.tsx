"use client";

import Image from "next/image";
import { academy } from "@/config/academy";

function CoffeeBean({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 110"
      fill="none"
      className={className}
    >
      <ellipse
        cx="40"
        cy="55"
        rx="25"
        ry="39"
        transform="rotate(35 40 55)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M23 86C30 72 32 55 56 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AcademyHero() {
  const handleApplyClick = () => {
    const applicationSection = document.getElementById("apply");

    if (!applicationSection) {
      console.error(
        'Academy application section with id="apply" was not found.',
      );
      return;
    }

    window.history.replaceState(null, "", "/academy#apply");

    applicationSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  const handleExploreClick = () => {
    const curriculumSection = document.getElementById("curriculum");

    if (!curriculumSection) {
      console.error(
        'Curriculum section with id="curriculum" was not found. Add id="curriculum" to the curriculum section.',
      );
      return;
    }

    window.history.replaceState(null, "", "/academy#curriculum");

    curriculumSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      aria-labelledby="academy-hero-heading"
      className="relative isolate w-full overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Full-width espresso photography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src="/assets/academy/hero-barista.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Darken the left for readable text without hiding the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#012745]/95 via-[#012745]/65 to-[#012745]/15"
      />

      {/* Gentle bottom shading for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#012745]/40 via-transparent to-[#012745]/10"
      />

      {/* Restrained coffee-bean decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-8 text-[#DA8F0E]/45 sm:right-10 sm:top-10"
      >
        <CoffeeBean className="h-28 w-20 rotate-12 sm:h-36 sm:w-28" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[42%] hidden text-[#A47551]/35 md:block"
      >
        <CoffeeBean className="h-20 w-16 -rotate-45" />
      </div>

      <div className="relative mx-auto grid min-h-0 w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 sm:gap-14 sm:px-6 sm:py-20 lg:min-h-[clamp(600px,82vh,850px)] lg:grid-cols-[1fr_0.8fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: Academy introduction */}
        <div className="relative z-10 w-full min-w-0 max-w-2xl">
          <p className="hero-reveal hero-reveal-1 mb-6 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
            <CoffeeBean className="h-7 w-5 shrink-0 text-[#DA8F0E]" />
            The Zariya Academy
          </p>

          {/* Main heading: Anton */}
          <h1
            id="academy-hero-heading"
            className="hero-reveal hero-reveal-2 max-w-xl font-anton text-4xl font-normal uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-6xl"
          >
            Learn the craft.
            <span className="mt-2 block text-accent">
              Master the method.
            </span>
          </h1>

          <p className="hero-reveal hero-reveal-3 mt-6 max-w-xl font-sans text-base leading-7 text-primary-foreground/95 sm:text-lg sm:leading-8">
            {academy.hero.tagline}
          </p>

          <p className="hero-reveal hero-reveal-3 mt-3 max-w-lg font-sans text-sm leading-6 text-primary-foreground/80 sm:text-base sm:leading-7">
            {academy.hero.subline}
          </p>

          {/* Course details */}
          <div className="hero-reveal hero-reveal-3 mt-7 flex flex-wrap gap-x-6 gap-y-3 border-y border-primary-foreground/25 py-4 sm:mt-8">
            <div className="flex items-center gap-2">
              <CoffeeBean className="h-5 w-4 shrink-0 text-[#DA8F0E]" />
              <span className="font-sans text-sm text-primary-foreground/95">
                2 weeks of theory
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CoffeeBean className="h-5 w-4 shrink-0 text-[#DA8F0E]" />
              <span className="font-sans text-sm text-primary-foreground/95">
                10 individual practice sessions
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="hero-reveal hero-reveal-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/academy#apply"
              onClick={(event) => {
                event.preventDefault();
                handleApplyClick();
              }}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-secondary px-7 py-3 font-cinzel text-sm font-semibold text-secondary-foreground transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-lg hover:shadow-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:w-auto"
            >
              {academy.hero.cta.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="/academy#curriculum"
              onClick={(event) => {
                event.preventDefault();
                handleExploreClick();
              }}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary-foreground/35 px-5 py-3 font-cinzel text-sm font-medium text-primary-foreground transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Explore the course
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          </div>

          <p className="hero-reveal hero-reveal-4 mt-6 font-sans text-xs tracking-wide text-primary-foreground/75">
            Hands-on learning · Individual practice
          </p>
        </div>

        {/* Right: Barista Method logo */}
        <div className="hero-logo-reveal relative flex w-full min-w-0 items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[22rem] sm:max-w-[25rem] lg:max-w-[28rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 border border-[#DA8F0E]/75 sm:-inset-4"
            >
              <CoffeeBean className="absolute -left-3 -top-5 h-10 w-8 -rotate-12 bg-primary text-[#DA8F0E] sm:-left-4 sm:-top-6 sm:h-12 sm:w-9" />
              <CoffeeBean className="absolute -bottom-5 -right-3 h-10 w-8 rotate-12 bg-primary text-[#A47551] sm:-bottom-6 sm:-right-4 sm:h-12 sm:w-9" />
            </div>

            <div className="relative overflow-hidden rounded-sm border border-[#E7E4DC]/40 bg-[#E7E4DC] shadow-2xl shadow-black/35">
              <Image
                src="/assets/brand/barista-method-logo.png"
                alt="The Barista Method by The Zariya Academy"
                width={1200}
                height={1200}
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 448px"
                className="hero-logo-float block h-auto w-full object-contain"
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 sm:text-xs">
                A practical learning experience
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-accent/75"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Small cream fade at the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-3 bg-gradient-to-b from-transparent to-[#E7E4DC]/80"
      />
    </section>
  );
}