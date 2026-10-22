"use client";

import { useState } from "react";
import Link from "next/link";
import { SheetTag } from "@/components/shared/SheetTag";

const ventures = [
  {
    id: "studio",
    series: "ZD-01",
    name: "Zariya Design Studio",
    discipline: "BIM · VR Architecture",
    status: "Venture",
    address: "To be confirmed",
    category: "Studio",
    href: null,
  },
  {
    id: "academy",
    series: "TBM-00",
    name: "The Zariya Academy",
    discipline: "Barista Training · Practical Learning",
    status: "Venture",
    address: "Nazirabad — confirm with client",
    category: "Academy",
    href: "/academy",
  },
  {
    id: "aayaam",
    series: "AY-01",
    name: "Aayaam",
    discipline: "BIM Objects · AS 1:2026",
    status: "Venture",
    address: "To be confirmed",
    category: "Aayaam",
    href: null,
  },
] as const;

const filters = ["All", "Studio", "Academy", "Aayaam"] as const;

export function VentureRegister() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const visibleVentures =
    activeFilter === "All"
      ? ventures
      : ventures.filter((venture) => venture.category === activeFilter);

  return (
    <section
      id="verticals"
      aria-labelledby="register-heading"
      className="bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-14">
        <SheetTag
          sheet="ZC-00"
          revision="01"
          scale="NTS"
          className="font-mono"
        />

        <div className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14] sm:text-xs">
              The Zariya Collective · Venture Register
            </p>

            <h2
              id="register-heading"
              className="mt-5 max-w-3xl font-anton text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.98] tracking-wide"
            >
              One register.
              <span className="block text-[#BE2E14]">
                Three ventures.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="font-sans text-base leading-7 text-[#012745]/80 sm:text-lg sm:leading-8">
              Three distinct ventures within The Zariya Collective, spanning
              design, practical learning, and BIM resources.
            </p>

            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#012745]/55">
              Register reference: ZC-00
            </p>
          </div>
        </div>

        <div className="border-y-2 border-[#012745]">
          <div className="hidden grid-cols-[0.7fr_1.8fr_1.3fr_auto] gap-4 border-b border-[#012745]/30 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#012745]/60 md:grid">
            <span>Series</span>
            <span>Venture</span>
            <span>Discipline</span>
            <span>Open</span>
          </div>

          {visibleVentures.map((venture, index) => (
            <article
              key={venture.id}
              className={`grid gap-3 py-6 sm:py-7 md:grid-cols-[0.7fr_1.8fr_1.3fr_auto] md:items-center md:gap-4 ${
                index !== visibleVentures.length - 1
                  ? "border-b border-[#012745]/20"
                  : ""
              }`}
            >
              <p className="font-mono text-xs tracking-wider text-[#BE2E14]">
                <span className="md:hidden text-[#012745]/50">
                  SERIES /{" "}
                </span>
                {venture.series}
              </p>

              <div>
                <h3 className="font-cinzel text-lg font-semibold leading-snug sm:text-xl">
                  {venture.name}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#012745]/55 md:hidden">
                  {venture.discipline}
                </p>
              </div>

              <p className="hidden font-sans text-sm leading-6 text-[#012745]/75 md:block">
                {venture.discipline}
              </p>

              {venture.href ? (
                <Link
                  href={venture.href}
                  className="inline-flex min-h-10 items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#012745] hover:text-[#BE2E14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-4"
                >
                  Explore <span aria-hidden="true">↗</span>
                </Link>
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#012745]/45">
                  Coming soon
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#BE2E14]">
                Register index
              </p>
              <h3 className="mt-2 font-cinzel text-xl font-semibold">
                Read the register.
              </h3>
            </div>

            <div
              aria-label="Filter ventures"
              className="flex flex-wrap gap-2"
            >
              {filters.map((filter) => {
                const selected = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveFilter(filter)}
                    className={`min-h-10 rounded-sm border px-4 font-mono text-[10px] uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] ${
                      selected
                        ? "border-[#012745] bg-[#012745] text-[#E7E4DC]"
                        : "border-[#012745]/25 text-[#012745] hover:border-[#BE2E14] hover:text-[#BE2E14]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#012745]/20 pt-4 font-mono text-[10px] uppercase tracking-wider text-[#012745]/50">
          <span>The Zariya Collective</span>
          <span>Drawing ZC-00 · Scale NTS</span>
        </div>
      </div>
    </section>
  );
}
