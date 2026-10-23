import Link from "next/link";
import { SheetTag } from "@/components/shared/SheetTag";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

/* ========================================================================== */
/* Architectural Schematics (Vector Drawing Register Art)                     */
/* ========================================================================== */

function StudioArt() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Background blueprint grid */}
      <defs>
        <pattern id="studio-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E7E4DC" strokeOpacity="0.08" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill="url(#studio-grid)" />

      {/* Ground plane & Level datum lines */}
      <line x1="24" y1="170" x2="296" y2="170" stroke="#E7E4DC" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="24" y1="110" x2="296" y2="110" stroke="#DA8F0E" strokeOpacity="0.3" strokeDasharray="4 4" strokeWidth="0.75" />
      <line x1="24" y1="50" x2="296" y2="50" stroke="#E7E4DC" strokeOpacity="0.2" strokeDasharray="2 4" strokeWidth="0.5" />

      {/* Datum labels */}
      <text x="28" y="165" fill="#E7E4DC" fillOpacity="0.5" fontFamily="monospace" fontSize="8">LVL 00 · +0.00M</text>
      <text x="28" y="105" fill="#DA8F0E" fillOpacity="0.8" fontFamily="monospace" fontSize="8">LVL 01 · +3.60M</text>
      <text x="28" y="45" fill="#E7E4DC" fillOpacity="0.5" fontFamily="monospace" fontSize="8">ROOF · +7.20M</text>

      {/* Axonometric BIM structural frame */}
      {/* Structural columns */}
      <line x1="90" y1="170" x2="90" y2="50" stroke="#E7E4DC" strokeWidth="1.5" />
      <line x1="160" y1="170" x2="160" y2="50" stroke="#E7E4DC" strokeWidth="1.5" />
      <line x1="230" y1="170" x2="230" y2="50" stroke="#E7E4DC" strokeWidth="1.5" />

      {/* Floor slabs & Beams */}
      <polygon points="90,110 160,95 230,110 160,125" fill="#012745" stroke="#DA8F0E" strokeWidth="1.2" />
      <polygon points="90,50 160,35 230,50 160,65" fill="#012745" stroke="#E7E4DC" strokeWidth="1.2" />

      {/* MEP Conduit / Clash Detection Highlight in Red */}
      <path d="M 70 80 Q 130 85 160 95 T 250 100" fill="none" stroke="#BE2E14" strokeWidth="1.8" strokeDasharray="3 3" />
      <circle cx="160" cy="95" r="4.5" fill="#BE2E14" stroke="#FFFFFF" strokeWidth="1" />
      <text x="170" y="92" fill="#BE2E14" fontFamily="monospace" fontSize="7.5" fontWeight="bold">CLASH DETECTED</text>

      {/* VR Spatial View Frustum */}
      <path d="M 230 170 L 280 130 L 295 155 Z" fill="#DA8F0E" fillOpacity="0.15" stroke="#DA8F0E" strokeWidth="0.75" />
      <circle cx="230" cy="170" r="3" fill="#DA8F0E" />
      <text x="240" y="180" fill="#DA8F0E" fontFamily="monospace" fontSize="7">VR FIELD 92°</text>

      {/* Coordinate & Model Status */}
      <text x="210" y="32" fill="#E7E4DC" fillOpacity="0.6" fontFamily="monospace" fontSize="7.5">BIM MODEL: L350</text>
    </svg>
  );
}

function AcademyArt() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <defs>
        <pattern id="academy-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E7E4DC" strokeOpacity="0.08" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill="url(#academy-grid)" />

      {/* Extraction yield curve & axes */}
      <line x1="40" y1="165" x2="280" y2="165" stroke="#E7E4DC" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="40" y1="165" x2="40" y2="30" stroke="#E7E4DC" strokeOpacity="0.3" strokeWidth="1" />
      <text x="45" y="40" fill="#E7E4DC" fillOpacity="0.6" fontFamily="monospace" fontSize="8">PRESSURE (9 BAR)</text>
      <text x="220" y="160" fill="#E7E4DC" fillOpacity="0.6" fontFamily="monospace" fontSize="8">TIME (28S)</text>

      {/* Ideal extraction sweet spot zone */}
      <rect x="130" y="55" width="85" height="85" fill="#DA8F0E" fillOpacity="0.1" stroke="#DA8F0E" strokeWidth="0.75" strokeDasharray="3 3" />
      <text x="135" y="70" fill="#DA8F0E" fontFamily="monospace" fontSize="7.5" fontWeight="bold">GOLDEN CUP · 19-21%</text>

      {/* Dynamic Extraction Curve */}
      <path
        d="M 40 165 C 80 155, 110 80, 160 75 C 210 70, 240 100, 280 120"
        fill="none"
        stroke="#BE2E14"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Espresso portafilter basket cross-section */}
      <path d="M 190 120 L 210 120 L 205 145 L 195 145 Z" fill="#012745" stroke="#E7E4DC" strokeWidth="1.2" />
      <line x1="193" y1="145" x2="207" y2="145" stroke="#DA8F0E" strokeWidth="1" />
      {/* Stream */}
      <line x1="200" y1="145" x2="200" y2="160" stroke="#DA8F0E" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Dial-in Variables Callout */}
      <circle cx="160" cy="75" r="4.5" fill="#BE2E14" stroke="#FFFFFF" strokeWidth="1" />
      <text x="140" y="98" fill="#E7E4DC" fontFamily="monospace" fontSize="7.5">18.5G IN / 37G OUT</text>
      <text x="50" y="125" fill="#BE2E14" fillOpacity="0.8" fontFamily="monospace" fontSize="7">UNDER-EXTRACTED</text>
      <text x="220" y="135" fill="#DA8F0E" fillOpacity="0.8" fontFamily="monospace" fontSize="7">OVER-EXTRACTED</text>
    </svg>
  );
}

