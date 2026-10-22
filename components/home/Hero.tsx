import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#E7E4DC] text-[#012745]"
    >
      {/* Subtle gold background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#DA8F0E]/15 sm:-right-20 sm:h-[32rem] sm:w-[32rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-28 h-64 w-64 rounded-full border border-[#012745]/10 sm:right-0 sm:top-40 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#DA8F0E]/5 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1600px] items-center px-5 py-12 sm:px-6 sm:py-16 lg:min-h-[min(760px,calc(100svh-6rem))] lg:px-10 lg:py-16 xl:px-14">
        <div className="grid w-full items-center gap-10 sm:gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 xl:gap-16">
          {/* Left: Editorial hero content */}
          <div className="relative z-10 max-w-xl">
            <p className="hero-reveal hero-reveal-1 mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6F4E37] sm:mb-7 sm:text-xs sm:tracking-[0.24em]">
              Consulting <span aria-hidden="true">·</span> Architecture{" "}
              <span aria-hidden="true">·</span> Academy
            </p>

            <h1
              id="hero-heading"
              className="hero-reveal hero-reveal-2 max-w-xl font-anton text-[clamp(3.25rem,6.3vw,6.5rem)] font-normal uppercase leading-[0.98] tracking-wide"
            >
              Ideas into{" "}
              <span className="block italic text-[#BE2E14]">
                impact.
              </span>
            </h1>

            <p className="hero-reveal hero-reveal-3 mt-6 max-w-lg font-sans text-base font-medium leading-7 text-[#012745]/85 sm:mt-7 sm:text-lg sm:leading-8">
              A multidisciplinary platform bringing together consulting,
              architecture, and learning.
            </p>

            <p className="hero-reveal hero-reveal-3 mt-4 max-w-lg font-sans text-sm leading-7 text-[#012745]/70 sm:text-base sm:leading-8">
              Thoughtful expertise. Purposeful spaces. Practical learning.
            </p>

            {/* Actions */}
            <div className="hero-reveal hero-reveal-4 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#BE2E14] px-7 py-3 font-cinzel text-xs font-semibold tracking-wide text-[#E7E4DC] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#a92711] hover:shadow-lg hover:shadow-[#012745]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E7E4DC] sm:text-sm"
              >
                Start a Conversation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>

              <Link
                href="#verticals"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#012745]/25 px-6 py-3 font-cinzel text-xs font-semibold tracking-wide text-[#012745] transition-[border-color,color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#DA8F0E] hover:bg-white/50 hover:text-[#BE2E14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] sm:text-sm"
              >
                Explore Zariya
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none"
                >
                  ↓
                </span>
              </Link>
            </div>

            {/* Editorial footer detail */}
            <div className="hero-reveal hero-reveal-4 mt-9 flex items-center gap-3 sm:mt-12">
              <span className="h-px w-9 shrink-0 bg-[#DA8F0E]" />
              <p className="font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-[#012745]/55 sm:text-[10px] sm:tracking-[0.2em]">
                One brand. Three areas of expertise.
              </p>
            </div>
          </div>

          {/* Right: Large cinematic brand film */}
          <div className="hero-logo-reveal relative flex min-w-0 items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-none">
              {/* Refined gold frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-[1.5rem] border border-[#DA8F0E]/40 sm:-inset-3 sm:rounded-[2rem]"
              />

              {/* 16:9 video panel */}
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] border border-[#012745]/10 bg-[#012745] shadow-[0_24px_60px_rgba(1,39,69,0.12)] sm:rounded-[1.75rem]">
                <video
                  className="absolute inset-0 h-full w-full origin-top-left scale-[1.04] object-cover"
                  src="/assets/brand/zariya-hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Zariya brand film showcasing Consulting, Architecture, and Academy"
                >
                  Your browser does not support HTML video.
                </video>
              </div>

              {/* Caption beneath visual */}
              <div className="mt-5 flex items-center gap-3 px-1 sm:mt-6">
                <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#012745]/65 sm:text-[10px] sm:tracking-[0.22em]">
                  Thoughtfully built. Purposefully connected.
                </p>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[#DA8F0E]/60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}