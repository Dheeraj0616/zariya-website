type SheetTagProps = {
  sheet: string;
  revision?: string;
  scale?: string;
  date?: string;
  title?: string;
  theme?: "light" | "dark";
  className?: string;
};

export function SheetTag({
  sheet,
  revision = "01",
  scale = "NTS",
  date = "16 OCT 2026",
  title,
  theme = "light",
  className = "",
}: SheetTagProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-y py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
        isDark
          ? "border-white/20 text-[#E7E4DC]/80"
          : "border-[#012745]/20 text-[#012745]/80"
      } ${className}`}
      aria-label={`Drawing sheet ${sheet}, revision ${revision}`}
    >
      {/* Corner crosshair registration ticks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-1.5 -left-1 font-mono text-[9px] text-[#DA8F0E] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-1.5 -right-1 font-mono text-[9px] text-[#DA8F0E] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1.5 -left-1 font-mono text-[9px] text-[#DA8F0E] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1.5 -right-1 font-mono text-[9px] text-[#DA8F0E] select-none"
      >
        +
      </span>

      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <span
            className={`font-semibold ${
              isDark ? "text-[#DA8F0E]" : "text-[#BE2E14]"
            }`}
          >
            Sheet
          </span>
          <span
            className={`font-semibold ${
              isDark ? "text-[#E7E4DC]" : "text-[#012745]"
            }`}
          >
            {sheet}
          </span>
        </span>
        {title && (
          <span
            className={`hidden sm:inline ${
              isDark ? "text-[#E7E4DC]/60" : "text-[#012745]/50"
            }`}
          >
            · {title}
          </span>
        )}
      </div>

      <div
        className={`flex items-center gap-4 sm:gap-6 ${
          isDark ? "text-[#E7E4DC]/70" : "text-[#012745]/70"
        }`}
      >
        <span>Rev {revision}</span>
        <span className="hidden sm:inline">Scale {scale}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default SheetTag;
