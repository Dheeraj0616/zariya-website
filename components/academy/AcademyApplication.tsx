"use client";

import { AcademyForm } from "@/components/academy/AcademyForm";

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
        strokeWidth="2"
      />
      <path
        d="M23 86C30 72 32 55 56 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AcademyApplication() {
  return (
    <section
      id="apply"
      aria-labelledby="academy-application-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Background coffee-bean artwork */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-10 -z-10 text-accent/20 sm:right-8 sm:top-4"
      >
        <CoffeeBean className="h-64 w-48 rotate-12 sm:h-80 sm:w-60" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-12 -z-10 h-72 w-72 rounded-full bg-[#6F4E37]/15 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Application introduction */}
          <div className="hero-reveal-1 max-w-xl lg:sticky lg:top-28">
            <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
              <CoffeeBean className="h-7 w-5 shrink-0 text-[#A47551]" />
              Your next chapter starts here
            </p>

            {/* Main display heading: Anton */}
            <h2
              id="academy-application-heading"
              className="mt-6 max-w-lg font-anton text-4xl font-normal uppercase leading-[1.12] tracking-wide sm:text-5xl lg:text-6xl"
            >
              Turn your passion for coffee into{" "}
              <span className="text-accent">a craft.</span>
            </h2>

            <p className="mt-6 max-w-lg font-sans text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              Learn the foundations, build confidence behind the machine, and
              develop your skills through structured theory and individual
              hands-on practice.
            </p>

            {/* Course highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="border border-primary-foreground/15 bg-primary-foreground/[0.04] p-4 sm:p-5">
                <span className="block font-anton text-2xl font-normal uppercase text-accent sm:text-3xl">
                  2 weeks
                </span>
                <span className="mt-2 block font-sans text-xs leading-5 text-primary-foreground/65 sm:text-sm">
                  Structured theory classes
                </span>
              </div>

              <div className="border border-primary-foreground/15 bg-primary-foreground/[0.04] p-4 sm:p-5">
                <span className="block font-anton text-2xl font-normal uppercase text-accent sm:text-3xl">
                  10 sessions
                </span>
                <span className="mt-2 block font-sans text-xs leading-5 text-primary-foreground/65 sm:text-sm">
                  One-on-one practical training
                </span>
              </div>
            </div>

            {/* Application review information */}
            <div className="mt-8 border-l-2 border-accent py-1 pl-5 sm:mt-10">
              <p className="font-anton text-base font-normal uppercase leading-6 text-primary-foreground sm:text-lg">
                Every application gets personal attention.
              </p>
              <p className="mt-2 max-w-md font-sans text-sm leading-6 text-primary-foreground/65 sm:text-base sm:leading-7">
                We review your application personally and aim to call you
                within 48 hours.
              </p>
            </div>

            {/* Brand tagline: Cinzel */}
            <p className="mt-8 font-cinzel text-[10px] uppercase tracking-[0.16em] text-primary-foreground/40 sm:text-xs sm:tracking-[0.18em]">
              The Zariya Academy · Nasirabad, Kolkata
            </p>
          </div>

          {/* Application form with coffee-bean border details */}
          <div className="hero-reveal-2 relative min-w-0 p-[2px]">
            {/* Gold outer border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border border-[#DA8F0E]/70"
            />

            {/* Coffee beans attached to the border corners */}
            <CoffeeBean className="pointer-events-none absolute -left-3 -top-4 z-20 h-12 w-9 -rotate-12 bg-primary text-[#DA8F0E]" />

            <CoffeeBean className="pointer-events-none absolute -right-3 -top-4 z-20 h-12 w-9 rotate-12 bg-primary text-[#6F4E37]" />

            <CoffeeBean className="pointer-events-none absolute -bottom-4 -left-3 z-20 h-12 w-9 rotate-12 bg-primary text-[#6F4E37]" />

            <CoffeeBean className="pointer-events-none absolute -bottom-4 -right-3 z-20 h-12 w-9 -rotate-12 bg-primary text-[#DA8F0E]" />

            {/* Cream form panel */}
            <div className="relative m-1 border border-[#6F4E37]/25 bg-background p-5 text-foreground shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
              {/* Inset decorative border */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 border border-[#6F4E37]/15"
              />

              <div className="relative">
                <div className="mb-7 border-b border-border pb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <CoffeeBean className="h-6 w-5 shrink-0 text-[#6F4E37]" />

                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                      Start your application
                    </p>
                  </div>

                  {/* Form heading: Cinzel */}
                  <h3 className="mt-3 font-cinzel text-xl font-semibold leading-snug tracking-wide text-foreground sm:text-2xl">
                    Tell us about yourself.
                  </h3>

                  <p className="mt-3 font-sans text-sm leading-6 text-muted-foreground sm:text-base">
                    Share a few details so our team can get in touch with you.
                  </p>
                </div>

                {/* Existing form functionality preserved */}
                <AcademyForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle cream-to-navy transition at the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-3 bg-gradient-to-b from-[#E7E4DC]/80 to-transparent"
      />
    </section>
  );
}