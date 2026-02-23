import { useState } from "react";

/* ── Brand tokens ─────────────────────────────── */
const C = {
  teal: "#1a5c52",
  tealDark: "#133f38",
  sand: "#e8c99a",
  sandPale: "#faf4ea",
} as const;

/* ── Types ────────────────────────────────────── */
interface BtnTealProps {
  href: string;
  children: React.ReactNode;
}

/* ── BtnTeal (outline, hover-fills teal) ─────── */
const BtnTeal: React.FC<BtnTealProps> = ({ href, children }) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      className="inline-block font-body text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-all duration-300 cursor-pointer px-10 py-3.5 border"
      style={{
        background: hov ? C.teal : "transparent",
        color: hov ? C.sandPale : C.teal,
        borderColor: hov ? C.teal : "rgba(26,92,82,0.3)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
};

/* ── Hero ─────────────────────────────────────── */
const Hero: React.FC = () => {
  const [orderHov, setOrderHov] = useState(false);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        body { background: #faf4ea; margin: 0; overflow-x: hidden; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body    { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .anim-fadeUp  { animation: fadeUp      .8s ease        both; }
        .anim-fadeUp1 { animation: fadeUp      .8s ease .15s   both; }
        .anim-fadeUp2 { animation: fadeUp      .8s ease .30s   both; }
        .anim-fadeUp3 { animation: fadeUp      .8s ease .45s   both; }
        .anim-fadeIn  { animation: fadeIn     1.2s ease  .2s   both; }
        .anim-slide   { animation: slideRight  .8s ease  .6s   both; }

        /* hero glow */
        .hero-left-glow::before {
          content: '';
          position: absolute;
          top: 15%; left: -2rem;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(26,92,82,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <section
        className="
          min-h-screen overflow-hidden pt-20
          grid grid-cols-1
          md:grid-cols-2
        "
      >
        {/* ── LEFT ───────────────────────────────── */}
        <div
          className="
            hero-left-glow relative flex flex-col justify-center
            px-8 py-20
            sm:px-12 sm:py-24
            md:px-14 md:py-24
            lg:pl-20 lg:pr-16 lg:py-24
          "
        >
          {/* Tag line */}
          <div
            className="anim-fadeUp font-body flex items-center gap-4 mb-6
                        text-[0.65rem] tracking-[0.3em] uppercase"
            style={{ color: C.teal }}
          >
            {/* dash pseudo-element replaced with a real span */}
            <span
              className="block w-10 h-px shrink-0"
              style={{ background: C.teal }}
            />
            Handcrafted with love · Est. 2020
          </div>

          {/* Headline */}
          <h1
            className="anim-fadeUp1 font-display font-light leading-[1.05] mb-8
                        text-5xl sm:text-6xl md:text-5xl lg:text-7xl"
            style={{ color: C.tealDark }}
          >
            Where Fabric
            <br />
            <em
              className="italic block"
              style={{
                fontStyle: "italic",
                color: C.sand,
              }}
            >
              Becomes Art
            </em>
          </h1>

          {/* Body copy */}
          <p
            className="anim-fadeUp2 font-body text-[0.95rem] leading-[1.9] max-w-md mb-12"
            style={{ color: "#5a8a82" }}
          >
            Bespoke garments, expert alterations, and curated fabrics — each
            piece crafted with care, precision, and a deep love for the craft.
          </p>

          {/* CTAs */}
          <div className="anim-fadeUp3 flex flex-wrap gap-3 sm:gap-4">
            {/* Solid teal CTA */}
            <a
              href="#order"
              className="font-body inline-block text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-all duration-300 border px-8 py-3.5 sm:px-10"
              style={{
                background: orderHov ? "transparent" : C.teal,
                color: orderHov ? C.teal : C.sandPale,
                borderColor: C.teal,
              }}
              onMouseEnter={() => setOrderHov(true)}
              onMouseLeave={() => setOrderHov(false)}
            >
              Place an Order
            </a>

            {/* Outline teal CTA */}
            <BtnTeal href="#portfolio">View Portfolio</BtnTeal>
          </div>
        </div>

        {/* ── RIGHT — teal decorative panel ──────── */}
        <div
          className="anim-fadeIn relative overflow-hidden
                      h-64 sm:h-80 md:h-auto"
          style={{ background: C.teal }}
        >
          {/* Leaf watermark tiled background */}
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.12,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 10 C60 40 20 80 30 130 C40 160 70 180 100 190 C130 180 160 160 170 130 C180 80 140 40 100 10Z' fill='none' stroke='%23e8c99a' stroke-width='1'/%3E%3Cpath d='M100 10 L100 190' stroke='%23e8c99a' stroke-width='.6'/%3E%3Cpath d='M50 70 Q100 90 150 70' fill='none' stroke='%23e8c99a' stroke-width='.5'/%3E%3Cpath d='M40 100 Q100 120 160 100' fill='none' stroke='%23e8c99a' stroke-width='.5'/%3E%3C/svg%3E")`,
              backgroundSize: "300px 300px",
            }}
          />

          {/* SVG decorative overlay */}
          <svg
            viewBox="0 0 600 800"
            fill="none"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {/* Dress / garment silhouette */}
            <path
              d="M300 80 C280 80 240 120 220 200 L180 400 C160 480 150 560 200 620 L220 700 L380 700 L400 620 C450 560 440 480 420 400 L380 200 C360 120 320 80 300 80Z"
              fill="rgba(232,201,154,0.07)"
              stroke="rgba(232,201,154,0.3)"
              strokeWidth="1"
            />
            {/* Neckline arc */}
            <path
              d="M260 80 C260 120 270 130 300 135 C330 130 340 120 340 80"
              fill="none"
              stroke="rgba(232,201,154,0.45)"
              strokeWidth="1"
            />
            {/* Waist dashed line */}
            <line
              x1="200"
              y1="300"
              x2="400"
              y2="300"
              stroke="rgba(232,201,154,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            {/* Needle + thread arc */}
            <circle
              cx="460"
              cy="180"
              r="8"
              fill="none"
              stroke="rgba(232,201,154,0.55)"
              strokeWidth="1.5"
            />
            <circle cx="460" cy="180" r="3" fill="rgba(232,201,154,0.3)" />
            <path
              d="M460 192 Q480 250 440 300 Q400 350 460 400"
              fill="none"
              stroke="rgba(232,201,154,0.3)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Decorative rings */}
            <circle
              cx="150"
              cy="550"
              r="30"
              fill="none"
              stroke="rgba(232,201,154,0.1)"
              strokeWidth="1"
            />
            <circle
              cx="150"
              cy="550"
              r="50"
              fill="none"
              stroke="rgba(232,201,154,0.06)"
              strokeWidth="1"
            />
            {/* Sparkle ✦ marks */}
            <text x="80" y="250" fill="rgba(232,201,154,0.28)" fontSize="14">
              ✦
            </text>
            <text x="490" y="500" fill="rgba(232,201,154,0.22)" fontSize="10">
              ✦
            </text>
            <text x="130" y="400" fill="rgba(232,201,154,0.16)" fontSize="8">
              ✦
            </text>
          </svg>

          {/* Floating stats badge */}
          <div
            className="anim-slide absolute left-0 bottom-8 sm:bottom-10 md:bottom-12
                        -translate-x-6 sm:-translate-x-8
                        px-6 py-5 sm:px-8 sm:py-6"
            style={{
              background: C.sandPale,
              borderLeft: `3px solid ${C.sand}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="font-display font-light leading-none
                          text-4xl sm:text-5xl"
              style={{ color: C.teal }}
            >
              200+
            </div>
            <div
              className="font-body text-[0.65rem] tracking-[0.2em] uppercase mt-1"
              style={{ color: "#5a8a82" }}
            >
              Satisfied Clients
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
