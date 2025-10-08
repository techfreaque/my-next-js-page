import type { Category } from "me/projects";
import type { ComponentType } from "react";

export interface ProjectsSectionState {
  activeFilter: Category;
  isHover: boolean;
  expandedProject: number | null;
  hoveredProject: number | null;
}

export interface CategoryItem {
  id: Category;
  label: string;
  count: number;
  icon: ComponentType<{ className?: string }>;
}