function AayaamArt() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <defs>
        <pattern id="aayaam-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E7E4DC" strokeOpacity="0.08" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill="url(#aayaam-grid)" />

      {/* Parametric Dimension Grid & Coordinate Nodes */}
      {/* Outer bounding box */}
      <rect x="50" y="45" width="220" height="110" fill="none" stroke="#DA8F0E" strokeWidth="1.2" />

      {/* Subdivisions */}
      <line x1="120" y1="45" x2="120" y2="155" stroke="#E7E4DC" strokeOpacity="0.3" strokeDasharray="3 3" />
      <line x1="190" y1="45" x2="190" y2="155" stroke="#E7E4DC" strokeOpacity="0.3" strokeDasharray="3 3" />
      <line x1="50" y1="100" x2="270" y2="100" stroke="#E7E4DC" strokeOpacity="0.3" strokeDasharray="3 3" />

      {/* Dimension arrow indicators */}
      <line x1="50" y1="30" x2="270" y2="30" stroke="#DA8F0E" strokeWidth="1" />
      <line x1="50" y1="26" x2="50" y2="34" stroke="#DA8F0E" strokeWidth="1" />
      <line x1="270" y1="26" x2="270" y2="34" stroke="#DA8F0E" strokeWidth="1" />
      <text x="135" y="24" fill="#DA8F0E" fontFamily="monospace" fontSize="8" fontWeight="bold">DIM X = 2400 MM</text>

      {/* Vertical dimension */}
      <line x1="285" y1="45" x2="285" y2="155" stroke="#DA8F0E" strokeWidth="1" />
      <line x1="281" y1="45" x2="289" y2="45" stroke="#DA8F0E" strokeWidth="1" />
      <line x1="281" y1="155" x2="289" y2="155" stroke="#DA8F0E" strokeWidth="1" />
      <text x="290" y="105" fill="#DA8F0E" fontFamily="monospace" fontSize="7" transform="rotate(90, 290, 105)">DIM Y = 1200</text>

      {/* Parametric Nodes */}
      <circle cx="50" cy="45" r="3" fill="#BE2E14" />
      <circle cx="270" cy="45" r="3" fill="#BE2E14" />
      <circle cx="50" cy="155" r="3" fill="#BE2E14" />
      <circle cx="270" cy="155" r="3" fill="#BE2E14" />
      <circle cx="160" cy="100" r="4.5" fill="#DA8F0E" stroke="#012745" strokeWidth="1.5" />

      {/* IFC & Standard AS 1:2026 tags */}
      <rect x="60" y="55" width="85" height="32" fill="#012745" stroke="#E7E4DC" strokeOpacity="0.4" strokeWidth="0.8" />
      <text x="66" y="68" fill="#DA8F0E" fontFamily="monospace" fontSize="7" fontWeight="bold">IFC4_DOOR_PARAMETRIC</text>
      <text x="66" y="79" fill="#E7E4DC" fillOpacity="0.8" fontFamily="monospace" fontSize="6.5">STANDARD: AS 1:2026</text>

      <text x="145" y="178" fill="#E7E4DC" fillOpacity="0.6" fontFamily="monospace" fontSize="8">INDIAN MARKET OBJECT REPOSITORY</text>
    </svg>
  );
}

/* ========================================================================== */
/* Main Venture Highlights Deep-Dive                                          */
/* ========================================================================== */

