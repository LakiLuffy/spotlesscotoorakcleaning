import { Reveal } from "./Reveal";

const steps = [
  ["Get a Quote", "Tell us your home size, preferred service, and suburb. We will send a fixed quote within the hour."],
  ["We Clean", "Our vetted team arrives on time with everything needed. You do not lift a finger."],
  ["Walk In. It's Done.", "Come home to a spotless space. Every surface, every time."]
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-pad">
        <Reveal className="text-center">
          <p className="eyebrow">Simple booking</p>
          <h2 className="section-title mt-3">Book Your Clean in 3 Simple Steps</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(([title, copy], index) => (
            <Reveal key={title}>
              <div className="relative border border-black/10 p-7">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold font-serif text-2xl text-navy">{index + 1}</div>
                <h3 className="mt-6 text-2xl font-bold text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-ink/75">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
