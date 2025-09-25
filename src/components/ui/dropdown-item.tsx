"use client";

import { Button } from "components/ui/button";
import type { JSX, MouseEvent } from "react";
import React, { useState } from "react";

/**
 * Props for the DropdownItem component
 */
export interface DropdownItemProps {
  /** Whether this dropdown item is currently selected/active */
  isSelected?: boolean;
  /** Click handler for the dropdown item */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Icon component to display */
  icon?: React.ComponentType<{ className?: string }> | React.ReactNode;
  /** Display label */
  label: string;
  /** Optional description text */
  description?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Additional className for customization */
  className?: string;
  /** Children to render instead of icon/label (for custom content) */
  children?: React.ReactNode;
}

/**
 * Shared dropdown item component that matches NavItem styling exactly
 * Used across all dropdowns (navbar, chat input, message editor) for consistency
 *
 * Features:
 * - Exact same styling as NavItem component
 * - Rainbow variant when selected/hovered
 * - Ghost variant when not selected
 * - Border styling matches navbar exactly
 * - Full width with left alignment
 * - Hover state management
 *
 * @param props - DropdownItem component props
 * @returns JSX element representing a dropdown item
 */
export function DropdownItem({
  isSelected = false,
  onClick,
  icon,
  label,
  description,
  disabled = false,
  className = "",
  children,
}: DropdownItemProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowRainbow = isSelected || isHovered;

  /**
   * Handles mouse enter events
   * Updates local hover state
   */
  const handleMouseEnter = (): void => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  /**
   * Handles mouse leave events
   * Updates local hover state
   */
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  /**
   * Handles click events
   */
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  // If children are provided, render them directly
  if (children) {
    return (
      <Button
        variant={shouldShowRainbow ? "rainbow" : "ghost"}
        size="sm"
        isHover={shouldShowRainbow}
        className={`w-full justify-start font-medium ${
          shouldShowRainbow
            ? "border-2 border-blue-500/50"
            : "border-2 border-transparent"
        } ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </Button>
    );
  }

  // Default rendering with icon and label
  return (
    <Button
      variant={shouldShowRainbow ? "rainbow" : "ghost"}
      size="sm"
      isHover={shouldShowRainbow}
      className={`w-full justify-start font-medium rounded-md px-3 py-2.5 min-h-fit h-auto ${
        shouldShowRainbow
          ? "border-2 border-blue-500/50 bg-blue-500/10"
          : "border-2 border-transparent hover:bg-accent/50"
      } ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="flex items-center gap-3 w-full">
        {icon && (
          <span className="text-base w-6 h-6 flex items-center justify-center flex-shrink-0">
            {React.isValidElement(icon)
              ? icon
              : typeof icon === "string"
                ? icon
                : React.createElement(
                    icon as React.ComponentType<{ className?: string }>,
                    { className: "w-6 h-6 size-6" },
                  )}
          </span>
        )}
        <div className="flex flex-col items-start flex-1 min-w-0 text-left">
          <span className="font-medium text-sm w-full">{label}</span>
          {description && (
            <span className="text-xs text-muted-foreground/80 w-full leading-tight mt-0.5 whitespace-normal">
              {description}
            </span>
          )}
        </div>
      </span>
    </Button>
  );
}
