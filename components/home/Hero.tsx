"use client";

import Link from "next/link";
import { SheetTag } from "@/components/shared/SheetTag";
import { ParallaxBox, RevealText, ScrollReveal } from "@/components/animation/ScrollReveal";
import { HeroVideo } from "./HeroVideo";

const venturePills = [
  { code: "DS", name: "Studio", href: "#verticals" },
  { code: "TBM · BL", name: "Academy", href: "/academy" },
  { code: "AY", name: "Aayaam", href: "#verticals" },
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto max-w-[1600px] px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20 lg:px-12 lg:pt-12 lg:pb-24">
        {/* Top Technical Sheet Tag */}
        <ScrollReveal direction="down" distance={16} duration={600}>
          <SheetTag
            sheet="ZC-00"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            title="General Register & Collective Overview"
          />
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Left: Editorial & Architectural Register Presentation */}
          <div className="flex flex-col">
            <ScrollReveal direction="up" distance={20} duration={650} delay={60}>
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BE2E14]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#BE2E14]" />
                <span>The Zariya Collective · Nazirabad, Kolkata · India</span>
              </div>
            </ScrollReveal>

            <div className="mt-6">
              <RevealText
                as="h1"
                className="font-anton text-[clamp(3.2rem,6.8vw,6.75rem)] uppercase leading-[0.94] tracking-tight text-[#012745]"
                duration={800}
                delay={100}
              >
                The Zariya Collective.
              </RevealText>

              <div className="mt-4">
                <RevealText
                  as="p"
                  className="font-cinzel text-xl font-bold tracking-wide text-[#BE2E14] sm:text-2xl lg:text-3xl"
                  duration={800}
                  delay={220}
                >
                  One register. Three ventures. All live.
                </RevealText>
              </div>
            </div>

            <ScrollReveal direction="up" distance={24} duration={750} delay={300}>
              <p className="mt-7 max-w-xl font-sans text-base leading-relaxed text-[#012745]/85 sm:text-lg sm:leading-8">
                A Kolkata group of three ventures, each with its own address and
                its own series of sheets: design, learning and standards for the
                built environment and the cup.
              </p>
            </ScrollReveal>

            {/* Quick Venture Jump Pills */}
            <ScrollReveal direction="up" distance={20} duration={700} delay={380}>
              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#012745]/60 mr-1">
                  Series:
                </span>
                {venturePills.map((pill) => (
                  <Link
                    key={pill.code}
                    href={pill.href}
                    className="inline-flex items-center gap-1.5 border border-[#012745]/20 bg-white/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[#012745] backdrop-blur-sm transition-all hover:border-[#BE2E14] hover:bg-white hover:text-[#BE2E14]"
                  >
                    <span className="text-[10px] text-[#DA8F0E]">{pill.code}</span>
                    <span>{pill.name}</span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>

            {/* Primary Action Buttons */}
            <ScrollReveal direction="up" distance={20} duration={700} delay={440}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
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
                  href="#verticals"
                  className="btn-zariya-outline"
                >
                  <span>Explore the Register</span>
                  <span className="inline-block font-mono text-sm transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Architectural Cinematic Viewport with Coordinates & Registration Marks */}
          <div className="relative">
            <ParallaxBox distance={20}>
              <div className="relative border border-[#012745]/20 bg-[#012745] p-2 shadow-2xl shadow-[#012745]/15">
                {/* Architectural Corner Registration Marks */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2.5 -left-2.5 h-5 w-5 border-t-2 border-l-2 border-[#DA8F0E]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2.5 -right-2.5 h-5 w-5 border-t-2 border-r-2 border-[#DA8F0E]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-5 w-5 border-b-2 border-l-2 border-[#DA8F0E]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-5 w-5 border-b-2 border-r-2 border-[#DA8F0E]"
                />

                {/* Top Viewport Metadata Bar */}
                <div className="mb-2 flex items-center justify-between border-b border-white/10 px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#DA8F0E]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#DA8F0E] animate-pulse" />
                    <span>FEED // 01 · LIVE REGISTER</span>
                  </div>
                  <span className="text-[#E7E4DC]/60">22.5726° N, 88.3639° E · KOLKATA</span>
                </div>

                {/* Video Container (16:9) */}
                <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-[#012745]">
                  <HeroVideo />
                </div>

                {/* Bottom Viewport Coordinate & Scale Readout */}
                <div className="mt-2 flex items-center justify-between border-t border-white/10 px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#E7E4DC]/60">
                  <span>SCALE: FULL FRAME · AUDIO: MUTED</span>
                  <span>THE ZARIYA COLLECTIVE · 2026</span>
                </div>
              </div>
            </ParallaxBox>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
