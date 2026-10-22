
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const principles = [
  {
    number: "01",
    title: "Understand",
    description:
      "Every meaningful outcome starts with understanding the ambition, the challenge, and the people behind it.",
  },
  {
    number: "02",
    title: "Apply expertise",
    description:
      "Bring the right discipline into focus — strategic guidance, purposeful spaces, or practical, hands-on learning.",
  },
  {
    number: "03",
    title: "Move forward",
    description:
      "Turn understanding into a considered next step, shaped around the needs of each person, business, or project.",
  },
];

export function OurApproach() {
  return (
    <section
      id="our-approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32 xl:px-14">
        {/* Editorial introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <ScrollReveal direction="up" distance={36} duration={900}>
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DA8F0E] sm:text-xs">
                The thinking behind the work
              </p>

              <h2
                id="approach-heading"
                className="mt-6 max-w-3xl font-anton text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.98] tracking-wide"
              >
                Thoughtful by
                <span className="block text-[#DA8F0E]">design.</span>
                Purposeful by
                <span className="block">nature.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            distance={28}
            delay={150}
            duration={900}
          >
            <div className="max-w-xl lg:justify-self-end">
              <p className="font-sans text-base leading-7 text-[#E7E4DC]/75 sm:text-lg sm:leading-8">
                Zariya brings three distinct disciplines together under one
                vision. Each has its own expertise, but all begin with
                understanding what matters and choosing a thoughtful way
                forward.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[#DA8F0E]"
                />
                <span className="font-cinzel text-[10px] uppercase tracking-[0.18em] text-[#E7E4DC]/70 sm:text-xs">
                  One vision. Three disciplines.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Three principles: reveal individually */}
        <div className="mt-14 border-t border-[#E7E4DC]/20 sm:mt-20">
          {principles.map((principle, index) => (
            <ScrollReveal
              key={principle.number}
              direction="up"
              distance={24}
              delay={index * 100}
              duration={800}
            >
              <article className="group grid gap-4 border-b border-[#E7E4DC]/20 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:gap-6 sm:py-9 lg:grid-cols-[100px_0.8fr_1.2fr] lg:items-center lg:gap-10">
                <span className="font-cinzel text-sm tracking-[0.18em] text-[#DA8F0E]">
                  {principle.number}
                </span>

                <h3 className="font-anton text-2xl uppercase tracking-wide transition-colors duration-300 group-hover:text-[#DA8F0E] sm:text-3xl lg:text-4xl">
                  {principle.title}
                </h3>

                <p className="max-w-2xl font-sans text-sm leading-7 text-[#E7E4DC]/70 sm:text-base sm:leading-8 lg:justify-self-end">
                  {principle.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing statement */}
        <ScrollReveal
          direction="up"
          distance={20}
          delay={100}
          duration={800}
        >
          <div className="mt-10 sm:mt-14">
            <p className="max-w-lg font-cinzel text-sm leading-7 text-[#E7E4DC]/80 sm:text-base">
              Different needs call for different expertise. The vision remains
              connected.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
