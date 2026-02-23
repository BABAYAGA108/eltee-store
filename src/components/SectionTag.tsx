import React from "react";
interface SectionTagProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionTag({
  children,
  light = false,
}: SectionTagProps): React.ReactNode {
  return (
    <div
      className={`font-sans flex items-center gap-3 mb-4 text-[10px] md:text-xs tracking-[0.3em] uppercase ${
        light ? "text-[#e8c99a]/75" : "text-[#1a5c52]/75"
      }`}
    >
      <span className="block w-7 h-px bg-current" />
      {children}
    </div>
  );
}
