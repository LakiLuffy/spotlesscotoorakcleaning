import { Building2, Home, KeyRound, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Service = [title: string, copy: string, cta: string, Icon: LucideIcon];

const services: Service[] = [
  ["Regular House Cleaning in Toorak", "Weekly, fortnightly, or monthly cleans tailored to your home. We handle kitchens, bathrooms, living areas, bedrooms; every surface, every time. Come home to a space that feels brand new.", "Book Regular Clean", Home],
  ["Deep Cleaning Services - South Yarra, Malvern & Beyond", "Behind the fridge. Inside the oven. Under the couch. Our deep cleans reach the places most services pretend do not exist. Ideal for move-ins, seasonal resets, or when your home needs a full restart.", "Book Deep Clean", Sparkles],
  ["End of Lease Cleaning - Bond Back Guaranteed", "Moving out of your Toorak, South Yarra, or Malvern rental? We clean to real estate agent standards so your bond comes back in full. If the agent is not satisfied, we come back free.", "Book End of Lease", KeyRound],
  ["Commercial Cleaning for Offices & Small Businesses", "Clean, professional workspaces that reflect how you run your business. Regular office cleans, post-event cleanups, and one-off commercial deep cleans across Stonnington and beyond.", "Book Office Clean", Building2]
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-pad">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-3">House Cleaning Services in Toorak & Surrounding Suburbs</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(([title, copy, cta, Icon]) => (
            <Reveal key={title as string} className="h-full">
              <article className="flex h-full flex-col border-t-4 border-gold bg-white p-6 shadow-premium transition hover:-translate-y-1">
                <Icon className="h-9 w-9 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-4 flex-1 leading-7 text-ink/80">{copy}</p>
                <a href="#contact" className="mt-6 text-sm font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">
                  {cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
