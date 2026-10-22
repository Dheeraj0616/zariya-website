
import { ScrollReveal } from "@/components/animation/ScrollReveal";

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

export function AcademyCTA() {
  return (
    <section
      aria-labelledby="academy-cta-heading"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="group relative isolate overflow-hidden bg-primary px-6 py-14 text-primary-foreground sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          {/* Subtle cream gradients around all four edges */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-3 bg-gradient-to-b from-[#E7E4DC]/80 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-3 bg-gradient-to-t from-[#E7E4DC]/80 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-3 bg-gradient-to-r from-[#E7E4DC]/80 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-3 bg-gradient-to-l from-[#E7E4DC]/80 to-transparent"
          />

          {/* Coffee-bean artwork */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-16 -z-10 text-accent/30 transition-transform duration-700 group-hover:rotate-6"
          >
            <CoffeeBean className="h-64 w-48 rotate-12 sm:h-96 sm:w-72" />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-24 top-12 -z-10 hidden text-primary-foreground/10 sm:block"
          >
            <CoffeeBean className="h-40 w-32 -rotate-12" />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 left-[38%] -z-10 text-[#A47551]/20"
          >
            <CoffeeBean className="h-48 w-36 -rotate-45 sm:h-64 sm:w-48" />
          </div>

          {/* Animated CTA content */}
          <ScrollReveal direction="up" distance={32} duration={900}>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3">
                <CoffeeBean className="h-7 w-5 shrink-0 text-[#A47551]" />

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-accent"
                />

                <p className="font-cinzel text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.24em]">
                  Zariya Academy
                </p>
              </div>

              <h2
                id="academy-cta-heading"
                className="mt-6 max-w-2xl font-cinzel text-3xl font-semibold leading-[1.15] tracking-wide sm:text-4xl lg:text-6xl"
              >
                Ready to learn the{" "}
                <span className="text-accent">Barista Method?</span>
              </h2>

              <p className="mt-6 max-w-xl font-sans text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
                Take the first step. Tell us a little about yourself and why
                you want to learn. Our team will review your application
                personally.
              </p>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#apply"
                  className="group/button inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-secondary px-6 py-3 font-cinzel text-xs font-semibold tracking-wide text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-sm"
                >
                  Apply to the Barista Method

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  >
                    →
                  </span>
                </a>

                <span className="font-sans text-sm text-primary-foreground/55">
                  Your next chapter starts here.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
