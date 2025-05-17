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
    <header className="fixed top-0 left-0 w-full bg-cream/90 backdrop-blur-md shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-800">BrightNest</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className="hidden md:flex space-x-6 font-medium text-slate-700">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-[#5C7285] transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-slate-700 font-medium">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="block cursor-pointer hover:text-[#5C7285]"
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
