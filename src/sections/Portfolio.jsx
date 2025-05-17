import React from "react";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";


const projects = [
  {
    title: "Modern Loft",
    image: project1,
  },
  {
    title: "Coastal Living Room",
    image: project2,
  },
  {
    title: "Minimalist Kitchen",
    image: project3,
  },
  {
    title: "Urban Home Office",
    image: project4,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-linen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-bluegray mb-3">
          Selected Works
        </h2>
        <p className="text-bluegray text-base max-w-xl mx-auto">
          A curated glimpse into some of our favorite transformations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md group relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-bluegray/80 text-linen text-sm py-2 px-4 font-semibold">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
