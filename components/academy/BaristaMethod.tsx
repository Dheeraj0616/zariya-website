
import Image from "next/image";
import { academy } from "@/config/academy";
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

export function BaristaMethod() {
  return (
    <section
      aria-labelledby="barista-method-heading"
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
        className="pointer-events-none absolute -right-6 -top-10 text-[#6F4E37]/35"
      >
        <CoffeeBean className="h-64 w-48 rotate-12 sm:h-80 sm:w-60" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[42%] hidden text-[#A47551]/20 lg:block"
      >
        <CoffeeBean className="h-24 w-20 -rotate-45" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-stretch gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Section introduction */}
          <div className="self-start lg:sticky lg:top-28">
            <ScrollReveal direction="up" distance={28} duration={900}>
              <div className="flex items-center gap-3">
                <CoffeeBean className="h-7 w-5 shrink-0 text-[#A47551]" />

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-accent"
                />

                <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
                  {academy.baristaMethod.eyebrow}
                </p>
              </div>

              <h2
                id="barista-method-heading"
                className="mt-5 max-w-xl font-anton text-4xl font-normal uppercase leading-[1.08] tracking-wide sm:text-5xl lg:text-6xl"
              >
                {academy.baristaMethod.heading}
              </h2>

              <p className="mt-6 max-w-lg font-sans text-base leading-7 text-primary-foreground/70 sm:text-lg sm:leading-8">
                {academy.baristaMethod.description}
              </p>
            </ScrollReveal>

            {/* Coffee preparation image */}
            <ScrollReveal
              direction="up"
              distance={24}
              delay={120}
              duration={900}
            >
              <figure className="mt-8 overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.04] p-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/assets/academy/fresh-ground-coffee.jpg"
                    alt="Freshly ground coffee prepared for barista training"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <figcaption className="flex items-center gap-3 px-2 pb-1 pt-4">
                  <CoffeeBean className="h-6 w-5 shrink-0 text-accent" />
                  <span className="font-sans text-xs uppercase tracking-[0.18em] text-primary-foreground/65">
                    From the beans to the brew
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>

            {/* Practical approach */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={180}
              duration={800}
            >
              <div className="mt-8 flex max-w-sm items-start gap-4 border-t border-primary-foreground/15 pt-5">
                <CoffeeBean className="h-12 w-9 shrink-0 text-accent transition-transform duration-300 hover:rotate-12" />

                <p className="pt-1 font-sans text-sm leading-6 text-primary-foreground/65">
                  A practical approach built around technique, consistency, and
                  confidence.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Method principles */}
          <div className="grid auto-rows-fr grid-cols-1 gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2">
            {academy.baristaMethod.principles.map((principle, index) => (
              <article
                key={principle.title}
                className="group relative flex h-full min-h-64 flex-col bg-primary transition-colors duration-300 hover:bg-primary/80 sm:min-h-0"
              >
                <ScrollReveal
                  direction="up"
                  distance={24}
                  delay={index * 100}
                  duration={800}
                >
                  <div className="relative flex h-full min-h-64 flex-col p-7 sm:min-h-72 sm:p-8 lg:p-10">
                    {/* Gold accent line */}
                    <span
                      aria-hidden="true"
                      className="absolute left-7 right-7 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 sm:left-8 sm:right-8 lg:left-10 lg:right-10"
                    />

                    <div className="flex items-start justify-between gap-4">
                      <span
                        aria-hidden="true"
                        className="font-sans text-4xl font-light tracking-tight text-secondary transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <CoffeeBean className="h-10 w-7 shrink-0 text-primary-foreground/50 transition-all duration-300 group-hover:rotate-12 group-hover:text-accent" />
                    </div>

                    <div className="mt-auto pt-12">
                      <h3 className="font-cinzel text-xl font-semibold tracking-wide sm:text-2xl">
                        {principle.title}
                      </h3>

                      <p className="mt-4 font-sans text-sm leading-6 text-primary-foreground/65 sm:text-base sm:leading-7">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </article>
            ))}
          </div>
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
