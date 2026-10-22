
"use client";

import { useState } from "react";
import { SheetTag } from "@/components/shared/SheetTag";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

type Article = {
  title: string;
  category: "Aayaam" | "Academy";
  type: string;
  date: string;
  href: string;
  description: string;
};

const articles: Article[] = [
  {
    title: "Why small firms should adopt BIM, and how to get started",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/why-small-firms-should-adopt-bim/",
    description:
      "Five reasons small architecture firms should adopt BIM, and a five-step roadmap: pilot project, software, standards, cloud and scaling.",
  },
  {
    title: "The psychology of space: how VR and AR help architects test human-centred design",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/vr-ar-psychology-of-space/",
    description:
      "How VR and AR let architects test how people feel in a space before it is built: the psychology, the tools and illustrative scenarios.",
  },
  {
    title: "The levels of BIM, from Level 0 to Level 3, explained",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/bim-levels-0-to-3-explained/",
    description:
      "What BIM Level 0, 1, 2 and 3 mean, where most firms sit today, and where BIM is heading next: cloud, prefabrication, open data and digital twins.",
  },
  {
    title: "The architect and the technologist: why digital skills are now essential",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/architect-vs-technologist/",
    description:
      "Digital skills are now core to architecture: BIM, scripting, VR and data. Why the architect of the future is designer and technologist in one.",
  },
  {
    title: "Parametric vs algorithmic design: what is the difference, and why it matters",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/parametric-vs-algorithmic-design/",
    description:
      "Parametric design uses defined parameters. Algorithmic design generates form from code. The difference, the uses, and why the hybrid wins.",
  },
  {
    title: "ISO 19650 explained: the global standard behind BIM",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/iso-19650-explained/",
    description:
      "ISO 19650 is the international standard for managing information in BIM projects. What each part covers and how to implement it.",
  },
  {
    title: "How clash detection in BIM saves money on site",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/clash-detection-in-bim/",
    description:
      "Clash detection finds conflicts between structure, MEP and architecture before site. Three clash types, a verified 10x ROI case, and how to run it well.",
  },
  {
    title: "Facility management with BIM: how digital twins are changing operations",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/digital-twins-facility-management/",
    description:
      "How digital twins built on BIM move facility management from reactive to predictive: maintenance, energy, space, safety and assets, plus the real challenges.",
  },
  {
    title: "BIM for beginners: the first five steps to getting started",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/bim-for-beginners-first-five-steps/",
    description:
      "A practical five-step path into BIM: understand it, learn one platform, follow a plan, join the community and apply it to a real project.",
  },
  {
    title: "BIM 101: the principles every designer and engineer should know",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    href: "https://aayaam.thezariya.com/blog/bim-101-key-principles/",
    description:
      "BIM is a way of working, not software. Six principles every architect and engineer should know, from single source of truth to digital twins.",
  },
  {
    title: "Why Every Café Needs Signature Drinks (& How to Create One That Sells!)",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/signature-drinks-for-cafes/",
    description:
      "A signature drink gives a café identity, loyalty and margin. Five steps to design one that is distinctive, approachable and profitable.",
  },
  {
    title: "Why Every Barista Should Learn Cupping to Improve Brewing & Customer Experience",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/why-baristas-should-learn-cupping/",
    description:
      "Cupping builds a barista’s palate, sharpens brewing decisions and improves how you talk about coffee. Learn what cupping is and how to start.",
  },
  {
    title: "What Really Happens During the First Crack? The Science and Intuition Behind Coffee Roasting",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/first-crack-in-coffee-roasting/",
    description:
      "First crack is the moment green coffee becomes roasted coffee. Learn the science behind it and the senses a roaster uses to read it.",
  },
  {
    title: "Water Quality & Coffee: Why It’s More Important Than You Think",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/water-quality-for-coffee/",
    description:
      "Coffee is mostly water, and water shapes extraction. Learn which minerals help, why distilled water fails, and how to improve your brewing water.",
  },
  {
    title: "Understanding Balance & Complexity in Coffee: What Makes a ‘Perfect’ Cup?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/balance-and-complexity-in-coffee/",
    description:
      "What makes a perfect cup? Not one answer. An architect’s view of balance, complexity and the lifelong search for a better cup of coffee.",
  },
  {
    title: "The Science of Coffee Extraction: What Makes or Breaks Your Cup?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/coffee-extraction-explained/",
    description:
      "Extraction decides whether coffee tastes sour, bitter or balanced. Learn the five variables you control: grind, time, temperature, ratio and water.",
  },
  {
    title: "The Role of Cross-Sensory Training: How Wine, Chocolate & Whiskey Tasting Can Improve Your Coffee Palate",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/cross-sensory-training-for-coffee/",
    description:
      "Tasting wine, chocolate and whiskey can sharpen your coffee palate. Learn what each teaches you and how to build a simple sensory routine.",
  },
  {
    title: "The Role of Acidity in Coffee: Bright, Tangy, or Sour?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/acidity-in-coffee/",
    description:
      "Acidity is not sourness. Learn where coffee acidity comes from, how altitude, processing, roast and brewing change it, and how to tune it.",
  },
  {
    title: "The Roast Spectrum: Understanding Light, Medium & Dark Roasts",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/light-medium-dark-roast-guide/",
    description:
      "Light, medium or dark? Learn what each roast level tastes like, who it suits, and how to choose by coffee, brew method and taste.",
  },
  {
    title: "The Perfect Espresso Shot: A Story of What ACTUALLY Matters",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/perfect-espresso-shot/",
    description:
      "Numbers get you started. Feel finishes the shot. Learn what matters in espresso: grind and flow, tamping, pre-infusion, the stream and taste.",
  },
  {
    title: "The Importance of Freshly Roasted Coffee: A Beginner’s Guide",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/fresh-roasted-coffee-guide/",
    description:
      "Coffee is a fresh product. Learn why roast date matters, how long beans stay at their best, and how to store and buy coffee that tastes alive.",
  },
  {
    title: "The Espresso Martini: History, Variations & Modern Twists",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/espresso-martini-history-and-variations/",
    description:
      "The Espresso Martini was created in London in the 1980s. Learn its history, the classic recipe and six variations, from rum to nitro.",
  },
  {
    title: "How to Differentiate Your Café in a Saturated Market",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/how-to-differentiate-your-cafe/",
    description:
      "Most cafés fail because they are forgettable, not because they are bad. Four ideas for building a café that is hard to replace.",
  },
  {
    title: "How to Brew Better Coffee at Home: What Nobody Tells You",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/brew-better-coffee-at-home/",
    description:
      "Make café-quality coffee at home. Six practical fixes: fresh beans, the right water, a burr grinder, a scale, brew temperature and patience.",
  },
  {
    title: 'Caffeine & Alcohol: The Science Behind the "Wide Awake, Drunk" Effect',
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/caffeine-and-alcohol-wide-awake-drunk/",
    description:
      "Caffeine can hide how drunk you feel, but it does not make you sober. Learn what happens when caffeine and alcohol mix, and how to stay safe.",
  },
  {
    title: "Bitterness in Coffee: Is It Always a Bad Thing?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    href: "https://academy.thezariya.com/blog/bitterness-in-coffee/",
    description:
      "Bitterness is part of coffee, not always a flaw. Learn what causes it, how to tell good bitterness from bad, and how to tune it in your cup.",
  },
];

