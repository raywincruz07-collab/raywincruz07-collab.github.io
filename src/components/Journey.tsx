import React from "react";
import { Briefcase, Calendar, GraduationCap, Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

export const Journey: React.FC = () => {
  const { journey } = portfolioData;

  return (
    <section
      id="journey"
      className="py-16 sm:py-20 bg-transparent border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeIn>
          <SectionHeader 
            eyebrow="Experience" 
            heading="My Journey" 
            subtitle="A path combining AI product management, data science, GenAI/RAG evaluation, and hands-on technical project execution."
            alignment="center"
          />
        </FadeIn>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12 max-w-3xl mx-auto">
          {journey.map((item, index) => {
            const isEducation = item.title.includes("M.Sc.") || item.title.includes("B.Tech");
            const isSAP = item.title.includes("SAP HANA");
            const isReady = item.title.includes("Readiness");
            
            const cardGlow = isSAP ? "border-violet-500/40 bg-slate-900/60 shadow-lg shadow-violet-500/5" : "border-slate-800/80 bg-slate-950/60";

            return (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="relative group">
                  {/* Connector Dot */}
                  <span className={`absolute -left-[37px] md:-left-[53px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 border-2 ${isSAP ? 'border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]' : 'border-slate-700'} group-hover:border-violet-400 transition-all duration-300 z-10`}>
                    {isSAP ? (
                      <Star className="h-3.5 w-3.5 text-violet-400" />
                    ) : isEducation ? (
                      <GraduationCap className="h-3 w-3 text-slate-400" />
                    ) : isReady ? (
                      <Calendar className="h-3 w-3 text-slate-400" />
                    ) : (
                      <Briefcase className="h-3 w-3 text-slate-400" />
                    )}
                  </span>

                  {/* Card Container */}
                  <div className={`rounded-xl border p-6 backdrop-blur-md transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-700 ${cardGlow}`}>
                    {/* Period Badge if present */}
                    {item.period && (
                      <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-800 mb-4">
                        {item.period}
                      </span>
                    )}
                    <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-250 ${isSAP ? 'text-violet-300' : 'text-slate-100'} group-hover:text-violet-400`}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
