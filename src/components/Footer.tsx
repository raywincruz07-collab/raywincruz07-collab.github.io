import React from "react";
import { portfolioData } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { name } = portfolioData.personalInfo;

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Copyright */}
          <div className="text-center md:text-left">
            <span className="font-sans font-extrabold text-lg tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {name.split(" ")[0]}
              <span className="text-slate-100">.</span>
            </span>
            <p className="mt-2 text-xs text-slate-500">
              &copy; {currentYear} {name}. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <a
              href="#about"
              className="hover:text-violet-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-violet-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-violet-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#journey"
              className="hover:text-violet-400 transition-colors"
            >
              Journey
            </a>
            <a
              href="#contact"
              className="hover:text-violet-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Location info */}
          <div className="text-center md:text-right text-xs text-slate-500">
            <span>Built with React, TypeScript, and Tailwind CSS v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
