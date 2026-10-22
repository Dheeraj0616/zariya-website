
import Link from "next/link";
import { whoFor, path } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const destinations = [
  "#brew-lab",
  "#curriculum",
  "#apply",
] as const;

const buttonLabels = [
  "Explore Brew Lab",
  "View the course",
  "Explore advanced",
] as const;

export function AcademyAdmission() {
  return (
    <section
      id="learning-path"
      aria-labelledby="academy-admission-heading"
      className="overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Technical sheet header */}
        <ScrollReveal direction="up" distance={18} duration={650}>
          <div className="grid grid-cols-2 border-y border-[#012745]/30 font-mono text-[10px] uppercase tracking-[0.12em] text-[#012745]/70 sm:grid-cols-4">
            {[
              ["Drawing", "Learning path"],
              ["Scale", "NTS"],
              ["Sheet", "TBM-05"],
              ["Revision", "04"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-r border-[#012745]/20 px-3 py-3 last:border-r-0 even:border-r-0 sm:border-b-0 sm:even:border-r"
              >
                <span className="block text-[#BE2E14]">{label}</span>
                <span className="mt-1 block">{value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Who the course is for */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal direction="up" distance={22} duration={700}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14] sm:text-xs">
              Find your starting point
            </p>

            <h2
              id="academy-admission-heading"
              className="mt-4 max-w-lg font-cinzel text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            >
              Made for your next step.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#012745]/75 sm:text-base sm:leading-8">
              Whether coffee is your future career, your next business, or a
              craft you want to understand properly, start with the goal that
              matters to you.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 border-l border-t border-[#012745]/25 sm:grid-cols-2">
            {whoFor.map((item, index) => (
              <ScrollReveal
                key={item.title}
                direction="up"
                distance={16}
                delay={index * 60}
                duration={600}
              >
                <article
                  className={`h-full border-b border-r border-[#012745]/25 p-5 sm:p-6 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="font-mono text-xl font-semibold text-[#BE2E14]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 font-cinzel text-lg font-semibold leading-snug sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#012745]/75">
                    {item.body}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-5 h-px w-8 bg-[#DA8F0E]"
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Three-step learning path */}
        <div className="mt-14 sm:mt-20">
          <ScrollReveal direction="up" distance={18} duration={650}>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[#012745]/30 pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#BE2E14]">
                  Your route through coffee
                </p>

                <h3 className="mt-2 font-cinzel text-2xl font-semibold sm:text-3xl">
                  Three ways to move forward.
                </h3>
              </div>

              <span className="font-mono text-[10px] text-[#012745]/55">
                TBM-05 / A
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 border-l border-t border-[#012745]/25 md:grid-cols-3">
            {path.map((item, index) => (
              <ScrollReveal
                key={item.step}
                direction="up"
                distance={18}
                delay={index * 80}
                duration={650}
              >
                <article className="group flex h-full flex-col border-b border-r border-[#012745]/25 p-5 transition-colors duration-200 hover:bg-white/30 sm:p-6 lg:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#BE2E14]">
                      {item.step}
                    </span>

                    <span className="font-mono text-xs text-[#012745]/50">
                      0{index + 1} / 03
                    </span>
                  </div>

                  <h4 className="mt-6 font-cinzel text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#012745]/75">
                    {item.body}
                  </p>

                  <div className="mt-6 border-t border-[#012745]/20 pt-4">
                    <p className="font-cinzel text-xl font-semibold text-[#BE2E14]">
                      {item.price}
                    </p>
                  </div>

                  {/* Consistent buttons with visible idle text and hover animation */}
                  <div className="mt-auto pt-7">
                    <Link
                      href={destinations[index]}
                      aria-label={`${buttonLabels[index]} — ${item.title}`}
                      className="group/button relative flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden border border-[#012745] bg-transparent px-4 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#012745] opacity-100 transition-all duration-300 ease-in-out hover:border-[#BE2E14] hover:bg-[#BE2E14] hover:text-[#E7E4DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E4DC] motion-reduce:transition-none"
                    >
                      <span className="relative z-10 block text-[#012745] opacity-100 transition-colors duration-300 group-hover/button:text-[#E7E4DC]">
                        {buttonLabels[index]}
                      </span>

                      <span
                        aria-hidden="true"
                        className="relative z-10 block shrink-0 text-[#012745] opacity-100 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:text-[#E7E4DC] motion-reduce:transition-none"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Technical footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#012745]/30 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#012745]/60">
          <span>Who it&apos;s for</span>
          <span>Brew Lab → The Barista Method → Advanced</span>
          <span>TBM-05 · Revision 04</span>
        </div>
      </div>
    </section>
  );
}
