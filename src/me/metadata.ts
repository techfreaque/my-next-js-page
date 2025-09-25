import type { Metadata } from "next";

import { personalInfo } from "./about-me";

// ===== METADATA =====
export const metadata: Metadata = {
  title: "Max B - AI & Cross-Platform Developer, Framework Builder",
  description:
    "Entrepreneur and framework builder specializing in AI-native development and universal cross-platform solutions. Built anywhere-widgets and next-vibe. Seeking AI and cross-platform opportunities.",
  keywords: [
    "AI developer",
    "cross-platform",
    "framework builder",
    "entrepreneur",
    "universal widgets",
    "AI-native",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: personalInfo.fullName, url: personalInfo.website }],

  openGraph: {
    title: "Max B - AI & Cross-Platform Developer, Framework Builder",
    description:
      "Entrepreneur and framework builder specializing in AI-native development and universal cross-platform solutions.",
    type: "website",
  },
} as const;
