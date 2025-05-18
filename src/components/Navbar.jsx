import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", to: "home" },
    { label: "Portfolio", to: "portfolio" },
    { label: "About", to: "about" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-bluegray shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-linen">BrightNest</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-linen text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className="hidden md:flex space-x-6 font-medium text-linen">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-softsage transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-linen font-medium bg-bluegray border-t border-softsage">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="block cursor-pointer hover:text-softsage"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