const filters = ["All", "Academy", "Aayaam", "Studio"] as const;
type Filter = (typeof filters)[number];

export function ReadSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((article) => article.category === activeFilter);

  return (
    <section
      id="read"
      aria-labelledby="read-heading"
      className="bg-[#E7E4DC] text-[#012745]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-14">
        <ScrollReveal direction="up" distance={28} duration={700}>
          <SheetTag sheet="ZC-01" revision="01" scale="NTS" />
        </ScrollReveal>

        <div className="grid gap-7 py-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <ScrollReveal direction="up" distance={36} duration={750}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14] sm:text-xs">
                The Zariya Collective · Reading Room
              </p>
              <h2
                id="read-heading"
                className="mt-5 font-anton text-[clamp(3rem,7vw,6.5rem)] uppercase leading-[0.95]"
              >
                Read<span className="text-[#BE2E14]">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={28} duration={750} delay={120}>
            <p className="max-w-2xl font-sans text-base leading-7 text-[#012745]/75 sm:text-lg sm:leading-8">
              Articles from across the Collective. Whitepapers, research, case
              studies, news, press and recommended reading will appear here as
              we publish them.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" distance={20} duration={600} delay={80}>
          <div className="flex flex-wrap items-center gap-2 border-y border-[#012745]/25 py-4">
            {filters.map((filter) => {
              const selected = activeFilter === filter;
              const count =
                filter === "All"
                  ? articles.length
                  : articles.filter((article) => article.category === filter)
                      .length;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-10 rounded-sm border px-4 font-mono text-[10px] uppercase tracking-wider transition-[color,background-color,border-color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] motion-reduce:transform-none ${
                    selected
                      ? "border-[#012745] bg-[#012745] text-[#E7E4DC]"
                      : "border-[#012745]/25 hover:border-[#BE2E14] hover:text-[#BE2E14]"
                  }`}
                >
                  {filter === "Studio"
                    ? "Studio · soon"
                    : `${filter} (${count})`}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {activeFilter === "Studio" ? (
          <ScrollReveal key="studio-empty" direction="up" distance={20}>
            <div className="border-b border-[#012745]/20 py-16">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#BE2E14]">
                Studio · Coming soon
              </p>
              <h3 className="mt-3 font-cinzel text-xl font-semibold">
                More from the Studio.
              </h3>
              <p className="mt-3 max-w-lg font-sans text-sm leading-7 text-[#012745]/70">
                Studio reading will appear here when it is published.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div aria-live="polite">
            {visibleArticles.map((article, index) => (
              <ScrollReveal
                key={article.href}
                direction="up"
                distance={18}
                duration={550}
                delay={Math.min(index % 5, 4) * 65}
              >
                <article className="group grid gap-4 border-b border-[#012745]/20 py-7 transition-colors duration-300 hover:bg-white/25 sm:py-8 lg:grid-cols-[72px_minmax(0,1fr)_minmax(240px,0.7fr)] lg:gap-8">
                  <p className="font-mono text-xs tracking-wider text-[#BE2E14]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#012745]/55">
                      {article.category} <span aria-hidden="true">·</span>{" "}
                      {article.type} <span aria-hidden="true">·</span>{" "}
                      {article.date}
                    </p>

                    <h3 className="mt-3 font-cinzel text-lg font-semibold leading-snug sm:text-xl">
                      <a
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-[#BE2E14] decoration-1 underline-offset-4 transition-[color,text-decoration] duration-200 group-hover:text-[#BE2E14] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E]"
                      >
                        {article.title}
                      </a>
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-4 lg:items-end">
                    <p className="max-w-xl font-sans text-sm leading-6 text-[#012745]/70 lg:text-right">
                      {article.description}
                    </p>
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${article.title} on the ${article.category} website`}
                      className="inline-flex min-h-10 items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#012745] transition-colors hover:text-[#BE2E14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E]"
                    >
                      Read article
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal direction="up" distance={16} duration={500}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-wider text-[#012745]/50">
            <span>
              {activeFilter === "Studio"
                ? "0 entries"
                : `${visibleArticles.length} entries`}
            </span>
            <span>The Zariya Collective · ZC-01</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
