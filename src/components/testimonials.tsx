// src/components/sections/Testimonials.tsx
import React from "react";
import { useReveal } from "../hooks";
import { SectionTag } from "./SectionTag";
import { TESTIMONIALS } from "../constants";

interface Testimonial {
  quote: string;
  author: string;
}

export function Testimonials(): JSX.Element {
  const revealRef = useReveal();

  return (
    <section
      id="about"
      className="bg-[#faf4ea] py-16 px-6 md:py-28 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center"
    >
      {/* Left Column - Header */}
      <div className="relative md:col-span-1">
        {/* Decorative Quote Mark */}
        <div
          className="absolute -top-8 -left-4 md:-top-12 md:-left-8 text-[10rem] md:text-[18rem] leading-none text-[#1a5c52]/[0.07] pointer-events-none select-none font-serif"
          aria-hidden="true"
        >
          "
        </div>

        <SectionTag>Kind Words</SectionTag>

        <p className="font-serif text-xl md:text-2xl italic text-[#133f38] leading-snug mt-4">
          What our clients say about us
        </p>

        <div className="block h-px w-full opacity-35 my-6 md:my-8 bg-linear-to-r from-transparent via-[#1a5c52] to-transparent" />

        <p className="font-sans text-xs md:text-sm text-[#5a8a82] leading-relaxed">
          We take pride in every stitch, every seam, and every satisfied
          customer who leaves feeling beautiful and confident in something made
          just for them.
        </p>
      </div>

      {/* Right Column - Testimonial Cards */}
      <div
        ref={revealRef}
        className="flex flex-col gap-4 md:gap-6 md:col-span-2"
      >
        {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
          <div
            key={testimonial.author}
            className="bg-[#f2e4cc] p-6 md:p-8 border-l-2 border-[#1a5c52] opacity-0 translate-y-10 transition-all duration-700 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
            data-reveal="true"
          >
            <p className="font-serif italic text-base md:text-lg text-[#133f38] leading-relaxed md:leading-loose mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#1a5c52]">
              {testimonial.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
