"use client";

import { Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 850));
    setLoading(false);
    setSent(true);
  }

  return (
    <section id="contact" className="bg-navy py-20 text-white md:py-28">
      <div className="container-pad grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Free quote</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-white md:text-5xl">Get Your Free Cleaning Quote</h2>
          <form onSubmit={submit} className="mt-8 grid gap-4 rounded-sm bg-white p-5 text-ink shadow-premium md:grid-cols-2">
            <input required name="name" placeholder="Name" className="border border-black/15 px-4 py-3 outline-none focus:border-gold" />
            <input required name="phone" placeholder="Phone" className="border border-black/15 px-4 py-3 outline-none focus:border-gold" />
            <input required type="email" name="email" placeholder="Email" className="border border-black/15 px-4 py-3 outline-none focus:border-gold" />
            <select required name="suburb" className="border border-black/15 px-4 py-3 outline-none focus:border-gold">
              <option value="">Suburb</option>
              {["Toorak", "South Yarra", "Malvern", "Armadale", "Prahran", "Kooyong", "Glen Iris", "Hawthorn", "Windsor"].map((suburb) => <option key={suburb}>{suburb}</option>)}
            </select>
            <select required name="service" className="border border-black/15 px-4 py-3 outline-none focus:border-gold">
              <option value="">Service Type</option>
              {["Regular", "Deep", "End of Lease", "Commercial", "Other"].map((service) => <option key={service}>{service}</option>)}
            </select>
            <input type="date" name="date" className="border border-black/15 px-4 py-3 outline-none focus:border-gold" />
            <textarea name="message" placeholder="Message" rows={5} className="border border-black/15 px-4 py-3 outline-none focus:border-gold md:col-span-2" />
            <button type="submit" disabled={loading} className="gold-button md:col-span-2">
              {loading ? "Requesting..." : sent ? "Quote Request Sent" : "Request My Quote"}
            </button>
          </form>
        </div>
        <aside className="bg-white/8 p-6">
          <h3 className="font-serif text-3xl text-white">We Make Clean Simple!</h3>
          <div className="mt-7 grid gap-4">
            <a href="tel:+61468107899" className="flex items-center gap-3 font-bold text-white"><Phone className="h-5 w-5 text-gold" /> 0468 107 899</a>
            <a href="mailto:hello@spotlesscohousecleanerstoorak.com" className="flex items-center gap-3 font-bold text-white"><Mail className="h-5 w-5 text-gold" /> hello@spotlesscohousecleanerstoorak.com</a>
            <p className="text-white/75">Operating Hours: Mon-Sat 7am-6pm</p>
          </div>
          <iframe
            title="Toorak service area map"
            className="mt-8 h-72 w-full border-0"
            loading="lazy"
            src="https://www.google.com/maps?q=Toorak%20VIC%203142&output=embed"
          />
        </aside>
      </div>
    </section>
  );
}
