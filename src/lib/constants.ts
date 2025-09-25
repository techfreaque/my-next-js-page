/**
 * All available page sections for scroll detection
 * Used to determine which navigation item should be marked as active
 */
export const PAGE_SECTIONS = {
  HOME: "home",
  CHAT: "chat",
  ABOUT: "about",
  PROJECTS: "projects",
  SKILLS: "skills",
  EXPERIENCE: "experience",
} as const;
export type PageSection = (typeof PAGE_SECTIONS)[keyof typeof PAGE_SECTIONS];
