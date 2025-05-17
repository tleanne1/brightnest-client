import React from "react";
import heroImg from "../assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-bluegray/50 z-0 backdrop-blur-sm" />
      <div className="relative z-10 text-center text-linen max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          BrightNest Interiors
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Elevating everyday spaces with elegance and soul.
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-linen text-bluegray px-6 py-3 rounded-full font-semibold hover:bg-softsage transition"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default Hero;
