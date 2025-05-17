import React from "react";

const services = [
  {
    title: "Full Interior Design",
    desc: "From concept to completion, we transform your space into a reflection of your style and needs.",
  },
  {
    title: "Room Styling",
    desc: "Refreshing a space with curated decor, layout adjustments, and palette refinement.",
  },
  {
    title: "Virtual Consultations",
    desc: "Design guidance from anywhere — perfect for small spaces or remote clients.",
  },
  {
    title: "Custom Furniture Sourcing",
    desc: "We find and coordinate custom pieces that complete your vision beautifully.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-softsage py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-bluegray mb-3">
          Services Offered
        </h2>
        <p className="text-bluegray text-base max-w-xl mx-auto">
          Whether you need a full redesign or just a touch of clarity, I’m here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-linen p-6 rounded-xl shadow-sm border border-bluegray/10"
          >
            <h3 className="text-lg font-semibold text-bluegray mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-bluegray/80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