const ventureDeepDives = [
  {
    number: "01",
    series: "Series DS",
    sheet: "DS-01",
    name: "Zariya Design Studio",
    tagline: "Your building, built twice. Once on screen. Once on site.",
    description:
      "Architecture and design delivered with BIM and immersive VR. Full clash detection, precision coordination, and digital twins that eliminate costly surprises before construction begins.",
    Art: StudioArt,
    accent: "#012745",
    accentColor: "#DA8F0E",
    url: "https://studio.thezariya.com/",
    displayUrl: "studio.thezariya.com",
    ctaText: "Visit Design Studio",
    isExternal: true,
  },
  {
    number: "02",
    series: "Series TBM · BL",
    sheet: "TBM-01",
    name: "The Zariya Academy",
    tagline: "Coffee, taught like a design problem: one variable at a time.",
    description:
      "Kolkata's dedicated specialty coffee training facility. The Barista Method (2 weeks + 10 one-on-one hours, ₹20,000, ZEBC certificate) and Brew Lab standalone workshops (from ₹299).",
    Art: AcademyArt,
    accent: "#BE2E14",
    accentColor: "#BE2E14",
    url: "/academy",
    externalUrl: "https://academy.thezariya.com/",
    displayUrl: "academy.thezariya.com",
    ctaText: "Explore Academy & Apply",
    isExternal: false,
  },
  {
    number: "03",
    series: "Series AY",
    sheet: "AY-01",
    name: "Aayaam",
    tagline: "A BIM standard and object library for the Indian market.",
    description:
      "Parametric BIM components and the AS 1:2026 open standards framework. Built specifically for Indian architectural practices, structural workflows, and regional manufacturer specs.",
    Art: AayaamArt,
    accent: "#DA8F0E",
    accentColor: "#DA8F0E",
    url: "https://aayaam.thezariya.com/",
    displayUrl: "aayaam.thezariya.com",
    ctaText: "Explore Aayaam",
    isExternal: true,
  },
] as const;

export function Highlights() {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="bg-[#E7E4DC] text-[#012745] border-t border-[#012745]/15"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <ScrollReveal direction="up" distance={20} duration={650}>
          <SheetTag
            sheet="ZC-HL"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            title="Ventures Technical Deep-Dive"
          />
        </ScrollReveal>

        {/* Section Header */}
        <div className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
          <ScrollReveal direction="up" distance={28} duration={700}>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BE2E14]">
                The Zariya Collective · Technical Disciplines
              </p>
              <h2
                id="highlights-heading"
                className="mt-4 font-anton text-[clamp(2.8rem,5.5vw,5.5rem)] uppercase leading-[0.96] tracking-tight text-[#012745]"
              >
                Three ventures.
                <span className="block text-[#BE2E14]">One architectural standard.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={700} delay={120}>
            <div className="max-w-xl lg:justify-self-end">
              <p className="font-sans text-base leading-relaxed text-[#012745]/85 sm:text-lg sm:leading-8">
                Every venture operates as an autonomous discipline while sharing
                the same technical rigor, whether drafting complex structural
                elevations, calibrating espresso extraction, or authoring national BIM objects.
              </p>
              <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#012745]/60">
                <span className="h-px w-8 bg-[#DA8F0E]" />
                <span>Nazirabad, Kolkata · Operating Across All Series</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Three Venture Deep-Dive Cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
          {ventureDeepDives.map((venture, index) => (
            <ScrollReveal
              key={venture.number}
              direction="up"
              distance={28}
              delay={index * 120}
              duration={750}
              className="h-full"
            >
              <article className="group flex h-full flex-col border border-[#012745]/20 bg-[#F4F1EB] transition-all duration-300 hover:border-[#012745] hover:shadow-xl hover:shadow-[#012745]/10">
                {/* Schematic Vector Drawing Frame */}
                <div className="relative aspect-[16/10] w-full border-b border-[#012745]/20 bg-[#012745] p-3 overflow-hidden">
                  {/* Technical Sheet Tag inside frame */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-[#DA8F0E]">
                    <span>{venture.sheet}</span>
                    <span className="text-white/40">·</span>
                    <span>{venture.series}</span>
                  </div>

                  <div className="absolute top-3 right-3 z-10 font-mono text-[9px] uppercase tracking-wider text-[#E7E4DC]/60">
                    FIG {venture.number}
                  </div>

                  {/* SVG Schematic Art */}
                  <div className="h-full w-full pt-4">
                    <venture.Art />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#BE2E14]">
                    <span>{venture.number}</span>
                    <span className="text-[#012745]/30">/</span>
                    <span>{venture.series}</span>
                  </div>

                  <h3 className="mt-3 font-cinzel text-xl font-bold text-[#012745] sm:text-2xl">
                    {venture.name}
                  </h3>

                  <p className="mt-2 font-cinzel text-xs font-semibold text-[#BE2E14]">
                    {venture.tagline}
                  </p>

                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#012745]/80">
                    {venture.description}
                  </p>

                  {/* Action Link Footer */}
                  <div className="mt-auto pt-6 border-t border-[#012745]/15 flex flex-wrap items-center justify-between gap-3">
                    {venture.isExternal ? (
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-zariya-outline min-h-[40px] px-4 py-2 text-[10px] tracking-[0.14em]"
                      >
                        <span>{venture.ctaText}</span>
                        <span className="font-mono text-xs">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={venture.url}
                        className="btn-zariya-primary min-h-[40px] px-4 py-2 text-[10px] tracking-[0.14em]"
                      >
                        <span>{venture.ctaText}</span>
                        <span className="font-mono text-xs">→</span>
                      </Link>
                    )}

                    <span className="font-mono text-[10px] text-[#012745]/50">
                      {venture.displayUrl}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
