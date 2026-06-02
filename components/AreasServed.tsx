import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const suburbs = ["Toorak", "South Yarra", "Malvern", "Armadale", "Prahran", "Kooyong", "Glen Iris", "Hawthorn", "Toorak Village", "Windsor"];

export function AreasServed() {
  return (
    <section id="areas" className="bg-soft py-20 md:py-28">
      <div className="container-pad">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Areas</p>
          <h2 className="section-title mt-3">House Cleaners Serving Toorak, South Yarra, Malvern & Surrounds</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {suburbs.map((suburb) => (
            <Reveal key={suburb}>
              <a href="#contact" className="flex items-center gap-3 bg-white p-4 font-bold text-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium">
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                {suburb}
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-5xl text-lg leading-8 text-ink/80">
            Spotless Co. provides professional house cleaning services across Melbourne&apos;s most sought-after inner-south suburbs. Whether you need regular home cleaning in Toorak, a deep clean in South Yarra, end of lease cleaning in Malvern, or office cleaning in Armadale, our experienced team delivers a spotless result every time. We also serve Prahran, Kooyong, Glen Iris, Hawthorn, Windsor, and the broader City of Stonnington. Locally operated, fully insured, and trusted by hundreds of homeowners across the region.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
