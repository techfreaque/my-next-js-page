"use client";

import { Button } from "components/ui/button";
import { Mail } from "lucide-react";
import { personalInfo } from "me/about-me";
import type { JSX } from "react";
import React, { useState } from "react";

/**
 * Props for the EmailButton component
 */
export interface EmailButtonProps {
  /** Callback when navbar hover state changes */
  onNavbarHover?: (isHovering: boolean) => void;
  /** Whether the button should show rainbow styling due to external hover */
  isHover?: boolean;
}

/**
 * Email contact button component with hover effects
 * Displays a "Say Hello" button that opens the user's email client
 * Supports both desktop and mobile variants
 *
 * @param props - EmailButton component props
 * @returns JSX element representing the email button
 */
export function EmailButton({
  onNavbarHover,
  isHover = false,
}: EmailButtonProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowRainbow = isHover || isHovered;

  const handleHover = (_isHover: boolean): void => {
    setIsHovered(_isHover);
    onNavbarHover?.(_isHover);
  };

  return (
    <Button
      variant="rainbow"
      size="sm"
      isHover={shouldShowRainbow}
      asChild
      className={`font-semibold sm:px-2`}
      setIsHover={handleHover}
    >
      <a
        href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`}
        className="flex items-center"
      >
        <Mail className={`h-4 w-4 sm:mr-1 mr-2`} />
        <span className="sm:text-xs">Say Hello</span>
      </a>
    </Button>
  );
}
