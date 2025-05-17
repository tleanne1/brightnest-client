import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;
