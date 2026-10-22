"use client";

import { useEffect, useState } from "react";
import { modules } from "@/config/academy-content";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const moduleIds: readonly string[] = modules.map((item) => item.id);

function isModuleId(value: unknown): value is string {
  return typeof value === "string" && moduleIds.includes(value);
}

/** Reads "#module-M3" from a hash and returns "M3", or null. */
function moduleIdFromHash(hash: string) {
  const match = hash.match(/^#module-(M[1-5])$/);

  return match && isModuleId(match[1]) ? match[1] : null;
}

export function AcademyCurriculum() {
  const [openModule, setOpenModule] = useState<string | null>(null);

  useEffect(() => {
    // State is only set inside callbacks, never synchronously in the effect body.
    const openFromHash = () => {
      const id = moduleIdFromHash(window.location.hash);

      if (id) setOpenModule(id);
    };

    // Lets the hero sheet open a module:
    // window.dispatchEvent(new CustomEvent("academy:open-module", { detail: { moduleId: "M3" } }))
    const handleOpenModule = (event: Event) => {
      const moduleId = (event as CustomEvent<{ moduleId?: string }>).detail
        ?.moduleId;

      if (isModuleId(moduleId)) setOpenModule(moduleId);
    };

    // Direct links such as /academy#module-M3, once the page has hydrated.
    const frame = window.requestAnimationFrame(openFromHash);

    window.addEventListener("hashchange", openFromHash);
    window.addEventListener("academy:open-module", handleOpenModule);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener("academy:open-module", handleOpenModule);
    };
  }, []);

  const toggleModule = (moduleId: string) => {
    const willOpen = openModule !== moduleId;
    const base = window.location.pathname;

    setOpenModule(willOpen ? moduleId : null);

    window.history.replaceState(
      null,
      "",
      willOpen ? `${base}#module-${moduleId}` : `${base}#curriculum`,
    );
  };

  return (
    <section
      id="curriculum"
      aria-labelledby="academy-curriculum-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
        {/* Technical sheet header */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="grid grid-cols-2 border-y border-[#012745]/30 font-mono text-[11px] uppercase tracking-[0.12em] text-[#012745]/70 sm:grid-cols-4">
            {[
              ["Drawing", "Course curriculum"],
              ["Scale", "NTS"],
              ["Sheet", "TBM-03"],
              ["Revision", "01"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-r border-[#012745]/20 px-3 py-3 even:border-r-0 sm:border-b-0 sm:even:border-r"
              >
                <span className="block text-[#BE2E14]">{label}</span>
                <span className="mt-1 block">{value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-10 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-14">
          {/* Introduction */}
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal direction="up" distance={28} duration={750}>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BE2E14] sm:text-xs">
                Section A–A · Five modules
              </p>

              <h2
                id="academy-curriculum-heading"
                className="mt-5 max-w-lg font-anton text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.98] tracking-wide"
              >
                Learn it.
                <span className="mt-2 block text-[#BE2E14]">Then do it.</span>
              </h2>

              <p className="mt-5 max-w-lg font-sans text-base leading-7 text-[#012745]/75 sm:text-lg sm:leading-8">
                Five modules take you from coffee fundamentals to practical
                barista skills. Open any module to explore its topics.
              </p>

              <div className="mt-7 border-t border-[#012745]/20 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#BE2E14]">
                  Drawing reference
                </p>
                <p className="mt-2 max-w-sm font-sans text-sm leading-6 text-[#012745]/70">
                  Each module corresponds to a floor in the TBM-01 course
                  elevation.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Expandable module register */}
          <ol className="border-t border-[#012745]/30">
            {modules.map((item, index) => {
              const isOpen = openModule === item.id;
              const panelId = `curriculum-module-${item.id}`;
              const buttonId = `curriculum-button-${item.id}`;

              return (
                <li
                  key={item.id}
                  id={`module-${item.id}`}
                  className={`scroll-mt-24 border-b transition-colors duration-200 motion-reduce:transition-none ${
                    isOpen
                      ? "border-[#BE2E14]/60 bg-white/25"
                      : "border-[#012745]/25 hover:bg-white/20"
                  }`}
                >
                  <ScrollReveal
                    direction="up"
                    distance={18}
                    delay={(index % 4) * 65}
                    duration={600}
                  >
                    <div className="grid gap-3 py-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6 sm:py-7">
                      {/* Module identifier and elevation */}
                      <div className="flex items-center justify-between sm:block sm:pt-1">
                        <span className="font-mono text-sm font-bold tracking-wider text-[#BE2E14]">
                          {item.id}
                        </span>

                        <span className="font-mono text-[11px] text-[#012745]/60 sm:mt-3 sm:block">
                          LEVEL {item.level}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggleModule(item.id)}
                          className="flex min-h-12 w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE2E14] focus-visible:ring-offset-4 focus-visible:ring-offset-[#E7E4DC]"
                        >
                          <span className="font-cinzel text-lg font-semibold leading-snug text-[#012745] sm:text-xl lg:text-2xl">
                            {item.name}
                          </span>

                          <span
                            aria-hidden="true"
                            className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
                              isOpen
                                ? "border-[#BE2E14] bg-[#BE2E14] text-[#E7E4DC]"
                                : "border-[#012745]/25 text-[#012745] hover:border-[#BE2E14]"
                            }`}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                                isOpen ? "rotate-180" : ""
                              }`}
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

                        <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-[#012745]/75 sm:text-base sm:leading-8">
                          {item.summary}
                        </p>

                        <div
                          aria-hidden="true"
                          className={`mt-4 h-px transition-all duration-200 motion-reduce:transition-none ${
                            isOpen
                              ? "w-20 bg-[#BE2E14]"
                              : "w-12 bg-[#DA8F0E]"
                          }`}
                        />

                        {/*
                          Expandable topic list.
                          `invisible` removes the closed panel from the tab order
                          and the accessibility tree, so no `inert` prop is needed.
                          Visibility is part of the transition so it only flips
                          after the close animation has finished.
                        */}
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={`grid transition-[grid-template-rows,opacity,margin,visibility] duration-200 ease-out motion-reduce:transition-none ${
                            isOpen
                              ? "visible mt-5 grid-rows-[1fr] opacity-100"
                              : "invisible mt-0 grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <div className="border-l-2 border-[#DA8F0E] pl-4 sm:pl-5">
                              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#BE2E14]">
                                Topics covered
                              </h3>

                              <ul className="mt-3 space-y-3">
                                {item.topics.map((topic) => (
                                  <li
                                    key={topic}
                                    className="flex items-start gap-3 font-sans text-sm leading-6 text-[#012745]/80 sm:text-base"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#DA8F0E]"
                                    />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Sheet footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#012745]/30 pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#012745]/60">
          <span>The Barista Method</span>
          <span>Section A–A</span>
          <span>TBM-03 · Revision 01</span>
        </div>
      </div>
    </section>
  );
}