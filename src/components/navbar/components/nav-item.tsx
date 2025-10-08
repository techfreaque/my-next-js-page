"use client";

import { Button } from "components/ui/button";
import type { PageSection } from "lib/constants";
import type { JSX, MouseEvent } from "react";
import React, { useState } from "react";

/**
 * Props for the NavItem component
 */
export interface NavItemProps {
  /** The href/anchor link for the navigation item */
  href: PageSection;
  /** Whether this navigation item is currently active */
  isActive: boolean;
  /** Click handler for navigation */
  onNavClick: (e: MouseEvent<HTMLAnchorElement>, pageId: PageSection) => void;
  /** Icon component to display */
  icon: React.ComponentType<{ className?: string }>;
  /** Display label */
  label: string;
  /** Whether this is displayed in mobile mode (smaller text) */
  isMobile?: boolean;
  /** Whether the item should take full width (for dropdowns) */
  fullWidth?: boolean;
  /** Callback when navbar hover state changes */
  onNavbarHover?: (isHovering: boolean) => void;
}

/**
 * Individual navigation item component with hover effects and rainbow styling
 * Supports both regular and full-width modes for different contexts
 *
 * @param props - NavItem component props
 * @returns JSX element representing a navigation item
 */
export function NavItem({
  href,
  isActive,
  onNavClick,
  icon: IconComponent,
  label,
  isMobile = false,
  fullWidth = false,
  onNavbarHover,
}: NavItemProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowRainbow = isActive || isHovered;

  const handleHover = (_isHover: boolean): void => {
    setIsHovered(_isHover);
    onNavbarHover?.(_isHover); // Trigger email button animation
  };

  return (
    <Button
      variant={shouldShowRainbow ? "rainbow" : "ghost"}
      size="sm"
      isHover={shouldShowRainbow}
      asChild
      className={`relative font-medium ${fullWidth ? "w-full justify-start" : ""} ${
        shouldShowRainbow
          ? "border-2 border-blue-500/50"
          : "border-2 border-transparent"
      }`}
      setIsHover={handleHover}
    >
      <a
        href={`#${href}`}
        onClick={(event) => onNavClick(event, href)}
        className={`flex items-center gap-2 ${fullWidth ? "w-full justify-start" : ""}`}
      >
        <IconComponent className="w-4 h-4" />
        <span className={isMobile ? "text-xs" : "text-sm"}>{label}</span>
      </a>
    </Button>
  );
}
