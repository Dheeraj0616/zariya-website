"use client";

import Image from "next/image";
import { useState } from "react";
import {
  hero,
  modules,
  roof,
  whatsappQuickUrl,
} from "@/config/academy-content";
import { SheetTag } from "@/components/shared/SheetTag";

function CourseSectionDrawing() {
  const [activeFloor, setActiveFloor] = useState<string | null>(null);

  const handleFloorClick = (moduleId: string) => {
    setActiveFloor(moduleId);

    window.dispatchEvent(
      new CustomEvent("academy:open-module", {
        detail: { moduleId },
      }),
    );

    const curriculum = document.getElementById("curriculum");

    if (curriculum) {
      window.history.replaceState(null, "", `/academy#module-${moduleId}`);

      curriculum.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[34rem] text-[#012745]">
      {/* Blueprint corner registration marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 -top-2 font-mono text-sm font-bold text-[#DA8F0E] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-2 font-mono text-sm font-bold text-[#DA8F0E] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -left-2 font-mono text-sm font-bold text-[#DA8F0E] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-2 font-mono text-sm font-bold text-[#DA8F0E] select-none"
      >
        +
      </span>

      <div className="relative border border-[#012745]/40 bg-[#E7E4DC] p-4 shadow-2xl shadow-black/35 sm:p-6">
        {/* Drawing header */}
        <div className="flex items-start justify-between gap-3 border-b border-[#012745]/30 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14]">
              The Zariya Academy
            </p>
            <h2 className="mt-1 font-cinzel text-xl font-semibold sm:text-2xl">
              The Barista Method.
            </h2>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#012745]/65">
              Section A–A · Course elevation
            </p>
          </div>

          <div className="shrink-0 border border-[#012745]/50 bg-[#012745] px-2.5 py-1 text-center text-[#E7E4DC]">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-[#DA8F0E]">
              Drawing
            </span>
            <span className="font-mono text-xs font-bold text-[#E7E4DC]">TBM-01</span>
          </div>
        </div>

        {/* Interactive floor elevation */}
        <div className="py-4 sm:py-5">
          <div className="mb-3 flex items-center justify-between border-b border-[#012745]/25 pb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#BE2E14]">
              Select a floor
            </span>
            <span className="font-mono text-[10px] text-[#012745]/60">
              5 modules + certificate
            </span>
          </div>

          <div className="space-y-2">
            {modules.map((floor) => {
              const isActive = activeFloor === floor.id;

              return (
                <button
                  key={floor.id}
                  type="button"
                  aria-label={`Open ${floor.name}, level ${floor.level}`}
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveFloor(floor.id)}
                  onMouseLeave={() => setActiveFloor(null)}
                  onFocus={() => setActiveFloor(floor.id)}
                  onBlur={() => setActiveFloor(null)}
                  onClick={() => handleFloorClick(floor.id)}
                  className={`group grid w-full grid-cols-[76px_minmax(0,1fr)] gap-2 text-left transition-all duration-200 motion-reduce:transition-none sm:grid-cols-[90px_minmax(0,1fr)] ${
                    isActive
                      ? "border border-[#BE2E14] bg-[#BE2E14]/[0.08] shadow-sm"
                      : "border border-[#012745]/30 hover:border-[#BE2E14]/80 hover:bg-white/40"
                  }`}
                >
                  <span
                    className={`flex flex-col items-center justify-center border-r px-2 py-3 transition-colors ${
                      isActive
                        ? "border-[#BE2E14]/60 bg-[#BE2E14]/15"
                        : "border-[#012745]/25 bg-[#012745]/[0.04] group-hover:bg-[#012745]/[0.08]"
                    }`}
                  >
                    <span className="font-mono text-sm font-bold text-[#012745]">
                      {floor.id}
                    </span>
                    <span className="mt-1 font-mono text-[10px] text-[#012745]/70">
                      {floor.level}
                    </span>
                  </span>

                  <span className="flex min-w-0 flex-col justify-center py-2.5 pr-3">
                    <span className="font-cinzel text-sm font-semibold leading-snug text-[#012745] sm:text-base">
                      {floor.name}
                    </span>
                    <span className="mt-1 font-mono text-[10px] leading-relaxed text-[#012745]/75 sm:text-xs">
                      {floor.summary}
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Certificate roof */}
            <div className="grid grid-cols-[76px_minmax(0,1fr)] gap-2 border border-[#DA8F0E] bg-[#DA8F0E]/15 sm:grid-cols-[90px_minmax(0,1fr)]">
              <div className="flex flex-col items-center justify-center border-r border-[#DA8F0E]/70 bg-[#DA8F0E]/20 px-2 py-3">
                <span className="font-mono text-xs font-bold text-[#012745]">{roof.id}</span>
                <span className="mt-1 font-mono text-[10px] text-[#012745]/75">
                  {roof.level}
                </span>
              </div>
              <div className="flex flex-col justify-center py-2.5 pr-3">
                <p className="font-cinzel text-sm font-semibold text-[#012745] sm:text-base">
                  {roof.name}
                </p>
                <p className="mt-1 font-mono text-[10px] leading-relaxed text-[#012745]/75 sm:text-xs">
                  {roof.summary}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-3 font-mono text-[10px] leading-relaxed text-[#012745]/65">
            Select any module to explore its curriculum.
          </p>
        </div>

        {/* Technical drawing title block */}
        <div className="grid grid-cols-2 border border-[#012745]/35 bg-[#012745]/[0.03] sm:grid-cols-4">
          {[
            ["DRAWING", "Course elevation"],
            ["SCALE", "NTS"],
            ["SHEET", "TBM-01"],
            ["REVISION", "01"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-b border-r border-[#012745]/25 p-2 last:border-r-0 even:border-r-0 sm:border-b-0 sm:even:border-r"
            >
              <p className="font-mono text-[9px] uppercase tracking-wider text-[#012745]/60">
                {label}
              </p>
              <p className="mt-1 font-mono text-[10px] font-semibold text-[#012745] sm:text-xs">
                {value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-3 font-mono text-[10px] leading-relaxed text-[#012745]/65">
          GENERAL NOTE: DO NOT SCALE FROM THIS DRAWING. TASTE.
        </p>
      </div>
    </div>
  );
}

export function AcademyHero() {
  const scrollToCurriculum = () => {
    const section = document.getElementById("curriculum");

    if (!section) return;

    window.history.replaceState(null, "", "/academy#curriculum");

    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      aria-labelledby="academy-hero-heading"
      className="relative isolate w-full overflow-hidden bg-[#012745] text-[#E7E4DC]"
    >
      {/* Background photography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src="/assets/academy/hero-barista.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Photography overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#012745]/85"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#012745]/40 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Top Sheet Tag */}
        <SheetTag
          sheet="TBM-01"
          revision="01"
          scale="NTS"
          date="16 OCT 2026"
          title="Course Elevation & Section A–A"
          theme="dark"
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Introduction — staggered entrance */}
          <div className="min-w-0 max-w-2xl">
            <p className="hero-reveal hero-reveal-1 mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#DA8F0E] sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-[#DA8F0E]" />
              {hero.eyebrow}
            </p>

            <h1
              id="academy-hero-heading"
              className="hero-reveal hero-reveal-2 font-anton text-5xl font-normal uppercase leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              The
              <span className="mt-2 block">Barista</span>
              <span className="mt-2 block text-[#DA8F0E]">Method.</span>
            </h1>

            <p className="hero-reveal hero-reveal-3 mt-6 max-w-xl font-cinzel text-lg leading-relaxed text-[#E7E4DC] sm:text-xl sm:leading-relaxed">
              {hero.promise}
            </p>

            <p className="hero-reveal hero-reveal-3 mt-4 max-w-xl text-sm leading-6 text-[#E7E4DC]/80 sm:text-base sm:leading-7">
              {hero.summary}
            </p>

            <div className="hero-reveal hero-reveal-4 mt-8 border-y border-[#E7E4DC]/25 py-3.5">
              <p className="font-mono text-[11px] leading-relaxed tracking-wide text-[#E7E4DC]">
                {hero.factsLine}
              </p>
            </div>

            {/* Actions */}
            <div className="hero-reveal hero-reveal-4 mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappQuickUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-zariya-primary"
              >
                {hero.primaryCta}
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>

              <button
                type="button"
                onClick={scrollToCurriculum}
                className="btn-zariya-outline-dark"
              >
                {hero.secondaryCta}
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </button>
            </div>

            <p className="hero-reveal hero-reveal-4 mt-6 font-mono text-[10px] uppercase tracking-wider text-[#E7E4DC]/65">
              Classes teach the why. Practice trains your hands.
            </p>
          </div>

          {/* Architectural drawing entrance */}
          <div className="hero-logo-reveal w-full min-w-0 lg:pt-2">
            <CourseSectionDrawing />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-[#E7E4DC]"
      />
    </section>
  );
}
