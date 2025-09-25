"use client";

import { Button } from "components/ui/button";
import { personalInfo } from "me/about-me";
import type { JSX } from "react";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

/**
 * Props for the GitHubButton component
 */
export interface GitHubButtonProps {
  /** Callback when navbar hover state changes */
  onNavbarHover?: (isHovering: boolean) => void;
}

/**
 * GitHub profile button component with hover effects
 * Displays a link to the user's GitHub profile with consistent styling
 *
 * @param props - GitHubButton component props
 * @returns JSX element representing the GitHub button
 */
export function GitHubButton({
  onNavbarHover,
}: GitHubButtonProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowRainbow = isHovered;

  /**
   * Handles mouse enter events
   * Updates local hover state and triggers navbar hover callback
   */
  const handleMouseEnter = (): void => {
    setIsHovered(true);
    onNavbarHover?.(true);
  };

  /**
   * Handles mouse leave events
   * Updates local hover state and triggers navbar hover callback
   */
  const handleMouseLeave = (): void => {
    setIsHovered(false);
    onNavbarHover?.(false);
  };

  return (
    <Button
      variant={shouldShowRainbow ? "rainbow" : "ghost"}
      size="sm"
      isHover={shouldShowRainbow}
      asChild
      className={`w-full justify-start text-sm font-medium ${
        shouldShowRainbow
          ? "border-2 border-blue-500/50"
          : "border-2 border-transparent"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-3 py-2"
      >
        <FaGithub className="w-4 h-4" />
        <span>GitHub Profile</span>
      </a>
    </Button>
  );
}
