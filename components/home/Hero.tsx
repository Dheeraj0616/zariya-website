import Link from "next/link";

import { BrandLogo } from "@/components/brand/BrandLogo";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Consulting · Architecture · Academy
            </p>

            <h1
              id="hero-heading"
              className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Zariya
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-primary-foreground/85 sm:text-2xl">
              A multidisciplinary platform bringing together consulting,
              architecture, and learning.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none"
              >
                Start a Conversation
              </Link>

              <Link
                href="#verticals"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none"
              >
                Explore Zariya
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex aspect-square w-56 items-center justify-center rounded-full border border-accent/40 bg-primary-foreground/5 p-8 sm:w-72 lg:w-80">
              <BrandLogo
                width={280}
                height={280}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}