import React from "react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

export const MoreProjects: React.FC = () => {
  const { moreProjects } = portfolioData;

  const githubIconSvg = (
    <svg
      className="h-4 w-4 text-slate-400 group-hover:text-violet-400 transition-colors"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  return (
    <section
      id="more-projects"
      className="py-16 bg-transparent border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeIn>
          <SectionHeader 
            eyebrow="Additional Work" 
            heading="More Projects" 
            subtitle="Additional academic, analytics, and AI/data projects showing breadth across machine learning, NLP, data integration, knowledge organization, and business reporting."
            alignment="left"
          />
        </FadeIn>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {moreProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.05}>
              <div
                className="group h-full flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-md transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/60 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  {/* Category & Title */}
                  <div>
                    <span className="inline-flex items-center rounded-md bg-slate-950 px-2.5 py-1 text-[10px] font-bold tracking-widest text-slate-400 border border-slate-800 uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-bold text-slate-100 group-hover:text-violet-400 transition-colors text-base mt-3 leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* One-line Description */}
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-slate-400 border border-slate-800/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button or Academic Label */}
                <div className="pt-6 mt-auto">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors border border-slate-700 bg-slate-800/50 px-3 py-1.5 rounded-lg hover:bg-slate-700"
                    >
                      {githubIconSvg}
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest select-none">
                      Academic / Internal
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
