import React, { useEffect, useState } from "react";

interface NavSection {
  id: string;
  number: string;
  label: string;
}

const sections: NavSection[] = [
  { id: "hero", number: "01", label: "Command Center" },
  { id: "about", number: "02", label: "Profile" },
  { id: "work-focus", number: "03", label: "Product OS" },
  { id: "skills", number: "04", label: "Capability Stack" },
  { id: "projects", number: "05", label: "Evidence Board" },
  { id: "journey", number: "06", label: "Signal Trail" },
  { id: "contact", number: "07", label: "Console" },
];

export const VerticalNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    // Desktop only — completely hidden on mobile/tablet
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-800/60" />

      {sections.map(({ id, number, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center gap-3 py-2"
            title={`${number} / ${label}`}
          >
            {/* Dot */}
            <span
              className={`relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all duration-300 ${
                isActive
                  ? "border-violet-500 bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                  : "border-slate-700 bg-slate-950 group-hover:border-violet-500/60"
              }`}
            >
              {isActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </span>

            {/* Label — appears on hover */}
            <span
              className={`absolute left-6 whitespace-nowrap rounded-md border border-slate-800 bg-slate-950/90 px-2 py-1 font-mono text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-sm ${
                isActive ? "text-violet-400" : "text-slate-400"
              }`}
            >
              <span className="text-violet-500/70 mr-1">{number}</span>
              {label}
            </span>
          </a>
        );
      })}
    </div>
  );
};
