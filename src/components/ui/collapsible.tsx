"use client";

import type { JSX, ReactNode } from "react";

interface CollapsibleContentProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Smooth height animation for collapsible content using CSS grid trick.
 * grid-rows-[0fr] → grid-rows-[1fr] animates height without JS measurement.
 */
export function CollapsibleContent({
  isOpen,
  children,
  className,
}: CollapsibleContentProps): JSX.Element {
  return (
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      } ${className ?? ""}`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
