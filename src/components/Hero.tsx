import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen grid grid-cols-2 pt-20 overflow-hidden">
      {/* Left */}
      <div className="hero-left relative flex flex-col justify-center px-16 py-24 pl-20">
        <div className="hero-tag font-body animate-fadeUp flex items-center gap-4 text-[0.65rem] tracking-widest uppercase text-teal mb-6">
          Handcrafted with love · Est. 2020
        </div>

        <h1 className="font-display animate-fadeUp1 text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-teal-dark mb-8">
          Where Fabric
          <br />
          <em className="italic text-sand block">Becomes Art</em>
        </h1>

        <p className="font-body animate-fadeUp2 text-base leading-relaxed text-teal/70 max-w-md mb-12">
          Bespoke garments, expert alterations, and curated fabrics — each piece
          crafted with care, precision, and a deep love for the craft.
        </p>

        <div className="animate-fadeUp3 flex gap-4">
          <a
            href="#order"
            className="px-10 py-3.5 font-body text-[0.7rem] tracking-widest uppercase no-underline border border-teal transition-all duration-300 bg-teal text-sand-pale hover:bg-transparent hover:text-teal"
          >
            Place an Order
          </a>
          {/* Teal outline button styled inline */}
          <a
            href="#portfolio"
            className="px-10 py-3.5 font-body text-[0.7rem] tracking-widest uppercase no-underline transition-all duration-300 cursor-pointer border bg-transparent text-teal border-teal/30 hover:bg-teal hover:text-sand-pale hover:border-teal"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Right — teal decorative panel (unchanged) */}
      <div className="animate-fadeIn relative overflow-hidden bg-teal">
        {/* ... (rest of hero right panel) */}
        {/* I'm omitting the SVG markup for brevity – keep it as before */}
      </div>
    </section>
  );
};
