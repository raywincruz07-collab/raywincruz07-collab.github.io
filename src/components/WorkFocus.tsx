import React from "react";
import { Compass, Cpu, FileText, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

export const WorkFocus: React.FC = () => {
  return (
    <section
      id="work-focus"
      className="py-16 sm:py-20 bg-transparent border-b border-slate-900 scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <FadeIn>
          <SectionHeader 
            eyebrow="Current Focus" 
            heading="Product + Technical Edge" 
            subtitle="My profile combines product management thinking with technical AI execution. I work on understanding AI capabilities, evaluating product-relevant use cases, connecting feasibility with user needs, and building hands-on AI/data projects that strengthen my technical judgment."
            alignment="left"
          />
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <FadeIn delay={0.1}>
            <div className="group h-full rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-900/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-violet-400 mb-5 group-hover:border-violet-500/30 transition-colors">
                <Compass className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-100 group-hover:text-violet-400 transition-colors text-base mb-3 tracking-tight">
                AI Product Thinking
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Researching use cases, framing product problems, and translating
                AI capabilities into structured product direction.
              </p>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.2}>
            <div className="group h-full rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-fuchsia-500/30 hover:bg-slate-900/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-fuchsia-400 mb-5 group-hover:border-fuchsia-500/30 transition-colors">
                <Cpu className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-100 group-hover:text-fuchsia-400 transition-colors text-base mb-3 tracking-tight">
                Technical Feasibility
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Evaluating how AI systems behave, where they are useful, and what
                limitations matter for real product workflows.
              </p>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.3}>
            <div className="group h-full rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 mb-5 group-hover:border-cyan-500/30 transition-colors">
                <Brain className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors text-base mb-3 tracking-tight">
                GenAI/RAG Evaluation
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Building hands-on understanding of retrieval, prompts, evaluation
                metrics, context quality, and hallucination-aware workflows.
              </p>
            </div>
          </FadeIn>

          {/* Card 4 */}
          <FadeIn delay={0.4}>
            <div className="group h-full rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-indigo-400 mb-5 group-hover:border-indigo-500/30 transition-colors">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors text-base mb-3 tracking-tight">
                Data Science Execution
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Applying Python, SQL, machine learning, preprocessing, model
                evaluation, and analytics methods to practical projects.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
