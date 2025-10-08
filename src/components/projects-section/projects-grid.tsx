import type { Project } from "me/projects";
import type { JSX } from "react";
import React from "react";

import { ProjectCard } from "./project-card";

interface ProjectsGridProps {
  projects: Project[];
  expandedProject: number | null;
  hoveredProject: number | null;
  onToggleProject: (index: number) => void;
  onHoverProject: (index: number) => void;
  onLeaveProject: () => void;
}

export function ProjectsGrid({
  projects,
  expandedProject,
  hoveredProject,
  onToggleProject,
  onHoverProject,
  onLeaveProject,
}: ProjectsGridProps): JSX.Element | null {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const isExpanded = expandedProject === index;
          const isHovered = hoveredProject === index;

          return (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isExpanded={isExpanded}
              isHovered={isHovered}
              onToggle={onToggleProject}
              onMouseEnter={onHoverProject}
              onMouseLeave={onLeaveProject}
            />
          );
        })}
      </div>
    </div>
  );
}
