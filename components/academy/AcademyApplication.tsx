"use client";

import { AcademyForm } from "@/components/academy/AcademyForm";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { whatsappQuickUrl } from "@/config/academy-content";
import { SheetTag } from "@/components/shared/SheetTag";

export function AcademyApplication() {
  return (
    <section
      id="apply"
      aria-labelledby="academy-application-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#012745] text-[#E7E4DC]"
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

      <div className="relative mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        {/* Technical Sheet Tag */}
        <ScrollReveal direction="up" distance={20} duration={800}>
          <SheetTag
            sheet="TBM-07"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            title="Student Application & Admission Register"
            theme="dark"
            className="mb-10 sm:mb-12"
          />
        </ScrollReveal>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Enquiry introduction */}
          <ScrollReveal
            className="lg:sticky lg:top-28"
            direction="up"
            distance={24}
            duration={850}
          >
            <div className="max-w-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#DA8F0E] sm:text-xs">
                The Zariya Academy · Enquiry
              </p>

              <h2
                id="academy-application-heading"
                className="mt-4 font-anton text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.96] tracking-tight"
              >
                Tell us your goal.
                <span className="block text-[#DA8F0E]">
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
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#DA8F0E] sm:text-[10px]">
                    Next listed batch
                  </p>
                  <p className="mt-2 font-cinzel text-base font-semibold text-[#E7E4DC] sm:text-lg">
                    8 November 2026
                  </p>
                </div>

                <div className="py-5 pl-4 sm:pl-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#DA8F0E] sm:text-[10px]">
                    Course fee
                  </p>
                  <p className="mt-2 font-cinzel text-base font-semibold text-[#E7E4DC] sm:text-lg">
                    ₹20,000
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp enquiry */}
              <div className="mt-8">
                <a
                  href={whatsappQuickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-zariya-primary"
                >
                  Send on WhatsApp
                  <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-[#E7E4DC]/45">
                The Barista Method · Zariya Elite Barista Certificate
              </p>
            </div>
          </ScrollReveal>

          {/* Form panel with architectural framing */}
          <ScrollReveal
            direction="up"
            distance={24}
            delay={120}
            duration={850}
          >
            <div className="relative border border-[#DA8F0E]/70 p-2 sm:p-3 shadow-2xl">
              {/* Corner registration marks */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1 -top-1 font-mono text-sm font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 -top-1 font-mono text-sm font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 -left-1 font-mono text-sm font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 -right-1 font-mono text-sm font-bold text-[#DA8F0E] select-none"
              >
                +
              </span>

              <div className="relative bg-[#E7E4DC] p-6 text-[#012745] sm:p-8 lg:p-10">
                {/* Form heading */}
                <div className="border-b border-[#012745]/25 pb-6 sm:pb-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#BE2E14]">
                      Application · Sheet TBM-07
                    </p>

                    <span className="border border-[#012745]/30 bg-[#012745]/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#012745]/70">
                      WhatsApp Dispatch
                    </span>
                  </div>

                  <h3 className="mt-3 font-cinzel text-xl font-semibold leading-snug sm:text-2xl text-[#012745]">
                    A few details to get started.
                  </h3>

                  <p className="mt-2 font-sans text-sm leading-6 text-[#012745]/70 sm:text-base">
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
          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-y border-[#E7E4DC]/25 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#E7E4DC]/55">
            <span>Drawing: Student enquiry</span>
            <span>Sheet TBM-07</span>
            <span>Do not scale from this drawing. Taste.</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
