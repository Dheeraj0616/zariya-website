
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

export function AcademyExperience() {
  return (
    <section
      aria-labelledby="academy-experience-heading"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Subtle cream-to-navy transition at the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-3 bg-gradient-to-b from-[#E7E4DC]/80 to-transparent"
      />

      {/* Decorative coffee beans */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 -top-8 text-[#6F4E37]/30"
      >
        <CoffeeBean className="h-64 w-48 -rotate-12 sm:h-80 sm:w-60" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 right-[8%] hidden text-[#A47551]/20 lg:block"
      >
        <CoffeeBean className="h-24 w-20 rotate-45" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Introduction */}
          <div className="hero-reveal self-start lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <CoffeeBean className="h-7 w-5 shrink-0 text-[#A47551]" />

              <span
                aria-hidden="true"
                className="h-px w-8 bg-accent"
              />

              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
                {academy.experience.eyebrow}
              </p>
            </div>

            <h2
              id="academy-experience-heading"
              className="mt-5 max-w-lg font-cinzel text-3xl font-semibold leading-[1.15] tracking-wide sm:text-4xl lg:text-5xl"
            >
              {academy.experience.heading}
            </h2>

            <p className="mt-6 max-w-lg font-sans text-base leading-7 text-primary-foreground/70 sm:text-lg sm:leading-8">
              {academy.experience.description}
            </p>

            {/* Latte art image */}
            <figure className="mt-8 overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.04] p-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/assets/academy/latte-art.webp"
                  alt="Latte art created during barista coffee preparation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <figcaption className="flex items-center gap-3 px-2 pb-1 pt-4">
                <CoffeeBean className="h-6 w-5 shrink-0 text-accent" />
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-primary-foreground/65">
                  The art behind every cup
                </span>
              </figcaption>
            </figure>

            {/* Learning experience */}
            <div className="mt-8 border-t border-primary-foreground/15 pt-5">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/45">
                The learning experience
              </p>

              <p className="mt-2 font-sans text-sm leading-6 text-primary-foreground/65">
                Learn through practice, refine your technique, and develop
                consistency one session at a time.
              </p>
            </div>
          </div>

          {/* Experience points */}
          <ul className="border-t border-primary-foreground/15">
            {academy.experience.points.map((point, index) => (
              <li
                key={point}
                className={`group relative grid grid-cols-[3.5rem_1fr] items-start gap-4 overflow-hidden border-b border-primary-foreground/15 px-2 py-7 transition-colors duration-300 hover:bg-primary-foreground/[0.04] sm:grid-cols-[5rem_1fr] sm:gap-6 sm:px-4 sm:py-9 ${
                  index % 2 === 0 ? "hero-reveal-1" : "hero-reveal-2"
                }`}
              >
                {/* Hover accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <span
                  aria-hidden="true"
                  className="pt-1 font-sans text-2xl font-light tracking-tight text-secondary transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-start justify-between gap-4">
                  <span className="font-cinzel text-sm font-medium leading-7 text-primary-foreground sm:text-base sm:leading-8">
                    {point}
                  </span>

                  {/* Coffee bean replaces the circular arrow */}
                  <CoffeeBean className="mt-1 h-9 w-7 shrink-0 text-primary-foreground/50 transition-all duration-300 group-hover:rotate-12 group-hover:text-accent" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subtle navy-to-cream transition at the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-3 bg-gradient-to-b from-transparent to-[#E7E4DC]/80"
      />
    </section>
  );
}
