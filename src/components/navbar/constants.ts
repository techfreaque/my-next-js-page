import type { PageSection } from "lib/constants";
import { PAGE_SECTIONS } from "lib/constants";
import {
  Briefcase,
  FolderOpen,
  GraduationCap,
  Home,
  MessageCircle,
  User,
} from "lucide-react";
import type { ComponentType } from "react";

/**
 * Configuration for a navigation item
 */
export interface NavItemConfig {
  /** The href/anchor link for the navigation item */
  pageId: PageSection;
  /** Display label for the navigation item */
  label: string;
  /** Icon component to display alongside the label */
  icon: ComponentType<{ className?: string }>;
}

/**
 * Configuration for all navigation items
 * Defines the main navigation structure used across all responsive breakpoints
 */
export const NAV_ITEMS: NavItemConfig[] = [
  { pageId: PAGE_SECTIONS.HOME, label: "Home", icon: Home },
  { pageId: PAGE_SECTIONS.CHAT, label: "Chat", icon: MessageCircle },
  { pageId: PAGE_SECTIONS.ABOUT, label: "About", icon: User },
  {
    pageId: PAGE_SECTIONS.EXPERIENCE,
    label: "Experience",
    icon: Briefcase,
  },
  { pageId: PAGE_SECTIONS.PROJECTS, label: "Projects", icon: FolderOpen },
  { pageId: PAGE_SECTIONS.SKILLS, label: "Skills", icon: GraduationCap },
] as const;
