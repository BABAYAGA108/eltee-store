import React, { useState, useEffect, MouseEvent } from "react";
import { PORTFOLIO } from "../constants";
import { SectionTag } from "./SectionTag";

/* ── brand tokens ────────────────────────────────────── */
const TEAL = "#1a5c52";
const TEAL_DARK = "#0d2b26";
const SAND = "#e8c99a";
const SAND_PALE = "#faf4ea";

/* ── types ───────────────────────────────────────────── */
interface PortfolioItem {
  swatch: string;
  title: string;
  sub: string;
}

/* ── BtnTeal ─────────────────────────────────────────── */
const BtnTeal: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      className="font-body inline-block no-underline transition-all duration-300 cursor-pointer"
      style={{
        background: hov ? TEAL : "transparent",
        color: hov ? SAND_PALE : TEAL,
        border: `1px solid ${hov ? TEAL : "rgba(26,92,82,.3)"}`,
        padding: ".9rem 2.5rem",
        fontSize: ".7rem",
        letterSpacing: ".2em",
        textTransform: "uppercase",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
};

/* ── Portfolio ───────────────────────────────────────── */
export const Portfolio: React.FC = () => {
  /* track lg breakpoint (≥1024 px) for masonry grid logic */
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="portfolio"
      className="
        bg-[#f2e4cc]
        py-20 px-6
        sm:py-24 sm:px-10
        lg:py-32 lg:px-20
      "
    >
      {/* ── heading ── */}
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <SectionTag>Our Work</SectionTag>
        <h2
          className="
            font-display font-light leading-tight
            text-[clamp(2.2rem,5vw,3.5rem)]
          "
          style={{ color: TEAL_DARK }}
        >
          A Gallery of
          <br />
          <em className="italic" style={{ color: TEAL }}>
            Craftsmanship
          </em>
        </h2>
      </div>

      {/* ── grid ──
          sm  → 1 column, all square
          md  → 2 columns, all square (simple flow)
          lg  → 3 columns, left & right items span 2 rows (masonry)
      ── */}
      <div
        className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3 lg:grid-rows-[auto_auto]
        "
      >
        {(PORTFOLIO as PortfolioItem[]).map((item, i) => {
          const isLeft = i === 0;
          const isRight = i === 2;
          const spans = isLg && (isLeft || isRight);

          return (
            <div
              key={item.title}
              className="portfolio-item relative overflow-hidden cursor-pointer"
              style={{
                gridColumn:
                  isLg && isLeft ? "1/2" : isLg && isRight ? "3/4" : undefined,
                gridRow: spans ? "1/3" : undefined,
              }}
            >
              {/* swatch background (sw1–sw5 CSS classes carry the gradient) */}
              <div
                className={`
                  ${item.swatch}
                  relative w-full
                  ${spans ? "h-full min-h-125" : "aspect-square"}
                `}
              >
                {/* hover overlay */}
                <div
                  className="
                    portfolio-overlay
                    absolute inset-0
                    flex flex-col justify-end
                    p-6
                    opacity-0 transition-opacity duration-400
                  "
                  style={{ background: "rgba(13,43,38,0.75)" }}
                >
                  <h3
                    className="font-display font-normal text-[1.2rem]"
                    style={{ color: SAND_PALE }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-[0.75rem] mt-1 tracking-widest uppercase"
                    style={{ color: SAND }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <div className="text-center mt-10 sm:mt-12">
        <BtnTeal href="#order">Commission a Piece →</BtnTeal>
      </div>
    </section>
  );
};
