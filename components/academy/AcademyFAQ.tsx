"use client";

import { useState } from "react";
import { academy } from "@/config/academy";

function CoffeeBean({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 110"
      fill="none"
      className={className}
    >
      <ellipse
        cx="40"
        cy="55"
        rx="25"
        ry="39"
        transform="rotate(35 40 55)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M23 86C30 72 32 55 56 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AcademyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="academy-faq-heading"
      className="relative isolate overflow-hidden bg-background text-foreground"
    >
      {/* Decorative coffee-bean artwork */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-12 -z-10 text-[#6F4E37]/15 sm:right-10"
      >
        <CoffeeBean className="h-48 w-36 rotate-12 sm:h-64 sm:w-48" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-10 -z-10 text-[#DA8F0E]/10"
      >
        <CoffeeBean className="h-56 w-40 -rotate-45 sm:h-72 sm:w-52" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Section introduction */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-secondary sm:text-sm">
            A few things to know
          </p>

          <h2
            id="academy-faq-heading"
            className="font-cinzel text-3xl font-semibold leading-tight tracking-wide sm:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-5 font-sans text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Everything you need to know before beginning your barista journey.
          </p>
        </div>

        {/* Accessible single-open accordion */}
        <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
          {academy.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `academy-faq-answer-${index}`;
            const questionId = `academy-faq-question-${index}`;

            return (
              <div
                key={item.question}
                className={`border-b transition-colors duration-200 motion-reduce:transition-none ${
                  isOpen
                    ? "border-[#DA8F0E]/60"
                    : "border-[#6F4E37]/20"
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
                    className="group flex w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#DA8F0E] sm:py-6"
                  >
                    <span
                      className={`font-cinzel text-sm font-semibold leading-7 tracking-wide transition-colors duration-200 motion-reduce:transition-none sm:text-base lg:text-lg ${
                        isOpen
                          ? "text-secondary"
                          : "text-foreground group-hover:text-secondary"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Rotating chevron */}
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 ease-out motion-reduce:transition-none ${
                        isOpen
                          ? "rotate-180 border-[#DA8F0E] bg-[#DA8F0E]/10 text-secondary"
                          : "rotate-0 border-[#6F4E37]/25 text-[#6F4E37] group-hover:border-[#DA8F0E]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Minimal fade animation */}
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
                      className={`pb-5 pr-10 font-sans text-sm leading-7 text-muted-foreground transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none sm:pb-6 sm:text-base ${
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-1 opacity-0"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing note */}
        <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12">
          <CoffeeBean className="h-7 w-5 text-[#A47551]" />
          <p className="font-cinzel text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
            Your journey starts with a single cup.
          </p>
          <CoffeeBean className="h-7 w-5 -scale-x-100 text-[#A47551]" />
        </div>
      </div>
    </section>
  );
}