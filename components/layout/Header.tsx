"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";

// Links to restore once pages are created:
// const futureNavigation = [
//   { label: "Consulting", href: "/consulting" },
//   { label: "Architecture", href: "/architecture" },
//   { label: "About", href: "/about" },
// ];

const navigation = [
  { label: "Home", href: "/" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((isOpen) => !isOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // Close on Escape and when switching to desktop navigation.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    const mq = window.matchMedia("(min-width: 768px)");

    function onChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <header className="relative z-50 w-full bg-background px-4 pb-3 pt-3 sm:px-6 sm:pb-4 sm:pt-4 lg:px-8">
      {/* Floating navigation container */}
      <div className="relative mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-3 rounded-full border border-zariya-navy/10 bg-white px-4 shadow-[0_8px_30px_rgba(1,39,69,0.06)] sm:min-h-[72px] sm:px-6 lg:px-7">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Zariya home"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold sm:gap-3"
        >
          <BrandLogo
            width={64}
            height={64}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />

          <span className="hidden min-w-0 flex-col leading-tight min-[420px]:flex">
            <span className="font-cinzel text-sm font-bold tracking-[0.12em] text-zariya-navy sm:text-base">
              ZARIYA
            </span>
            <span className="mt-1 font-sans text-[8px] font-medium uppercase tracking-[0.08em] text-zariya-navy sm:text-[9px] sm:tracking-[0.1em]">
              Consulting · Architecture · Academy
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative rounded-sm py-2 font-cinzel text-[11px] font-medium uppercase tracking-wide text-zariya-navy transition-colors duration-200 hover:text-zariya-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold focus-visible:ring-offset-4 lg:text-xs"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zariya-navy transition-colors duration-200 hover:bg-zariya-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold md:hidden"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 motion-reduce:transition-none ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 top-0 -z-10 bg-zariya-navy/20 backdrop-blur-[3px] transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile navigation panel */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`absolute inset-x-4 top-[calc(100%-0.25rem)] z-20 overflow-hidden rounded-2xl border border-zariya-navy/15 bg-white shadow-xl transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none sm:inset-x-6 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-3">
          {navigation.map((item, index) => (
            <li
              key={item.href}
              style={{
                transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
              }}
              className={`transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-1 opacity-0"
              }`}
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="flex min-h-12 items-center rounded-xl px-4 font-cinzel text-sm font-medium tracking-wide text-zariya-navy transition-colors duration-200 hover:bg-zariya-cream/60 hover:text-zariya-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-zariya-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
