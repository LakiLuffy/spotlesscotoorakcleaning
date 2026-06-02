import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  ["Honestly the best cleaning service I've used in Toorak. They were on time, thorough, and my bathrooms have never looked this good. Booked them fortnightly and haven't looked back.", "Sarah M.", "Toorak"],
  ["I needed an end of lease clean for my South Yarra apartment and they absolutely nailed it. Got my full bond back, no dramas. Can't recommend them enough.", "Jess L.", "South Yarra"],
  ["We've tried three different cleaners in Malvern and Spotless Co. is the first one we've actually kept. Consistent, reliable, and they use eco-friendly products which matters to us with two little kids.", "Emma T.", "Malvern"],
  ["Booked a deep clean before Christmas and wow. They cleaned behind appliances, inside the oven, everything. My house in Armadale hasn't been this clean since we moved in.", "Lauren K.", "Armadale"],
  ["Really easy to book, great communication, and the clean was perfect. Exactly what I needed for my rental in Prahran. Will use again 100%.", "Mia R.", "Prahran"]
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-soft py-20 md:py-28">
      <div className="container-pad">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="section-title mt-3">What Our Clients Say</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(([text, name, suburb]) => (
            <Reveal key={`${name}-${suburb}`}>
              <article className="h-full bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-gold" aria-label="5 star review">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-sm font-bold text-white">G</span>
                </div>
                <p className="mt-5 leading-7 text-ink/80">&quot;{text}&quot;</p>
                <p className="mt-5 font-bold text-navy">{name}, {suburb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
