"use client";

import React, { useEffect, useState } from "react";

import { AboutSection } from "@/components/about-section";
import { AIChatSection } from "@/components/ai-chat-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import LoadingCat from "@/components/loading-cat";
import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SkillsSection } from "@/components/skills-section";

export default function Home(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(true);

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
