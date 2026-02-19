import React from "react";

interface LogoMarkProps {
  variant?: "teal" | "sand";
  size?: number;
}

export const LogoMark: React.FC<LogoMarkProps> = ({
  variant = "teal",
  size = 32,
}) => {
  const bgColor = variant === "teal" ? "bg-teal" : "bg-sand";
  const textColor = variant === "teal" ? "text-sand-pale" : "text-teal-dark";
  return (
    <div
      className={`${bgColor} ${textColor} flex items-center justify-center font-bold rounded`}
      style={{ width: size, height: size, fontSize: size * 0.5 }}
    >
      ET
    </div>
  );
};
