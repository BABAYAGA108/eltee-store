import React from "react";
import { PORTFOLIO } from "../constants";
import { SectionTag } from "./SectionTag";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-[#f2e4cc] py-32 px-20">
      <div className="mb-16">
        <SectionTag>Our Work</SectionTag>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-teal-dark leading-tight">
          A Gallery of
          <br />
          <em className="italic text-teal">Craftsmanship</em>
        </h2>
      </div>

      <div className="grid grid-cols-3 grid-rows-[auto_auto] gap-4">
        {PORTFOLIO.map((item, i) => {
          const isLeft = i === 0;
          const isRight = i === 2;
          return (
            <div
              key={item.title}
              className="portfolio-item relative overflow-hidden cursor-pointer"
              style={{
                gridColumn: isLeft ? "1/2" : isRight ? "3/4" : undefined,
                gridRow: isLeft || isRight ? "1/3" : undefined,
              }}
            >
              <div
                className={`${item.swatch} relative w-full ${isLeft || isRight ? "h-full min-h-[500px]" : "aspect-square"}`}
              >
                <div className="portfolio-overlay absolute inset-0 bg-ink/75 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-400">
                  <h3 className="font-display text-sand-pale font-normal text-xl">
                    {item.title}
                  </h3>
                  <p className="font-body text-sand text-xs mt-1 tracking-wider uppercase">
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        {/* Teal outline button styled inline */}
        <a
          href="#order"
          className="inline-block px-10 py-3.5 font-body text-[0.7rem] tracking-widest uppercase no-underline transition-all duration-300 cursor-pointer border bg-transparent text-teal border-teal/30 hover:bg-teal hover:text-sand-pale hover:border-teal"
        >
          Commission a Piece →
        </a>
      </div>
    </section>
  );
};
