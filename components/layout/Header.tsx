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
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Zariya home"
          className="flex items-center rounded-md focus-visible:outline-none"
        >
          <BrandLogo
            width={64}
            height={64}
            priority
            className="h-14 w-14 object-contain"
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm text-sm font-medium text-foreground transition-colors hover:text-secondary focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}