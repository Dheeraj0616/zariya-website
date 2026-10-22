
import { gallery, founder } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AcademyLab() {
  return (
    <section
      id="inside-the-lab"
      aria-labelledby="academy-lab-heading"
      className="overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Technical sheet header */}
        <ScrollReveal direction="up" distance={18} duration={650}>
          <div className="grid grid-cols-2 border-y border-[#E7E4DC]/25 font-mono text-[10px] uppercase tracking-[0.12em] text-[#E7E4DC]/65 sm:grid-cols-4">
            {[
              ["Drawing", "Inside the lab"],
              ["Scale", "NTS"],
              ["Sheet", "TBM-06"],
              ["Revision", "01"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-r border-[#E7E4DC]/20 px-3 py-3 even:border-r-0 sm:border-b-0 sm:even:border-r"
              >
                <span className="block text-[#DA8F0E]">{label}</span>
                <span className="mt-1 block">{value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Introduction */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal direction="up" distance={22} duration={700}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#DA8F0E] sm:text-xs">
              The learning environment
            </p>

            <h2
              id="academy-lab-heading"
              className="mt-4 max-w-lg font-cinzel text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            >
              Inside the lab.
              <span className="mt-2 block text-[#DA8F0E]">
                Learn by doing.
              </span>
            </h2>

            <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-[#E7E4DC]/75 sm:text-base sm:leading-8">
              A closer look at the tools, techniques and people behind The
              Barista Method. Original lab photographs will be added after
              approval from the Academy.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={22} duration={700}>
            <div className="grid grid-cols-1 border-l border-t border-[#E7E4DC]/25 sm:grid-cols-2">
              {gallery.map((item, index) => (
                <figure
                  key={item.file}
                  className="flex min-h-52 flex-col border-b border-r border-[#E7E4DC]/25"
                >
                  {/* Intentional placeholder: no image request until photos arrive */}
                  <div className="flex min-h-40 flex-1 flex-col items-center justify-center bg-[#E7E4DC]/[0.035] p-5 text-center">
                    <span className="font-mono text-2xl text-[#DA8F0E]/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#E7E4DC]/65">
                      Photo pending
                    </span>

                    <span className="mt-2 max-w-xs font-sans text-xs leading-5 text-[#E7E4DC]/50">
                      {item.caption}
                    </span>
                  </div>

                  <figcaption className="flex items-start justify-between gap-3 border-t border-[#E7E4DC]/20 px-4 py-3">
                    <span className="font-mono text-[10px] leading-5 text-[#E7E4DC]/70">
                      {item.caption}
                    </span>
                    <span className="shrink-0 font-mono text-[9px] text-[#DA8F0E]">
                      FIG. {String(index + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Founder profile */}
        <div className="mt-14 border-t border-[#E7E4DC]/25 pt-8 sm:mt-20 sm:pt-10">
          <ScrollReveal direction="up" distance={18} duration={650}>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#DA8F0E]">
                  The person behind the method
                </p>
                <h3 className="mt-2 font-cinzel text-2xl font-semibold sm:text-3xl">
                  Meet the founder.
                </h3>
              </div>

              <span className="font-mono text-[10px] text-[#E7E4DC]/55">
                TBM-06 / F
              </span>
            </div>

            <div className="grid gap-6 border border-[#E7E4DC]/25 p-5 sm:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 lg:p-9">
              <div>
                <p className="font-cinzel text-2xl font-semibold sm:text-3xl">
                  {founder.name}
                </p>

                <p className="mt-3 font-mono text-xs leading-6 text-[#DA8F0E]">
                  {founder.role}
                </p>

                <div className="mt-6 h-px w-12 bg-[#BE2E14]" />
              </div>

              <div>
                <ul className="space-y-3">
                  {founder.facts.map((fact) => (
                    <li
                      key={fact}
                      className="flex items-start gap-3 font-sans text-sm leading-6 text-[#E7E4DC]/75"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#DA8F0E]"
                      />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>

                <blockquote className="mt-7 border-l-2 border-[#DA8F0E] pl-5">
                  <p className="font-cinzel text-base leading-7 text-[#E7E4DC]/90 sm:text-lg sm:leading-8">
                    “{founder.note}”
                  </p>
                  <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#DA8F0E]">
                    {founder.name} · Founder note
                  </footer>
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Technical footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#E7E4DC]/25 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#E7E4DC]/55">
          <span>The Zariya Academy</span>
          <span>Lab and founder</span>
          <span>TBM-06 · Revision 01</span>
        </div>
      </div>
    </section>
  );
}
