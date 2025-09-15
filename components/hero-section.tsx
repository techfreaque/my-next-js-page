"use client";

import { ArrowDown, Mail } from "lucide-react";
import type { JSX } from "react";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import { getFancyColorsStyle } from "./colorPalette";
import { contactEmailSubject, myEmailAddress } from "./constantsAboutMe";

export function HeroSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/red_hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 -z-5" />

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-violet-500/30 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with video-style text */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Building the Future with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text">
                <Typewriter
                  options={{
                    strings: [
                      "Marcus Brandstaetter",
                      "your next Full Stack Developer",
                      "an experienced Entrepreneur",
                      "your Problem Solver",
                      "a strategic Problem Identifier",
                      "Max Brandstaetter",
                      "your Data Science partner",
                      "an AI Innovation expert",
                      "your Tech Innovator",
                      "a proven Team Leader",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>
          </div>

          {/* Fancy subtitle with hover effects */}
          <div
            className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2
              className="fancy-title text-lg sm:text-xl text-center leading-relaxed max-w-3xl mx-auto"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={getFancyColorsStyle(isHover)}
            >
              Unlock the power of technology to bring your vision to life.
              <br />
              Embrace new possibilities and shape the future.
            </h2>
          </div>

          {/* Social Links */}
          <div
            className={`mb-8 transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/techfreaque"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 hover:border-white/40"
              >
                <FaGithub className="h-6 w-6" />
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
                href={`mailto:${myEmailAddress}?subject=${encodeURIComponent(contactEmailSubject)}`}
                className="text-white/80 hover:text-white transition-colors duration-200 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 hover:border-white/40"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Scroll indicator with fancy colors */}
          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <a
              href="#chat"
              className="group inline-flex flex-col items-center text-white/90 hover:text-white transition-all duration-300 transform hover:scale-110"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <span
                className="text-lg mb-3 font-medium fancy-title"
                style={getFancyColorsStyle(isHover)}
              >
                Scroll to explore
              </span>
              <ArrowDown className="h-7 w-7 animate-bounce group-hover:animate-pulse transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
