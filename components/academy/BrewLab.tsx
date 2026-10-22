
import type { ComponentType, ReactNode } from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { brewLab, contact, formatINR } from "@/config/academy-content";

/* -------------------------------------------------------------------------- */
/* Booking link: opens WhatsApp with the selected workshop details            */
/* -------------------------------------------------------------------------- */

function bookingUrl(sheet: string, name: string) {
  const text = [
    `Hi, I would like to enquire about the ${name} workshop (${sheet}).`,
    "Please share the next available dates.",
    "Name:",
    "Number of seats:",
  ].join("\n");

  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/* -------------------------------------------------------------------------- */
/* Small line drawings, one per workshop sheet                               */
/* -------------------------------------------------------------------------- */

function Drawing({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 96 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-full w-full"
    >
      {children}
    </svg>
  );
}

/** BL-01 · Pour-over */
function PourOverArt() {
  return (
    <Drawing>
      <path d="M48 3V13" strokeDasharray="2 3" />
      <path d="M28 14H68L57 36H39Z" />
      <path d="M40 16L45 34M56 16L51 34" strokeOpacity="0.5" />
      <path d="M37 42H59V51C59 55 56 58 52 58H44C40 58 37 55 37 51Z" />
      <path d="M59 45H62C65 45 65 52 62 52H59" />
      <path d="M20 61H76" strokeOpacity="0.5" />
    </Drawing>
  );
}

/** BL-02 · Espresso */
function EspressoArt() {
  return (
    <Drawing>
      <path d="M48 2V62" strokeDasharray="2 3" strokeOpacity="0.5" />
      <path d="M30 6H66V15H30Z" />
      <path d="M34 25H62L58 38H38Z" />
      <path d="M42 29H54M41 33H55" strokeOpacity="0.5" />
      <path d="M36 44H60V49H36Z" />
      <path d="M60 46H90" />
      <path d="M20 6V49M17 6H23M17 49H23" strokeOpacity="0.5" />
    </Drawing>
  );
}

/** BL-03 · Milk and latte art */
function MilkArt() {
  return (
    <Drawing>
      <path d="M10 24H32V48C32 52 29 55 25 55H17C13 55 10 52 10 48Z" />
      <path d="M10 24L5 20" />
      <path d="M32 29H37C41 29 41 41 36 41H32" />
      <circle cx="68" cy="34" r="19" />
      <circle cx="68" cy="34" r="13" strokeOpacity="0.5" />
      <path d="M68 42C60 37 62 29 68 32C74 29 76 37 68 42Z" />
    </Drawing>
  );
}

/** BL-04 · Cold drinks */
function DrinkArt() {
  return (
    <Drawing>
      <path d="M32 8H60L56 56H36Z" />
      <path d="M34 24H58M35 38H57" strokeOpacity="0.6" />
      <rect x="40" y="12" width="6" height="6" />
      <rect x="49" y="14" width="6" height="6" />
      <path d="M54 3L50 34" />
      <path d="M74 8V56M71 8H77M71 56H77" strokeOpacity="0.5" />
    </Drawing>
  );
}

const cupCenters = [14, 38, 62, 86] as const;

/** BL-05 · Cupping */
function CuppingArt() {
  return (
    <Drawing>
      {cupCenters.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="26" r="9" />
          <circle cx={cx} cy="26" r="5" strokeOpacity="0.5" />
          <path d={`M${cx} 38V44`} strokeOpacity="0.5" />
        </g>
      ))}
      <path d="M4 44H92" strokeOpacity="0.5" />
      <path d="M10 56H38" />
      <ellipse cx="43" cy="56" rx="5" ry="3" />
    </Drawing>
  );
}

const sheetArt: Record<string, ComponentType> = {
  "BL-01": PourOverArt,
  "BL-02": EspressoArt,
  "BL-03": MilkArt,
  "BL-04": DrinkArt,
  "BL-05": CuppingArt,
};

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

const registerColumns =
  "lg:grid-cols-[5rem_6rem_minmax(0,1fr)_6rem_9rem_12rem]";

