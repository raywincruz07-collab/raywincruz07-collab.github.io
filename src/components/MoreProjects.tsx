import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const MoreProjects: React.FC = () => {
  const { moreProjects } = portfolioData;

  const githubIconSvg = (
    <svg className="h-4 w-4 text-slate-400 group-hover:text-violet-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  return (
    <section id="more-projects" className="py-16 bg-slate-950 border-b border-slate-900 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
            More Projects
          </h2>
          <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-slate-400 text-xs max-w-3xl leading-relaxed">
            Additional academic, AI, data science, and software projects showing breadth across machine learning, analytics, NLP, data integration, and product-oriented AI work.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {moreProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-350 hover:border-slate-800 hover:bg-slate-900/20"
            >
              <div className="space-y-3">
                {/* Category & Title */}
                <div>
                  <span className="inline-flex items-center rounded-md bg-slate-950 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-slate-500 border border-slate-900">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm mt-1.5 leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* One-line Description */}
                <p className="text-slate-400 text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded bg-slate-950 px-1.5 py-0.5 text-[8.5px] font-medium text-slate-500 border border-slate-900/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Button or Academic Label */}
              <div className="pt-4 mt-auto">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    {githubIconSvg}
                    <span>GitHub &rarr;</span>
                  </a>
                ) : (
                  <span
                    className="text-[9.5px] font-semibold text-slate-500 uppercase tracking-wider select-none"
                  >
                    Academic / Internal Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
