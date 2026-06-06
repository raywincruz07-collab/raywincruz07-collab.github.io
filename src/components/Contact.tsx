import React, { useState } from "react";
import { Mail, Copy, Check, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

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
      className="py-16 sm:py-20 bg-slate-950/40 border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in Touch
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-slate-400 text-xs sm:text-sm max-w-xl">
            For AI product, technical product management, GenAI/RAG, data
            science, machine learning, or cloud data product conversations,
            reach me directly through the channels below.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Messaging & Availability */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span>Current Focus</span>
              </span>
              <h3 className="font-bold text-slate-200 text-base mb-2">
                Professional Focus
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {message}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/10 border border-slate-900 p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Location Details
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Based in Mannheim, Baden-Württemberg, Germany. Working-student
                arrangements are feasible locally or hybrid/remote across
                Germany.
              </p>
            </div>
          </div>

          {/* Right Column: Recruiter CTA Cards Grid */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Email */}
              <a
                href={`mailto:${email}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/20 p-5 sm:p-6 shadow-md transition-all duration-300 hover:border-violet-500/35 hover:bg-slate-900/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/20 transition-colors">
                      <Mail className="h-5 w-5 text-violet-400" />
                    </div>

                    {/* Clipboard copy toggle */}
                    <button
                      onClick={copyEmail}
                      className="p-1.5 text-slate-500 hover:text-slate-200 bg-slate-950/60 hover:bg-slate-900 rounded-md border border-slate-800 hover:border-slate-800 transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                  <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base">
                    Email Raywin
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Send inquiries directly to my inbox.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-slate-300 select-all mt-4 font-mono">
                  {email}
                </span>
              </a>

              {/* Card 2: LinkedIn */}
              {linkedin ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/20 p-5 sm:p-6 shadow-md transition-all duration-300 hover:border-violet-500/35 hover:bg-slate-900/40"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/20 transition-colors mb-4">
                      {linkedinIconSvg}
                    </div>
                    <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Connect to discuss roles and professional background.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 mt-4">
                    Connect on LinkedIn &rarr;
                  </span>
                </a>
              ) : (
                <div
                  className="flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-900/5 p-5 sm:p-6 shadow-md opacity-40 cursor-not-allowed select-none"
                  title="LinkedIn Profile - Coming Soon"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 mb-4">
                      <svg
                        className="h-5 w-5 text-slate-500"
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
                    <h4 className="font-bold text-slate-400 text-sm sm:text-base">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Connect to discuss roles and professional background.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 mt-4">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Card 3: GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/20 p-5 sm:p-6 shadow-md transition-all duration-300 hover:border-violet-500/35 hover:bg-slate-900/40"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/20 transition-colors mb-4">
                    {githubIconSvg}
                  </div>
                  <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base">
                    GitHub
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Explore public repositories covering RAG evaluation, AI
                    product development, data mining, analytics, and system
                    design projects.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 mt-4">
                  Explore Repositories &rarr;
                </span>
              </a>

              {/* Card 4: CV */}
              {/* Note: The target PDF file must be placed inside the /public directory at the root of the project as Raywin_CV.pdf */}
              <a
                href="/Raywin_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/20 p-5 sm:p-6 shadow-md transition-all duration-300 hover:border-violet-500/35 hover:bg-slate-900/40"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-violet-500/20 transition-colors mb-4">
                    <FileText className="h-5 w-5 text-violet-400" />
                  </div>
                  <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base">
                    Download CV
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Download my CV for a concise overview of my education, SAP
                    HANA Cloud focus, technical skills, and project portfolio.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 mt-4">
                  Download CV (PDF) &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
