"use client";

import { Button } from "components/ui/button";
import { createRainbowTextStyle } from "lib/design-system";
import { Coffee, Heart, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "me/about-me";
import type { JSX } from "react";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer(): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950 border-t border-slate-200 dark:border-slate-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 animate-pulse" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full blur-xl animate-float" />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Hero Title */}
            <div className="mb-8">
              <h2
                className="text-5xl md:text-6xl font-bold mb-4 fancy-title"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={createRainbowTextStyle(isHover, "primary")}
              >
                Let's Build Something
              </h2>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text animate-pulse">
                AMAZING
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Looking for a technical co-founder, senior developer, or
              innovation partner? Let's connect and build the future together!
              🚀
            </p>
          </div>

          {/* Contact & Social Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact */}
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center justify-center md:justify-start gap-2">
                <Coffee className="h-6 w-6 text-violet-500" />
                Ready to Collaborate?
              </h4>
              <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                Whether you're hiring senior talent, seeking a technical
                co-founder, or just want to connect with a fellow innovator -
                I'm always open to meaningful conversations about building the
                future.
              </p>
              <Button
                asChild
                variant="rainbow"
                size="lg"
                isHover={isHover}
                className="backdrop-blur-sm rounded-xl font-semibold"
              >
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {personalInfo.email}
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center justify-center md:justify-end gap-2">
                <Sparkles className="h-6 w-6 text-pink-500" />
                Follow the Journey
              </h4>
              <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                Connect with me to stay updated on my latest projects, technical
                insights, and opportunities for collaboration in the tech space.
              </p>
              <div className="flex justify-center md:justify-end gap-4">
                {[
                  {
                    icon: FaGithub,
                    href: personalInfo.github,
                    label: "GitHub",
                    color: "hover:text-white",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Mail,
                    href: `mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`,
                    label: "Email",
                    color: "hover:text-green-400",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group relative p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 ${social.color}`}
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.label}</span>
                    {hoveredSocial === social.label && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-slate-700 dark:border-slate-200 shadow-lg">
                        {social.label}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Fork Section */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-12 pb-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Love This Portfolio? Fork It! 🚀
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Built with modern tech stack and best practices. Perfect
                foundation for your own portfolio!
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Next.js 15
                </span>
                <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                  React 19
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  AI SDK
                </span>
              </div>

              <a
                href={`${personalInfo.github}/my-next-js-page`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="h-5 w-5" />
                <span>Fork This Portfolio</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <span>Crafted with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="h-4 w-4 text-violet-500" />
                <span>by Max Brandstaetter</span>
              </div>

              <div className="text-slate-600 dark:text-slate-300 text-sm">
                © {new Date().getFullYear()} • Built for the future 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
