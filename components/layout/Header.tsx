
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";

const navigation = [
  { label: "Consulting", href: "/consulting" },
  { label: "Architecture", href: "/architecture" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
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
    <header className="relative z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:min-h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Zariya home"
          onClick={closeMenu}
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <BrandLogo
            width={64}
            height={64}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm font-cinzel text-sm font-medium tracking-wide text-foreground transition-colors duration-300 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Animated mobile menu toggle */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-foreground transition-colors duration-300 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-opacity duration-300 motion-reduce:transition-none ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Soft backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`absolute inset-x-0 top-full -z-10 h-screen bg-primary/20 backdrop-blur-[3px] transition-opacity duration-500 ease-out motion-reduce:transition-none md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Smooth mobile navigation panel */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-border bg-background shadow-lg transition-[clip-path,opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:hidden ${
          menuOpen
            ? "visible opacity-100 [clip-path:inset(0_0_0_0)]"
            : "pointer-events-none invisible opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
          {navigation.map((item, index) => (
            <li
              key={item.href}
              style={{
                transitionDelay: menuOpen ? `${index * 55}ms` : "0ms",
              }}
              className={`transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }`}
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="flex min-h-12 items-center rounded-md px-3 font-cinzel text-base font-medium tracking-wide text-foreground transition-[background-color,color,padding-left] duration-300 hover:bg-primary/5 hover:pl-4 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
