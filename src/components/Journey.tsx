import React from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Journey: React.FC = () => {
  const { journey } = portfolioData;

  return (
    <section
      id="journey"
      className="py-16 sm:py-20 bg-slate-950 border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Journey
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-slate-400 text-xs sm:text-sm max-w-md mx-auto px-2">
            Academic milestones, technical experience, and career trajectory in
            Germany.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-12 pl-6 md:pl-8 space-y-10 sm:space-y-12 max-w-3xl mx-auto">
          {journey.map((item) => {
            const isEducation = item.title.includes("M.Sc.");
            const isReady = item.title.includes("Readiness");

            return (
              <div key={item.title} className="relative group">
                {/* Connector Dot */}
                <span className="absolute -left-[35px] md:-left-[43px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-slate-850 group-hover:border-violet-500 transition-colors duration-300">
                  {isEducation ? (
                    <GraduationCap className="h-3 w-3 text-violet-400" />
                  ) : isReady ? (
                    <Calendar className="h-3 w-3 text-fuchsia-400" />
                  ) : (
                    <Briefcase className="h-3 w-3 text-purple-400" />
                  )}
                </span>

                {/* Card Container */}
                <div className="rounded-xl border border-slate-900/60 bg-slate-950/40 p-5 backdrop-blur-sm group-hover:border-slate-850 hover:bg-slate-900/10 transition-all duration-300">
                  {/* Period Badge if present */}
                  {item.period && (
                    <span className="inline-flex items-center rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-medium text-violet-400 mb-2">
                      {item.period}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-violet-400 transition-colors duration-250">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
