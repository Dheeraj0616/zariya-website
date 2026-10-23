import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SheetTag } from "@/components/shared/SheetTag";
import { ReadingProgress } from "@/components/animation/ReadingProgress";
import { articles, getArticleBySlug } from "@/config/articles";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Sheet Not Found | The Zariya Collective",
    };
  }

  const url = `${siteConfig.url}/read/${article.slug}`;

  return {
    title: `${article.title} | The Zariya Collective`,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.isoDate,
      authors: [siteConfig.founder.name],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ReadArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Find 3 related articles from the same category or overall collection
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) return -1;
      if (b.category === article.category && a.category !== article.category) return 1;
      return 0;
    })
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.isoDate,
    author: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/assets/brand/zariya-logo.png`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/read/${article.slug}`,
    },
  };

  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="min-h-screen bg-[#E7E4DC] text-[#012745]">
        {/* Top Breadcrumb & Sheet Identification Bar */}
        <div className="border-b border-[#012745]/15 bg-white/40 px-5 py-4 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
            <Link
              href="/#read"
              className="inline-flex items-center gap-2 text-[#012745]/70 hover:text-[#BE2E14] transition-colors"
            >
              <span>←</span>
              <span>Back to Reading Room Register</span>
            </Link>

            <div className="flex items-center gap-3 text-[#012745]/60">
              <span className="text-[#BE2E14] font-semibold">{article.sheet}</span>
              <span>·</span>
              <span>{article.category}</span>
              <span>·</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          {/* Architectural Drawing Tag Header */}
          <SheetTag
            sheet={article.sheet}
            revision="01"
            scale="NTS"
            date={article.date}
            title={article.type}
          />

          {/* Article Header */}
          <header className="mt-10 sm:mt-14">
            <div className="flex items-center gap-3">
              <span
                className={`inline-block border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] ${
                  article.category === "Studio"
                    ? "border-[#012745] bg-[#012745] text-[#E7E4DC]"
                    : article.category === "Academy"
                    ? "border-[#BE2E14] bg-[#BE2E14] text-[#E7E4DC]"
                    : "border-[#DA8F0E] bg-[#DA8F0E] text-[#012745]"
                }`}
              >
                Series {article.category}
              </span>
              <span className="font-mono text-xs text-[#012745]/60">
                Published {article.date} · {article.readingTime}
              </span>
            </div>

            <h1 className="mt-6 font-anton text-[clamp(2.5rem,5.5vw,4.75rem)] uppercase leading-[0.98] tracking-tight text-[#012745]">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-[#012745]/85 sm:text-xl sm:leading-8">
              {article.description}
            </p>
          </header>

          {/* Prominent Provenance Box */}
          <div className="mt-10 border-2 border-[#012745] bg-[#F4F1EB] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BE2E14]">
                  Original Publication Provenance
                </p>
                <p className="mt-1 font-sans text-sm text-[#012745]/80">
                  This architectural briefing sheet is maintained as part of The
                  Zariya Collective register.
                </p>
                <p className="mt-1 font-mono text-xs text-[#012745]/60 break-all">
                  Source: {article.source}
                </p>
              </div>

              <a
                href={article.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-zariya-primary min-h-[44px] shrink-0 px-6 py-2.5 text-xs"
              >
                <span>Read Original Post</span>
                <span className="font-mono text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* Key Briefing Takeaways */}
          <section
            aria-labelledby="takeaways-heading"
            className="mt-12 border-l-4 border-[#DA8F0E] bg-white/50 p-6 sm:p-8"
          >
            <h2
              id="takeaways-heading"
              className="font-mono text-xs uppercase tracking-[0.18em] text-[#012745]"
            >
              Key Technical Takeaways
            </h2>
            <ul className="mt-4 grid gap-3 font-sans text-sm leading-relaxed text-[#012745]/85 sm:grid-cols-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-sm font-bold text-[#BE2E14]">
                    0{idx + 1}.
                  </span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Structured Editorial Briefing Body */}
          <div className="mt-12 divide-y divide-[#012745]/15 border-t border-b border-[#012745]/15">
            {article.sections.map((section, sIdx) => (
              <section key={sIdx} className="py-8 sm:py-10">
                <h3 className="font-cinzel text-xl font-bold text-[#012745] sm:text-2xl">
                  {section.title}
                </h3>
                <div className="mt-4 flex flex-col gap-4 font-sans text-base leading-relaxed text-[#012745]/85">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Architectural Drawing Footer Metadata */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#012745]/20 pb-6 font-mono text-xs text-[#012745]/60">
            <div>
              <span>AUTHOR: {siteConfig.founder.name}</span>
              <span className="mx-2">·</span>
              <span>LOCATION: NAZIRABAD, KOLKATA</span>
            </div>
            <div>
              <span>REGISTER ZC-01</span>
              <span className="mx-2">·</span>
              <span>VERIFIED PRODUCTION BRIEFING</span>
            </div>
          </div>

          {/* Related Articles Section */}
          <section aria-labelledby="related-heading" className="mt-16 sm:mt-20">
            <div className="flex items-center justify-between border-b border-[#012745]/20 pb-4">
              <h2
                id="related-heading"
                className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#012745]"
              >
                Related Sheets in Register
              </h2>
              <Link
                href="/#read"
                className="font-mono text-xs uppercase tracking-wider text-[#BE2E14] hover:underline"
              >
                All 27 Sheets →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.slug}
                  className="flex flex-col border border-[#012745]/20 bg-[#F4F1EB] p-5 transition-all hover:border-[#012745] hover:shadow-md"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase text-[#012745]/60">
                    <span className="font-semibold text-[#BE2E14]">{rel.sheet}</span>
                    <span>{rel.category}</span>
                  </div>
                  <h3 className="mt-3 font-cinzel text-sm font-bold text-[#012745] hover:text-[#BE2E14] transition-colors">
                    <Link href={`/read/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="mt-2 font-sans text-xs text-[#012745]/70 line-clamp-3">
                    {rel.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/read/${rel.slug}`}
                      className="btn-zariya-outline min-h-[36px] w-full px-3 py-1.5 text-[10px] tracking-[0.14em]"
                    >
                      <span>Open Sheet</span>
                      <span className="font-mono text-xs">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
