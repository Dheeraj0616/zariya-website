import { academy } from "@/config/academy";

export function AcademyOverview() {
  return (
    <section
      aria-labelledby="academy-overview-heading"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              {academy.overview.eyebrow}
            </p>

            <h2
              id="academy-overview-heading"
              className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              {academy.overview.heading}
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <article>
              <h3 className="text-lg font-semibold text-foreground">
                {academy.overview.whatTitle}
              </h3>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {academy.overview.what}
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-foreground">
                {academy.overview.whoTitle}
              </h3>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {academy.overview.who}
              </p>
            </article>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <dl className="grid gap-0 sm:grid-cols-2 lg:grid-cols-6">
            {academy.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={[
                  "border-b border-border py-6",
                  "sm:px-6",
                  "lg:px-8 lg:py-6",
                  index === 0 ? "lg:pl-0" : "",
                  index === academy.facts.length - 1 ? "lg:pr-0" : "",
                  index === 1 ? "lg:col-span-2" : "",
                  index === 2 ? "lg:col-span-2" : "",
                  index === 3 ? "lg:col-span-1" : "",
                  index === 4 ? "lg:col-span-1" : "",
                ].join(" ")}
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {fact.label}
                </dt>

                <dd className="mt-3 max-w-2xl text-base font-semibold leading-7 text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}