import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { personalInfo } from "me/about-me";
import type { JSX } from "react";
import React, { useState } from "react";

/**
 * Footer section component
 * Displays a call-to-action to view the source code of the website
 *
 * @returns JSX element representing the footer section
 */
export function ViewSourceSection(): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  function onMouseEnter(): void {
    setIsHover(true);
  }
  function onMouseLeave(): void {
    setIsHover(false);
  }
  return (
    <div className="border-t border-slate-200 dark:border-slate-700 pt-12 pb-8">
      <div className="text-center mb-8">
        <h3
          className="text-xl font-bold text-slate-900 dark:text-white mb-4"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Wanna see how I built it?
        </h3>
        <p
          className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Dive into the source code and see my development approach,
          architecture decisions, and coding practices in action. Built with
          modern tech stack and clean, maintainable code.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            Next.js 15
          </span>
          <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
          >
            React 19
          </span>
          <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium"
          >
            TypeScript
          </span>
          <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
          >
            Tailwind CSS
          </span>
          <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
          >
            AI SDK
          </span>
          <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
          >
            Custom Chat UI
          </span>
        </div>

        <Button variant="rainbow" isHover={isHover} setIsHover={setIsHover}>
          <a
            href={personalInfo.thisProject}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3"
          >
            <SiGithub className="h-5 w-5" />
            <span>View Source Code</span>
            <SquareArrowOutUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
