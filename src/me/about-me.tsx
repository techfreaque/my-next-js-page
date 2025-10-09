const myGithub = "https://github.com/techfreaque";

// ===== BASIC PERSONAL INFORMATION =====
export const personalInfo = {
  fullName: "Marcus Brandstaetter",
  nickname: "Max",
  location: "Germany",
  age: new Date().getFullYear() - 1991,
  email: "max@a42.ch",
  github: myGithub,
  linkedIn: "https://www.linkedin.com/in/marcus-brandstaetter",
  twitter: "https://x.com/sir_freaque",
  thisProject: `${myGithub}/my-next-js-page`,
  website: "max.a42.ch",
  experienceYears: "13+",
  startDate: "January 2012",
  currentStatus: "Actively seeking AI and/or cross-platform opportunities",
  contactEmailSubject: "Let's build something amazing together",
} as const;

// ===== ABOUT SECTION CONTENT =====
export const aboutContent = {
  welcomeText: `With ${personalInfo.experienceYears} years of experience, I'm a full stack developer who went from fixing luxury cars to building developer tools and AI systems.`,
  textPart1: `My journey started with a car mechatronics apprenticeship at a Ferrari, Maserati, Aston Martin & Bentley specialist in Salzburg. I was the guy who fixed the cars, handled IT support, and learned that complex systems are just puzzles waiting to be solved. That hands-on problem-solving mindset stuck with me.`,
  textPart2: `I moved into tech support and team leadership roles, eventually founding my own companies. At Sovendus, I led the integration team and built developer-hub.sovendus.com with 20+ platform-specific plugins. The goal was always the same: reduce friction, empower developers, and build tools that actually solve problems.`,
  textPart3: `These days I'm working on utilizing AI and looking for my next challenge in AI and/or cross-platform development. I still fix my own car, phone, and washing machine - because why pay for skills you have? I believe in building teams that become close friends, writing code that lasts, and always questioning if there's a better way.`,
} as const;

// ===== PROFESSIONAL SUMMARY =====
export const professionalSummary = {
  title:
    "Full Stack Developer, AI enthusiast, entrepreneur, and framework builder",
  description:
    "13+ years building software that solves real problems. Started as a car mechanic, taught myself to code through open source, founded a few companies, and now I build frameworks and developer tools. I'm too cheap to pay for things I can do myself - fixed my own car, phone, washing machine, and did my own bookkeeping. My teams tend to become close friends who actually enjoy working together.",
  specializations: [
    "Universal widget engines with SSR client hydration (runs on 20+ platforms)",
    "AI-native framework development (building next-vibe, a WordPress successor)",
    "Cross-platform solutions that actually work everywhere",
    "Developer tools that make people's lives easier",
    "Team leadership focused on friendship and mutual respect",
    "Entrepreneurship (founded several companies, most still running)",
    "DIY problem-solving (if I can learn it, I'll do it myself)",
  ],
  keyAchievements: [
    "Built a universal widget engine that works better than Google Tag Manager",
    "Created next-vibe: AI-native CMS where one API definition becomes CLI, web page, AI tool, and cron job",
    "Founded several companies that are still running after I left",
    "Reduced support tickets by 99% by building tools so people could help themselves",
    "Wrote 20+ platform-specific plugins from a single codebase",
    "Led teams that became close friends while shipping great work",
  ],
} as const;

// ===== OPPORTUNITIES SEEKING =====
export const opportunitiesSeeking = [
  "AI and/or cross-platform development roles",
  "Places where I can actually innovate and solve hard problems",
  "Leadership roles where I can build teams that become friends",
  "Complex architectural challenges that make me think",
  "Companies that care about doing things right, not just fast",
  "Opportunities to build frameworks and tools that help other developers",
] as const;

