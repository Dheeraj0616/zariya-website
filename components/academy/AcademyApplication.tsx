
"use client";

import { AcademyForm } from "@/components/academy/AcademyForm";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { whatsappQuickUrl } from "@/config/academy-content";

export function AcademyApplication() {
  return (
    <section
      id="apply"
      aria-labelledby="academy-application-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        {/* Technical drawing title block */}
        <ScrollReveal direction="up" distance={20} duration={800}>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-y border-[#E7E4DC]/25 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#E7E4DC]/65 sm:text-[10px]">
            <span>
              <span className="mr-2 text-[#DA8F0E]">Sheet</span>
              TBM-07
            </span>
            <span>Student enquiry</span>
            <span>Scale NTS</span>
            <span>Revision 01</span>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Enquiry introduction */}
          <ScrollReveal
            className="lg:sticky lg:top-28"
            direction="up"
            distance={24}
            duration={850}
          >
            <div className="max-w-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#DA8F0E] sm:text-xs">
                The Zariya Academy · Enquiry
              </p>

              <h2
                id="academy-application-heading"
                className="mt-5 font-anton text-4xl font-normal uppercase leading-[1.1] tracking-wide sm:text-5xl lg:text-6xl"
              >
                Tell us your goal.
                <span className="mt-2 block text-[#DA8F0E]">
                  Start a conversation.
                </span>
              </h2>

              <p className="mt-6 max-w-lg font-sans text-base leading-7 text-[#E7E4DC]/75 sm:text-lg sm:leading-8">
                Tell The Zariya Academy a little about yourself, your
                experience and what you want to learn. Review your message,
                then continue the conversation on WhatsApp.
              </p>

              {/* Course facts */}
              <div className="mt-8 grid grid-cols-2 border-y border-[#E7E4DC]/25">
                <div className="border-r border-[#E7E4DC]/25 py-5 pr-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#DA8F0E] sm:text-[10px]">
                    Next listed batch
                  </p>
                  <p className="mt-2 font-cinzel text-base font-semibold sm:text-lg">
                    8 November 2026
                  </p>
                </div>

                <div className="py-5 pl-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#DA8F0E] sm:text-[10px]">
                    Course fee
                  </p>
                  <p className="mt-2 font-cinzel text-base font-semibold sm:text-lg">
                    ₹20,000
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp enquiry */}
              <a
                href={whatsappQuickUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 items-center justify-center border border-[#DA8F0E] bg-[#BE2E14] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#E7E4DC] transition-colors hover:bg-[#9F2612] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#012745]"
              >
                Send on WhatsApp
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </a>

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.15em] text-[#E7E4DC]/45 sm:text-[10px]">
                The Barista Method · Zariya Elite Barista Certificate
              </p>
            </div>
          </ScrollReveal>

          {/* Form panel */}
          <ScrollReveal
            direction="up"
            distance={24}
            delay={120}
            duration={850}
          >
            <div className="relative border border-[#DA8F0E]/65 p-2 sm:p-3">
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

              <div className="relative bg-[#E7E4DC] p-5 text-[#012745] sm:p-8 lg:p-10">
                {/* Form heading */}
                <div className="border-b border-[#012745]/25 pb-6 sm:pb-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#BE2E14] sm:text-[10px]">
                      Application / TBM-07
                    </p>

                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#012745]/55">
                      WhatsApp
                    </span>
                  </div>

                  <h3 className="mt-4 font-cinzel text-xl font-semibold leading-snug sm:text-2xl">
                    A few details to get started.
                  </h3>

                  <p className="mt-3 font-sans text-sm leading-6 text-[#012745]/70 sm:text-base">
                    Share your details and tell us what you hope to get out of
                    the course.
                  </p>
                </div>

                {/* Enquiry form */}
                <div className="mt-6">
                  <AcademyForm />
                </div>

                {/* Single privacy notice */}
                <div className="mt-6 border-t border-[#012745]/25 pt-4">
                  <p className="font-mono text-[9px] leading-5 text-[#012745]/65 sm:text-[10px]">
                    PRIVACY NOTE: REVIEW THE DETAILS YOU PROVIDE BEFORE
                    OPENING WHATSAPP. YOUR MESSAGE IS NOT SENT UNTIL YOU TAP
                    SEND.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Drawing footer */}
        <ScrollReveal direction="up" distance={14} duration={700}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-y border-[#E7E4DC]/25 py-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#E7E4DC]/55 sm:text-[10px]">
            <span>Drawing: Student enquiry</span>
            <span>Sheet TBM-07</span>
            <span>Do not scale from this drawing. Taste.</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
