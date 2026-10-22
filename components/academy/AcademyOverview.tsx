
import { facts, fee, formatINR } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AcademyOverview() {
  return (
    <section
      id="course"
      aria-labelledby="academy-overview-heading"
      className="relative overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Technical sheet header */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="grid grid-cols-2 border-y border-[#012745]/30 font-mono text-[10px] uppercase tracking-[0.12em] text-[#012745]/70 sm:grid-cols-4">
            {[
              ["Drawing", "Course specification"],
              ["Scale", "NTS"],
              ["Sheet", "TBM-02"],
              ["Revision", "01"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-r border-[#012745]/20 px-3 py-3 even:border-r-0 sm:border-b-0 sm:even:border-r"
              >
                <span className="block text-[#BE2E14]">{label}</span>
                <span className="mt-1 block">{value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Section introduction */}
        <div className="mt-9 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal direction="up" distance={24} duration={700}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14] sm:text-xs">
              The Zariya Academy
            </p>

            <h2
              id="academy-overview-heading"
              className="mt-4 max-w-lg font-anton text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.98] tracking-wide"
            >
              The facts.
            </h2>

            <p className="mt-5 max-w-md font-sans text-base leading-7 text-[#012745]/75 sm:text-lg sm:leading-8">
              A clear look at the course, its format, the time commitment and
              what the fee includes.
            </p>
          </ScrollReveal>

          {/* Fee panel */}
          <ScrollReveal direction="up" distance={24} duration={750}>
            <aside
              aria-labelledby="academy-fee-heading"
              className="border border-[#012745]/35 bg-[#012745] p-5 text-[#E7E4DC] sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E7E4DC]/25 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#DA8F0E]">
                    Course investment
                  </p>
                  <h3
                    id="academy-fee-heading"
                    className="mt-2 font-cinzel text-xl font-semibold sm:text-2xl"
                  >
                    The Barista Method
                  </h3>
                </div>
                <span className="border border-[#DA8F0E]/70 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#DA8F0E]">
                  TBM-02 / F
                </span>
              </div>

              <p className="mt-5 font-cinzel text-4xl font-semibold sm:text-5xl">
                {formatINR(fee.amount)}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#E7E4DC]/75">
                {fee.basis}
              </p>

              <div className="mt-6 border-t border-[#E7E4DC]/20 pt-5">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#DA8F0E]">
                  Included in the fee
                </h4>

                <ul className="mt-4 space-y-3">
                  {fee.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#E7E4DC]/90"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#DA8F0E]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-[#E7E4DC]/20 pt-4">
                <p className="text-sm leading-6 text-[#E7E4DC]/85">
                  {fee.extra}
                </p>
              </div>

              <a
                href="/academy#apply"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center border border-[#DA8F0E] bg-[#BE2E14] px-5 py-3 text-center font-cinzel text-sm font-semibold text-[#E7E4DC] transition-colors hover:bg-[#9F2612] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#012745]"
              >
                Enquire about the course
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </aside>
          </ScrollReveal>
        </div>

        {/* Course facts */}
        <div className="mt-12 sm:mt-16">
          <ScrollReveal direction="up" distance={18} duration={650}>
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#012745]/30 pb-3">
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                Course specification
              </h3>
              <span className="font-mono text-[10px] text-[#012745]/60">
                12 items / TBM-02
              </span>
            </div>
          </ScrollReveal>

          <dl className="grid grid-cols-1 border-l border-t border-[#012745]/25 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact, index) => (
              <ScrollReveal
                key={fact.label}
                direction="up"
                distance={14}
                delay={(index % 4) * 45}
                duration={550}
              >
                <div className="group flex h-full min-h-32 flex-col border-b border-r border-[#012745]/25 p-4 transition-colors duration-200 hover:bg-white/25 sm:min-h-36 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] font-semibold text-[#BE2E14]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-7 bg-[#DA8F0E] transition-[width] duration-200 group-hover:w-12"
                    />
                  </div>

                  <dt className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#012745]/65">
                    {fact.label}
                  </dt>

                  <dd className="mt-2 break-words font-cinzel text-base font-semibold leading-snug sm:text-lg">
                    {fact.value}
                  </dd>

                  <dd className="mt-2 font-sans text-xs leading-5 text-[#012745]/70 sm:text-sm sm:leading-6">
                    {fact.note}
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </div>

        {/* Technical footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#012745]/30 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#012745]/60">
          <span>The Barista Method</span>
          <span>Course specification</span>
          <span>TBM-02 · Revision 01</span>
        </div>
      </div>
    </section>
  );
}
