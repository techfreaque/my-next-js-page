"use client";

import React, { useEffect, useState } from "react";
import type { JSX } from "react";

import { AboutSection } from "@/src/components/about-section";
import { AIChatSection } from "@/src/components/ai-chat-section";
import { Footer } from "@/src/components/footer";
import { HeroSection } from "@/src/components/hero-section";
import LoadingCat from "@/src/components/loading-cat";
import { Navigation } from "@/src/components/navigation";
import { ProjectsSection } from "@/src/components/projects-section";
import { ResumeSection } from "@/src/components/resume-section";
import { ScrollToTop } from "@/src/components/scroll-to-top";
import { SkillsSection } from "@/src/components/skills-section";

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return (): void => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingCat loading={isLoading} />
      <main className="min-h-screen">
        <Navigation />
        <section id="home">
          <HeroSection />
        </section>
        <section id="chat">
          <AIChatSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="resume">
          <ResumeSection />
        </section>
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
