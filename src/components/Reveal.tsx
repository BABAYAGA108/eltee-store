import React from "react";
import { useReveal } from "../hooks";

interface RevealProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const ref = useReveal();
  const cls =
    delay === 1
      ? "reveal reveal-d1"
      : delay === 2
        ? "reveal reveal-d2"
        : "reveal";
  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
};
