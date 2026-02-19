import React from "react";
import { useScrolled } from "../hooks";
import { NAV_ITEMS } from "../constants";
import { LogoMark } from "./LogoMark";

export const Navbar: React.FC = () => {
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-900 flex justify-between items-center px-12 py-4 transition-all duration-400 ${
        scrolled
          ? "bg-sand-pale/93 backdrop-blur-md border-b border-teal/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="flex items-center gap-2 no-underline">
        <LogoMark variant="teal" size={30} />
        <span className="font-display text-2xl font-semibold tracking-wider text-teal">
          EL-TEE
        </span>
      </a>

      <ul className="flex gap-10 list-none items-center">
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link font-body text-[0.7rem] font-light tracking-widest uppercase text-teal no-underline transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          {/* Sand button styled inline */}
          <a
            href="#order"
            className="inline-block px-8 py-2.5 font-body text-[0.68rem] tracking-[0.22em] uppercase font-semibold no-underline transition-all duration-300 cursor-pointer border-2 border-sand bg-sand text-teal-dark hover:bg-transparent hover:text-sand"
          >
            Place an Order
          </a>
        </li>
      </ul>
    </nav>
  );
};