export function BrewLab() {
  return (
    <section
      id="brew-lab"
      aria-labelledby="brew-lab-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        {/* Sheet header */}
        <ScrollReveal direction="up" distance={16} duration={700}>
          <div className="grid grid-cols-2 gap-y-1 border-y border-[#E7E4DC]/20 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E7E4DC]/60 sm:grid-cols-4">
            <span>Sheet BL-00</span>
            <span className="text-right sm:text-center">
              Drawing set index
            </span>
            <span className="sm:text-center">Scale NTS</span>
            <span className="text-right">Issue 01</span>
          </div>
        </ScrollReveal>

        {/* Introduction */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <ScrollReveal direction="up" distance={28} duration={900}>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#DA8F0E] sm:text-sm">
              Brew Lab · Short workshops
            </p>

            <h2
              id="brew-lab-heading"
              className="mt-5 max-w-2xl font-cinzel text-3xl font-semibold leading-[1.15] tracking-wide sm:text-4xl lg:text-5xl"
            >
              Not ready for the full course?
              <span className="block text-[#DA8F0E]">
                Start with one skill.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            distance={24}
            delay={120}
            duration={900}
          >
            <p className="max-w-lg font-sans text-base leading-7 text-[#E7E4DC]/70 sm:text-lg sm:leading-8 lg:justify-self-end">
              Brew Lab is a series of short, hands-on workshops from The Zariya
              Academy. Each sheet teaches one skill and stands alone, so you
              can join any of them, in any order.
            </p>
          </ScrollReveal>
        </div>

        {/* Drawing register */}
        <div className="mt-12 sm:mt-16">
          {/* Column labels */}
          <div
            aria-hidden="true"
            className={`hidden gap-6 border-y border-[#E7E4DC]/25 px-2 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E7E4DC]/55 lg:grid ${registerColumns}`}
          >
            <span>Sheet</span>
            <span>Drawing</span>
            <span>Skill</span>
            <span>Seats</span>
            <span>Price</span>
            <span className="text-right">Booking</span>
          </div>

          <ul className="border-t border-[#E7E4DC]/25 lg:border-t-0">
            {brewLab.map((item, index) => {
              const Art = sheetArt[item.sheet];

              return (
                <li
                  key={item.sheet}
                  className="group relative border-b border-[#E7E4DC]/15 transition-colors duration-300 hover:bg-[#E7E4DC]/[0.04] motion-reduce:transition-none"
                >
                  {/* Gold underline on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#DA8F0E] transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                  />

                  <ScrollReveal
                    direction="up"
                    distance={20}
                    delay={index * 90}
                    duration={750}
                  >
                    <div
                      className={`grid gap-5 px-1 py-6 sm:px-2 sm:py-7 lg:items-center lg:gap-6 ${registerColumns}`}
                    >
                      {/* Sheet id and drawing */}
                      <div className="flex items-center justify-between lg:contents">
                        <span className="font-mono text-sm font-semibold tracking-[0.14em] text-[#DA8F0E]">
                          {item.sheet}
                        </span>

                        <span
                          aria-hidden="true"
                          className="block h-12 w-[4.5rem] text-[#E7E4DC]/70 transition-colors duration-300 group-hover:text-[#DA8F0E] motion-reduce:transition-none lg:h-14 lg:w-24"
                        >
                          {Art ? <Art /> : null}
                        </span>
                      </div>

                      {/* Skill */}
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#E7E4DC]/60">
                          {item.topic}
                        </p>

                        <h3 className="mt-1 font-cinzel text-xl font-semibold tracking-wide sm:text-2xl">
                          {item.name}
                        </h3>

                        <p className="mt-2 max-w-xl font-sans text-sm leading-6 text-[#E7E4DC]/70 sm:text-base sm:leading-7">
                          {item.aim}
                        </p>
                      </div>

                      {/* Seats and price */}
                      <div className="flex items-end gap-8 lg:contents">
                        <p className="font-sans text-xs text-[#E7E4DC]/60">
                          <span className="block font-cinzel text-lg font-semibold text-[#E7E4DC]">
                            {item.seats}
                          </span>
                          seats
                        </p>

                        <p className="font-sans text-xs text-[#E7E4DC]/60">
                          <span className="block font-cinzel text-lg font-semibold text-[#E7E4DC]">
                            {formatINR(item.price)}
                          </span>
                          {item.priceNote === "each"
                            ? "per seat"
                            : item.priceNote}
                        </p>
                      </div>

                      {/* Booking */}
                      <a
                        href={bookingUrl(item.sheet, item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${item.name} (${item.sheet}) on WhatsApp`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-none border border-[#DA8F0E]/70 px-5 py-2.5 font-cinzel text-xs font-semibold tracking-wide text-[#DA8F0E] transition-colors duration-300 hover:bg-[#DA8F0E] hover:text-[#012745] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#012745] motion-reduce:transition-none lg:justify-self-end"
                      >
                        Enquire on WhatsApp
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Where, when, and the way on to the course */}
        <ScrollReveal direction="up" distance={20} duration={800}>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-sans text-sm leading-6 text-[#E7E4DC]/65">
              Dates change from batch to batch, so we share the next ones on
              WhatsApp. Workshops run in Nazirabad, Kolkata, and the exact pin
              arrives once your seat is confirmed.
            </p>

            <a
              href="/academy#curriculum"
              className="group/link inline-flex min-h-11 items-center gap-3 self-start font-cinzel text-xs font-semibold tracking-wide text-[#E7E4DC] transition-colors duration-200 hover:text-[#DA8F0E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-4 focus-visible:ring-offset-[#012745] sm:self-auto"
            >
              Ready for more? See The Barista Method
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#E7E4DC]/20 pt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E7E4DC]/55">
            <span>Brew Lab · 5 sheets</span>
            <span>Drawing BL-00</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
