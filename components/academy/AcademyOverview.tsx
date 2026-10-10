
import { academy } from "@/config/academy";

export function AcademyOverview() {
  return (
    <section
      aria-labelledby="academy-overview-heading"
      className="relative isolate overflow-hidden bg-background"
    >
      {/* Decorative oversized coffee bean */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-8 hidden opacity-[0.09] sm:block"
      >
        <svg
          viewBox="0 0 120 160"
          fill="none"
          className="h-40 w-32 text-[#6F4E37] lg:h-52 lg:w-40"
        >
          <ellipse
            cx="60"
            cy="80"
            rx="35"
            ry="53"
            transform="rotate(35 60 80)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M37 120C45 99 50 75 82 42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        {/* Section introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="hero-reveal self-start">
            <div className="flex items-center gap-3">
              {/* Coffee bean icon */}
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                fill="none"
                className="h-7 w-7 shrink-0 text-[#6F4E37]"
              >
                <ellipse
                  cx="16"
                  cy="16"
                  rx="9"
                  ry="13"
                  transform="rotate(35 16 16)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 24C12 19 14 14 23 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span
                aria-hidden="true"
                className="h-px w-6 bg-accent"
              />

              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-secondary sm:text-sm">
                {academy.overview.eyebrow}
              </p>
            </div>

            <h2
              id="academy-overview-heading"
              className="mt-5 max-w-xl font-cinzel text-3xl font-semibold leading-[1.15] tracking-wide text-foreground sm:text-4xl lg:text-5xl"
            >
              {academy.overview.heading}
            </h2>

            <div className="mt-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1 w-16 bg-accent"
              />
              <span
                aria-hidden="true"
                className="h-1 w-5 bg-secondary"
              />
            </div>

            <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-muted-foreground">
              A closer look at the course, the learner, and the craft of coffee.
            </p>
          </div>

          {/* What and who */}
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="group relative flex flex-col border border-border bg-background p-6 transition-colors duration-300 hover:border-secondary/50 sm:p-8 lg:p-9">
              <div className="flex items-center justify-between gap-3">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  01 / THE COURSE
                </span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-6 w-6 text-[#6F4E37] transition-transform duration-300 group-hover:rotate-12"
                >
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="8"
                    ry="12"
                    transform="rotate(35 16 16)"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11 24C13 19 15 14 22 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="mt-7 font-cinzel text-lg font-semibold leading-snug text-foreground sm:text-xl">
                {academy.overview.whatTitle}
              </h3>

              <p className="mt-4 font-sans text-sm leading-7 text-muted-foreground sm:text-base">
                {academy.overview.what}
              </p>

              <span
                aria-hidden="true"
                className="mt-8 block h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
              />
            </article>

            <article className="group relative flex flex-col border border-border bg-muted/40 p-6 transition-colors duration-300 hover:border-accent/60 sm:p-8 lg:p-9">
              <div className="flex items-center justify-between gap-3">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  02 / THE LEARNER
                </span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-6 w-6 text-[#6F4E37] transition-transform duration-300 group-hover:-rotate-12"
                >
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="8"
                    ry="12"
                    transform="rotate(35 16 16)"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11 24C13 19 15 14 22 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="mt-7 font-cinzel text-lg font-semibold leading-snug text-foreground sm:text-xl">
                {academy.overview.whoTitle}
              </h3>

              <p className="mt-4 font-sans text-sm leading-7 text-muted-foreground sm:text-base">
                {academy.overview.who}
              </p>

              <span
                aria-hidden="true"
                className="mt-8 block h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
              />
            </article>
          </div>
        </div>

        {/* Course facts */}
        <div className="mt-20 lg:mt-28">
          <div className="flex flex-wrap items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              fill="none"
              className="h-6 w-6 text-[#6F4E37]"
            >
              <ellipse
                cx="16"
                cy="16"
                rx="8"
                ry="12"
                transform="rotate(35 16 16)"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M11 24C13 19 15 14 22 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <span
              aria-hidden="true"
              className="h-px w-6 bg-accent"
            />

            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Course at a glance
            </p>
          </div>

          <dl className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">
            {academy.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`group relative flex min-h-52 flex-col overflow-hidden bg-background p-6 transition-colors duration-300 hover:bg-muted/50 sm:p-7 lg:col-span-2 ${
                  index === 0 || index === 1
                    ? "lg:col-span-3"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sans text-xs font-semibold tracking-[0.2em] text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-5 w-5 text-[#6F4E37] opacity-70 transition-all duration-300 group-hover:rotate-12 group-hover:opacity-100"
                  >
                    <ellipse
                      cx="16"
                      cy="16"
                      rx="8"
                      ry="12"
                      transform="rotate(35 16 16)"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11 24C13 19 15 14 22 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <dt className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {fact.label}
                </dt>

                <dd className="mt-3 font-cinzel text-lg font-semibold leading-snug tracking-wide text-foreground sm:text-xl">
                  {fact.value}
                </dd>

                <p className="mt-3 font-sans text-sm leading-6 text-muted-foreground">
                  {fact.detail}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
