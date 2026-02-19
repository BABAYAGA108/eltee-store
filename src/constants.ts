export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  num: string;
  title: string;
  desc: string;
  price: string;
}

export interface PortfolioItem {
  swatch: string;
  title: string;
  sub: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Stat {
  label: string;
  value: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Services",  href: "#services"  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About",     href: "#about"     },
];

export const SERVICES: Service[] = [
  {
    num: "01", title: "Custom Garments",
    desc: "From your imagination to a finished piece — bespoke clothing tailored to your exact measurements and style. Dresses, suits, traditional wear & more.",
    price: "Starting from ₦15,000",
  },
  {
    num: "02", title: "Alterations & Repairs",
    desc: "Give your favourite pieces a new life. We handle seams, hems, zippers, patches, and full restorations with care and precision.",
    price: "Starting from ₦3,000",
  },
  {
    num: "03", title: "Fabric & Materials",
    desc: "Curated silks, Ankara, Aso-Oke, lace and more — sourced with care and available for purchase or as part of your order.",
    price: "Available in-store",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { swatch: "sw1", title: "Evening Gown",    sub: "Custom · Teal Silk"     },
  { swatch: "sw2", title: "Corporate Suit",  sub: "Custom · Dark Teal"     },
  { swatch: "sw4", title: "Wedding Asoebi",  sub: "Custom · Gold Aso-Oke"  },
  { swatch: "sw3", title: "Ankara Dress",    sub: "Custom · Green Ankara"  },
  { swatch: "sw5", title: "Classic Blazer",  sub: "Alteration · Midnight"  },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "The gown she made for my wedding was absolutely breathtaking. She captured exactly what I envisioned and delivered beyond expectations.", author: "Adaeze O. · Bride, Lagos" },
  { quote: "Quick turnaround on my suit alterations and the finish was impeccable. You can tell she genuinely loves what she does.", author: "Emeka D. · Business Client" },
  { quote: "I brought in a dress I thought was ruined — she restored it perfectly. Incredible skill and such a warm, professional experience.", author: "Funmi B. · Returning Customer" },
];

export const STATS: Stat[] = [
  { label: "Turnaround Time", value: "7 – 21 Days"   },
  { label: "Location",        value: "Lagos, Nigeria" },
  { label: "Happy Clients",   value: "200+"           },
];