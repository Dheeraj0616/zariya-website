"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { SheetTag } from "@/components/shared/SheetTag";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ventures, type VentureItem } from "@/config/site";

const filterCategories = ["All", "Studio", "Academy", "Aayaam"] as const;
type FilterCategory = (typeof filterCategories)[number];

export function VentureRegister() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const visibleVentures =
    activeFilter === "All"
      ? ventures
      : ventures.filter((v) => v.category === activeFilter);

  return (
    <section
      id="verticals"
      aria-labelledby="register-heading"
      className="bg-[#E7E4DC] text-[#012745] border-t border-[#012745]/15"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <ScrollReveal direction="up" distance={20} duration={650}>
          <SheetTag
            sheet="ZC-00"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            title="Master Venture Register"
          />
        </ScrollReveal>

        <div className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
          <ScrollReveal direction="up" distance={28} duration={700}>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BE2E14]">
                The Zariya Collective · Master Register
              </p>

              <h2
                id="register-heading"
                className="mt-4 font-anton text-[clamp(2.8rem,6vw,5.75rem)] uppercase leading-[0.96] tracking-tight text-[#012745]"
              >
                One register.
                <span className="block text-[#BE2E14]">Three ventures.</span>
                <span className="block text-[#012745]/90">All live.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={700} delay={120}>
            <div className="max-w-xl lg:justify-self-end">
              <p className="font-sans text-base leading-relaxed text-[#012745]/85 sm:text-lg sm:leading-8">
                Three distinct ventures within The Zariya Collective, each with
                its own address and dedicated series of technical sheets: design,
                hands-on hospitality learning, and BIM standards for the Indian market.
              </p>

              <div className="mt-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#012745]/60">
                <span>Ref: Register ZC-00 · Rev 01</span>
                <span>·</span>
                <span>16 October 2026</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2.5 border-b border-[#012745]/20 pb-4">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#012745]/50">
            Filter:
          </span>
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={isActive ? "btn-zariya-tab-active" : "btn-zariya-tab-inactive"}
              >
                {cat}
                {cat === "All" && ` (${ventures.length})`}
              </button>
            );
          })}
        </div>

        {/* Master Architectural Register Table */}
        <div className="border-t-2 border-[#012745]">
          {/* Table Header (Desktop) */}
          <div className="hidden grid-cols-[0.8fr_1.6fr_1.8fr_1.2fr_auto] items-center gap-4 border-b border-[#012745]/30 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#012745]/60 md:grid">
            <span>Series Code</span>
            <span>Venture Name</span>
            <span>Discipline / Standards</span>
            <span>Address / Subdomain</span>
            <span className="text-right">Access</span>
          </div>

          {/* Table Rows with Motion Layout */}
          <motion.div layout className="divide-y divide-[#012745]/15">
            <AnimatePresence>
              {visibleVentures.map((venture: VentureItem) => (
                <motion.article
                  key={venture.code}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="grid gap-3 py-6 sm:py-7 md:grid-cols-[0.8fr_1.6fr_1.8fr_1.2fr_auto] md:items-center md:gap-4 transition-colors hover:bg-white/30 px-2"
                >
                  {/* Series Code + Live Pulse */}
                  <div className="flex items-center gap-2">
                    <span
                      aria-label="Status: Live"
                      className="inline-flex h-2 w-2 rounded-full bg-[#BE2E14] shadow-[0_0_8px_rgba(190,46,20,0.6)] animate-pulse"
                    />
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#BE2E14]">
                      {venture.series}
                    </span>
                  </div>

                  {/* Venture Name */}
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-[#012745] sm:text-xl">
                      {venture.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 md:hidden">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#DA8F0E]">
                        {venture.category}
                      </span>
                      <span className="text-[#012745]/30">·</span>
                      <span className="font-mono text-[10px] text-[#012745]/60">
                        {venture.displayUrl}
                      </span>
                    </div>
                  </div>

                  {/* Discipline / Summary */}
                  <p className="font-sans text-sm leading-relaxed text-[#012745]/80">
                    {venture.discipline}
                  </p>

                  {/* Subdomain Address */}
                  <div className="hidden font-mono text-xs text-[#012745]/70 md:block">
                    <a
                      href={venture.url}
                      target={venture.url.startsWith("http") ? "_blank" : undefined}
                      rel={venture.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-[#BE2E14] hover:underline"
                    >
                      {venture.displayUrl}
                    </a>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-2.5 md:justify-end">
                    {venture.internalUrl && (
                      <Link
                        href={venture.internalUrl}
                        className="btn-zariya-primary min-h-[38px] px-4 py-2 text-[10px] tracking-[0.14em]"
                      >
                        <span>Explore Academy</span>
                        <span className="font-mono text-xs">→</span>
                      </Link>
                    )}
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-zariya-outline min-h-[38px] px-4 py-2 text-[10px] tracking-[0.14em]"
                    >
                      <span>Open Sheet</span>
                      <span className="font-mono text-xs">↗</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Architectural Register Stamp */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#012745]/20 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 font-mono text-xs text-[#012745]/65">
            <span className="font-bold text-[#BE2E14]">STATUS: ALL LIVE</span>
            <span>·</span>
            <span>NAZIRABAD, KOLKATA</span>
          </div>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-[0.14em] text-[#012745] underline hover:text-[#BE2E14]"
          >
            Request technical enquiry for any venture →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default VentureRegister;
