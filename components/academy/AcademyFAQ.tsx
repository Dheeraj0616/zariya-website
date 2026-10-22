
"use client";

import { useState } from "react";
import { faq } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AcademyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="academy-faq-heading"
      className="relative overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        {/* Technical drawing title block */}
        <ScrollReveal direction="up" distance={20} duration={800}>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-y border-[#012745]/25 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#012745]/65 sm:text-[10px]">
            <span>
              <span className="mr-2 text-[#BE2E14]">Sheet</span>
              TBM-08
            </span>
            <span>Reference / FAQ</span>
            <span>Scale NTS</span>
            <span>Revision 01</span>
          </div>
        </ScrollReveal>

        {/* Section introduction */}
        <ScrollReveal direction="up" distance={24} duration={850}>
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14] sm:text-xs">
              The Barista Method · Reference notes
            </p>

            <h2
              id="academy-faq-heading"
              className="mt-5 font-anton text-4xl font-normal uppercase leading-[1.1] tracking-wide sm:text-5xl lg:text-6xl"
            >
              Questions before
              <span className="mt-2 block text-[#BE2E14]">
                the first pour.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl font-sans text-sm leading-7 text-[#012745]/75 sm:text-base sm:leading-8">
              Find answers to common questions about the course, learning
              experience and getting started with The Zariya Academy.
            </p>
          </div>
        </ScrollReveal>

        {/* Accessible single-open accordion */}
        <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `academy-faq-answer-${index}`;
            const questionId = `academy-faq-question-${index}`;

            return (
              <ScrollReveal
                key={item.q}
                direction="up"
                distance={16}
                delay={Math.min(index * 50, 250)}
                duration={700}
              >
                <div
                  className={`border-b transition-colors duration-200 motion-reduce:transition-none ${
                    isOpen
                      ? "border-[#BE2E14]/65"
                      : "border-[#012745]/20"
                  }`}
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex((currentIndex) =>
                          currentIndex === index ? null : index,
                        )
                      }
                      className="group flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#BE2E14] sm:py-6"
                    >
                      <span className="flex min-w-0 items-start gap-4">
                        <span
                          aria-hidden="true"
                          className={`pt-1 font-mono text-[10px] tabular-nums sm:text-xs ${
                            isOpen ? "text-[#BE2E14]" : "text-[#012745]/45"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`font-cinzel text-sm font-semibold leading-7 tracking-wide transition-colors duration-200 motion-reduce:transition-none sm:text-base lg:text-lg ${
                            isOpen
                              ? "text-[#BE2E14]"
                              : "text-[#012745] group-hover:text-[#BE2E14]"
                          }`}
                        >
                          {item.q}
                        </span>
                      </span>

                      {/* Plus/minus control */}
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors duration-200 motion-reduce:transition-none ${
                          isOpen
                            ? "border-[#BE2E14] bg-[#BE2E14] text-[#E7E4DC]"
                            : "border-[#012745]/25 text-[#012745] group-hover:border-[#BE2E14] group-hover:text-[#BE2E14]"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="square"
                            className={
                              isOpen
                                ? "rotate-90 opacity-0"
                                : "opacity-100"
                            }
                          />
                          {isOpen && (
                            <path
                              d="M5 12h14"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="square"
                            />
                          )}
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {/* Answer panel */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className={`pb-6 pl-9 pr-4 font-sans text-sm leading-7 text-[#012745]/75 transition-opacity duration-200 motion-reduce:transition-none sm:pl-10 sm:text-base ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Drawing footer */}
        <ScrollReveal direction="up" distance={14} duration={700}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-y border-[#012745]/25 py-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#012745]/60 sm:text-[10px]">
            <span>Drawing: Academy reference</span>
            <span>Sheet TBM-08</span>
            <span>End of reference notes</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
