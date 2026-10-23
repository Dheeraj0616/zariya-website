import Link from "next/link";
import { whoFor, path } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SheetTag } from "@/components/shared/SheetTag";

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
      className="relative overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Technical Sheet Tag */}
        <ScrollReveal direction="up" distance={18} duration={650}>
          <SheetTag
            sheet="TBM-05"
            revision="04"
            scale="NTS"
            date="16 OCT 2026"
            title="Learning Path & Progression Routes"
            className="mb-10 sm:mb-12"
          />
        </ScrollReveal>

        {/* Who the course is for */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal direction="up" distance={22} duration={700}>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#BE2E14] sm:text-xs">
              Find your starting point
            </p>

            <h2
              id="academy-admission-heading"
              className="mt-4 max-w-lg font-anton text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.96] tracking-tight"
            >
              Made for your
              <span className="block text-[#BE2E14]">next step.</span>
            </h2>

            <p className="mt-5 max-w-lg font-sans text-base leading-7 text-[#012745]/75 sm:text-lg sm:leading-8">
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
                  className={`h-full border-b border-r border-[#012745]/25 p-6 sm:p-7 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="font-mono text-xl font-semibold text-[#BE2E14]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-cinzel text-lg font-semibold leading-snug sm:text-xl text-[#012745]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 font-sans text-sm leading-6 text-[#012745]/75">
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
        <div className="mt-16 sm:mt-24">
          <ScrollReveal direction="up" distance={18} duration={650}>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[#012745]/30 pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#BE2E14]">
                  Your route through coffee
                </p>

                <h3 className="mt-2 font-anton text-2xl uppercase tracking-tight text-[#012745] sm:text-3xl">
                  Three ways to move forward.
                </h3>
              </div>

              <span className="font-mono text-[10px] uppercase tracking-wider text-[#012745]/55">
                Path Register · TBM-05 / A
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
                <article className="group flex h-full flex-col border-b border-r border-[#012745]/25 p-6 transition-colors duration-200 hover:bg-white/40 sm:p-7 lg:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#BE2E14]">
                      {item.step}
                    </span>

                    <span className="font-mono text-xs text-[#012745]/50">
                      0{index + 1} / 03
                    </span>
                  </div>

                  <h4 className="mt-5 font-cinzel text-xl font-semibold sm:text-2xl text-[#012745]">
                    {item.title}
                  </h4>

                  <p className="mt-3 min-h-12 font-sans text-sm leading-6 text-[#012745]/75">
                    {item.body}
                  </p>

                  <div className="mt-6 border-t border-[#012745]/20 pt-4">
                    <p className="font-cinzel text-xl font-semibold text-[#BE2E14]">
                      {item.price}
                    </p>
                  </div>

                  <div className="mt-auto pt-7">
                    <Link
                      href={destinations[index]}
                      aria-label={`${buttonLabels[index]} — ${item.title}`}
                      className="btn-zariya-outline w-full justify-center"
                    >
                      <span>{buttonLabels[index]}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
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
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#012745]/30 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#012745]/60">
          <span>Who it&apos;s for</span>
          <span>Brew Lab → The Barista Method → Advanced</span>
          <span>TBM-05 · Revision 04</span>
        </div>
      </div>
    </section>
  );
}
