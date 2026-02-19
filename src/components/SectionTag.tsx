import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
  light?: boolean;
}

export const SectionTag: React.FC<SectionTagProps> = ({
  children,
  light = false,
}) => {
  return (
    <div
      className={`font-body flex items-center gap-3 mb-4 text-[0.65rem] tracking-[0.3em] uppercase opacity-75 ${light ? "text-sand" : "text-teal"}`}
    >
      <span className={`block w-7 h-px ${light ? "bg-sand" : "bg-teal"}`} />
      {children}
    </div>
  );
};
