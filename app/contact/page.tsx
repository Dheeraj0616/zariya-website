import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SheetTag } from "@/components/shared/SheetTag";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Get in touch with The Zariya Collective — Zariya Design Studio, The Zariya Academy, and Aayaam.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const WHATSAPP_PREFILLED_MESSAGE =
  "Hello, I found The Zariya Collective website and would like to make an enquiry.";

export default function ContactPage() {
  const { whatsapp, location, email } = siteConfig.contact;

  const whatsappHref = `${whatsapp.url}?text=${encodeURIComponent(
    WHATSAPP_PREFILLED_MESSAGE,
  )}`;

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <ScrollReveal direction="down" distance={16} duration={600}>
          <SheetTag
            sheet="ZC-CT"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            title="Communication & Enquiry Register"
          />
        </ScrollReveal>

        {/* Header Section */}
        <div className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
          <ScrollReveal direction="up" distance={28} duration={700}>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BE2E14]">
                The Zariya Collective · Direct Enquiries
              </p>

              <h1
                id="contact-heading"
                className="mt-4 font-anton text-[clamp(2.8rem,6vw,5.75rem)] uppercase leading-[0.96] tracking-tight text-[#012745]"
              >
                Start a
                <span className="block text-[#BE2E14]">conversation.</span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={700} delay={120}>
            <div className="max-w-xl lg:justify-self-end">
              <p className="font-sans text-base leading-relaxed text-[#012745]/85 sm:text-lg sm:leading-8">
                Whether you are exploring architectural BIM design with Zariya
                Design Studio, enrolling in The Barista Method at The Zariya
                Academy, or implementing Aayaam standards, we welcome your
                enquiry.
              </p>

              <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#012745]/60">
                <span className="h-px w-8 bg-[#DA8F0E]" />
                <span>Reference: Sheet ZC-CT · Nazirabad, Kolkata</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Information Drawing Board */}
        <ScrollReveal direction="up" distance={24} duration={750} delay={200}>
          <div className="relative border border-[#DA8F0E]/60 p-2 sm:p-3">
            {/* Corner registration marks */}
            <span
              aria-hidden="true"
              className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-[#DA8F0E]"
            />
            <span
              aria-hidden="true"
              className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-[#DA8F0E]"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-[#DA8F0E]"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#DA8F0E]"
            />

            <div className="border border-[#012745]/20 bg-[#F4F1EB] p-6 sm:p-10 lg:p-12">
              <div className="border-b border-[#012745]/20 pb-6 sm:pb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14]">
                    Direct Communication Channels
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#012745]/60">
                    Drawing ZC-CT-01
                  </span>
                </div>

                <h2 className="mt-4 font-cinzel text-xl font-bold sm:text-2xl text-[#012745]">
                  Get in touch with The Zariya Collective.
                </h2>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Primary WhatsApp Channel */}
                <div className="flex flex-col justify-between border border-[#012745]/20 bg-white/50 p-6 sm:p-8">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#BE2E14]">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#BE2E14] animate-pulse" />
                      <span>Primary Response Channel</span>
                    </div>

                    <h3 className="mt-3 font-cinzel text-lg font-bold sm:text-xl text-[#012745]">
                      WhatsApp Direct
                    </h3>

                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#012745]/80">
                      Message directly for immediate consultation regarding course
                      admissions, studio commissions, or technical BIM resources.
                    </p>

                    <div className="mt-4 font-mono text-sm text-[#012745] font-semibold">
                      {whatsapp.label}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-zariya-primary w-full sm:w-auto"
                    >
                      <span>Message on WhatsApp</span>
                      <span className="inline-block font-mono text-sm transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* Location and Conditional Email */}
                <div className="flex flex-col justify-between border border-[#012745]/20 bg-white/50 p-6 sm:p-8">
                  <dl className="space-y-6">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#012745]/60">
                        Collective Address
                      </dt>
                      <dd className="mt-2 font-sans text-sm font-medium leading-relaxed text-[#012745] sm:text-base">
                        {location}
                      </dd>
                    </div>

                    {email ? (
                      <div className="border-t border-[#012745]/15 pt-6">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#012745]/60">
                          Direct Email
                        </dt>
                        <dd className="mt-2">
                          <a
                            href={`mailto:${email}`}
                            className="font-mono text-sm font-semibold text-[#012745] hover:text-[#BE2E14] underline"
                          >
                            {email}
                          </a>
                        </dd>
                      </div>
                    ) : null}

                    <div className="border-t border-[#012745]/15 pt-6">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#012745]/60">
                        Founder & Principal
                      </dt>
                      <dd className="mt-2 font-sans text-sm font-medium text-[#012745]">
                        {siteConfig.founder.name} ({siteConfig.founder.role})
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 border-t border-[#012745]/15 pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#012745]/60">
                      Zariya Design Studio · The Zariya Academy · Aayaam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Technical Note */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#012745]/20 pt-4 font-mono text-[10px] uppercase tracking-wider text-[#012745]/50">
          <span>The Zariya Collective · All Rights Reserved</span>
          <span>Drawing ZC-CT · Scale NTS · Rev 01</span>
        </div>
      </div>
    </section>
  );
}
