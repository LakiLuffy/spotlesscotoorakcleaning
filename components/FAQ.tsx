"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["How much does house cleaning in Toorak cost?", "Our regular house cleaning starts from $150 for a standard 2-bedroom home in Toorak. Pricing depends on home size, number of bathrooms, and service type. We provide fixed quotes upfront with no hidden fees; request yours in under 60 seconds."],
  ["Do you offer end of lease cleaning in South Yarra and Malvern?", "Yes. We provide end of lease cleaning across South Yarra, Malvern, Armadale, Prahran, and all surrounding suburbs. Our end of lease cleans are done to real estate agent standards, and we offer a bond-back guarantee. If the agent requests a re-clean, we come back free."],
  ["What cleaning products do you use?", "We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and all surfaces. If you have specific product preferences or sensitivities, let us know and we will accommodate."],
  ["How do I book a clean?", "You can book online via our contact form, call us directly on 0468 107 899, or send a text. We typically respond within the hour and can schedule same-week cleans in most cases."],
  ["Do the same cleaners come each visit?", "Yes. We assign a consistent team to your home so they learn your preferences, your layout, and your standards. No random strangers each week."],
  ["What suburbs do you service?", "Spotless Co. services Toorak, South Yarra, Malvern, Armadale, Prahran, Kooyong, Glen Iris, Hawthorn, Windsor, and surrounding suburbs within the City of Stonnington and inner-south Melbourne."]
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-pad max-w-4xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title mt-3">Frequently Asked Questions</h2>
        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-navy" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                {question}
                <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${open === index ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {open === index ? <p className="pb-6 leading-7 text-ink/75">{answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
