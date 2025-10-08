"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "components/ui/button";
import { personalInfo } from "me/about-me";
import type { JSX } from "react";
import React, { useState } from "react";

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
export function GitHubNavButton({
  onNavbarHover,
}: GitHubButtonProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (_isHover: boolean): void => {
    setIsHovered(_isHover);
    onNavbarHover?.(_isHover);
  };

  return (
    <Button
      variant={isHovered ? "rainbow" : "ghost"}
      size="sm"
      isHover={isHovered}
      asChild
      className={`w-full justify-start text-sm font-medium ${
        isHovered
          ? "border-2 border-blue-500/50"
          : "border-2 border-transparent"
      }`}
      setIsHover={handleHover}
    >
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-3 py-2"
      >
        <SiGithub className="w-4 h-4" />
        <span>GitHub Profile</span>
      </a>
    </Button>
  );
}
