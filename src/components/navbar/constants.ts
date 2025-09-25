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
  { pageId: PAGE_SECTIONS.PROJECTS, label: "Projects", icon: FolderOpen },
  { pageId: PAGE_SECTIONS.SKILLS, label: "Skills", icon: GraduationCap },
  {
    pageId: PAGE_SECTIONS.EXPERIENCE,
    label: "Experience",
    icon: Briefcase,
  },
] as const;

/**
 * Responsive breakpoint configurations
 * Defines how many navigation items to show at each breakpoint
 */
export const RESPONSIVE_CONFIG = {
  /** Desktop (xl+) - Show all items */
  desktop: {
    visibleItems: NAV_ITEMS.length,
    className: "hidden xl:block",
    marginClass: "ml-6 xl:ml-10",
    spacing: "space-x-2",
  },
  /** Large tablet (lg-xl) - Show first 3 items */
  largeTablet: {
    visibleItems: 5,
    className: "hidden lg:block xl:hidden",
    marginClass: "ml-4 lg:ml-6",
    spacing: "space-x-1",
  },
  /** Medium tablet (md-lg) - Show first 2 items */
  mediumTablet: {
    visibleItems: 3,
    className: "hidden md:block lg:hidden",
    marginClass: "ml-3 md:ml-4",
    spacing: "space-x-1",
  },
  /** Small tablet (sm-md) - Show first 1 item */
  smallTablet: {
    visibleItems: 2,
    className: "hidden sm:block md:hidden",
    marginClass: "ml-2 sm:ml-3",
    spacing: "space-x-1",
  },
  /** Mobile (xs) - Show hamburger menu only */
  mobile: {
    visibleItems: 0,
    className: "sm:hidden",
    marginClass: "",
    spacing: "",
  },
} as const;

/**
 * Scroll offset for navigation (accounts for fixed header height)
 */
export const SCROLL_OFFSET = 80;

/**
 * Scroll threshold for navbar background change
 */
export const SCROLL_THRESHOLD = 50;

/**
 * Scroll position offset for active section detection
 */
export const ACTIVE_SECTION_OFFSET = 100;
