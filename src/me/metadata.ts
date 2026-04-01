import type { Metadata } from "next";

import { personalInfo } from "./about-me";

export const metadata: Metadata = {
  title: "Max B - Framework Builder, AI Platform Founder, Full Stack Developer",
  description:
    "Building next-vibe (AI-native SaaS framework) and unbottled.ai (free speech AI platform with 50+ models). 14+ years shipping software - from car mechanic to framework builder. Open to AI and cross-platform opportunities.",
  keywords: [
    "AI platform",
    "framework builder",
    "next-vibe",
    "unbottled.ai",
    "free speech AI",
    "cross-platform",
    "TypeScript",
    "SaaS framework",
    "full stack developer",
    "entrepreneur",
  ],
  authors: [{ name: personalInfo.fullName, url: personalInfo.website }],

  openGraph: {
    title:
      "Max B - Framework Builder, AI Platform Founder, Full Stack Developer",
    description:
      "Building next-vibe and unbottled.ai. 14+ years shipping software across web, mobile, CLI, and AI surfaces.",
    type: "website",
  },
} as const;
