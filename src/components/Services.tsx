import React, { useState, MouseEvent } from "react";
import { SERVICES } from "../constants";
import { SectionTag } from "./SectionTag";
import { Reveal } from "./Reveal";

/* ── brand tokens ──────────────────────────────────────── */
const SAND = "#e8c99a";
const SAND_PALE = "#faf4ea";
const TEAL = "#1a5c52";

/* ── types ─────────────────────────────────────────────── */
interface Service {
  num: string;
  title: string;
  desc: string;
  price: string;
}

/* ── ServiceCard ──────────────────────────────────────── */
/* Hover colours use rgba values that can't be expressed
   as Tailwind arbitrary classes without PurgeCSS removing
   them, so we swap them via onMouse* handlers instead.    */
const CARD_BG_DEFAULT = "rgba(255,255,255,0.04)";
const CARD_BG_HOVER = "rgba(232,201,154,0.07)";
const CARD_BD_DEFAULT = "rgba(232,201,154,0.12)";
const CARD_BD_HOVER = "rgba(232,201,154,0.35)";

interface CardProps {
  svc: Service;
}

const ServiceCard: React.FC<CardProps> = ({ svc }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="service-card cursor-pointer transition-all duration-300 h-full"
      style={{
        background: hov ? CARD_BG_HOVER : CARD_BG_DEFAULT,
        border: `1px solid ${hov ? CARD_BD_HOVER : CARD_BD_DEFAULT}`,
        padding: "3rem 2.5rem",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* number */}
      <div
        className="font-display font-light leading-none mb-6"
        style={{ fontSize: "3.5rem", color: "rgba(232,201,154,0.18)" }}
      >
        {svc.num}
      </div>

      {/* title */}
      <div
        className="font-display leading-tight mb-4"
        style={{ fontSize: "1.5rem", lineHeight: 1.2, color: SAND_PALE }}
      >
        {svc.title}
      </div>

      {/* description */}
      <p
        className="font-body text-[0.85rem]"
        style={{ lineHeight: 1.8, color: "rgba(242,228,204,0.5)" }}
      >
        {svc.desc}
      </p>

      {/* price */}
      <div
        className="font-body text-[0.7rem] tracking-[0.15em] uppercase mt-8 pt-6"
        style={{
          borderTop: "1px solid rgba(232,201,154,0.2)",
          color: SAND,
        }}
      >
        {svc.price}
      </div>
    </div>
  );
};

/* ── Services ─────────────────────────────────────────── */
export const Services: React.FC = () => {
  const onEnter = (e: MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.opacity = "1");
  const onLeave = (e: MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.opacity = "0.8");

  return (
    <section
      id="services"
      className="relative overflow-hidden
        py-20 px-6
        sm:py-24 sm:px-10
        lg:py-32 lg:px-20"
      style={{ background: TEAL }}
    >
      {/* ── decorative circle ── */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-6rem",
          right: "-6rem",
          width: 400,
          height: 400,
          background: "rgba(232,201,154,0.06)",
        }}
      />

      {/* ══ HEADER ══════════════════════════════════════════
          sm/md → stacked column, link below heading
          lg    → side-by-side row, link aligned to bottom-right
      ═══════════════════════════════════════════════════════ */}
      <div
        className="
          relative z-10
          flex flex-col gap-5
          sm:flex-col sm:gap-5
          lg:flex-row lg:items-end lg:justify-between
          mb-12 sm:mb-16 lg:mb-20
        "
      >
        {/* heading block */}
        <div>
          <SectionTag light>What We Offer</SectionTag>
          <h2
            className="font-display font-light leading-[1.1]"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              color: SAND_PALE,
            }}
          >
            Crafted for
            <br />
            <em className="italic" style={{ color: SAND }}>
              Every Occasion
            </em>
          </h2>
        </div>

        {/* CTA link — sits below heading on sm/md, right-aligned on lg */}
        <a
          href="#order"
          className="
            font-body text-[0.7rem] tracking-[0.2em] uppercase no-underline
            transition-opacity duration-200
            self-start lg:self-auto lg:mb-2
          "
          style={{ color: SAND, opacity: 0.8 }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          Request a Service →
        </a>
      </div>

      {/* ══ CARDS GRID ══════════════════════════════════════
          sm  → 1 column, full-width stacked
          md  → 2 columns
          lg  → 3 columns, gap-px (hairline divider look)
      ═══════════════════════════════════════════════════════ */}
      <div
        className="
          relative z-10
          grid gap-4
          grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3 lg:gap-px
        "
      >
        {(SERVICES as Service[]).map((svc, i) => (
          <Reveal key={svc.num} delay={i as 0 | 1 | 2}>
            <ServiceCard svc={svc} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
