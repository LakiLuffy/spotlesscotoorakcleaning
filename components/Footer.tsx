import { BrandMark } from "./BrandMark";

const suburbs = ["Toorak", "South Yarra", "Malvern", "Armadale", "Prahran", "Kooyong", "Glen Iris", "Hawthorn"];

export function Footer() {
  return (
    <footer className="bg-[#121d34] py-12 text-white">
      <div className="container-pad grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandMark light />
          <p className="mt-4 max-w-md text-white/70">Spotless Spaces. Better Places. Premium house cleaning for Toorak and Melbourne&apos;s inner south.</p>
        </div>
        <div>
          <h3 className="font-bold text-gold">Services</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <a href="#services">Regular house cleaning</a>
            <a href="#services">Deep cleaning Toorak</a>
            <a href="#services">End of lease cleaning</a>
            <a href="#services">Commercial cleaning</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gold">Contact</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <a href="tel:+61468107899">0468 107 899</a>
            <a href="mailto:hello@spotlesscohousecleanerstoorak.com">hello@spotlesscohousecleanerstoorak.com</a>
            <p>ABN: 00 000 000 000</p>
          </div>
        </div>
      </div>
      <div className="container-pad mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
        <p>We Service: {suburbs.join(" | ")}</p>
        <p className="mt-3">Copyright 2026 Spotless Co. Cleaning Experts. All rights reserved.</p>
      </div>
    </footer>
  );
}
