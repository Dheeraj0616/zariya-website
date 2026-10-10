
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

export function AcademyAdmission() {
  return (
    <section
      aria-labelledby="academy-admission-heading"
      className="relative isolate overflow-hidden bg-background"
    >
      {/* Subtle coffee-bean decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-10 text-[#6F4E37]/15"
      >
        <CoffeeBean className="h-48 w-36 rotate-12 sm:h-64 sm:w-48" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-[5%] hidden text-[#A47551]/15 lg:block"
      >
        <CoffeeBean className="h-24 w-20 -rotate-45" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <CoffeeBean className="h-7 w-5 shrink-0 text-[#6F4E37]" />

              <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                {academy.admission.eyebrow}
              </p>
            </div>

            <h2
              id="academy-admission-heading"
              className="mt-4 max-w-lg font-cinzel text-3xl font-semibold leading-[1.15] tracking-wide text-foreground sm:text-4xl lg:text-5xl"
            >
              {academy.admission.heading}
            </h2>
          </div>

          <ol className="border-t border-border">
            {academy.admission.steps.map((step) => (
              <li
                key={step.number}
                className="group relative grid gap-5 overflow-hidden border-b border-border py-7 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-9"
              >
                {/* Gold hover underline */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <span
                  aria-hidden="true"
                  className="pt-1 font-sans text-sm font-semibold tracking-[0.2em] text-secondary transition-transform duration-300 group-hover:translate-x-1"
                >
                  {step.number}
                </span>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-cinzel text-lg font-semibold leading-snug tracking-wide text-foreground sm:text-xl lg:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl font-sans text-base leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Small bean accent */}
                  <CoffeeBean className="mt-1 h-8 w-6 shrink-0 text-[#6F4E37]/60 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DA8F0E]" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
