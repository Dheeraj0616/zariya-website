import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { academy } from "@/config/academy";

export function AcademyHero() {
  return (
    <section
      aria-labelledby="academy-hero-heading"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid min-h-[clamp(560px,80vh,820px)] w-full max-w-7xl items-center gap-12 px-6 py-20 sm:gap-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28"
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            {academy.hero.eyebrow}
          </p>

          <h1
            id="academy-hero-heading"
            className="max-w-3xl text-[clamp(3.25rem,10vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          >
            {academy.hero.heading}
          </h1>

          <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-primary-foreground/95 sm:text-2xl sm:leading-9"
          >
            {academy.hero.tagline}
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-primary-foreground/70 sm:text-lg"
          >
            {academy.hero.subline}
          </p>

          <div className="mt-9">
            <Link
              href={academy.hero.cta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none"
            >
              {academy.hero.cta.label}
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative flex aspect-square w-[min(70vw,22rem)] items-center justify-center sm:w-[min(60vw,26rem)] lg:w-[min(34vw,30rem)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-accent/30"
            />

            <div
              aria-hidden="true"
              className="absolute inset-[8%] rounded-full border border-primary-foreground/10"
            />

            <div className="relative flex aspect-square w-[72%] items-center justify-center rounded-full border border-accent/40 bg-primary-foreground/5 p-[10%]"
            >
              <BrandLogo
                width={320}
                height={320}
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