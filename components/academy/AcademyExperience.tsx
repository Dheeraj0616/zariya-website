
import { stages, compare } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AcademyExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="academy-experience-heading"
      className="overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Technical drawing header */}
        <ScrollReveal direction="up" distance={18} duration={650}>
          <div className="grid grid-cols-2 border-y border-[#E7E4DC]/25 font-mono text-[10px] uppercase tracking-[0.12em] text-[#E7E4DC]/65 sm:grid-cols-4">
            {[
              ["Drawing", "Learning experience"],
              ["Scale", "NTS"],
              ["Sheet", "TBM-04"],
              ["Revision", "01"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-r border-[#E7E4DC]/20 px-3 py-3 last:border-r-0 even:border-r-0 sm:border-b-0 sm:even:border-r"
              >
                <span className="block text-[#DA8F0E]">{label}</span>
                <span className="mt-1 block">{value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Introduction */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal direction="up" distance={22} duration={700}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#DA8F0E] sm:text-xs">
              How you learn
            </p>

            <h2
              id="academy-experience-heading"
              className="mt-4 max-w-lg font-cinzel text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            >
              Learn the craft.
              <span className="mt-2 block text-[#DA8F0E]">
                Practise the details.
              </span>
            </h2>

            <p className="mt-6 max-w-xl font-sans text-sm leading-7 text-[#E7E4DC]/75 sm:text-base sm:leading-8">
              The Barista Method combines structured theory classes with
              individual practice, followed by an assessment and the
              certificate stage.
            </p>
          </ScrollReveal>

          {/* Group classes vs one-on-one practice */}
          <ScrollReveal direction="up" distance={22} duration={750}>
            <div className="grid grid-cols-1 border border-[#E7E4DC]/25 sm:grid-cols-2">
              <div className="border-b border-[#E7E4DC]/25 p-5 sm:border-b-0 sm:border-r sm:p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#DA8F0E]">
                  01 / Theory
                </span>

                <h3 className="mt-4 font-cinzel text-xl font-semibold">
                  {compare.group.title}
                </h3>

                <p className="mt-3 font-sans text-sm leading-6 text-[#E7E4DC]/70">
                  {compare.group.body}
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#DA8F0E]">
                  02 / Practice
                </span>

                <h3 className="mt-4 font-cinzel text-xl font-semibold">
                  {compare.oneToOne.title}
                </h3>

                <p className="mt-3 font-sans text-sm leading-6 text-[#E7E4DC]/70">
                  {compare.oneToOne.body}
                </p>
              </div>
            </div>

            <p className="mt-4 border-l-2 border-[#DA8F0E] pl-4 font-mono text-xs leading-6 text-[#E7E4DC]/80">
              {compare.closing}
            </p>
          </ScrollReveal>
        </div>

        {/* Four-stage learning sequence */}
        <div className="mt-14 sm:mt-16">
          <ScrollReveal direction="up" distance={18} duration={650}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E7E4DC]/25 pb-3">
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                The learning sequence
              </h3>

              <span className="font-mono text-[10px] text-[#E7E4DC]/55">
                TBM-04 / A
              </span>
            </div>
          </ScrollReveal>

          <ol className="grid grid-cols-1 border-l border-t border-[#E7E4DC]/25 sm:grid-cols-2">
            {stages.map((stage, index) => (
              <li
                key={stage.id}
                className="group border-b border-r border-[#E7E4DC]/25 transition-colors duration-200 hover:bg-[#E7E4DC]/[0.035]"
              >
                <ScrollReveal
                  direction="up"
                  distance={16}
                  delay={index * 60}
                  duration={600}
                >
                  <div className="flex h-full gap-4 p-5 sm:gap-5 sm:p-6">
                    <div className="flex shrink-0 flex-col items-center">
                      <span className="font-mono text-2xl font-semibold text-[#DA8F0E] sm:text-3xl">
                        {stage.id}
                      </span>

                      <span
                        aria-hidden="true"
                        className="my-3 h-8 w-px bg-[#E7E4DC]/25"
                      />

                      <span className="font-mono text-[9px] text-[#E7E4DC]/50">
                        {stage.level}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h4 className="font-cinzel text-lg font-semibold leading-snug">
                          {stage.title}
                        </h4>

                        <span className="font-mono text-[10px] text-[#DA8F0E]">
                          {index + 1} / 04
                        </span>
                      </div>

                      <p className="mt-3 font-sans text-sm leading-6 text-[#E7E4DC]/70">
                        {stage.detail}
                      </p>

                      <div
                        aria-hidden="true"
                        className="mt-5 h-px w-8 bg-[#BE2E14] transition-[width] duration-200 group-hover:w-14"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Technical footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#E7E4DC]/25 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#E7E4DC]/55">
          <span>The Barista Method</span>
          <span>Theory → Practice → Assessment → Certificate</span>
          <span>TBM-04 · Revision 01</span>
        </div>
      </div>
    </section>
  );
}
