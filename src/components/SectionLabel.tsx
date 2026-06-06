import React from "react";

interface SectionLabelProps {
  number: string;
  name: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, name }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-violet-500/70 uppercase">
        {number}
      </span>
      <span className="h-px w-4 bg-violet-500/30" />
      <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
        {name}
      </span>
    </div>
  );
};
