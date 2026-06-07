import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  alignment?: "center" | "left";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  heading,
  subtitle,
  alignment = "left",
}) => {
  const alignClass = alignment === "center" ? "text-center md:mx-auto" : "text-center md:text-left";
  const lineAlignClass = alignment === "center" ? "mx-auto" : "mx-auto md:mx-0";

  return (
    <div className={`mb-10 sm:mb-12 ${alignClass} max-w-3xl`}>
      <h4 className="text-[10px] sm:text-xs font-bold tracking-widest text-violet-400 uppercase mb-3">
        {eyebrow}
      </h4>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl mb-4">
        {heading}
      </h2>
      <div className={`h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full ${lineAlignClass} mb-6`}></div>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};
