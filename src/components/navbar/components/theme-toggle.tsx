"use client";

import { Button } from "components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { JSX } from "react";
import React from "react";

/**
 * Props for the ThemeToggle component
 */
export interface ThemeToggleProps {
  /** Callback when navbar hover state changes */
  onNavbarHover?: (isHovering: boolean) => void;
}

/**
 * Theme toggle button component with smooth transitions
 * Switches between light and dark themes with animated icons
 *
 * @param props - ThemeToggle component props
 * @returns JSX element representing the theme toggle button
 */
export function ThemeToggle({ onNavbarHover }: ThemeToggleProps): JSX.Element {
  const { theme, setTheme } = useTheme();

  /**
   * Handles mouse enter events
   * Triggers navbar hover callback
   */
  const handleMouseEnter = (): void => {
    onNavbarHover?.(true);
  };

  /**
   * Handles mouse leave events
   * Triggers navbar hover callback
   */
  const handleMouseLeave = (): void => {
    onNavbarHover?.(false);
  };

  /**
   * Toggles between light and dark themes
   */
  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="rainbow"
      size="sm"
      onClick={toggleTheme}
      className="px-2 sm:px-3 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
