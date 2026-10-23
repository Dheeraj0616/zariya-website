import Link from "next/link";
import { SheetTag } from "@/components/shared/SheetTag";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function CallToAction() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      {/* Blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E7E4DC 1px, transparent 1px), linear-gradient(to bottom, #E7E4DC 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <ScrollReveal direction="up" distance={20} duration={650}>
          <SheetTag
            sheet="ZC-CTA"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            className="border-white/20 text-[#DA8F0E]"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <ScrollReveal direction="up" distance={28} duration={750}>
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DA8F0E]">
                The Zariya Collective · Direct Engagement
              </p>

              <h2
                id="cta-heading"
                className="mt-5 font-anton text-[clamp(2.8rem,6vw,5.75rem)] uppercase leading-[0.96] tracking-tight text-[#E7E4DC]"
              >
                Let&apos;s build the
                <span className="block text-[#DA8F0E]">next standard</span>
                together.
              </h2>

              <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#E7E4DC]/80 sm:text-lg sm:leading-8">
                Whether commissioning BIM architectural design with Zariya Design
                Studio, enrolling in The Barista Method at The Zariya Academy, or
                integrating Aayaam BIM standards, begin with a direct conversation.
              </p>

              <div className="mt-6 flex items-center gap-3 font-mono text-xs text-[#E7E4DC]/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DA8F0E]" />
                <span>Nazirabad, Kolkata · Response within 24–48 hours</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={750} delay={140}>
            <div className="flex flex-col gap-4 lg:items-end">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="btn-zariya-primary"
                >
                  <span>Start a Conversation</span>
                  <span className="inline-block font-mono text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/academy#apply"
                  className="btn-zariya-outline-dark"
                >
                  <span>Apply to Academy</span>
                  <span className="inline-block font-mono text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#DA8F0E]/90">
                Studio · Academy · Aayaam
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Gold registration baseline */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#012745] via-[#DA8F0E] to-[#BE2E14]"
      />
    </section>
  );
}

export default CallToAction;
