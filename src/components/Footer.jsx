import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bluegray text-linen text-center py-6 px-4 text-sm">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} BrightNest Interiors. Designed by Tracey Buentello.
      </p>
      <div className="space-x-4">
        <a
          href="https://tleanne.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-softsage transition"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/tleanne1/brightnest-client"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-softsage transition"
        >
          GitHub
        </a>
        <a
          href="mailto:hello@brightnestdesign.com"
          className="hover:text-softsage transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
