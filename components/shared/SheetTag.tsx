
type SheetTagProps = {
  sheet: string;
  revision?: string;
  scale?: string;
  date?: string;
  className?: string;
};

export function SheetTag({
  sheet,
  revision = "01",
  scale = "NTS",
  date = "18 OCT 2026",
  className = "",
}: SheetTagProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-y border-[#012745]/25 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#012745]/75 ${className}`}
      aria-label={`Drawing sheet ${sheet}, revision ${revision}`}
    >
      <span>
        <span className="mr-2 text-[#BE2E14]">Sheet</span>
        {sheet}
      </span>

      <span>Rev {revision}</span>

      <span>Scale {scale}</span>

      <span>{date}</span>
    </div>
  );
}
