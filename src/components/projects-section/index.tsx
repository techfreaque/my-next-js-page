"use client";

import type { Category } from "me/projects";
import { Category as CategoryEnum } from "me/projects";
import type { JSX } from "react";
import React, { useState } from "react";

import { BackgroundDecorations } from "./background-decorations";
import { FilterButtons } from "./filter-buttons";
import { ProjectsGrid } from "./projects-grid";
import { SectionHeader } from "./section-header";
import { useProjectsData } from "./use-projects-data";

export function ProjectsSection(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<Category>(
    CategoryEnum.FEATURED,
  );
  const [isHover, setIsHover] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { categories, filteredProjects } = useProjectsData(activeFilter);

  const toggleProject = (index: number): void => {
    setExpandedProject((prev) => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <BackgroundDecorations />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            isHover={isHover}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />

          <FilterButtons
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <ProjectsGrid
            projects={filteredProjects}
            expandedProject={expandedProject}
            hoveredProject={hoveredProject}
            onToggleProject={toggleProject}
            onHoverProject={setHoveredProject}
            onLeaveProject={() => setHoveredProject(null)}
          />
        </div>
      </div>
    </section>
  );
}
