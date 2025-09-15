"use client";

import { Mail, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import type React from "react";
import type { JSX, MouseEvent } from "react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import { getFancyColorsStyle, pageColors } from "./colorPalette";
import { contactEmailSubject, myEmailAddress } from "./constantsAboutMe";
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
    { href: "#home", label: "Home" },
    { href: "#chat", label: "AI Chat" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors duration-200 font-medium relative ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* GitHub, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* GitHub Button - Desktop */}
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-blue-500/10 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <a
                  href="https://github.com/techfreaque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub Profile</span>
                </a>
              </Button>
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white font-semibold"
              >
                <a
                  href={`mailto:${myEmailAddress}?subject=${encodeURIComponent(contactEmailSubject)}`}
                  style={getFancyColorsStyle(isNavHover)}
                >
                  <Mail
                    className="mr-2 h-4 w-4"
                    style={{ color: pageColors.primary }}
                  />
                  Say Hello
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-violet-500/10 text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-slate-500/10 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-border">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Mobile GitHub and Contact */}
              <div className="border-t border-border/50 pt-3 mt-3 space-y-2">
                <a
                  href="https://github.com/techfreaque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                >
                  <FaGithub className="mr-3 h-5 w-5" />
                  GitHub Profile
                </a>
                <a
                  href={`mailto:${myEmailAddress}?subject=${encodeURIComponent(contactEmailSubject)}`}
                  className="flex items-center px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
