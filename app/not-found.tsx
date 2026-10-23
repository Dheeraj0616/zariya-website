import Link from "next/link";
import { SheetTag } from "@/components/shared/SheetTag";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center bg-[#E7E4DC] px-5 py-20 text-[#012745]">
      <div className="mx-auto w-full max-w-2xl border-2 border-[#012745] bg-[#F4F1EB] p-8 sm:p-12 relative">
        {/* Architectural corner registration marks */}
        <span
          aria-hidden="true"
          className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-[#DA8F0E]"
        />
        <span
          aria-hidden="true"
          className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-[#DA8F0E]"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-[#DA8F0E]"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-[#DA8F0E]"
        />

        <SheetTag
          sheet="ZC-404"
          revision="01"
          scale="NTS"
          date="16 OCT 2026"
          title="Drawing Not Found"
        />

        <div className="mt-8 text-center sm:text-left">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[#BE2E14]">
            Status Code 404 · Void Index
          </p>

          <h1 className="mt-4 font-anton text-5xl uppercase leading-none tracking-tight sm:text-6xl text-[#012745]">
            Drawing Not Found<span className="text-[#BE2E14]">.</span>
          </h1>

          <p className="mt-4 font-sans text-base leading-relaxed text-[#012745]/80">
            The requested technical drawing, briefing sheet, or coordinate point
            does not exist within The Zariya Collective register.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="btn-zariya-primary min-h-[44px] px-6 py-2.5 text-xs"
            >
              <span>Return to Register</span>
              <span className="font-mono text-xs">→</span>
            </Link>

            <Link
              href="/academy"
              className="btn-zariya-outline min-h-[44px] px-5 py-2.5 text-xs"
            >
              <span>The Academy</span>
              <span className="font-mono text-xs">→</span>
            </Link>

            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-wider text-[#012745]/70 underline hover:text-[#BE2E14]"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
