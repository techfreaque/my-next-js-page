"use client";

import {
  Code,
  FileText,
  FolderOpen,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  MoreHorizontal,
  Sun,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import type React from "react";
import type { JSX, MouseEvent } from "react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/src/components/ui/button";
import { personalInfo } from "@/src/me/about-me";

import {
  getFancyColorsStyle,
  getNavButtonClasses,
  getNavItemClasses,
  getThemeToggleClasses,
} from "./colorPalette";
import logo from "./logo.png";
import logoWhite from "./logo-white.png";

export function Navigation(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavHover, setIsNavHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "chat",
        "skills",
        "about",
        "projects",
        "resume",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#chat", label: "Chat", icon: MessageCircle },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#resume", label: "Resume", icon: FileText },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm"
      }`}
      onMouseEnter={() => setIsNavHover(true)}
      onMouseLeave={() => setIsNavHover(false)}
    >
      <div className="container mx-auto navbar-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href={`#home`}
              onClick={(e) => handleNavClick(e, "#home")}
              className="hover:opacity-80 transition-opacity"
            >
              <div
                className="text-4xl mx-5 h-12 flex items-center fancy-title"
                style={getFancyColorsStyle(isNavHover)}
              >
                {mounted ? (
                  <Image
                    src={theme === "dark" ? logoWhite : logo}
                    alt="A42.ch"
                    className="h-full w-auto"
                  />
                ) : (
                  <Image src={logo} alt="A42.ch" className="h-full w-auto" />
                )}
              </div>
            </a>
          </div>

          {/* Desktop Navigation (lg+) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                const IconComponent = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group nav-item relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${getNavItemClasses(isActive)}`}
                  >
                    <IconComponent
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span className="text-sm">{item.label}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tablet Navigation (md-lg) - Condensed */}
          <div className="hidden md:block lg:hidden">
            <div className="ml-6 flex items-center space-x-1">
              {navItems.slice(0, 4).map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                const IconComponent = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group nav-item tablet-nav-item relative flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${getNavItemClasses(isActive)}`}
                  >
                    <IconComponent
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span className="text-xs">{item.label}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* GitHub Button - Desktop Only */}
            <div className="hidden lg:block">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className={getNavButtonClasses("ghost")}
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="sr-only">GitHub Profile</span>
                </a>
              </Button>
            </div>

            {/* Contact Button - Always visible on desktop and tablet */}
            <div className="hidden md:block">
              <Button
                variant="default"
                size="sm"
                asChild
                className={`${getNavButtonClasses("primary")} font-semibold`}
              >
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`}
                  className="flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="hidden lg:inline">Say Hello</span>
                  <span className="lg:hidden">Hello</span>
                </a>
              </Button>
            </div>

            {/* Mobile Contact Button - Always visible on mobile */}
            <div className="md:hidden">
              <Button
                variant="default"
                size="sm"
                asChild
                className={`${getNavButtonClasses("primary")} font-semibold`}
              >
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`}
                  className="flex items-center"
                >
                  <Mail className="mr-1 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs">Hello</span>
                </a>
              </Button>
            </div>

            {/* Tablet menu button - Show before theme toggle */}
            <div className="hidden md:block lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={getNavButtonClasses("ghost")}
                title="More menu items"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <MoreHorizontal className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                )}
              </Button>
            </div>

            {/* Theme Toggle - Hidden on mobile */}
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={getThemeToggleClasses()}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 group-hover:rotate-180" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 group-hover:-rotate-12" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Mobile menu button - Only on mobile */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={getNavButtonClasses("ghost")}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (sm only) */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 mobile-menu-backdrop border-b border-border">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                const IconComponent = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group mobile-nav-item nav-item flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${getNavItemClasses(isActive)}`}
                  >
                    <IconComponent
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              })}

              {/* Mobile Additional Options */}
              <div className="border-t border-border/50 pt-3 mt-3 space-y-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${getNavItemClasses(false)}`}
                >
                  <FaGithub className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>GitHub Profile</span>
                </a>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${getThemeToggleClasses()}`}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <Moon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  )}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tablet Navigation (md-lg) */}
        {isMobileMenuOpen && (
          <div className="hidden md:block lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 mobile-menu-backdrop border-b border-border">
              {/* Show remaining nav items not visible in condensed nav */}
              {navItems.slice(4).map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                const IconComponent = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group mobile-nav-item nav-item flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${getNavItemClasses(isActive)}`}
                  >
                    <IconComponent
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              })}

              {/* Tablet Additional Options */}
              <div className="border-t border-border/50 pt-3 mt-3 space-y-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${getNavItemClasses(false)}`}
                >
                  <FaGithub className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
