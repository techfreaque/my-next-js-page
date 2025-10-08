"use client";

import { Button } from "components/ui/button";
import { Menu, X } from "lucide-react";
import type { JSX } from "react";
import React, { useState } from "react";

import { NAV_ITEMS } from "../constants";
import { useMobileMenu } from "../hooks/useMobileMenu";
import { useScrollDetection } from "../hooks/useScrollDetection";
import { EmailButton } from "./email-button";
import { Logo } from "./logo";
import { MobileDropdown } from "./mobile-dropdown";
import { ResponsiveNavSection } from "./responsive-nav-section";
import { ThemeToggle } from "./theme-toggle";

/**
 * Main navigation component
 * Provides responsive navigation with scroll detection, mobile menu support,
 * and theme-aware styling. Handles all navigation states and interactions.
 *
 * @returns JSX element representing the complete navigation bar
 */
export function Navigation(): JSX.Element {
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  const { isScrolled, activeSection } = useScrollDetection();
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    menuButtonRef,
    menuRef,
  } = useMobileMenu();

  /**
   * Handles navbar hover state changes
   * Updates the navbar hover state for fancy color effects
   */
  const handleNavbarHover = (isHovering: boolean): void => {
    setIsNavbarHovered(isHovering);
  };

  return (
    <nav
      className={`fixed top-[0] left-[0] right-[0] z-50 ${
        isScrolled
          ? "bg-background/100 backdrop-blur-md shadow-sm"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center h-16 px-2 min-[380px]:px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Logo - Fixed left position */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation sections */}
          {/* intentionally rendering all menu variants so we have all ready before hydration */}
          <div className="flex-1 flex justify-center">
            {/* Desktop Navigation (xl+) - Full menu */}
            <ResponsiveNavSection
              className={"hidden xl:block"}
              navItems={NAV_ITEMS}
              activeSection={activeSection}
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMobileMenu={toggleMobileMenu}
              onNavbarHover={handleNavbarHover}
              visibleItemsCount={NAV_ITEMS.length}
            />

            {/* Large Tablet Navigation (lg-xl) - Show first 5 items */}
            <ResponsiveNavSection
              className={"hidden lg:block xl:hidden"}
              navItems={NAV_ITEMS}
              activeSection={activeSection}
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMobileMenu={toggleMobileMenu}
              onNavbarHover={handleNavbarHover}
              visibleItemsCount={5}
            />

            {/* Medium Tablet Navigation (md-lg) - Show first 3 items */}
            <ResponsiveNavSection
              className={"hidden md:block lg:hidden"}
              navItems={NAV_ITEMS}
              activeSection={activeSection}
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMobileMenu={toggleMobileMenu}
              onNavbarHover={handleNavbarHover}
              visibleItemsCount={3}
            />

            {/* Small Tablet Navigation (sm-md) - Show first 2 item */}
            <ResponsiveNavSection
              className={"hidden sm:block md:hidden"}
              navItems={NAV_ITEMS}
              activeSection={activeSection}
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMobileMenu={toggleMobileMenu}
              onNavbarHover={handleNavbarHover}
              visibleItemsCount={2}
            />

            {/* Mobile Navigation (xs) - Hamburger menu only */}
            <ResponsiveNavSection
              className={"sm:hidden"}
              navItems={NAV_ITEMS}
              activeSection={activeSection}
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMobileMenu={toggleMobileMenu}
              onNavbarHover={handleNavbarHover}
              visibleItemsCount={0}
              isMobile={true}
            />
          </div>

          {/* Right side actions - Fixed right position */}
          <div className="flex-shrink-0 flex items-center space-x-1 sm:space-x-2 min-[380px]:ml-4 sm:ml-6 md:ml-8">
            {/* Say Hello Button */}
            <EmailButton
              onNavbarHover={handleNavbarHover}
              isHover={isNavbarHovered}
            />

            {/* Theme Toggle - Always visible */}
            <div>
              <ThemeToggle onNavbarHover={handleNavbarHover} />
            </div>

            {/* Mobile Menu Button - Only visible on mobile (xs) */}
            <div className="sm:hidden relative">
              <Button
                ref={menuButtonRef}
                variant="rainbow"
                size="sm"
                onClick={toggleMobileMenu}
                title="Menu"
                className="px-2 cursor-pointer"
                setIsHover={handleNavbarHover}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>

              {/* Mobile Dropdown */}
              <MobileDropdown
                ref={menuRef}
                isOpen={isMobileMenuOpen}
                navItems={NAV_ITEMS}
                activeSection={activeSection}
                onClose={closeMobileMenu}
                onNavbarHover={handleNavbarHover}
                startIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
