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
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

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
        <FadeIn>
          <SectionHeader 
            eyebrow="Selected Work" 
            heading="Featured Projects" 
            subtitle="Selected projects showing how I move from problem framing to technical implementation, evaluation, and product-relevant insight across GenAI/RAG, NLP, data mining, logistics analytics, and annotation workflows."
            alignment="left"
          />
        </FadeIn>

        {/* Projects Stack */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.1}>
              <div
                className="group rounded-2xl border border-white/5 bg-slate-900/60 p-6 md:p-8 shadow-2xl backdrop-blur-md hover:border-violet-500/30 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  {/* Text Context Area */}
                  <div className="flex-1 space-y-6">
                    {/* Title & Icon Header */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                        {getProjectIcon(index)}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Problem Statement */}
                      <div className="space-y-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                          The Problem
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium">
                          {project.problem}
                        </p>
                      </div>

                      {/* What I Built */}
                      <div className="space-y-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                          What I Built
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium">
                          {project.whatIBuilt}
                        </p>
                      </div>
                    </div>

                    {/* Outcome / Learning */}
                    <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-5 shadow-inner">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-violet-400 mb-2">
                        Impact & Learnings
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-slate-800/50 px-3 py-1 text-[11px] font-semibold text-slate-300 border border-slate-700/50"
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
                        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-5 py-3 text-xs font-bold text-slate-900 hover:bg-white transition-all w-full shadow-lg"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950/40 px-5 py-3 text-xs font-bold text-slate-600 cursor-not-allowed w-full"
                        title="Repository Coming Soon"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-5 py-3 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all w-full"
                      >
                        <FileText className="h-4 w-4 text-violet-400" />
                        <span>Case Study</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
