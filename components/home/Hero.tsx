
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full border border-accent/10 sm:-right-20 sm:h-[32rem] sm:w-[32rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-28 h-72 w-72 rounded-full border border-accent/10 sm:right-0 sm:top-40 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[min(820px,calc(100svh-5rem))] lg:px-8 lg:py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Hero content */}
          <div className="max-w-3xl">
            <p className="hero-reveal hero-reveal-1 mb-5 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:mb-6 sm:text-sm sm:tracking-[0.25em]">
              Consulting <span aria-hidden="true">·</span> Architecture{" "}
              <span aria-hidden="true">·</span> Academy
            </p>

            <h1
              id="hero-heading"
              className="hero-reveal hero-reveal-2 font-cinzel text-[clamp(3.5rem,10vw,6rem)] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:text-8xl"
            >
              Zariya<span className="text-accent">.</span>
            </h1>

            <p className="hero-reveal hero-reveal-3 mt-6 max-w-2xl font-sans text-lg font-medium leading-7 text-primary-foreground/90 sm:mt-7 sm:text-2xl sm:leading-9">
              A multidisciplinary platform bringing together consulting,
              architecture, and learning.
            </p>

            <p className="hero-reveal hero-reveal-3 mt-4 max-w-xl font-sans text-sm leading-6 text-primary-foreground/65 sm:text-base sm:leading-7">
              Thoughtful expertise. Purposeful spaces. Practical learning.
            </p>

            <div className="hero-reveal hero-reveal-4 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-cinzel text-xs font-semibold tracking-wide text-secondary-foreground transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-lg hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm"
              >
                Start a Conversation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="#verticals"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-primary-foreground/25 px-6 py-3 font-cinzel text-xs font-semibold tracking-wide text-primary-foreground transition-[border-color,color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-primary-foreground/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm"
              >
                Explore Zariya
              </Link>
            </div>

            <div className="hero-reveal hero-reveal-4 mt-10 flex items-center gap-3 sm:mt-14">
              <span className="h-px w-10 bg-accent/70" />
              <p className="font-cinzel text-[9px] font-medium uppercase tracking-[0.16em] text-primary-foreground/50 sm:text-[10px] sm:tracking-[0.2em]">
                Consulting · Architecture · Academy
              </p>
            </div>
          </div>

          {/* Brand emblem */}
          <div className="hero-logo-reveal flex items-center justify-center lg:justify-end">
            <div className="relative flex aspect-square w-[min(76vw,22rem)] items-center justify-center sm:w-[min(62vw,26rem)] lg:w-full lg:max-w-[27rem]">
              {/* Decorative gold rings */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-accent/45"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[7%] rounded-full border border-primary-foreground/10"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[15%] rounded-full border border-accent/15"
              />

              {/* Intentional cream logo tile */}
              <div className="hero-logo-float relative z-10 flex aspect-square w-[68%] items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#E7E4DC] p-2 shadow-2xl shadow-black/20 sm:rounded-[1.75rem] sm:p-3">
                <BrandLogo
                  width={500}
                  height={500}
                  priority
                  className="h-full w-full rounded-xl object-contain sm:rounded-2xl"
                />
              </div>

              {/* Small gold accent */}
              <span
                aria-hidden="true"
                className="absolute right-[12%] top-[14%] z-20 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_20px_rgba(218,143,14,0.55)] sm:h-3 sm:w-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
