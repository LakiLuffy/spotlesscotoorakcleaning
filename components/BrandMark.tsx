import { Sparkles } from "lucide-react";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Spotless Co. Cleaning Experts">
      <div className={`grid h-11 w-11 place-items-center rounded-full border ${light ? "border-gold bg-white/10" : "border-gold/50 bg-navy"}`}>
        <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
      </div>
      <div className="leading-none">
        <div className={`font-serif text-2xl ${light ? "text-white" : "text-navy"}`}>Spotless Co.</div>
        <div className={`mt-1 text-[10px] font-bold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-ink"}`}>Cleaning Experts</div>
      </div>
    </div>
  );
}
