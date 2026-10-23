import type { Metadata } from "next";
import Link from "next/link";
import { SheetTag } from "@/components/shared/SheetTag";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for The Zariya Collective, Zariya Design Studio, The Zariya Academy, and Aayaam.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <article className="min-h-screen bg-[#E7E4DC] text-[#012745]">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <SheetTag
          sheet="ZC-PR"
          revision="01"
          scale="NTS"
          date="16 OCT 2026"
          title="Privacy Policy Register"
        />

        <header className="mt-10 sm:mt-14 border-b border-[#012745]/20 pb-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BE2E14]">
            The Zariya Collective · Governance & Data
          </p>
          <h1 className="mt-4 font-anton text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.96] tracking-tight text-[#012745]">
            Privacy Policy.
          </h1>
          <p className="mt-4 font-mono text-xs text-[#012745]/70">
            Effective Date: 16 October 2026 · Location: Nazirabad, Kolkata, West Bengal, India
          </p>
        </header>

        <div className="mt-10 divide-y divide-[#012745]/15 font-sans text-base leading-relaxed text-[#012745]/85">
          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              1. Architectural Commitment to Privacy
            </h2>
            <p className="mt-4">
              The Zariya Collective (encompassing Zariya Design Studio, The Zariya
              Academy, and Aayaam) is committed to protecting your personal data
              with the same architectural precision and discipline that guides our
              physical and digital projects.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              2. User-Initiated Enquiries via WhatsApp
            </h2>
            <p className="mt-4">
              All direct communications and enquiries initiated through WhatsApp
              are strictly user-initiated. When you click our WhatsApp links or
              submit the admission inquiry form on `/academy#apply`, a pre-filled
              message is prepared on your device and sent through your own
              WhatsApp application.
            </p>
            <p className="mt-3">
              We do not harvest numbers without consent, nor do we sell, rent, or
              disclose your telephone numbers or conversation history to any
              third-party marketing networks.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              3. Information Collected Across Ventures
            </h2>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>
                <strong>Academy Applications:</strong> Candidate names, contact
                numbers, experience level, and preferred batch dates provided
                voluntarily during the application process.
              </li>
              <li>
                <strong>Studio & Aayaam Inquiries:</strong> Architectural project
                scopes, spatial briefs, and technical specifications exchanged
                during pre-construction coordination.
              </li>
              <li>
                <strong>Technical Analytics:</strong> Standard, non-identifying
                server request logs (IP address, browser user-agent) used solely
                for security, cache verification, and performance monitoring.
              </li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="font-cinzel text-xl font-bold text-[#012745]">
              4. Data Retention and Rectification
            </h2>
            <p className="mt-4">
              You may at any time request the deletion or correction of your
              contact details by messaging us on WhatsApp at{" "}
              <a
                href={siteConfig.contact.whatsapp.url}
                className="font-mono font-semibold text-[#012745] underline hover:text-[#BE2E14]"
              >
                {siteConfig.contact.whatsapp.label}
              </a>{" "}
              or contacting Founder {siteConfig.founder.name}.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-[#012745]/20 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#012745]/60">
          <Link href="/" className="hover:text-[#BE2E14] underline">
            ← Return to Master Register
          </Link>
          <span>Sheet ZC-PR · Rev 01</span>
        </div>
      </div>
    </article>
  );
}
