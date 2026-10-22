
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function CallToAction() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      {/* Restrained decorative details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full border border-[#DA8F0E]/20 sm:-right-20 sm:-top-40 sm:h-[30rem] sm:w-[30rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 -z-10 h-56 w-56 rounded-full border border-[#E7E4DC]/10 sm:right-8 sm:top-8 sm:h-72 sm:w-72"
      />

      <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-10 lg:py-28 xl:px-14">
        <ScrollReveal direction="up" distance={32} duration={900}>
          <div className="max-w-4xl">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DA8F0E] sm:text-xs">
              Have something in mind?
            </p>

            <h2
              id="cta-heading"
              className="mt-6 font-anton text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.98] tracking-wide"
            >
              Let&apos;s make the
              <span className="block text-[#DA8F0E]">next move</span>
              meaningful.
            </h2>

            <p className="mt-7 max-w-2xl font-sans text-base leading-7 text-[#E7E4DC]/75 sm:text-lg sm:leading-8">
              Whether you&apos;re exploring a business opportunity, planning a
              space, or looking to develop new skills, let&apos;s start with a
              conversation.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          distance={26}
          delay={180}
          duration={900}
        >
          <div className="flex flex-col items-start gap-4 lg:items-end lg:pb-2">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#BE2E14] px-6 py-4 font-cinzel text-xs font-semibold tracking-wide text-[#E7E4DC] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#DA8F0E] hover:text-[#012745] hover:shadow-[0_10px_30px_rgba(218,143,14,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-4 focus-visible:ring-offset-[#012745] motion-reduce:transition-none sm:px-7"
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>

            <p className="font-sans text-xs leading-6 text-[#E7E4DC]/55">
              Consulting · Architecture · Academy
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Gold finishing line */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-[#012745] via-[#DA8F0E] to-[#BE2E14]"
      />
    </section>
  );
}
