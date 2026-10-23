import { facts, fee, formatINR } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SheetTag } from "@/components/shared/SheetTag";

export function AcademyOverview() {
  return (
    <section
      id="course"
      aria-labelledby="academy-overview-heading"
      className="relative overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Technical Sheet Tag */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <SheetTag
            sheet="TBM-02"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            title="Course Specification & Investment"
            className="mb-10 sm:mb-12"
          />
        </ScrollReveal>

        {/* Section introduction + Fee Panel */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <ScrollReveal direction="up" distance={24} duration={700}>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#BE2E14] sm:text-xs">
              The Zariya Academy · Specification Register
            </p>

            <h2
              id="academy-overview-heading"
              className="mt-4 max-w-lg font-anton text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.96] tracking-tight"
            >
              The facts.
            </h2>

            <p className="mt-5 max-w-lg font-sans text-base leading-7 text-[#012745]/75 sm:text-lg sm:leading-8">
              A clear look at the course, its format, the time commitment and
              what the fee includes.
            </p>

            <div className="mt-8 hidden border-t border-[#012745]/20 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#012745]/60 lg:block">
              <span>Class sizes capped at 10 seats to guarantee hands-on time</span>
            </div>
          </ScrollReveal>

          {/* Fee panel with architectural corner registration */}
          <ScrollReveal direction="up" distance={24} duration={750}>
            <aside
              aria-labelledby="academy-fee-heading"
              className="relative border border-[#DA8F0E]/80 bg-[#012745] p-6 text-[#E7E4DC] shadow-xl sm:p-8"
            >
              {/* Corner crosshairs */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1.5 -top-1.5 font-mono text-xs font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-1.5 -top-1.5 font-mono text-xs font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-xs font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-xs font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>

              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E7E4DC]/25 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#DA8F0E]">
                    Course investment
                  </p>
                  <h3
                    id="academy-fee-heading"
                    className="mt-1.5 font-cinzel text-xl font-semibold sm:text-2xl"
                  >
                    The Barista Method
                  </h3>
                </div>
                <span className="border border-[#DA8F0E]/70 bg-[#DA8F0E]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#DA8F0E]">
                  TBM-02 / F
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-3">
                <p className="font-cinzel text-4xl font-semibold sm:text-5xl text-[#E7E4DC]">
                  {formatINR(fee.amount)}
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-[#DA8F0E]">
                  Upfront
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#E7E4DC]/75">
                {fee.basis}
              </p>

              <div className="mt-6 border-t border-[#E7E4DC]/20 pt-5">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#DA8F0E]">
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
                className="btn-zariya-primary mt-7 w-full justify-center"
              >
                Enquire about the course
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </aside>
          </ScrollReveal>
        </div>

        {/* Course facts: 12 specification items */}
        <div className="mt-14 sm:mt-20">
          <ScrollReveal direction="up" distance={18} duration={650}>
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#012745]/30 pb-3">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#012745]">
                Course specification
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#012745]/60">
                12 items · TBM-02
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
                <div className="group flex h-full min-h-36 flex-col border-b border-r border-[#012745]/25 p-5 transition-colors duration-200 hover:bg-white/40 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-[#BE2E14]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-7 bg-[#DA8F0E] transition-[width] duration-200 group-hover:w-12"
                    />
                  </div>

                  <dt className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#012745]/65">
                    {fact.label}
                  </dt>

                  <dd className="mt-2 break-words font-cinzel text-base font-semibold leading-snug sm:text-lg text-[#012745]">
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
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#012745]/30 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#012745]/60">
          <span>The Barista Method</span>
          <span>Course specification</span>
          <span>TBM-02 · Revision 01</span>
        </div>
      </div>
    </section>
  );
}
