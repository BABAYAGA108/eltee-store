import { useState, useEffect } from "react";

/* ── Types ────────────────────────────────────────────── */
interface NavItem {
  label: string;
  href: string;
}

interface LogoMarkProps {
  size?: number;
}

/* ── Constants ────────────────────────────────────────── */
const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/* ── Brand colour tokens (not in Tailwind's default palette) ── */
const C = {
  teal: "#2a6b6b",
  tealDark: "#1a4545",
  sand: "#c8ad82",
  sandPale: "#f5efe4",
} as const;

/* ── Logo ─────────────────────────────────────────────── */
const LogoMark: React.FC<LogoMarkProps> = ({ size = 30 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="10" height="22" fill={C.teal} />
    <rect x="4" y="22" width="18" height="4" fill={C.teal} />
    <rect x="16" y="4" width="10" height="4" fill={C.sand} />
    <rect x="16" y="12" width="10" height="4" fill={C.sand} />
  </svg>
);

/* ── Hamburger bar (one of three) ─────────────────────── */
interface BarProps {
  open: boolean;
  index: 0 | 1 | 2;
}
const Bar: React.FC<BarProps> = ({ open, index }) => {
  const transforms: Record<number, string> = {
    0: open ? "translateY(6.5px) rotate(45deg)" : "none",
    1: open ? "scaleX(0)" : "none",
    2: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
  };
  return (
    <span
      className="block h-px w-6 transition-all duration-300 ease-in-out"
      style={{
        background: C.teal,
        opacity: open && index === 1 ? 0 : 1,
        transform: transforms[index],
        transformOrigin: "center",
      }}
    />
  );
};

/* ── Navbar ───────────────────────────────────────────── */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Jost:wght@300;400;600&display=swap');
        body { background:#f0e8d8; min-height:200vh; }
        .font-display { font-family:'Cormorant Garamond',serif; }
        .font-body    { font-family:'Jost',sans-serif; }
      `}</style>

      {/* ── Mobile drawer (sm only) ────────────────────── */}
      <div
        aria-hidden={!menuOpen}
        className={[
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10",
          "backdrop-blur-xl transition-all duration-300 ease-in-out sm:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-3",
        ].join(" ")}
        style={{ background: "rgba(245,239,228,0.98)" }}
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="font-display text-3xl font-normal uppercase tracking-widest no-underline
                       transition-opacity duration-200 hover:opacity-50"
            style={{ color: C.teal }}
          >
            {label}
          </a>
        ))}

        {/* Mobile CTA */}
        <a
          href="#order"
          onClick={closeMenu}
          className="mt-4 inline-block border-2 px-10 py-3 font-body text-xs
                     font-semibold uppercase tracking-[0.22em] no-underline
                     transition-all duration-300"
          style={{
            borderColor: C.sand,
            background: C.sand,
            color: C.tealDark,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.color = C.tealDark;
            el.style.borderColor = C.tealDark;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = C.sand;
            el.style.color = C.tealDark;
            el.style.borderColor = C.sand;
          }}
        >
          Place an Order
        </a>
      </div>

      {/* ── Navbar ────────────────────────────────────── */}
      <nav
        className={[
          "fixed left-0 right-0 top-0 z-50 flex items-center justify-between",
          "transition-all duration-300 ease-in-out",

          /* sm  */ "px-5 py-3",
          /* md  */ "md:px-8 md:py-4",
          /* lg+ */ "lg:px-12 lg:py-4",

          scrolled
            ? "border-b shadow-lg backdrop-blur-md"
            : "border-b border-transparent bg-transparent shadow-none",
        ].join(" ")}
        style={
          scrolled
            ? {
                background: "rgba(245,239,228,0.93)",
                borderColor: "rgba(42,107,107,0.1)",
              }
            : undefined
        }
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <LogoMark size={30} />
          <span
            className="font-display font-semibold tracking-wider
                       text-xl sm:text-xl md:text-2xl"
            style={{ color: C.teal }}
          >
            EL-TEE
          </span>
        </a>

        {/* ── Desktop nav (md+) ─────────────────────── */}
        <ul
          className="hidden items-center list-none sm:flex
                       gap-6 md:gap-8 lg:gap-10"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-body font-light uppercase no-underline
                           transition-opacity duration-300 hover:opacity-50
                           text-[0.65rem] tracking-[0.14em]
                           md:text-[0.65rem] md:tracking-[0.14em]
                           lg:text-[0.7rem] lg:tracking-[0.18em]"
                style={{ color: C.teal }}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Desktop CTA */}
          <li>
            <a
              href="#order"
              className="inline-block border-2 font-body font-semibold uppercase
                         no-underline transition-all duration-300 cursor-pointer
                         px-5 py-2 text-[0.63rem] tracking-[0.18em]
                         md:px-6 md:py-2.5 md:text-[0.63rem]
                         lg:px-8 lg:py-2.5 lg:text-[0.68rem] lg:tracking-[0.22em]"
              style={{
                borderColor: C.sand,
                background: C.sand,
                color: C.tealDark,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = C.sand;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = C.sand;
                el.style.color = C.tealDark;
              }}
            >
              Place an Order
            </a>
          </li>
        </ul>

        {/* ── Hamburger (sm only) ───────────────────── */}
        <button
          className="flex flex-col gap-1.5 bg-transparent border-none
                     cursor-pointer p-1 z-50 sm:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <Bar open={menuOpen} index={0} />
          <Bar open={menuOpen} index={1} />
          <Bar open={menuOpen} index={2} />
        </button>
      </nav>

      {/* Demo spacer */}
      <div
        className="pt-28 pl-12 font-display text-base tracking-widest opacity-30"
        style={{ color: C.tealDark }}
      >
        Scroll down to see the navbar transition ↓
      </div>
    </>
  );
};

export default Navbar;
