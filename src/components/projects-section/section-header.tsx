import { Badge } from "components/ui/badge";
import { createRainbowTextStyle } from "lib/rainbow-style";
import { Code } from "lucide-react";
import type { JSX } from "react";
import React from "react";

interface SectionHeaderProps {
  isHover: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function SectionHeader({
  isHover,
  onMouseEnter,
  onMouseLeave,
}: SectionHeaderProps): JSX.Element {
  return (
    <div
      className="text-center mb-16"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Badge variant="sectionBadge" className="mb-4">
        <Code className="h-4 w-4" />
        Projects & Work
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
        Things I've{" "}
        <span
          className="fancy-title cursor-pointer"
          style={createRainbowTextStyle(isHover, "primary")}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          built & shipped
        </span>
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
        SaaS platforms, trading bots, custom frameworks, and developer tools.
        Some are live in production, some are still in development, and a few
        are retired but taught me valuable lessons.
      </p>
    </div>
  );
}
