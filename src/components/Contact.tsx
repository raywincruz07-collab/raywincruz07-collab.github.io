import React, { useState } from "react";
import { Mail, Copy, Check, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

export const Contact: React.FC = () => {
  const { email, github, linkedin, message } = portfolioData.personalInfo;
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedinIconSvg = (
    <svg
      className="h-5 w-5 text-violet-400 group-hover:text-violet-350"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const githubIconSvg = (
    <svg
      className="h-5 w-5 text-violet-400 group-hover:text-violet-350"
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
      id="contact"
      className="py-16 sm:py-20 bg-transparent border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeIn>
          <SectionHeader 
            eyebrow="Contact" 
            heading="Get in Touch" 
            subtitle="For AI product, technical product management, GenAI/RAG, data science, machine learning, or cloud data product conversations, reach me directly through the channels below."
            alignment="left"
          />
        </FadeIn>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Messaging & Availability */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6 shadow-md backdrop-blur-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-violet-400 mb-4 border border-violet-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                  <span>Current Focus</span>
                </span>
                <h3 className="font-bold text-slate-100 text-lg mb-3">
                  Professional Focus
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  {message}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-xl bg-slate-900/40 border border-slate-800 p-5 backdrop-blur-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Location Details
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  Based in Mannheim, Baden-Württemberg, Germany. Working-student
                  arrangements are feasible locally or hybrid/remote across
                  Germany.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Recruiter CTA Cards Grid */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Email */}
              <FadeIn delay={0.1}>
                <a
                  href={`mailto:${email}`}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/60"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/30 transition-colors shadow-inner">
                        <Mail className="h-6 w-6 text-violet-400" />
                      </div>

                      {/* Clipboard copy toggle */}
                      <button
                        onClick={copyEmail}
                        className="p-2 text-slate-500 hover:text-slate-200 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <h4 className="font-bold text-slate-100 group-hover:text-violet-400 transition-colors text-base mb-2">
                      Email Raywin
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      Send inquiries directly to my inbox.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-300 select-all mt-6 font-mono bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800 inline-block w-fit">
                    {email}
                  </span>
                </a>
              </FadeIn>

              {/* Card 2: LinkedIn */}
              <FadeIn delay={0.2}>
                {linkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/60"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/30 transition-colors shadow-inner mb-5">
                        {linkedinIconSvg}
                      </div>
                      <h4 className="font-bold text-slate-100 group-hover:text-violet-400 transition-colors text-base mb-2">
                        LinkedIn
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">
                        Connect to discuss roles and professional background.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-slate-400 mt-6 inline-flex items-center gap-1.5 group-hover:text-violet-400 transition-colors">
                      Connect on LinkedIn &rarr;
                    </span>
                  </a>
                ) : (
                  <div
                    className="flex h-full flex-col justify-between rounded-2xl border border-slate-900 bg-slate-900/10 p-6 shadow-md opacity-50 cursor-not-allowed select-none"
                    title="LinkedIn Profile - Coming Soon"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 mb-5 shadow-inner">
                        <svg
                          className="h-6 w-6 text-slate-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-400 text-base mb-2">
                        LinkedIn
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        Connect to discuss roles and professional background.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 mt-6 uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                )}
              </FadeIn>

              {/* Card 3: GitHub */}
              <FadeIn delay={0.3}>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/60"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/30 transition-colors shadow-inner mb-5">
                      {githubIconSvg}
                    </div>
                    <h4 className="font-bold text-slate-100 group-hover:text-violet-400 transition-colors text-base mb-2">
                      GitHub
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      Explore public repositories covering RAG evaluation, AI
                      product development, data mining, analytics, and system
                      design projects.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-400 mt-6 inline-flex items-center gap-1.5 group-hover:text-violet-400 transition-colors">
                    Explore Repositories &rarr;
                  </span>
                </a>
              </FadeIn>

              {/* Card 4: CV */}
              <FadeIn delay={0.4}>
                <a
                  href="/Raywin_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/60"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/30 transition-colors shadow-inner mb-5">
                      <FileText className="h-6 w-6 text-violet-400" />
                    </div>
                    <h4 className="font-bold text-slate-100 group-hover:text-violet-400 transition-colors text-base mb-2">
                      Download CV
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      Download my CV for a concise overview of my education, SAP
                      HANA Cloud focus, technical skills, and project portfolio.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-400 mt-6 inline-flex items-center gap-1.5 group-hover:text-violet-400 transition-colors">
                    Download CV (PDF) &rarr;
                  </span>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
