import React from "react";
import { User, Briefcase, Code } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionLabel } from "./SectionLabel";

export const About: React.FC = () => {
  const { about } = portfolioData.personalInfo;

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-slate-950/40 border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center md:text-left">
          <SectionLabel number="02" name="Profile" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Column */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
              {about}
            </p>

            {/* Value Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm sm:text-base">
                    Product Management Core
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Researching use cases, structuring requirements, evaluating
                    feasibility, and translating technical findings into product
                    direction.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm sm:text-base">
                    Technical Execution Base
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Building and evaluating AI/data projects using Python, SQL,
                    machine learning, retrieval workflows, and analytics
                    methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Context Card Column */}
          <div className="md:col-span-5 w-full">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6 shadow-xl backdrop-blur-sm">
              <div className="absolute -top-3 right-6 flex h-6 items-center rounded-full bg-violet-600 px-3 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
                Current Profile
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-violet-400">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 text-base sm:text-lg">
                    Technical AI Product Profile
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-tight">
                    AI Product Management &middot; Data Science &middot;
                    GenAI/RAG
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <span>
                    Current focus: AI Product Management related to SAP HANA
                    Cloud
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <span>
                    Strong technical base in data science, ML evaluation, and
                    GenAI/RAG workflows
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <span>
                    Able to connect product requirements with technical
                    feasibility
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <span>Germany-based with working-student authorization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
