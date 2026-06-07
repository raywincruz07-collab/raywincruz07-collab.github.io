import {
  Terminal,
  Database,
  Brain,
  Cpu,
  Wrench,
  Briefcase,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "product management / ai product":
        return <Briefcase className="h-5 w-5 text-violet-400" />;
      case "programming":
        return <Terminal className="h-5 w-5 text-violet-400" />;
      case "data science / ml":
        return <Brain className="h-5 w-5 text-fuchsia-400" />;
      case "genai / rag":
        return <Cpu className="h-5 w-5 text-purple-400" />;
      case "data / cloud systems":
        return <Database className="h-5 w-5 text-indigo-400" />;
      case "tools & bi":
        return <Wrench className="h-5 w-5 text-pink-400" />;
      default:
        return <Wrench className="h-5 w-5 text-pink-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "product management / ai product":
        return "border-violet-500/20 hover:border-violet-500/40 bg-violet-950/5";
      case "programming":
        return "border-violet-500/20 hover:border-violet-500/40 bg-violet-950/5";
      case "data science / ml":
        return "border-fuchsia-500/20 hover:border-fuchsia-500/40 bg-fuchsia-950/5";
      case "genai / rag":
        return "border-purple-500/20 hover:border-purple-500/40 bg-purple-950/5";
      case "data / cloud systems":
        return "border-indigo-500/20 hover:border-indigo-500/40 bg-indigo-950/5";
      case "tools & bi":
        return "border-pink-500/20 hover:border-pink-500/40 bg-pink-950/5";
      default:
        return "border-pink-500/20 hover:border-pink-500/40 bg-pink-950/5";
    }
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-transparent border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Skillset
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-md mx-auto px-2">
            Practical tools and methodologies applied throughout M.Sc.
            coursework and project developments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 ${getCategoryColor(group.category)}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="font-bold text-slate-100 tracking-wide text-sm sm:text-md">
                  {group.category}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg bg-slate-900/80 px-2.5 py-1.5 text-xs font-medium text-slate-300 border border-slate-800/60 hover:text-slate-100 hover:border-slate-700/80 transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
