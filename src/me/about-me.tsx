const myGithub = "https://github.com/techfreaque";

// ===== BASIC PERSONAL INFORMATION =====
export const personalInfo = {
  fullName: "Max Brandstaetter",
  nickname: "Max",
  location: "Germany",
  age: new Date().getFullYear() - 1991,
  email: "max@a42.ch",
  github: myGithub,
  linkedIn: "https://www.linkedin.com/in/marcus-brandstaetter",
  twitter: "https://x.com/sir_freaque",
  thisProject: `${myGithub}/my-next-js-page`,
  website: "max.a42.ch",
  experienceYears: "14+",
  startDate: "January 2012",
  currentStatus:
    "Building next-vibe & unbottled.ai - open to AI and cross-platform opportunities",
  contactEmailSubject: "Let's build something amazing together",
} as const;

// ===== ABOUT SECTION CONTENT =====
export const aboutContent = {
  welcomeText: `With ${personalInfo.experienceYears} years of experience, I'm a developer, entrepreneur, and framework builder who went from diagnosing Ferraris to building AI-native platforms - and I still fix my own car.`,
  textPart1: `It started with a car mechatronics apprenticeship at a Ferrari, Maserati, Aston Martin and Bentley specialist in Salzburg. I was the person who fixed the cars, handled the IT, and learned that every complex system - mechanical or digital - is just a set of interacting components waiting to be understood. That mindset never left. I co-founded my first company straight out of that apprenticeship, fixing phones and laptops, and never really stopped building things.`,
  textPart2: `I led teams at Samsung Switzerland, founded and sold two IT companies, built trading bots with neural networks, wrote 20+ cross-platform plugins from a single codebase at Sovendus, and spent every spare hour on side projects that kept teaching me the same lesson: define things once and make them work everywhere. That lesson eventually became next-vibe. The widget engine, the trading platform, the email SaaS - they were all practice runs for the same core idea.`,
  textPart3: `These days I'm building next-vibe and unbottled.ai full time. I've also shifted into a role I didn't expect to enjoy: working with AI as a genuine collaborator. I architect, review, and direct - AI implements at a pace I couldn't match alone. I miss writing every line myself sometimes, but shipping things that would've taken a team of five is a decent trade. I'm open to the right role or collaboration, but the main mission right now is finishing something that matters.`,
} as const;

// ===== PROFESSIONAL SUMMARY =====
export const professionalSummary = {
  title:
    "Framework builder, AI platform founder, full stack developer, and reluctant manager",
  description:
    "14+ years building software that solves real problems. Started as a car mechanic, taught myself to code, founded companies, led teams, and now I'm building next-vibe - a SaaS framework where one definition becomes a web app, CLI, MCP server, native app, and AI tool - and unbottled.ai, a free speech AI platform with 50+ models. I work with AI as a genuine collaborator: I architect and review, AI implements. I miss writing every line myself. My teams tend to become close friends.",
  specializations: [
    "AI-native SaaS framework development (next-vibe - the spiritual successor to WordPress)",
    "Free speech AI platforms with user-controlled filtering (unbottled.ai - 50+ models)",
    "Universal surface architecture: one definition → web UI, CLI, MCP server, native app, AI tool",
    "Vibe Sense: TradingView-style business intelligence for any domain - timeseries, events, signals",
    "Human-AI development: architect and code review role, AI as implementation partner",
    "Cross-platform plugin systems that actually work everywhere from one codebase",
    "Team leadership where the team becomes close friends and actually enjoys the work",
  ],
  keyAchievements: [
    "Built unbottled.ai: free speech AI platform with 50+ models and user-controlled filtering",
    "Created next-vibe: one definition.ts → CLI, web page, MCP server tool, native app screen, AI tool",
    "Built Vibe Sense: TradingView-style rich timeseries analytics for any business domain",
    "Switched 2M+ line codebase to ts-go - revealed architectural debt and drove systematic untangling",
    "Reduced support tickets by 99% at Sovendus - docs + plugins + testing tool as a self-reinforcing system",
    "Wrote 20+ cross-platform plugins (Shopify, Magento, Flutter, Swift, Kotlin) from a single codebase",
    "Founded several companies that are still running after I left",
  ],
} as const;

// ===== OPPORTUNITIES SEEKING =====
export const opportunitiesSeeking = [
  "AI and cross-platform roles where I can actually innovate",
  "Companies building hard things that care about doing them right",
  "Leadership roles where I can build teams that become close friends",
  "Architectural challenges at scale - the kind that keep you up at night",
  "Collaborations on next-vibe, unbottled.ai, or anything AI-native",
  "Opportunities to build frameworks and tools that make developers' lives better",
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
    "Highlight the thread connecting all projects: define once, run everywhere - from plugins to widgets to next-vibe",
    "Emphasize the human-AI symbiosis angle: architect and reviewer working with AI as implementation partner",
    "Vibe Sense: TradingView-style analytics for any business domain - genuinely novel, not just another dashboard",
    "Showcase the Sovendus virtuous cycle: tools that create more time to build better tools",
    "Note the ts-go / checker story: performance visibility as an architectural insight, not just a speed win",
    "Be honest about the transition: missing writing every line, but the output at this scale is the trade-off",
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
