import {
  Briefcase,
  ArrowDown,
  FileText,
  Cloud,
  Cpu,
  Brain,
  Mail,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { FadeIn } from "./FadeIn";

export const Hero: React.FC = () => {
  const { name, location, heroSummary } = portfolioData.personalInfo;

  return (
    <section className="relative pt-20 pb-16 md:pt-36 md:pb-28 flex flex-col justify-center border-b border-slate-900 bg-transparent">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 z-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-20 right-1/4 z-0 h-96 w-96 rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center w-full">
        <FadeIn delay={0.1}>
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-400 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-violet-500"></span>
            <span>{location}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm{" "}
            <span className="text-slate-100">
              {name}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          {/* Subtitle / Positioning */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto mb-6 tracking-wide leading-relaxed px-4">
            AI Product Management &middot; SAP HANA Cloud &middot; GenAI/RAG
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed px-2 sm:px-0">
            {heroSummary}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-xs sm:max-w-none mx-auto w-full px-4 sm:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </a>
            <a
              href="/Raywin_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-all duration-300 underline-offset-4 hover:underline"
            >
              <FileText className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-2 sm:px-0">
            <div className="flex flex-col items-center p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <Briefcase className="h-4 w-4 text-violet-400 mb-2" />
              <span className="text-xs font-semibold text-slate-300">
                Product Focus
              </span>
              <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
                Management
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <Brain className="h-4 w-4 text-fuchsia-400 mb-2" />
              <span className="text-xs font-semibold text-slate-300">
                Technical Base
              </span>
              <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
                Data Science
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <Cloud className="h-4 w-4 text-cyan-400 mb-2" />
              <span className="text-xs font-semibold text-slate-300">
                Platform Context
              </span>
              <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
                SAP HANA Cloud
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <Cpu className="h-4 w-4 text-purple-400 mb-2" />
              <span className="text-xs font-semibold text-slate-300">
                GenAI Focus
              </span>
              <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
                RAG Eval
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
