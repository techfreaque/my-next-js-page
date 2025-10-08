import {
  Activity,
  BookOpen,
  Brain,
  Building2,
  Cloud,
  Code2,
  Coins,
  GitBranch,
  Headset,
  Layers,
  LineChart,
  Mail,
  Megaphone,
  Palette,
  Plug,
  Send,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";

export enum Category {
  FEATURED = "featured",
  MACHINE_LEARNING_AI = "machine-learning-ai",
  DEVELOPER_TOOLS = "developer-tools",
  FINTECH_TRADING = "fintech-trading",
  MARKETING_AUTOMATION = "marketing-automation",
  CROSS_PLATFORM = "cross-platform",
  API_INTEGRATION = "api-integration",
  OPEN_SOURCE = "opensource",
  SAAS_PRODUCTS = "saas-products",
  BUSINESS_LEADERSHIP = "business-leadership",
}

export interface Project {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string | undefined }>;
  technologies: string[];
  categories: Category[];
  achievements: string[];
  status: string;
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "leadThing.dev - Newsletter Lead Generation",
    description:
      "SaaS platform that connects to 20+ newsletter systems through one simple API. Built it because managing leads across Klaviyo, Mailchimp, Salesforce, and others was a nightmare. Now it's just one API call.",
    icon: Mail,
    technologies: [
      "Next.js",
      "React",
      "PayPal SDK",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
    ],
    categories: [
      Category.SAAS_PRODUCTS,
      Category.API_INTEGRATION,
      Category.OPEN_SOURCE,
      Category.FEATURED,
      Category.MARKETING_AUTOMATION,
    ],
    achievements: [
      "Single API connecting to 20+ newsletter platforms",
      "PayPal subscription billing with multiple tiers",
      "Interactive API docs with live testing",
      "User auth, registration, password reset - the whole package",
    ],
    status: "Live",
    url: "https://leadthing.dev",
    github: "https://github.com/techfreaque/lead-thing",
  },
  {
    title: "Anywhere Widgets - Universal Widget Platform",
    description:
      "Widget platform that runs on 20+ platforms from one codebase. SSR + client hydration, <14KB runtime, sub-50ms API responses. Works on iOS, Android, WordPress, Shopify, React, Vue - basically everywhere. Write once, actually deploy everywhere.",
    icon: Layers,
    technologies: [
      "TypeScript",
      "Bun Server",
      "React SSR",
      "Preact Signals",
      "Drizzle ORM",
      "PostgreSQL",
      "Iframe Isolation",
      "WebView SDKs",
      "Docker",
      "Vite",
    ],
    categories: [
      Category.CROSS_PLATFORM,
      Category.DEVELOPER_TOOLS,
      Category.OPEN_SOURCE,
      Category.FEATURED,
    ],
    achievements: [
      "Built my own Next.js-like framework with custom compiler",
      "SSR + client hydration with <14KB runtime",
      "Runs on 20+ platforms: iOS, Android, WordPress, Shopify, React, Vue, mobile apps",
      "Sub-50ms API responses with 3-tier caching",
      "Complete monorepo: Widget Cloud server, Widget Engine runtime, platform plugins",
      "Native mobile SDKs with WebView integration",
    ],
    status: "In Active Development",
  },
  {
    title: "nextVibe.dev - AI-Native WordPress Successor",
    description:
      "WordPress successor, but AI-native. Built on Next.js with my own framework. Write one API definition with Zod schema, get CLI command, web page, AI tool, and cron job automatically. The AI can use each API as a tool based on user roles. Because defining things once is better than four times.",
    icon: Sparkles,
    technologies: [
      "TypeScript",
      "Next.js Framework",
      "Zod Schema",
      "AI Tool Integration",
      "CLI Generation",
      "Multi-Interface APIs",
      "Cron Jobs",
      "Role-Based AI",
      "drizzle ORM",
    ],
    categories: [
      Category.MACHINE_LEARNING_AI,
      Category.DEVELOPER_TOOLS,
      Category.OPEN_SOURCE,
      Category.FEATURED,
    ],
    achievements: [
      "One definition.ts file becomes CLI, web page, AI tool, and cron job",
      "AI-native architecture where every API is an AI tool",
      "UI auto-generated from Zod schemas - no manual form building",
      "Role-based AI access - different users, different tools",
      "Type-safe everything - if it compiles, it probably works",
      "Different approach to CMS - AI-first instead of AI-bolted-on",
    ],
    status: "In Development - Core Architecture Complete",
    github: "https://github.com/techfreaque/next-vibe",
  },
  {
    title: "FaceArt - Beauty Studio Website",
    description:
      "Website and management system for beauty studios. Multi-location partner portal, appointment booking, automated deployment. Used Matomo for analytics because Google doesn't need to know everything.",
    icon: Palette,
    technologies: [
      "Next.js",
      "React",
      "Python",
      "Flask",
      "Docker",
      "Caddy",
      "Matomo",
    ],
    categories: [Category.SAAS_PRODUCTS, Category.BUSINESS_LEADERSHIP],
    achievements: [
      "Multi-location partner portal",
      "Automated deployment - push to Git, Docker handles it",
      "Privacy-focused analytics with Matomo",
      "SEO-optimized static pages",
    ],
    status: "Owner Retired - Business Closed",
  },
  {
    title: "Octane - Advanced Trading Strategy Development Platform",
    description:
      "A sophisticated trading bot platform built on OctoBot with a revolutionary visual strategy designer. Features drag-and-drop strategy building, multi-threaded backtesting, real-time simulation, and neural network integration. Supports 50+ technical indicators with modular block-based architecture for creating complex trading strategies on crypto and stock markets.",
    icon: Activity,
    technologies: [
      "Python",
      "React",
      "TypeScript",
      "Machine Learning",
      "Neural Networks",
      "TensorFlow",
      "Multi-threading",
      "WebSockets",
      "Flask",
      "Node.js",
    ],
    categories: [
      Category.FINTECH_TRADING,
      Category.MACHINE_LEARNING_AI,
      Category.DEVELOPER_TOOLS,
      Category.OPEN_SOURCE,
      Category.FEATURED,
    ],
    achievements: [
      "Visual Strategy Designer with drag-and-drop interface for connecting 50+ indicators",
      "Multi-threaded backtesting engine utilizing all CPU cores for parallel execution",
      "Real-time trading simulation with paper trading and live execution modes",
      "Neural network evaluator supporting CNN, LSTM, RNN, and Transformer architectures",
      "Modular block factory system with 60+ indicator blocks and 15+ evaluator blocks",
      "Advanced risk management with position sizing and stop-loss automation",
      "Multi-exchange support through CCXT library integration",
      "Real-time market data processing with WebSocket connections",
      "Strategy optimization campaigns with genetic algorithm-based parameter tuning",
      "Comprehensive backtesting reports with performance analytics and visualization",
    ],
    status: "Production",
    github: "https://github.com/techfreaque/octane",
    url: "https://octane.a42.ch",
  },

  {
    title: "Cryptocurrency Trading Platform",
    description:
      "Full-stack automated trading platform enabling users to invest in algorithmic cryptocurrency strategies. Features real-time portfolio tracking, automated deposits/withdrawals, strategy performance analytics, and live trading execution via Bybit API integration.",
    icon: Coins,
    technologies: [
      "Flask",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "Bootstrap",
      "Chart.js",
      "Bybit API",
      "WebSockets",
    ],
    categories: [Category.FINTECH_TRADING, Category.SAAS_PRODUCTS],
    achievements: [
      "Integrated Bybit exchange API for live trading execution",
      "Built automated portfolio rebalancing and fund transfers",
      "Real-time strategy performance tracking with interactive charts",
      "Multi-user account management with referral system",
      "Automated deposit/withdrawal processing with transaction history",
      "Strategy backtesting and performance analytics dashboard",
    ],
    status: "Retired",
  },
  {
    title: "Lead Generation & Email Marketing Platform",
    description:
      "Comprehensive lead generation and email marketing platform with automated email sequences, social media management, and business automation. Features multi-stage email campaigns, lead nurturing, order management, and integrated IMAP/SMTP email handling.",
    icon: Send,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "IMAP/SMTP",
      "Email APIs",
      "SMS APIs",
      "Cron Jobs",
      "Template Engine",
    ],
    categories: [
      Category.MARKETING_AUTOMATION,
      Category.SAAS_PRODUCTS,
      Category.API_INTEGRATION,
      Category.FEATURED,
    ],
    achievements: [
      "Automated email marketing campaigns with 300% growth messaging",
      "Multi-stage lead nurturing sequences (personal, results-focused, urgency-based)",
      "Comprehensive IMAP/SMTP email management system",
      "Lead management with advanced filtering and admin controls",
      "Template import/export system with CSV, JSON, XML support",
      "Order management with email and SMS notifications",
      "Multi-language platform (English, German, Polish) with full localization",
    ],
    status: "Completed",
    url: "https://socialmediaservice.center",
  },
  {
    title: "Sovendus Developer Hub - Documentation Platform",
    description:
      "Documentation platform with a custom markdown renderer that pulls docs from where they actually live - right next to the code in each plugin's repo. Tired of docs getting out of sync? This solves it. Each plugin documents itself, the platform renders it all together. Part of a bigger picture: better docs meant fewer support tickets, which meant more time to improve plugins and testing tools.",
    icon: BookOpen,
    technologies: [
      "TypeScript",
      "React",
      "Custom Markdown Renderer",
      "Next.js",
      "Docker",
      "Tailwind CSS",
      "Kubernetes",
      "Git Integration",
    ],
    categories: [
      Category.DEVELOPER_TOOLS,
      Category.API_INTEGRATION,
      Category.CROSS_PLATFORM,
      Category.FEATURED,
    ],
    achievements: [
      "Custom server-side markdown renderer that pulls docs from code repositories",
      "Went from scattered PDFs and multiple versions all over the place to one unified platform",
      "Documentation lives next to actual implementation - no more out-of-sync docs",
      "Reduced support tickets by half - partners found answers themselves",
      "Freed up team time to focus on improving plugins and testing tools instead of answering tickets",
    ],
    status: "Production",
    url: "https://developer-hub.sovendus.com",
  },
  {
    title: "Sovendus Integration Plugins - Universal Codebase",
    description:
      "Created 20+ integration plugins from scratch with the team. One codebase, 20+ platforms - Shopify, Magento, Shopware, Vue, React, Svelte, Flutter, Swift, Kotlin, you name it. Built a system where platform-specific stuff is just overrides on a unified core. Write the integration logic once, adapt the platform quirks as needed. Each release got better because we had more time to polish instead of firefighting support tickets.",
    icon: Plug,
    technologies: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "Swift",
      "Kotlin",
      "Dart",
      "Flutter",
      "React",
      "Vue",
      "Svelte",
      "Shopify",
      "Magento",
      "Shopware",
    ],
    categories: [
      Category.FEATURED,
      Category.DEVELOPER_TOOLS,
      Category.API_INTEGRATION,
      Category.CROSS_PLATFORM,
    ],
    achievements: [
      "Built 20+ plugins from scratch - didn't exist before",
      "Unified codebase architecture for all platforms and frameworks",
      "Platform-specific overrides instead of separate implementations",
      "Created plugins for Shopify, Magento, Shopware, WooCommerce, and more",
      "Native mobile SDKs: Swift (iOS), Kotlin (Android), Flutter, React Native",
      "Frontend framework integrations: React, Vue, Svelte, vanilla JS",
      "Single source of truth for integration logic across all platforms",
      "Each new release improved quality - virtuous cycle of less support, more dev time",
    ],
    status: "Production",
    url: "https://developer-hub.sovendus.com",
  },
  {
    title: "Sovendus Testing App - Browser Extension",
    description:
      "Browser extension that catches integration mistakes right when they happen. Near 100% detection rate - if something's wrong, it finds it. In 90% of cases it nails down exactly what the issue is. The other 10% it gives a generic error with test result data so the team can reproduce and debug. The final piece of the puzzle: docs + plugins + testing tool = virtuous cycle where each release freed up more time to improve everything.",
    icon: Activity,
    technologies: [
      "TypeScript",
      "Browser Extension API",
      "Chrome Extensions",
      "Firefox Add-ons",
      "Real-time Testing",
      "DOM Analysis",
    ],
    categories: [
      Category.FEATURED,
      Category.DEVELOPER_TOOLS,
      Category.API_INTEGRATION,
      Category.CROSS_PLATFORM,
    ],
    achievements: [
      "Near 100% detection rate for integration issues",
      "90% of cases get exact error pinpointing, rest get generic error with reproduction data",
      "Real-time testing while developers work - instant feedback",
      "Works across all Chromium and Firefox based browsers",
      "Shifted QA from 3 students to just 1 - automation replaced manual testing",
      "Went from 1-week ping-pong between QA and dev to instant feedback",
      "Drastically reduced integration time - the earlier partners go live, the more revenue we make",
      "Support tickets dropped dramatically - partners fix their own issues",
      "Completed the cycle: less support = more time improving docs, plugins, and testing tools",
    ],
    status: "Production",
    url: "https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Integration-Tester",
  },
  {
    title: "netsepp & expert-service - IT Support Companies",
    description:
      "Co-founded two IT support companies from scratch. Started fixing phones and laptops, grew into full IT consultancies. Built the teams, the systems, the websites. Sold both - they're still running today.",
    icon: Building2,
    technologies: [
      "PHP",
      "JavaScript",
      "Odoo",
      "Team Leadership",
      "Business Operations",
    ],
    categories: [Category.BUSINESS_LEADERSHIP],
    achievements: [
      "Built two companies from zero to profitable",
      "Grew teams to 5 people each",
      "Built websites and set up Odoo for ERP/POS",
      "Sold both companies - still running as viybs.com and notebook-repair-corner.at",
    ],
    status: "Sold",
  },
  {
    title: "Samsung Business Tech Support",
    description:
      "Led Swiss business tech support team for Samsung. Solved complex enterprise issues that nobody else could figure out. Coordinated with global teams, got bugs fixed, features added.",
    icon: Headset,
    technologies: [
      "Samsung Knox",
      "MagicInfo",
      "Python",
      "JavaScript",
      "Team Leadership",
    ],
    categories: [Category.BUSINESS_LEADERSHIP],
    achievements: [
      "Led 10-person support team across subcontractors",
      "Solved complex issues nobody else could",
      "Coordinated with global teams for bug fixes and features",
      "Built internal tools to improve processes",
    ],
    status: "Completed",
  },
];

export const projectCategories: {
  id: Category;
  label: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: Category.FEATURED,
    label: "Featured Projects",
    icon: Star,
  },
  {
    id: Category.MACHINE_LEARNING_AI,
    label: "Machine Learning & AI",
    icon: Brain,
  },
  { id: Category.DEVELOPER_TOOLS, label: "Developer Tools", icon: Code2 },
  { id: Category.FINTECH_TRADING, label: "FinTech & Trading", icon: LineChart },
  {
    id: Category.MARKETING_AUTOMATION,
    label: "Marketing Automation",
    icon: Megaphone,
  },
  { id: Category.CROSS_PLATFORM, label: "Cross-Platform", icon: Layers },
  { id: Category.API_INTEGRATION, label: "API Integration", icon: Plug },
  { id: Category.OPEN_SOURCE, label: "Open Source", icon: GitBranch },
  { id: Category.SAAS_PRODUCTS, label: "SaaS Products", icon: Cloud },
  {
    id: Category.BUSINESS_LEADERSHIP,
    label: "Business Leadership",
    icon: Users,
  },
] as const;
