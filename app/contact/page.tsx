
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SheetTag } from "@/components/shared/SheetTag";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zariya — Consulting, Architecture, and Academy.",
};

const WHATSAPP_PREFILLED_MESSAGE =
  "Hello, I found The Zariya website and would like to know more.";

export default function ContactPage() {
  const { whatsapp, location, email } = siteConfig.contact;

  const whatsappHref = `${whatsapp.url}?text=${encodeURIComponent(
    WHATSAPP_PREFILLED_MESSAGE,
  )}`;

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-zariya-cream text-zariya-navy"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="hero-reveal hero-reveal-1">
          <SheetTag
            sheet="ZC-CT"
            revision="01"
            scale="NTS"
            className="font-mono"
          />
        </div>

        {/* Staggered page-load text animation */}
        <div className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
          <div>
            <p className="hero-reveal hero-reveal-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zariya-red sm:text-xs">
              The Zariya Collective · Direct Enquiries
            </p>

            <h1
              id="contact-heading"
              className="hero-reveal hero-reveal-2 mt-5 max-w-3xl font-anton text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.98] tracking-wide"
            >
              Start a
              <span className="block text-zariya-red">
                conversation.
              </span>
            </h1>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="hero-reveal hero-reveal-3 font-sans text-base leading-7 text-zariya-navy/80 sm:text-lg sm:leading-8">
              Whether you are exploring a consulting engagement, an
              architectural collaboration, or enrolling in the Academy, we
              welcome your enquiry.
            </p>

            <p className="hero-reveal hero-reveal-4 mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-zariya-navy/55">
              Reference: CT-01 · Nazirabad
            </p>
          </div>
        </div>

        {/* Contact information drawing */}
        <div className="hero-reveal hero-reveal-3 relative border border-zariya-gold/60 p-2 sm:p-3">
          <span
            aria-hidden="true"
            className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-zariya-gold"
          />
          <span
            aria-hidden="true"
            className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-zariya-gold"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-zariya-gold"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-zariya-gold"
          />

          <div className="border border-zariya-navy/25 bg-zariya-cream p-6 sm:p-8 lg:p-12">
            <div className="border-b border-zariya-navy/25 pb-6 sm:pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zariya-red">
                  Communication Channels
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zariya-navy/55">
                  Drawing CT-01
                </span>
              </div>

              <h2 className="mt-4 font-cinzel text-xl font-semibold sm:text-2xl">
                Get in touch with Zariya.
              </h2>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* WhatsApp */}
              <div className="flex flex-col justify-between border border-zariya-navy/20 p-6 sm:p-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zariya-navy/60">
                    Primary Channel
                  </p>

                  <h3 className="mt-2 font-cinzel text-lg font-semibold sm:text-xl">
                    WhatsApp Enquiry
                  </h3>

                  <p className="mt-3 font-sans text-sm leading-6 text-zariya-navy/75">
                    Connect directly with our team for quick responses to
                    course details, admissions, and project queries.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-3 border border-zariya-gold bg-zariya-red px-6 py-3 font-cinzel text-xs font-semibold uppercase tracking-wider text-zariya-cream transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 hover:bg-[#9F2612] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto sm:text-sm"
                  >
                    <span>Message on WhatsApp</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Location and email */}
              <div className="flex flex-col justify-between border border-zariya-navy/20 p-6 sm:p-8">
                <dl className="space-y-6">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zariya-navy/60">
                      Location
                    </dt>
                    <dd className="mt-2 font-sans text-sm leading-6 text-zariya-navy sm:text-base">
                      {location}
                    </dd>
                  </div>

                  {email ? (
                    <div className="border-t border-zariya-navy/15 pt-6">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zariya-navy/60">
                        Email
                      </dt>
                      <dd className="mt-2">
                        <a
                          href={`mailto:${email}`}
                          className="font-sans text-sm font-medium text-zariya-navy transition-colors duration-200 hover:text-zariya-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold sm:text-base"
                        >
                          {email}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <div className="mt-8 border-t border-zariya-navy/15 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zariya-navy/55">
                    Consulting · Architecture · Academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="hero-reveal hero-reveal-4 mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-zariya-navy/20 pt-4 font-mono text-[10px] uppercase tracking-wider text-zariya-navy/50">
          <span>The Zariya Collective</span>
          <span>Drawing ZC-CT · Scale NTS</span>
        </div>
      </div>
    </section>
  );
}