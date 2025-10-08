"use client";

import { Button } from "components/ui/button";
import { Title } from "components/ui/title";
import { createRainbowTextStyle } from "lib/rainbow-style";
import { aboutContent, personalInfo } from "me/about-me";
import Image from "next/image";
import type { JSX } from "react";
import React, { useState } from "react";

import meFromBack from "./me_and_water.jpg";

export function AboutSection(): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float" />
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-violet-500/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Typewriter */}
          <div className="text-center mb-16">
            <Title
              level={2}
              isHover={isHover}
              className="mb-6"
              setIsHover={setIsHover}
              useRainbow={false}
            >
              A bit{" "}
              <span style={createRainbowTextStyle(isHover, "primary")}>
                about me
              </span>
            </Title>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
              {aboutContent.welcomeText}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image and Bio */}
            <div className="space-y-8">
              <div
                className="relative group"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <div className="absolute inset-[0] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <Image
                  src={meFromBack}
                  alt="Max Brandstaetter - Full Stack Developer"
                  className="relative rounded-md shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* CTA Button */}
              <div
                className="flex justify-center"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <Button variant="rainbow" size="lg" isHover={isHover} asChild>
                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`}
                    className="text-center px-8 py-4 font-semibold text-lg"
                  >
                    Let's Collaborate! 🚀
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {aboutContent.textPart1}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {aboutContent.textPart2}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {aboutContent.textPart3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
