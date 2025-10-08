"use client";

import { Button } from "components/ui/button";
import { MoreHorizontal, X } from "lucide-react";
import type { JSX } from "react";
import React from "react";

import type { NavItemConfig } from "../constants";
import { useMobileMenu } from "../hooks/useMobileMenu";
import { MobileDropdown } from "./mobile-dropdown";
import { NavItem } from "./nav-item";

/**
 * Props for the ResponsiveNavSection component
 */
export interface ResponsiveNavSectionProps {
  /** CSS classes for responsive visibility */
  className: string;
  /** Navigation items to display */
  navItems: NavItemConfig[];
  /** Currently active section */
  activeSection: string;
  /** Whether mobile menu is open */
  isMobileMenuOpen: boolean;
  /** Callback to toggle mobile menu */
  onToggleMobileMenu: () => void;
  /** Callback when navbar hover state changes */
  onNavbarHover: (isHovering: boolean) => void;
  /** Number of items to show before collapsing to dropdown */
  visibleItemsCount: number;
  /** Whether items should use mobile styling */
  isMobile?: boolean;
}

/**
 * Responsive navigation section component
 * Handles different responsive breakpoints and shows appropriate navigation items
 * Includes mobile dropdown functionality for items that don't fit
 *
 * @param props - ResponsiveNavSection component props
 * @returns JSX element representing the responsive navigation section
 */
export function ResponsiveNavSection({
  className,
  navItems,
  activeSection,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onNavbarHover,
  visibleItemsCount,
  isMobile = false,
}: ResponsiveNavSectionProps): JSX.Element {
  const { closeMobileMenu, menuRef } = useMobileMenu();
  // Get visible items based on count
  const visibleItems = navItems.slice(0, visibleItemsCount);
  const hasHiddenItems = visibleItemsCount < navItems.length;
  // Determine spacing class based on visible items count
  const spacingClass = visibleItemsCount <= 2 ? "space-x-1" : "space-x-2";

  return (
    <div className={className}>
      <div className={`flex items-center ${spacingClass}`}>
        {/* Visible Navigation Items */}
        {visibleItems.map((item) => {
          const isActive = activeSection === item.pageId;
          const IconComponent = item.icon;

          return (
            <NavItem
              key={item.pageId}
              href={item.pageId}
              isActive={isActive}
              onNavClick={closeMobileMenu}
              icon={IconComponent}
              label={item.label}
              isMobile={isMobile}
              onNavbarHover={onNavbarHover}
            />
          );
        })}

        {/* More/Hamburger Menu Button - Hidden on mobile (xs) since it's in right actions */}
        {hasHiddenItems && visibleItemsCount > 0 && (
          <div className="relative">
            <Button
              variant="rainbow"
              size="sm"
              onClick={onToggleMobileMenu}
              title="More menu items"
              setIsHover={onNavbarHover}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <MoreHorizontal className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Dropdown */}
            <MobileDropdown
              ref={menuRef}
              isOpen={isMobileMenuOpen}
              navItems={navItems}
              activeSection={activeSection}
              onClose={closeMobileMenu}
              onNavbarHover={onNavbarHover}
              startIndex={visibleItemsCount}
            />
          </div>
        )}
      </div>
    </div>
  );
}
