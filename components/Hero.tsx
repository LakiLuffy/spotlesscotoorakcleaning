import Image from "next/image";
import { ArrowDown, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-navy text-white">
      <Image
        src="/og-cover.jpg"
        alt="Professional house cleaner wiping kitchen bench in Toorak home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/25" />
      <div className="container-pad relative flex min-h-screen items-center pb-16 pt-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Spotless Spaces. Better Places.</p>
          <h1 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Walk In. It&apos;s Done. <span className="block text-gold">Premium House Cleaning in Toorak</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/88">
            Premium house cleaning in Toorak, South Yarra and Malvern, so you never think about it again.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="gold-button">
              Get a Free Quote
            </a>
            <a href="tel:+61468107899" className="outline-button">
              Call 0468 107 899
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/85">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Satisfaction Guaranteed</span>
            <span className="hidden text-gold sm:inline">/</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> Eco-Friendly Products</span>
            <span className="hidden text-gold sm:inline">/</span>
            <span>Insured & Vetted Team</span>
          </div>
        </div>
      </div>
      <a href="#services" aria-label="Scroll to services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-white md:block">
        <ArrowDown className="h-7 w-7" />
      </a>
    </section>
  );
}
