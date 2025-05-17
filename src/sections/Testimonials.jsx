import React from "react";

const testimonials = [
  {
    quote:
      "Working with BrightNest was seamless. My space feels completely transformed — functional, calming, and beautifully designed.",
    name: "Maya L.",
  },
  {
    quote:
      "The attention to detail was incredible. Every corner of my home now reflects my personality and lifestyle.",
    name: "James T.",
  },
  {
    quote:
      "From our first consult, I knew I could trust her vision. The final design exceeded every expectation.",
    name: "Elena R.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-linen py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-bluegray mb-3">
          What Clients Are Saying
        </h2>
        <p className="text-bluegray text-base max-w-xl mx-auto">
          A few words from recent collaborations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-softsage p-6 rounded-xl shadow-sm border border-bluegray/10"
          >
            <p className="text-sm text-bluegray/90 italic mb-4">"{t.quote}"</p>
            <h4 className="text-sm font-semibold text-bluegray">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
