import React from "react";
import { SERVICES } from "../constants";
import { SectionTag } from "./SectionTag";
import { Reveal } from "./Reveal";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-teal py-32 px-20 relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sand/6 pointer-events-none" />

      <div className="flex items-end justify-between mb-20">
        <div>
          <SectionTag light>What We Offer</SectionTag>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-sand-pale leading-tight">
            Crafted for
            <br />
            <em className="italic text-sand">Every Occasion</em>
          </h2>
        </div>
        <a
          href="#order"
          className="font-body text-[0.7rem] tracking-widest uppercase text-sand no-underline opacity-80 hover:opacity-100 transition-opacity duration-200 mb-2"
        >
          Request a Service →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-px">
        {SERVICES.map((svc, i) => (
          <Reveal key={svc.num} delay={i as 0 | 1 | 2}>
            <div className="service-card bg-white/4 p-12 border border-sand/12 cursor-pointer transition-all duration-300 hover:bg-sand/7 hover:border-sand/35">
              <div className="font-display text-6xl font-light leading-none mb-6 text-sand/18">
                {svc.num}
              </div>
              <div className="font-display text-2xl text-sand-pale mb-4 leading-tight">
                {svc.title}
              </div>
              <p className="font-body text-sm leading-relaxed text-sand-pale/50">
                {svc.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-sand/20 font-body text-[0.7rem] tracking-wider uppercase text-sand">
                {svc.price}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
