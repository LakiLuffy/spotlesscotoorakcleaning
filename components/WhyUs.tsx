import { CalendarCheck, Leaf, ShieldCheck, Users, WalletCards, WandSparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Feature = [title: string, copy: string, Icon: LucideIcon];

const features: Feature[] = [
  ["Vetted & Insured Cleaners", "Every team member is background-checked, insured, and trained to our standard. No random contractors.", ShieldCheck],
  ["Eco-Friendly Products", "We use non-toxic, eco-friendly cleaning products safe for kids, pets, and your surfaces.", Leaf],
  ["Satisfaction Guaranteed", "Not happy? We come back and re-clean at no cost. No questions, no hassle.", WandSparkles],
  ["Same-Week Booking", "Need a clean this week? We keep our schedule flexible so you are never waiting.", CalendarCheck],
  ["Consistent Teams", "The same trusted team every visit. They learn your home, your preferences, your standards.", Users],
  ["Transparent Pricing", "No surprises on the invoice. We quote upfront and stick to it.", WalletCards]
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-20 text-white md:py-28">
      <div className="container-pad">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Why Spotless Co.</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-white md:text-5xl">Why Toorak Homeowners Choose Spotless Co.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, copy, Icon]) => (
            <Reveal key={title as string}>
              <div className="border border-white/10 p-6">
                <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/75">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
