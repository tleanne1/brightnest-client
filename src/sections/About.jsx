import React from "react";
import aboutImg from "../assets/about-designer.jpg"; // Add a portrait or elegant interior

const About = () => {
  return (
    <section id="about" className="bg-softsage py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={aboutImg}
            alt="About the Designer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bluegray mb-4">
            Meet the Designer
          </h2>
          <p className="text-bluegray text-base leading-relaxed mb-4">
            With over a decade of experience in transforming residential and commercial
            spaces, I bring a thoughtful approach to every detail — blending aesthetics
            with functionality.
          </p>
          <p className="text-bluegray text-base leading-relaxed">
            My goal is to create environments that not only reflect your personality,
            but also feel like a natural extension of your lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
