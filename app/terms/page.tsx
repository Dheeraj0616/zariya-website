import type { Metadata } from "next";
import Link from "next/link";
import { SheetTag } from "@/components/shared/SheetTag";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for The Zariya Collective, Zariya Design Studio, The Zariya Academy, and Aayaam.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <article className="min-h-screen bg-[#E7E4DC] text-[#012745]">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <SheetTag
          sheet="ZC-TM"
          revision="01"
          scale="NTS"
          date="16 OCT 2026"
          title="Terms of Use Register"
        />

        <header className="mt-10 sm:mt-14 border-b border-[#012745]/20 pb-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BE2E14]">
            The Zariya Collective · Operational Governance
          </p>
          <h1 className="mt-4 font-anton text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.96] tracking-tight text-[#012745]">
            Terms of Use.
          </h1>
          <p className="mt-4 font-mono text-xs text-[#012745]/70">
            Effective Date: 16 October 2026 · The Zariya Collective · Nazirabad, Kolkata
          </p>
        </header>

        <div className="mt-10 divide-y divide-[#012745]/15 font-sans text-base leading-relaxed text-[#012745]/85">
          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              1. Acceptance of the Master Register
            </h2>
            <p className="mt-4">
              By accessing the website and digital properties of The Zariya
              Collective (including `thezariya.com`, `studio.thezariya.com`,
              `academy.thezariya.com`, and `aayaam.thezariya.com`), you agree to
              comply with these Terms of Use and all applicable laws and
              regulations of India.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              2. Intellectual Property & Technical Schematics
            </h2>
            <p className="mt-4">
              All architectural drawings, BIM standards (including AS 1:2026),
              curriculum structures, technical briefing sheets, and branding
              materials published on this register are the proprietary
              intellectual property of The Zariya Collective and founder Shubham
              Jaiswal, unless otherwise credited.
            </p>
            <p className="mt-3">
              Unlicensed commercial redistribution, scraping, or misattribution
              of our technical specifications is strictly prohibited.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              3. Academy Admissions & Program Policies
            </h2>
            <p className="mt-4">
              Application to The Barista Method or Brew Lab workshops does not
              guarantee admission. Cohorts are limited in batch size to ensure
              one-on-one machine time. Tuition fees, course dates, and certification
              requirements are governed by the specific enrollment terms shared
              during direct consultation.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              4. Governing Law and Jurisdiction
            </h2>
            <p className="mt-4">
              These terms shall be governed by and construed in accordance with
              the laws of the State of West Bengal and the Republic of India.
              Any disputes arising under these terms shall be subject to the
              exclusive jurisdiction of the courts of Kolkata.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-[#012745]/20 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#012745]/60">
          <Link href="/" className="hover:text-[#BE2E14] underline">
            ← Return to Master Register
          </Link>
          <span>Sheet ZC-TM · Rev 01</span>
        </div>
      </div>
    </article>
  );
}
