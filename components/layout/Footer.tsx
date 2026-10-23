import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#012745]/20 bg-[#012745] text-[#E7E4DC]">
      {/* Top Technical Drawing Register Header */}
      <div className="border-b border-white/10 px-5 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#DA8F0E]">
          <div className="flex items-center gap-3">
            <span>Sheet ZC-FT</span>
            <span className="text-white/30">|</span>
            <span>Rev 01</span>
            <span className="text-white/30">|</span>
            <span>Scale NTS</span>
          </div>
          <div className="flex items-center gap-2 text-[#E7E4DC]/70">
            <span>22.5726° N, 88.3639° E</span>
            <span className="text-white/30">·</span>
            <span>KOLKATA</span>
          </div>
        </div>
      </div>

      {/* Main Footer Register Grid */}
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1: Brand & Collective Mission */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E]"
            >
              <BrandLogo
                width={44}
                height={44}
                className="h-10 w-10 shrink-0 object-contain brightness-0 invert"
              />
              <span className="font-cinzel text-base font-bold tracking-[0.14em] text-[#E7E4DC]">
                THE ZARIYA COLLECTIVE
              </span>
            </Link>
            <p className="font-sans text-sm leading-relaxed text-[#E7E4DC]/75">
              One register. Three ventures. All live. A Kolkata group for design,
              learning, and standards in the built environment and the cup.
            </p>
            <div className="mt-2 font-mono text-xs text-[#DA8F0E]">
              Founder: {siteConfig.founder.name} ({siteConfig.founder.role})
            </div>
          </div>

          {/* Col 2: The Three Live Ventures */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#DA8F0E]">
              The Ventures
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-[#E7E4DC]/80">
              <li>
                <a
                  href="https://studio.thezariya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col transition-colors hover:text-white"
                >
                  <span className="font-mono text-[11px] text-[#DA8F0E]">
                    Series DS · Live
                  </span>
                  <span className="font-medium group-hover:underline">
                    Zariya Design Studio ↗
                  </span>
                  <span className="text-xs text-[#E7E4DC]/60">
                    studio.thezariya.com
                  </span>
                </a>
              </li>

              <li className="pt-2">
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#BE2E14]">
                    Series TBM · BL · Live
                  </span>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/academy"
                      className="font-medium hover:underline text-[#E7E4DC]"
                    >
                      The Zariya Academy
                    </Link>
                    <span className="text-[#E7E4DC]/40">·</span>
                    <a
                      href="https://academy.thezariya.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#DA8F0E] hover:underline"
                    >
                      academy.thezariya.com ↗
                    </a>
                  </div>
                  <span className="text-xs text-[#E7E4DC]/60">
                    The Barista Method & Brew Lab
                  </span>
                </div>
              </li>

              <li className="pt-2">
                <a
                  href="https://aayaam.thezariya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col transition-colors hover:text-white"
                >
                  <span className="font-mono text-[11px] text-[#DA8F0E]">
                    Series AY · Live
                  </span>
                  <span className="font-medium group-hover:underline">
                    Aayaam ↗
                  </span>
                  <span className="text-xs text-[#E7E4DC]/60">
                    aayaam.thezariya.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#DA8F0E]">
              Index & Sheets
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans text-sm text-[#E7E4DC]/80">
              <li>
                <Link
                  href="/#verticals"
                  className="transition-colors hover:text-[#DA8F0E] hover:underline"
                >
                  Ventures Register (ZC-00)
                </Link>
              </li>
              <li>
                <Link
                  href="/academy"
                  className="transition-colors hover:text-[#DA8F0E] hover:underline"
                >
                  Academy & Barista Method (TBM-01)
                </Link>
              </li>
              <li>
                <Link
                  href="/#read"
                  className="transition-colors hover:text-[#DA8F0E] hover:underline"
                >
                  Reading Room (ZC-01)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#DA8F0E] hover:underline"
                >
                  Contact & Enquiries (ZC-CT)
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-[#DA8F0E] hover:underline text-xs text-[#E7E4DC]/70"
                >
                  Privacy Policy (ZC-PR)
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-[#DA8F0E] hover:underline text-xs text-[#E7E4DC]/70"
                >
                  Terms of Use (ZC-TM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Direct Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#DA8F0E]">
              Contact Register
            </h3>
            <div className="flex flex-col gap-3 font-sans text-sm text-[#E7E4DC]/80">
              <div>
                <span className="block font-mono text-[10px] uppercase text-[#E7E4DC]/50">
                  Location
                </span>
                <span>{siteConfig.contact.location}</span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase text-[#E7E4DC]/50">
                  WhatsApp Direct
                </span>
                <a
                  href={siteConfig.contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[#DA8F0E] hover:underline"
                >
                  {siteConfig.contact.whatsapp.label}
                </a>
              </div>

              {siteConfig.contact.email && (
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#E7E4DC]/50">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-mono text-sm text-[#DA8F0E] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              )}

              <div className="pt-2">
                <Link
                  href="/academy#apply"
                  className="btn-zariya-outline-dark min-h-[44px] px-5 py-2.5 text-xs"
                >
                  <span>APPLY TO ACADEMY</span>
                  <span className="font-mono text-xs">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 font-mono text-[11px] text-[#E7E4DC]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Zariya Collective · Nazirabad, Kolkata</p>
          <p>Last updated {siteConfig.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
