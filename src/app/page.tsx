import { AboutSection } from "components/about-section";
import { AIChatSection } from "components/ai-chat-section/ai-chat-section";
import { EducationSkillsSection } from "components/education-skills-section";
import { ExperienceSection } from "components/experience-section";
import { Footer } from "components/footer/footer";
import { FormalEducationSection } from "components/formal-education";
import { HeroSection } from "components/hero-section";
import { Navigation } from "components/navbar/components/navigation";
import { ProjectsSection } from "components/projects-section";
import { ScrollToTop } from "components/scroll-to-top";
import { PAGE_SECTIONS } from "lib/constants";
import type { JSX } from "react";
import React from "react";

/**
 * Home page component that renders the complete portfolio website.
 * Uses semantic HTML sections with proper IDs for navigation.
 *
 * @returns Complete portfolio page with all sections
 */
export default function Home(): JSX.Element {
  return (
    <>
      <main>
        {/* Fixed navigation bar with theme switching */}
        <Navigation />

        {/* Hero section - landing area with introduction */}
        <section id={PAGE_SECTIONS.HOME}>
          <HeroSection />
        </section>
        <div className="bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950 border-t border-slate-200 dark:border-slate-700">
          {/* AI chat section - interactive assistant */}
          <section id={PAGE_SECTIONS.CHAT}>
            <AIChatSection />
          </section>

          {/* About section - personal story and background */}
          <section id={PAGE_SECTIONS.ABOUT}>
            <AboutSection />
          </section>

          {/* Experience section - professional experience */}
          <section id={PAGE_SECTIONS.EXPERIENCE}>
            <ExperienceSection />
            <FormalEducationSection />
          </section>

          {/* Projects section - portfolio of work */}
          <section id={PAGE_SECTIONS.PROJECTS}>
            <ProjectsSection />
          </section>

          {/* Skills & Education section - technical skills and learning journey */}
          <section id={PAGE_SECTIONS.SKILLS}>
            <EducationSkillsSection />
          </section>
        </div>
        {/* Footer with contact information */}
        <Footer />

        {/* Scroll to top button because why not */}
        <ScrollToTop />
      </main>
    </>
  );
}
