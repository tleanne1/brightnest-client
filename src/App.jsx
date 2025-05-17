import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
    </div>
  );
};

export default App;
