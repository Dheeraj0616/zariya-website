
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

export function AcademyCurriculum() {
  return (
    <section
      id="curriculum"
      aria-labelledby="academy-curriculum-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      {/* Oversized coffee bean decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-12 -z-10 text-[#6F4E37]/15 sm:right-4 sm:top-0"
      >
        <CoffeeBean className="h-64 w-48 rotate-12 sm:h-[32rem] sm:w-64" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Section introduction */}
          <div className="curriculum-reveal max-w-xl lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#BE2E14] sm:text-sm">
              <CoffeeBean className="h-7 w-5 shrink-0 text-[#6F4E37]" />
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#DA8F0E]"
              />
              {academy.curriculum.eyebrow}
            </p>

            <h2
              id="academy-curriculum-heading"
              className="mt-6 max-w-lg font-cinzel text-3xl font-semibold leading-[1.15] tracking-wide sm:text-4xl lg:text-5xl"
            >
              {academy.curriculum.heading}
            </h2>

            <p className="mt-6 max-w-lg font-sans text-base leading-7 text-[#012745]/70 sm:text-lg sm:leading-8">
              {academy.curriculum.intro}
            </p>

            {/* Practical guidance */}
            <div className="mt-8 flex items-center gap-4 border-t border-[#012745]/15 pt-5">
              <CoffeeBean className="h-12 w-9 shrink-0 text-[#6F4E37] transition-transform duration-300 hover:rotate-12" />

              <p className="max-w-xs font-sans text-sm leading-6 text-[#012745]/65">
                Explore the learning modules and discover what each stage
                covers.
              </p>
            </div>
          </div>

          {/* Curriculum timeline */}
          <ol className="relative border-t border-[#012745]/20">
            {academy.curriculum.modules.map((module, index) => (
              <li
                key={module.number}
                className="curriculum-module group relative grid gap-4 border-b border-[#012745]/20 py-7 transition-colors duration-300 hover:bg-white/30 sm:grid-cols-[5.5rem_1fr] sm:gap-6 sm:py-9 lg:gap-8"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Module number and bean */}
                <div className="flex items-start justify-between sm:block">
                  <span
                    aria-hidden="true"
                    className="font-sans text-3xl font-light leading-none tracking-tight text-[#BE2E14] transition-colors duration-300 group-hover:text-[#DA8F0E] sm:text-4xl"
                  >
                    {module.number}
                  </span>

                  <CoffeeBean className="mt-1 h-9 w-7 shrink-0 text-[#6F4E37]/65 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DA8F0E] sm:mt-4" />
                </div>

                {/* Module details */}
                <div className="min-w-0">
                  <h3 className="font-cinzel text-lg font-semibold leading-snug tracking-wide text-[#012745] transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-xl lg:text-2xl">
                    {module.title}
                  </h3>

                  <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-[#012745]/70 sm:text-base sm:leading-8">
                    {module.description}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-5 h-px w-10 bg-[#DA8F0E] transition-[width] duration-500 ease-out group-hover:w-20"
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
