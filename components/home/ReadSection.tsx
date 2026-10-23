"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { SheetTag } from "@/components/shared/SheetTag";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { articles, type Article } from "@/config/articles";

const filterTabs = ["All", "Academy", "Aayaam", "Studio"] as const;
type FilterTab = (typeof filterTabs)[number];

export function ReadSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const filteredArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  const featuredArticle = filteredArticles[0];
  const listArticles = filteredArticles.slice(1);

  const counts = {
    All: articles.length,
    Academy: articles.filter((a) => a.category === "Academy").length,
    Aayaam: articles.filter((a) => a.category === "Aayaam").length,
    Studio: articles.filter((a) => a.category === "Studio").length,
  };

  return (
    <section
      id="read"
      aria-labelledby="read-heading"
      className="bg-[#E7E4DC] text-[#012745] border-t border-[#012745]/15"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <ScrollReveal direction="up" distance={20} duration={650}>
          <SheetTag
            sheet="ZC-01"
            revision="01"
            scale="NTS"
            date="16 OCT 2026"
            title="The Reading Room Register"
          />
        </ScrollReveal>

        {/* Section Header */}
        <div className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
          <ScrollReveal direction="up" distance={28} duration={700}>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BE2E14]">
                The Zariya Collective · Reading Room
              </p>
              <h2
                id="read-heading"
                className="mt-4 font-anton text-[clamp(2.8rem,6vw,5.75rem)] uppercase leading-[0.96] tracking-tight text-[#012745]"
              >
                Read<span className="text-[#BE2E14]">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} duration={700} delay={120}>
            <div className="max-w-xl lg:justify-self-end">
              <p className="font-sans text-base leading-relaxed text-[#012745]/85 sm:text-lg sm:leading-8">
                Technical briefings, architectural research, BIM whitepapers, and
                coffee science guides from across Zariya Design Studio, The Zariya
                Academy, and Aayaam.
              </p>
              <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#012745]/60">
                <span className="h-px w-8 bg-[#DA8F0E]" />
                <span>27 Sheets Available · Internal Architectural Briefings</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5 border-b border-[#012745]/20 pb-4">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#012745]/50">
            Category:
          </span>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={isActive ? "btn-zariya-tab-active" : "btn-zariya-tab-inactive"}
              >
                {tab} ({counts[tab]})
              </button>
            );
          })}
        </div>

        {/* Featured Article Card */}
        {featuredArticle && (
          <ScrollReveal direction="up" distance={24} duration={700}>
            <div className="mb-12 border-2 border-[#012745] bg-[#F4F1EB] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#012745]/15 pb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#BE2E14]">
                <div className="flex items-center gap-3">
                  <span className="font-bold">FEATURED REGISTER SHEET</span>
                  <span className="text-[#012745]/30">|</span>
                  <span>{featuredArticle.sheet}</span>
                  <span className="text-[#012745]/30">|</span>
                  <span>{featuredArticle.category}</span>
                </div>
                <div className="text-[#012745]/60">
                  <span>{featuredArticle.date}</span>
                  <span className="mx-2">·</span>
                  <span>{featuredArticle.readingTime}</span>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold leading-snug text-[#012745] sm:text-3xl lg:text-4xl">
                    <Link
                      href={`/read/${featuredArticle.slug}`}
                      className="hover:text-[#BE2E14] transition-colors"
                    >
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p className="mt-4 font-sans text-base leading-relaxed text-[#012745]/80 sm:text-lg">
                    {featuredArticle.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/read/${featuredArticle.slug}`}
                      className="btn-zariya-primary min-h-[44px] px-6 py-2.5 text-xs"
                    >
                      <span>Read Briefing Sheet</span>
                      <span className="font-mono text-sm">→</span>
                    </Link>

                    <a
                      href={featuredArticle.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-zariya-outline min-h-[44px] px-5 py-2.5 text-xs"
                    >
                      <span>Original publication</span>
                      <span className="font-mono text-xs">↗</span>
                    </a>
                  </div>
                </div>

                <div className="border border-[#012745]/15 bg-white/60 p-5 sm:p-6 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#BE2E14]">
                    Key Briefing Metrics
                  </p>
                  <ul className="mt-3 flex flex-col gap-2 font-sans text-xs leading-relaxed text-[#012745]/80">
                    {featuredArticle.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-mono text-[#DA8F0E]">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Remaining Articles Table */}
        <div className="border-t-2 border-[#012745]">
          {/* Table Header (Desktop) */}
          <div className="hidden grid-cols-[0.7fr_0.9fr_1fr_2.4fr_auto] items-center gap-4 border-b border-[#012745]/30 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#012745]/60 md:grid">
            <span>Sheet</span>
            <span>Category</span>
            <span>Date</span>
            <span>Title & Summary</span>
            <span className="text-right">Action</span>
          </div>

          {/* Table Rows */}
          <motion.div layout className="divide-y divide-[#012745]/15">
            <AnimatePresence>
              {listArticles.map((article: Article) => (
                <motion.article
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-3 py-5 sm:py-6 md:grid-cols-[0.7fr_0.9fr_1fr_2.4fr_auto] md:items-center md:gap-4 transition-colors hover:bg-white/40 px-2"
                >
                  {/* Sheet Index */}
                  <span className="font-mono text-xs font-semibold text-[#BE2E14]">
                    {article.sheet}
                  </span>

                  {/* Category Badge */}
                  <div>
                    <span
                      className={`inline-block border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        article.category === "Studio"
                          ? "border-[#012745] text-[#012745]"
                          : article.category === "Academy"
                          ? "border-[#BE2E14] text-[#BE2E14]"
                          : "border-[#DA8F0E] text-[#012745]"
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Date & Reading time */}
                  <div className="font-mono text-[11px] text-[#012745]/60">
                    <span>{article.date}</span>
                    <span className="block text-[10px] text-[#012745]/40">
                      {article.readingTime}
                    </span>
                  </div>

                  {/* Title & One-line Summary */}
                  <div>
                    <h4 className="font-cinzel text-base font-bold text-[#012745] hover:text-[#BE2E14] transition-colors">
                      <Link href={`/read/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h4>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-[#012745]/70 line-clamp-2">
                      {article.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link
                      href={`/read/${article.slug}`}
                      className="btn-zariya-outline min-h-[36px] px-4 py-1.5 text-[10px] tracking-[0.14em]"
                    >
                      <span>Read</span>
                      <span className="font-mono text-xs">→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ReadSection;
