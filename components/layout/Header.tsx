"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteConfig } from "@/config/site";

const primaryNavItems = [
  { number: "01", label: "Ventures", href: "/#verticals", sheet: "ZC-00" },
  { number: "02", label: "The Zariya Academy", href: "/academy", sheet: "TBM-01" },
  { number: "03", label: "Reading Room", href: "/#read", sheet: "ZC-01" },
  { number: "04", label: "Contact", href: "/contact", sheet: "ZC-CT" },
] as const;

const liveVentures = [
  {
    code: "DS",
    name: "Zariya Design Studio",
    url: "https://studio.thezariya.com/",
    displayUrl: "studio.thezariya.com",
  },
  {
    code: "TBM · BL",
    name: "The Zariya Academy",
    url: "https://academy.thezariya.com/",
    displayUrl: "academy.thezariya.com",
  },
  {
    code: "AY",
    name: "Aayaam",
    url: "https://aayaam.thezariya.com/",
    displayUrl: "aayaam.thezariya.com",
  },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 40) {
        setHidden(false);
      } else if (delta > 8 && currentScrollY > 120) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  // Body scroll lock & Escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="border-b border-[#012745]/15 bg-[#E7E4DC]/85 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
            {/* Brand Identity */}
            <Link
              href="/"
              aria-label="The Zariya Collective Home"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#012745] focus-visible:ring-offset-4"
            >
              <BrandLogo
                width={48}
                height={48}
                priority
                className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
              />
              <div className="flex flex-col">
                <span className="font-cinzel text-sm font-bold tracking-[0.16em] text-[#012745] sm:text-base">
                  THE ZARIYA COLLECTIVE
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#012745]/70">
                  Studio · Academy · Aayaam
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
              <ul className="flex items-center gap-7">
                {primaryNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative flex items-center gap-1.5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#012745]/80 transition-colors duration-200 hover:text-[#BE2E14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#012745]"
                    >
                      <span className="text-[9px] text-[#012745]/40 transition-colors group-hover:text-[#BE2E14]">
                        {item.sheet}
                      </span>
                      <span>{item.label}</span>
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#BE2E14] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* High-Craft Enquire CTA Button */}
              <Link
                href="/contact"
                className="btn-zariya-primary min-h-[44px] px-6 py-2.5 text-[11px]"
              >
                <span>ENQUIRE</span>
                <span className="font-mono text-xs transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-[70] flex h-11 w-11 items-center justify-center border border-[#012745]/30 bg-white/40 text-[#012745] transition-colors hover:border-[#012745] hover:bg-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#012745]"
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay — Rendered as a Sibling Outside <header> */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#012745] text-[#E7E4DC] md:hidden overflow-y-auto"
          >
            {/* Top Architectural Sheet Header Bar */}
            <div className="flex h-20 items-center justify-between border-b border-white/15 px-5 sm:px-8">
              <div className="flex items-center gap-3">
                <BrandLogo
                  width={36}
                  height={36}
                  className="h-8 w-8 brightness-0 invert"
                />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#DA8F0E]">
                    Sheet ZC-NAV · Rev 01
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">
                    Navigation Register
                  </span>
                </div>
              </div>

              {/* Dedicated Close Button inside Drawer Header */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-10 items-center gap-1.5 border border-white/20 px-3 font-mono text-[11px] uppercase tracking-wider text-[#E7E4DC] transition-colors hover:border-[#DA8F0E] hover:text-[#DA8F0E]"
              >
                <span>CLOSE</span>
                <span className="text-sm">×</span>
              </button>
            </div>

            {/* Primary Navigation Links */}
            <div className="flex-1 px-5 py-8 sm:px-8 flex flex-col justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#DA8F0E]">
                Register Navigation
              </p>

              <nav className="mt-4">
                <ul className="flex flex-col divide-y divide-white/10">
                  {primaryNavItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex min-h-[56px] items-center justify-between py-4 text-left focus-visible:outline-none"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-xs text-[#DA8F0E]">
                            {item.number} /
                          </span>
                          <span className="font-anton text-3xl uppercase tracking-tight text-[#E7E4DC] transition-colors group-hover:text-[#DA8F0E] sm:text-4xl">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-white/40 group-hover:text-[#DA8F0E]">
                          {item.sheet} →
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Direct Live Venture Subdomain Links */}
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#DA8F0E]">
                  Live Venture Subdomains
                </p>
                <div className="mt-3 flex flex-col gap-2.5">
                  {liveVentures.map((v) => (
                    <a
                      key={v.code}
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-[40px] items-center justify-between border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80 transition-colors hover:border-[#DA8F0E] hover:text-[#DA8F0E]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#BE2E14]" />
                        <span className="font-semibold">{v.code}</span>
                        <span className="text-white/40">·</span>
                        <span>{v.name}</span>
                      </div>
                      <span className="text-[11px] text-white/50 group-hover:text-[#DA8F0E]">
                        {v.displayUrl} ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Primary CTA Button & Direct Contact */}
            <div className="border-t border-white/15 bg-black/20 p-5 sm:p-8">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-zariya-primary w-full min-h-[50px] text-xs font-semibold tracking-[0.16em]"
              >
                <span>Start a Conversation</span>
                <span className="font-mono text-sm">→</span>
              </Link>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60">
                <a
                  href={siteConfig.contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DA8F0E] underline"
                >
                  WhatsApp: {siteConfig.contact.whatsapp.label}
                </a>
                <span>Nazirabad, Kolkata</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
