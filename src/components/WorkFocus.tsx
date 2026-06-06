import React from "react";
import { Compass, Cpu, FileText, Brain } from "lucide-react";

export const WorkFocus: React.FC = () => {
  return (
    <section
      id="work-focus"
      className="py-16 sm:py-20 bg-slate-950 border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Current Work Focus
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-xs sm:text-sm font-semibold text-violet-400 tracking-wide uppercase">
            AI Product Management &middot; SAP HANA Cloud
          </p>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            I currently work in AI Product Management related to SAP HANA Cloud,
            where my focus is on understanding AI capabilities, researching
            product-relevant use cases, evaluating technical feasibility, and
            translating findings into clear product-oriented direction.
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
              AI Use-Case Research
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Exploring where AI and GenAI can create practical value in cloud
              data workflows.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-fuchsia-400 mb-4 group-hover:border-fuchsia-500/20 transition-colors">
              <Cpu className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base mb-2">
              Technical Evaluation
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Understanding AI concepts, evaluating feasibility, and connecting
              technical behavior with product needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-purple-400 mb-4 group-hover:border-purple-500/20 transition-colors">
              <FileText className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base mb-2">
              Product Communication
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Turning technical findings into clear summaries, structured
              documentation, and stakeholder-friendly explanations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group rounded-xl border border-slate-900 bg-slate-900/10 p-5 shadow-sm transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-indigo-400 mb-4 group-hover:border-indigo-500/20 transition-colors">
              <Brain className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-200 group-hover:text-violet-400 transition-colors text-sm sm:text-base mb-2">
              GenAI/RAG Understanding
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Building hands-on understanding of retrieval, evaluation, prompts,
              and AI workflow design through academic and personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
