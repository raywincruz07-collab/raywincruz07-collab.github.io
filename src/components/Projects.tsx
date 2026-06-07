import React from "react";
import {
  Search,
  Bot,
  TrendingUp,
  MessageSquare,
  Truck,
  FileText,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="h-5 w-5 text-violet-400" />;
      case 1:
        return <Bot className="h-5 w-5 text-fuchsia-400" />;
      case 2:
        return <TrendingUp className="h-5 w-5 text-purple-400" />;
      case 3:
        return <MessageSquare className="h-5 w-5 text-indigo-400" />;
      default:
        return <Truck className="h-5 w-5 text-pink-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-transparent border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Selected projects showing how I move from problem framing to
            technical implementation, evaluation, and product-relevant insight
            across GenAI/RAG, NLP, data mining, logistics analytics, and
            annotation workflows.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-6 md:p-8 shadow-xl backdrop-blur-sm hover:border-violet-500/20 hover:bg-slate-900/60 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Text Context Area */}
                <div className="flex-1 space-y-4">
                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950 border border-slate-800/80">
                      {getProjectIcon(index)}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                      The Problem
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* What I Built */}
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                      What I Built
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                      {project.whatIBuilt}
                    </p>
                  </div>

                  {/* Outcome / Learning */}
                  <div className="rounded-xl bg-slate-950/40 border border-slate-900/60 p-3.5 sm:p-4">
                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-violet-400">
                      Impact & Learnings
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-slate-950 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-slate-400 border border-slate-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button Action Column */}
                <div className="flex flex-row md:flex-col gap-3 shrink-0 pt-2 w-full md:w-auto">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors w-full"
                    >
                      <svg
                        className="h-4 w-4 text-slate-400 group-hover:text-white"
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
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-slate-900 bg-slate-950/20 px-4 py-2.5 text-xs font-semibold text-slate-500 cursor-not-allowed opacity-40 w-full"
                      title="Repository Coming Soon"
                    >
                      <svg
                        className="h-4 w-4"
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
                      <span>Coming Soon</span>
                    </button>
                  )}

                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800/40 bg-slate-900/20 px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-slate-200 hover:border-slate-800 transition-colors w-full"
                    >
                      <FileText className="h-4 w-4 text-violet-400/80" />
                      <span>Case Study</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
