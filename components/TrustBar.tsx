import { Star } from "lucide-react";

const stats = ["500+ Cleans Completed", "5.0 Google Rating", "100% Satisfaction Rate", "Same-Week Availability"];

export function TrustBar() {
  return (
    <section className="bg-soft py-8">
      <div className="container-pad grid gap-6 lg:grid-cols-[1.3fr_2fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Trusted by 200+ Toorak homes</p>
          <div className="mt-2 flex gap-1 text-gold" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat} className="border-l-2 border-gold bg-white px-4 py-3 text-sm font-bold text-navy shadow-sm">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
