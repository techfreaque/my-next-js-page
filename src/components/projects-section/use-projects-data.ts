import type { Category, Project } from "me/projects";
import { projectCategories, projects } from "me/projects";
import { useMemo } from "react";

import type { CategoryItem } from "./types";

export function useProjectsData(activeFilter: Category): {
  categories: CategoryItem[];
  filteredProjects: Project[];
} {
  const categories: CategoryItem[] = useMemo(
    () =>
      projectCategories.map((category) => ({
        id: category.id,
        label: category.label,
        count: projects.filter((project) =>
          project.categories.includes(category.id),
        ).length,
        icon: category.icon,
      })),
    [],
  );

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter],
  );

  return { categories, filteredProjects };
}
