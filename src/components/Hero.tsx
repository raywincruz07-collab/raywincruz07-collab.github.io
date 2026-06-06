import { GraduationCap, MapPin, Briefcase, ArrowDown, FileText, Cloud, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { name, location, heroSummary } = portfolioData.personalInfo;

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col justify-center border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/20 via-slate-950 to-slate-950">
      
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-12 right-1/4 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/5 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-400 mb-6 hover:border-violet-500/30 transition-colors">
          <MapPin className="h-3.5 w-3.5 text-violet-400" />
          <span>{location}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">{name}</span>
        </h1>

        {/* Subtitle / Positioning */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 max-w-3xl mx-auto mb-6 tracking-wide leading-relaxed">
          M.Sc. Data Science &middot; AI Product Management
          <br className="hidden sm:inline" /> <span className="sm:hidden">&middot; </span>
          SAP HANA Cloud &middot; GenAI/RAG
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {heroSummary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500 hover:shadow-violet-500/35 transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all duration-300"
          >
            <span>Contact Me</span>
          </a>
          {/* Note: The PDF file must be placed inside the "/public" directory at the root of the project as Raywin_CV.pdf */}
          <a
            href="/Raywin_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800/40 bg-slate-950/40 px-6 py-3.5 text-sm font-medium text-slate-400 hover:text-slate-200 hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300"
          >
            <FileText className="h-4 w-4 text-violet-400" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col items-center p-4 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm hover:border-slate-850 transition-colors">
            <GraduationCap className="h-6 w-6 text-violet-400 mb-2" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Education</span>
            <span className="text-sm font-semibold text-slate-200">M.Sc. Data Science</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm hover:border-slate-850 transition-colors">
            <GraduationCap className="h-6 w-6 text-fuchsia-400 mb-2" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">University</span>
            <span className="text-sm font-semibold text-slate-200">Mannheim</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm hover:border-slate-850 transition-colors col-span-2 md:col-span-1">
            <Cloud className="h-6 w-6 text-indigo-400 mb-2" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Platform</span>
            <span className="text-sm font-semibold text-slate-200">SAP HANA Cloud</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm hover:border-slate-850 transition-colors">
            <Briefcase className="h-6 w-6 text-purple-400 mb-2" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Current Role</span>
            <span className="text-sm font-semibold text-slate-200">AI Product Management</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm hover:border-slate-850 transition-colors">
            <Cpu className="h-6 w-6 text-pink-400 mb-2" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Focus Area</span>
            <span className="text-sm font-semibold text-slate-200">GenAI/RAG Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};
