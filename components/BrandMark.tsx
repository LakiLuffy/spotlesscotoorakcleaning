import Image from "next/image";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Spotless Co. Cleaning Experts">
      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-gold/45">
        <Image
          src="/logo.png"
          alt="Spotless Co. Cleaning Experts logo"
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </div>
      <div className="leading-none">
        <div className={`font-serif text-2xl ${light ? "text-white" : "text-navy"}`}>Spotless Co.</div>
        <div className={`mt-1 text-[10px] font-bold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-ink"}`}>Cleaning Experts</div>
      </div>
    </div>
  );
}
