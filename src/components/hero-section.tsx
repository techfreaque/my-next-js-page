"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { Title } from "components/ui/title";
import { ArrowDown, Mail } from "lucide-react";
import { personalInfo } from "me/about-me";
import type { JSX } from "react";
import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export const heroTypewriterStrings = [
  "Max Brandstaetter",
  "a Cross-Platform Dev",
  "an Entrepreneur",
  "a Framework Builder",
  "Marcus Brandstaetter",
  "a Problem Solver",
  "an AI Enthusiast",
  "a Team Builder",
  "a DIY Problem Solver",
  "your next teammate",
] as const;

export function HeroSection(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="h-screen min-h-[600px] flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-[0] w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/red_hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-[0] bg-black/50 -z-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with video-style text */}
          <div
            className={`mb-8 transition-all duration-1000 ${isMounted ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0"}`}
          >
            <Title
              level={1}
              useRainbow={false}
              customSizeClassName="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Meet{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text">
                <Typewriter
                  options={{
                    strings: [...heroTypewriterStrings],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </Title>
          </div>

          {/* Fancy subtitle with hover effects */}
          <div
            className={`mb-8 transition-all duration-1000 delay-500 ${isMounted ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0"}`}
          >
            <Title
              level={2}
              variant="primary"
              isHover={isHover}
              setIsHover={setIsHover}
              customSizeClassName="text-lg sm:text-md text-center leading-relaxed max-w-3xl mx-auto"
            >
              From fixing Ferraris to building frameworks
              <br />
              13+ years turning problems into code that actually works
            </Title>
          </div>

          {/* Social Links */}
          <div
            className={`mb-8 transition-all duration-1000 delay-700 ${isMounted ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0"}`}
          >
            <div className="flex justify-center space-x-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 hover:border-white/40"
              >
                <SiGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 hover:border-white/40"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`}
                className="text-white/80 hover:text-white transition-colors duration-200 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 hover:border-white/40"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Scroll indicator with fancy colors */}
          <div
            className={`transition-all duration-1000 delay-1000 ${isMounted ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0"}`}
          >
            <a
              href="#chat"
              className="group inline-flex flex-col items-center text-white/90 hover:text-white transition-all duration-300 transform hover:scale-110"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <span
                className="text-lg mb-3 font-medium fancy-title"
                style={{
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  backgroundSize: "200%",
                  backgroundPosition: isHover ? "200%" : "-200%",
                  transition: "background-position ease-in-out 2s",
                }}
              >
                See what I've built
              </span>
              <ArrowDown className="h-7 w-7 animate-bounce group-hover:animate-pulse transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
