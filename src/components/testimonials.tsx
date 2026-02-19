import React from "react";
import { TESTIMONIALS } from "../constants";
import { SectionTag } from "./SectionTag";
import { Reveal } from "./Reveal";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-sand-pale py-28 px-20 grid grid-cols-[1fr_2fr] gap-24 items-center"
    >
      <div className="relative">
        <div className="font-display absolute -top-12 -left-8 text-[18rem] leading-none text-teal/7 pointer-events-none select-none">
          "
        </div>
        <SectionTag>Kind Words</SectionTag>
        <p className="font-display text-2xl italic text-teal-dark leading-relaxed">
          What our clients say about us
        </p>
        <span className="thread-line" />
        <p className="font-body text-sm text-teal/70 leading-relaxed">
          We take pride in every stitch, every seam, and every satisfied
          customer who leaves feeling beautiful and confident in something made
          just for them.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.author} delay={i as 0 | 1 | 2}>
            <div className="bg-[#f2e4cc] p-8 pl-10 border-l-4 border-teal">
              <p className="font-display italic text-lg text-teal-dark leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="font-body text-[0.7rem] tracking-widest uppercase text-teal">
                {t.author}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
