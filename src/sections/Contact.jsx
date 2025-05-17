import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-sage text-linen py-20 px-6 md:px-20 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Let's Create Something Beautiful
        </h2>
        <p className="text-base md:text-lg mb-6">
          Ready to elevate your space? Reach out and let’s start a conversation.
        </p>
        <p className="text-sm font-medium mb-2">
          📍 Based in Austin, TX – Serving clients nationwide
        </p>
        <p className="text-sm font-medium mb-2">
          ✉️ hello@brightnestdesign.com
        </p>
        <a
          href="mailto:hello@brightnestdesign.com"
          className="inline-block mt-6 px-6 py-3 bg-linen text-bluegray rounded-full hover:bg-softsage transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
