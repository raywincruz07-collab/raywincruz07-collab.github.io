import React from "react";
import { Compass, Cpu, FileText, Brain } from "lucide-react";

export const WorkFocus: React.FC = () => {
  return (
    <section
      id="work-focus"
      className="py-16 sm:py-20 bg-transparent border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Product + Technical Focus
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-xs sm:text-sm font-semibold text-violet-400 tracking-wide uppercase">
            AI Product Management &middot; GenAI/RAG &middot; Cloud Data Systems
          </p>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            My profile combines product management thinking with technical AI
            execution. I work on understanding AI capabilities, evaluating
            product-relevant use cases, connecting feasibility with user needs,
            and building hands-on AI/data projects that strengthen my technical
            judgment.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="group rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-violet-400 mb-4 group-hover:border-violet-500/20 transition-colors">
              <Compass className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base mb-2">
              AI Product Thinking
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Researching use cases, framing product problems, and translating
              AI capabilities into structured product direction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-fuchsia-400 mb-4 group-hover:border-fuchsia-500/20 transition-colors">
              <Cpu className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base mb-2">
              Technical Feasibility
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Evaluating how AI systems behave, where they are useful, and what
              limitations matter for real product workflows.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-purple-400 mb-4 group-hover:border-purple-500/20 transition-colors">
              <Brain className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base mb-2">
              GenAI/RAG Evaluation
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Building hands-on understanding of retrieval, prompts, evaluation
              metrics, context quality, and hallucination-aware workflows.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-indigo-400 mb-4 group-hover:border-indigo-500/20 transition-colors">
              <FileText className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base mb-2">
              Data Science Execution
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Applying Python, SQL, machine learning, preprocessing, model
              evaluation, and analytics methods to practical projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
