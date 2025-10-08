"use client";

import type { JSX } from "react";
import React from "react";

import type { NavItemConfig } from "../constants";
import { GitHubNavButton } from "./github-button";
import { NavItem } from "./nav-item";

/**
 * Props for the MobileDropdown component
 */
export interface MobileDropdownProps {
  /** Whether the dropdown is currently open */
  isOpen: boolean;
  /** Navigation items to display in the dropdown */
  navItems: NavItemConfig[];
  /** Currently active section */
  activeSection: string;
  /** Callback to close the mobile menu */
  onClose: () => void;
  /** Callback when navbar hover state changes */
  onNavbarHover: (isHovering: boolean) => void;
  /** Starting index for items to show (for slicing navItems) */
  startIndex: number;
  /** Ref to the dropdown container element */
  ref: React.RefObject<HTMLDivElement | null>;
}

/**
 * Mobile dropdown menu component
 * Displays navigation items in a dropdown format for smaller screens
 * Supports different starting indices to show different subsets of navigation items
 *
 * @param props - MobileDropdown component props
 * @returns JSX element representing the mobile dropdown menu
 */
export function MobileDropdown({
  isOpen,
  navItems,
  activeSection,
  onClose,
  onNavbarHover,
  startIndex = 0,
  ref,
}: MobileDropdownProps): JSX.Element | null {
  // Don't render if not open
  if (!isOpen) {
    return null;
  }

  // Get items to display based on start index
  const itemsToShow = navItems.slice(startIndex);

  return (
    <div
      ref={ref}
      className={
        "absolute top-full right-[0] mt-2 z-50 w-[160px] p-2 space-y-1 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg"
      }
    >
      {/* Navigation Items */}
      {itemsToShow.map((item) => {
        const isActive = activeSection === item.pageId;
        const IconComponent = item.icon;

        return (
          <NavItem
            key={item.pageId}
            href={item.pageId}
            isActive={isActive}
            onNavClick={() => {
              onClose();
            }}
            icon={IconComponent}
            label={item.label}
            fullWidth={true}
            onNavbarHover={onNavbarHover}
          />
        );
      })}

      {/* Additional Options */}
      <div className="border-t border-border/50 pt-2 mt-2 space-y-1">
        <div className="w-full">
          <GitHubNavButton onNavbarHover={onNavbarHover} />
        </div>
      </div>
    </div>
  );
}
