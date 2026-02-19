import React from "react";
import { LogoMark } from "./LogoMark";

export const Footer: React.FC = () => {
  const links = {
    Services: [
      "Custom Garments",
      "Alterations",
      "Fabric & Materials",
      "Bridal",
    ],
    Contact: [
      "WhatsApp Us",
      "Instagram",
      "Visit the Studio",
      "Book a Consultation",
    ],
  };

  return (
    <>
      <footer className="bg-teal-900 bg-ink py-16 px-20 grid grid-cols-[2fr_1fr_1fr] gap-16 items-start">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <LogoMark variant="sand" size={28} />
            <span className="font-display text-2xl font-semibold tracking-wider text-sand">
              EL-TEE
            </span>
          </div>
          <p className="text- font-body text-sm text-sand/35 leading-relaxed max-w-65">
            Bespoke seamstress services crafted with love, skill, and an eye for
            detail. Based in Lagos, serving clients across Nigeria.
          </p>
        </div>
        {Object.entries(links).map(([col, items]) => (
          <div key={col}>
            <h4 className="font-body text-[0.65rem] tracking-widest uppercase text-sand mb-6">
              {col}
            </h4>
            <ul className="list-none flex flex-col gap-3">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-sand/38 no-underline transition-colors duration-300 hover:text-sand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="bg-ink px-20 pb-6 pt-3 border-t border-sand/8 flex justify-between">
        <p className="font-body text-xs tracking-wide text-sand/22">
          © 2025 El-Tee. All rights reserved.
        </p>
        <p className="font-body text-xs tracking-wide text-sand/22">
          Crafted with ✦ in Lagos
        </p>
      </div>
    </>
  );
};
