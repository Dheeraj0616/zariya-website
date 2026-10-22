import Link from "next/link";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-zariya-cream text-zariya-navy"
    >
      <div className="relative mx-auto flex min-h-0 w-full max-w-[1600px] items-center px-5 py-12 sm:px-6 sm:py-16 lg:min-h-[min(760px,calc(100svh-6rem))] lg:px-10 lg:py-16 xl:px-14">
        <div className="grid w-full items-center gap-10 sm:gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 xl:gap-16">
          {/* Left: Editorial hero content */}
          <div className="relative z-10 max-w-xl">
            <p className="hero-reveal hero-reveal-1 mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-zariya-navy sm:mb-7 sm:text-xs sm:tracking-[0.24em]">
              Consulting <span aria-hidden="true">·</span> Architecture{" "}
              <span aria-hidden="true">·</span> Academy
            </p>

            <h1
              id="hero-heading"
              className="hero-reveal hero-reveal-2 max-w-xl font-anton text-[clamp(3.25rem,6.3vw,6.5rem)] font-normal uppercase leading-[0.98] tracking-wide"
            >
              Ideas into{" "}
              <span className="block italic text-zariya-red">
                impact.
              </span>
            </h1>

            <p className="hero-reveal hero-reveal-3 mt-6 max-w-lg font-sans text-base font-medium leading-7 text-zariya-navy/85 sm:mt-7 sm:text-lg sm:leading-8">
              A multidisciplinary platform bringing together consulting,
              architecture, and learning.
            </p>

            <p className="hero-reveal hero-reveal-3 mt-4 max-w-lg font-sans text-sm leading-7 text-zariya-navy/70 sm:text-base sm:leading-8">
              Thoughtful expertise. Purposeful spaces. Practical learning.
            </p>

            {/* Actions */}
            <div className="hero-reveal hero-reveal-4 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-zariya-gold bg-zariya-red px-7 py-3 font-cinzel text-xs font-semibold uppercase tracking-wider text-zariya-cream transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#9F2612] hover:shadow-lg hover:shadow-zariya-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold focus-visible:ring-offset-2 focus-visible:ring-offset-zariya-cream motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-sm"
              >
                Start a Conversation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>

              <Link
                href="#verticals"
                className="group inline-flex min-h-12 items-center justify-center gap-2 border border-zariya-navy/25 px-6 py-3 font-cinzel text-xs font-semibold uppercase tracking-wider text-zariya-navy transition-[border-color,color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-zariya-gold hover:bg-white/50 hover:text-zariya-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-sm"
              >
                Explore Zariya
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
                >
                  ↓
                </span>
              </Link>
            </div>

            {/* Editorial footer detail */}
            <div className="hero-reveal hero-reveal-4 mt-9 flex items-center gap-3 sm:mt-12">
              <span className="h-px w-9 shrink-0 bg-zariya-gold" />
              <p className="font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-zariya-navy/55 sm:text-[10px] sm:tracking-[0.2em]">
                One brand. Three areas of expertise.
              </p>
            </div>
          </div>

          {/* Right: Large cinematic brand film */}
          <div className="hero-logo-reveal relative flex min-w-0 items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-none">
              {/* Refined gold frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-[1.5rem] border border-zariya-gold/40 sm:-inset-3 sm:rounded-[2rem]"
              />

              {/* 16:9 video panel */}
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] border border-zariya-navy/10 bg-zariya-navy shadow-[0_24px_60px_rgba(1,39,69,0.12)] sm:rounded-[1.75rem]">
                <HeroVideo />
              </div>

              {/* Caption beneath visual */}
              <div className="mt-5 flex items-center gap-3 px-1 sm:mt-6">
                <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-zariya-navy/65 sm:text-[10px] sm:tracking-[0.22em]">
                  Thoughtfully built. Purposefully connected.
                </p>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-zariya-gold/60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
