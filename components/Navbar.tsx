"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const links = [
  ["Services", "#services"],
  ["Areas", "#areas"],
  ["About", "#why-us"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "bg-navy shadow-lg shadow-black/10" : "bg-transparent"}`}>
      <nav className="container-pad flex h-20 items-center justify-between">
        <a href="#top" aria-label="Spotless Co. home">
          <BrandMark light />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-bold text-white/85 transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+61468107899" className="inline-flex items-center gap-2 text-sm font-bold text-white">
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> 0468 107 899
          </a>
          <a href="#contact" className="gold-button">
            Book Your Clean
          </a>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu" aria-expanded={open}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-navy px-5 pb-6 lg:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-bold text-white hover:bg-white/10">
                {label}
              </a>
            ))}
            <a href="tel:+61468107899" className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-gold">
              <Phone className="h-4 w-4" /> 0468 107 899
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
