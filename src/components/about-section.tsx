"use client";

import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Title } from "components/ui/title";
import { Brain } from "lucide-react";
import { personalInfo } from "me/about-me";
import Image from "next/image";
import type { JSX } from "react";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import meFromBack from "./me_and_water.jpg";

export function AboutSection(): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-violet-950/30 relative overflow-hidden"
    >
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
            <Badge variant="sectionBadge" className="mb-4">
              <Brain className="h-4 w-4" />A bit about me
            </Badge>
            <Title
              level={2}
              variant="primary"
              isHover={isHover}
              className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Meet{" "}
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Max Brandstaetter",
                      "Full Stack Developer",
                      "Entrepreneur",
                      "Problem Solver",
                      "Problem Identifier",
                      "Data Scientist",
                      "AI Enthusiast",
                      "Tech Innovator",
                      "Team Leader",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </Title>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
              Welcome to my magical world of tech! With 13+ years of experience,
              I'm an entrepreneur, full stack developer, and problem identifier
              who transforms complex challenges into extraordinary digital
              solutions.
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <Image
                  src={meFromBack}
                  alt="Max Brandstaetter - Full Stack Developer"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
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
                Recently led integration teams at Sovendus, building
                developer-hub.sovendus.com and 20+ platform plugins. Now
                focusing on AI-powered applications and seeking new challenges
                in innovative environments where I can continue pushing the
                boundaries of what's possible.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Unleashing the power of data, I delve into complex datasets,
                extracting valuable insights and making accurate predictions.
                With my expertise in data sorcery, I transform information into
                gold, enabling informed decision-making and driving success.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Join me on this enchanting journey as we shape the future
                through technology. Let's create wonders that captivate and
                inspire! ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
