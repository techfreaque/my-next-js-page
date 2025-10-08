"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "components/ui/button";
import { createRainbowTextStyle, gradients } from "lib/rainbow-style";
import { Coffee, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "me/about-me";
import type { JSX } from "react";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

import { ViewSourceSection } from "./fork-section";

export function Footer(): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950 border-t border-slate-200 dark:border-slate-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-[0]">
        <div
          className="absolute top-[0] left-[0] w-full h-1"
          style={{
            background: gradients.secondary,
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-[0] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
                setIsHover={setIsHover}
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
                <a target={"_blank"} href={personalInfo.github}>
                  <Button size={"lg"} variant="rainbow" setIsHover={setIsHover}>
                    <SiGithub />
                    <span>GitHub</span>
                  </Button>
                </a>
                <a target={"_blank"} href={personalInfo.linkedIn}>
                  <Button size={"lg"} variant="rainbow" setIsHover={setIsHover}>
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Fork Section */}
          <ViewSourceSection />
        </div>
      </div>
    </footer>
  );
}