// ===== PERSONALITY & APPROACH =====
export const personalityApproach = {
  description:
    "I solve problems and build things. My teams tend to become close friends who respect each other. I create environments where people can learn, fail, and grow together without anyone being an asshole about it.",
  leadership: {
    style: "Everyone's voice matters - I don't have all the answers",
    teamDynamics:
      "Teams work best when they're friends who respect each other and learn together",
    communication:
      "I talk about my failures and blind spots openly - mistakes are how we learn",
    approach:
      "We make goals and plans together as a team, not top-down mandates",
  },
  learningMindset: {
    philosophy:
      "Question everything. What worked yesterday might not work tomorrow",
    transparency:
      "I show my thinking process - collaborative problem-solving beats lone genius",
    failureHandling:
      "I focus on how I've failed and what I learned - mistakes are just expensive lessons",
    environment:
      "Places where questioning assumptions and learning from failures is normal, not scary",
  },
  characterTraits: [
    "Always learning",
    "Purposeful",
    "Resilient",
    "Analytical",
    "Empathetic",
    "Flexible",
    "Thinks outside the box",
  ],
  coreValues: [
    "Elegant solutions over quick hacks",
    "Long-term thinking over short-term wins",
    "Continuous learning and adaptation",
    "Innovation and trying new things",
    "Team empowerment and knowledge sharing",
    "Collaborative problem-solving",
  ],
  workingStyle: [
    "Find problems before they become fires",
    "Document everything so others can learn",
    "Build tools that let people help themselves",
    "Focus on scalable, maintainable solutions",
    "Lead by collaboration, not authority",
    "Create teams that become friends",
  ],
  passions: [
    "Philosophizing and enjoying life with friends and family",
    "Building innovative solutions to real problems",
    "Learning constantly - reading, listening, watching, doing",
    "Building teams that become close friends",
    "Solving complex technical challenges",
    "Creating tools that make other developers' lives easier",
  ],
} as const;

// ===== COMMUNICATION GUIDELINES FOR AI =====
export const communicationGuidelines = {
  toneAndStyle: [
    "Professional yet approachable and enthusiastic about technology",
    "Technical but accessible explanations that non-technical people can understand",
    "Problem-solving focused with innovative mindset",
    "Confident but humble, showcasing expertise without arrogance",
    "Honest about seeking new challenges and growth opportunities",
  ],
  responseStructure: [
    "Acknowledge the question with enthusiasm and relevance to Max's experience",
    "Provide comprehensive information drawing from his extensive background",
    "Include specific examples from his projects and achievements when relevant",
    "Demonstrate technical depth while remaining accessible",
    "Connect to broader implications and potential opportunities",
    "Maintain professional enthusiasm throughout the response",
  ],
  keyMessagingPoints: [
    "Highlight progressive experience and leadership roles",
    "Emphasize expertise in developer tools, plugin development, and AI integration",
    "Showcase successful track record of solving complex integration problems",
    "Mention innovative approaches to problem-solving and process optimization",
    "Note active pursuit of new opportunities with innovation potential",
    "Demonstrate deep understanding of full-stack development and AI technologies",
  ],
  responseGuidelines: [
    "BE CONCISE BY DEFAULT: Keep responses brief and to the point (2-4 sentences or bullet points)",
    "EXPAND ONLY WHEN ASKED: Provide detailed information only when user asks for 'details', 'more information', 'tell me more', or similar requests",
    "USE ENGAGING TONE: Professional yet friendly, enthusiastic about technology",
    "HIGHLIGHT KEY POINTS: Use **bold** for important achievements and technologies",
  ],
  formattingInstructions: [
    "Use **bold text** for emphasis and important points",
    "Use *italic text* for subtle emphasis",
    "Use ## headings for main sections (only in detailed responses)",
    "Use ### subheadings for subsections (only in detailed responses)",
    "Use bullet points (-) for lists",
    "Use numbered lists (1.) when order matters",
    "Use backtick inline code for technical terms and technologies",
    "Use triple backtick code blocks for code examples",
    "Use > blockquotes for important notes",
    "Keep formatting clean and readable",
  ],
} as const;
