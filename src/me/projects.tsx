import {
  Activity,
  BookOpen,
  Brain,
  Building2,
  CheckCircle,
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
    title: "next-vibe + unbottled.ai - AI-Native SaaS Platform",
    description:
      "Everything I've built for the past decade was practice for this. next-vibe is a SaaS framework built on a single principle: define it once, run it everywhere. One definition.ts file - with Zod schemas, field widgets, and examples - automatically becomes a web UI, CLI command, MCP server tool, native app screen, and AI-callable function. No glue code. No duplication. unbottled.ai is the flagship product built on it: a free speech AI platform with 50+ models where users control their own filtering level. Privacy-first, open source, and built for people who don't think someone else should decide what they're allowed to ask. The architecture absorbed everything - anywhere-widgets' SSR engine, Octane's data platform, leadThing's email layer, and years of building the same abstraction in five different ways before finally getting it right.",
    icon: Sparkles,
    technologies: [
      "TypeScript",
      "Next.js",
      "TanStack Start",
      "Vite",
      "Bun",
      "Zod",
      "Drizzle ORM",
      "PostgreSQL",
      "MCP Servers",
      "AI Agents",
      "OpenRouter",
      "React",
    ],
    categories: [
      Category.MACHINE_LEARNING_AI,
      Category.DEVELOPER_TOOLS,
      Category.OPEN_SOURCE,
      Category.FEATURED,
      Category.SAAS_PRODUCTS,
    ],
    achievements: [
      "One definition.ts becomes web UI, CLI, MCP server tool, native app screen, and AI-callable function - zero duplication, detected at runtime",
      "unbottled.ai: 50+ models (mainstream, open, uncensored) - users control their own filtering, not the platform",
      "TanStack Start + Vite in dev, Next.js App Router in prod - same codebase, no compromise on DX or performance",
      "Hermes (local AI) and Thea (cloud AI) built natively into the platform - they monitor, delegate, and call endpoints as tools",
      "Vibe Sense: TradingView-style rich timeseries analytics for any business domain - pipe endpoints together or describe a graph in plain language and get interactive charts with events, signals, and drill-downs",
      "Human-AI symbiosis in practice: I architect and review, AI implements - the framework's strict patterns make both faster",
      "Type-safe end to end: schema is the single source of truth for validation, UI rendering, CLI args, AI tool descriptions, and docs",
    ],
    status: "Active Development - Live at unbottled.ai",
    github: "https://github.com/techfreaque/next-vibe",
  },
  {
    title: "@next-vibe/checker - Ultra-Strict TypeScript Enforcer",
    description:
      "Code quality is an architectural decision, not a lint config. @next-vibe/checker wraps TypeScript, oxlint, and ESLint into one fast unified check with a clean summary - but that's just the surface. The real story is what switching to ts-go for a 2M+ line codebase revealed: type-checking that took minutes dropped to seconds, which opened a window into exactly why the code was slow to check. That visibility drove a systematic untangling of the whole codebase - circular dependencies eliminated, patterns made consistent, every module following the exact same structure. The result isn't just faster checks, it's code where human and AI review are both dramatically faster because everything looks the same. No `any`, no `unknown`, no `as X`, no `object`. If it compiles, it probably works.",
    icon: CheckCircle,
    technologies: ["TypeScript", "ts-go", "oxlint", "ESLint", "Bun", "npm"],
    categories: [
      Category.DEVELOPER_TOOLS,
      Category.OPEN_SOURCE,
      Category.FEATURED,
    ],
    achievements: [
      "Switched to ts-go for 2M+ line codebase - check times dropped from minutes to seconds",
      "Performance visibility revealed circular deps and inconsistent patterns that were invisible before",
      "Systematic untangling: every module now follows the exact same structure - human and AI review are both dramatically faster",
      "~200 type assertions down from baseline and counting - targeting <10 core generic utils where casting is genuinely unavoidable",
      "Bans: no any, no unknown, no object, no as X, no as whatever - zero exceptions, zero excuses",
      "Ships as @next-vibe/checker on npm - drop-in quality gate for any TypeScript project",
    ],
    status: "Active - core quality gate for next-vibe",
    github:
      "https://github.com/techfreaque/next-vibe/tree/dev/src/app/api/%5Blocale%5D/system/check",
  },
  {
    title: "Vibe Sense - Business Intelligence for the Rest of Us",
    description:
      "Think TradingView, but for your own company's data. Vibe Sense brings professional-grade timeseries analytics - the kind that pro day traders use to spot signals in market noise - to any business domain. Connect your next-vibe endpoints as data sources, pipe them together drag-and-drop, or just describe the graph you want and get rich interactive charts with events, signals, moving averages, anomaly markers, and drill-downs. The ideas came from years of building trading strategy platforms with Octane: if you can visualise a market with that level of richness, you can visualise anything - revenue, user growth, system health, whatever your domain looks like over time.",
    icon: LineChart,
    technologies: [
      "TypeScript",
      "React",
      "Timeseries Analytics",
      "next-vibe Endpoints",
      "Drag-and-Drop Pipeline",
      "WebSockets",
      "PostgreSQL",
    ],
    categories: [
      Category.MACHINE_LEARNING_AI,
      Category.DEVELOPER_TOOLS,
      Category.FEATURED,
      Category.SAAS_PRODUCTS,
    ],
    achievements: [
      "TradingView-style rich interactive charts - candlesticks, overlays, events, signals - for any business data source",
      "Pipe next-vibe endpoints together visually or describe a graph in plain language and get it built",
      "Technical analysis toolkit applied to business metrics: moving averages, anomaly detection, trend signals",
      "Any timeseries domain: revenue, user behaviour, infrastructure health, content performance, trading",
      "Evolved from years of building Octane's real-time market data and indicator engine",
      "Integrated into next-vibe - every endpoint can become a Vibe Sense data source automatically",
    ],
    status: "In Development - part of next-vibe",
    github: "https://github.com/techfreaque/next-vibe",
  },
  {
    title: "Anywhere Widgets - Universal Widget Runtime",
    description:
      "The project where I accidentally built a framework. anywhere-widgets ran on 20+ platforms from one codebase - SSR + client hydration, <14KB runtime, sub-50ms responses - on iOS, Android, WordPress, Shopify, React, Vue, native webviews, and anything else with a browser. I wrote a custom Next.js-like SSR compiler from scratch because I needed it to work everywhere, not just on platforms that cooperated. By the time I was done, I'd solved SSR, client hydration, iframe isolation, platform-specific overrides, and native SDK integration in a single monorepo. Every architectural decision from this project lives on in next-vibe.",
    icon: Layers,
    technologies: [
      "TypeScript",
      "Bun",
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
    ],
    achievements: [
      "Custom Next.js-like SSR compiler built from scratch - before I knew that's what I was building",
      "SSR + client hydration with <14KB runtime - ran anywhere a browser could render",
      "20+ platforms from one codebase: iOS, Android, WordPress, Shopify, React, Vue, native webviews",
      "Sub-50ms API responses with 3-tier caching strategy",
      "Complete monorepo: Widget Cloud server, Widget Engine runtime, 20+ platform adapters",
      "Every core insight - unified surfaces, platform detection, SSR hydration - evolved into next-vibe",
    ],
    status: "Merged into next-vibe",
  },
  {
    title: "Octane - Trading Strategy Platform",
    description:
      "Open source trading bot platform with a visual strategy designer that actually works. Drag-and-drop block-based strategy building with 60+ indicator blocks, multi-threaded backtesting across all CPU cores, neural network integration for market prediction, and live execution via 50+ exchanges through CCXT. Still running. The real contribution wasn't the bot - it was building a platform where complex real-time data, technical analysis indicators, and visual pipelines all composed cleanly together. That architecture became the foundation for Vibe Sense.",
    icon: Activity,
    technologies: [
      "Python",
      "React",
      "TypeScript",
      "TensorFlow",
      "Neural Networks",
      "Multi-threading",
      "WebSockets",
      "Flask",
      "CCXT",
    ],
    categories: [
      Category.FINTECH_TRADING,
      Category.MACHINE_LEARNING_AI,
      Category.DEVELOPER_TOOLS,
      Category.OPEN_SOURCE,
      Category.FEATURED,
    ],
    achievements: [
      "Visual Strategy Designer: drag-and-drop pipeline with 60+ indicator blocks and 15+ evaluator blocks",
      "Multi-threaded backtesting - parallel execution across all CPU cores for fast iteration",
      "Neural network evaluator: CNN, LSTM, RNN, Transformer architectures trained on real market data",
      "TensorFlow model trained on 100+ stocks and cryptos - 2x'd a live test investment before I trusted it enough to scale",
      "Live execution via CCXT: 50+ exchanges, paper trading and real money modes",
      "Genetic algorithm-based parameter optimization for strategy tuning",
      "Real-time data pipeline and indicator composition architecture evolved into Vibe Sense",
    ],
    status: "Production - data architecture evolved into Vibe Sense",
    github: "https://github.com/techfreaque/octane",
    url: "https://octane.a42.ch",
  },
  {
    title: "Sovendus Integration Plugins - Universal Codebase",
    description:
      "Built 20+ integration plugins from scratch - for a platform that had zero before I joined. One unified codebase, platform-specific behaviour as overrides on a shared core: Shopify, Magento, Shopware, WooCommerce, React, Vue, Svelte, Flutter, Swift, Kotlin, React Native, vanilla JS. The same write-once-adapt-everywhere principle I'd been developing in side projects, now applied at professional scale with a team. Each plugin that shipped freed up more support time, which we reinvested into better tooling, which freed up more support time. The whole Sovendus developer ecosystem was one self-reinforcing cycle.",
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
      "20+ integration plugins built from scratch - none existed before",
      "Unified architecture: shared core logic, platform-specific overrides - not 20 separate codebases",
      "Native mobile SDKs: Swift (iOS), Kotlin (Android), Flutter, React Native",
      "Web framework plugins: React, Vue, Svelte, vanilla JS, plus PHP for Shopify/Magento/Shopware",
      "Single source of truth - fix it once, it's fixed everywhere",
      "Self-reinforcing quality cycle: better plugins → fewer support tickets → more time to improve",
    ],
    status: "Production",
    url: "https://developer-hub.sovendus.com",
  },
  {
    title: "Sovendus Testing App - Integration Debugger",
    description:
      "Browser extension that catches integration mistakes the moment they happen. Near 100% detection rate across all Chromium and Firefox browsers. 90% of cases pinpoint the exact issue with actionable detail; the other 10% produce a structured error with reproduction data so the team can debug in minutes instead of days. Before this existed, QA was three students doing manual testing with a week of back-and-forth between them and dev. After: one person, instant feedback, partners self-diagnosing their own issues. This was the final piece that completed the virtuous cycle.",
    icon: Activity,
    technologies: [
      "TypeScript",
      "Browser Extension API",
      "Chrome Extensions",
      "Firefox Add-ons",
      "DOM Analysis",
    ],
    categories: [
      Category.FEATURED,
      Category.DEVELOPER_TOOLS,
      Category.API_INTEGRATION,
      Category.CROSS_PLATFORM,
    ],
    achievements: [
      "Near 100% detection rate for integration issues across Chromium and Firefox",
      "90% of cases: exact error with fix guidance. 10%: structured reproduction data for the team",
      "QA headcount: 3 students doing manual testing → 1 person with automated coverage",
      "Integration feedback loop: 1 week of back-and-forth → instant, in the developer's browser",
      "Partners fix their own issues - support tickets dropped to near zero for integration problems",
      "Completed the cycle: docs + plugins + testing tool, each making the others better",
    ],
    status: "Production",
    url: "https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Integration-Tester",
  },
  {
    title: "Sovendus Developer Hub - Documentation Platform",
    description:
      "Documentation that stays in sync because it lives next to the code that owns it. Custom server-side markdown renderer that pulls docs directly from each plugin's repository at render time - no separate docs repo, no manual sync, no stale PDFs. Partners find answers themselves. This was the first domino: better docs meant fewer basic support questions, which freed up time to improve plugins, which reduced integration errors, which freed up more time. The whole Sovendus developer ecosystem improvement story started here.",
    icon: BookOpen,
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Custom Markdown Renderer",
      "Docker",
      "Kubernetes",
      "Tailwind CSS",
      "Git Integration",
    ],
    categories: [
      Category.DEVELOPER_TOOLS,
      Category.API_INTEGRATION,
      Category.CROSS_PLATFORM,
      Category.FEATURED,
    ],
    achievements: [
      "Custom SSR markdown renderer pulling docs live from each plugin's own repository",
      "Replaced scattered stale PDFs and versioned Word docs with one always-current platform",
      "Docs stay in sync by design - they live next to the code, maintained by the same people",
      "Support tickets dropped by half within months - partners found answers without asking",
      "First domino in the virtuous cycle: fewer tickets → more dev time → better plugins → even fewer tickets",
    ],
    status: "Production",
    url: "https://developer-hub.sovendus.com",
  },
  {
    title: "leadThing.dev - Newsletter Lead Generation SaaS",
    description:
      "SaaS that connects to 20+ newsletter platforms through one API. Built it because every client with a lead gen workflow was managing separate integrations for Klaviyo, Mailchimp, Salesforce, ActiveCampaign, and whoever else they'd accumulated over the years. It's one API call now - the platform handles the translation. Subscription billing, interactive API docs with live testing, full auth stack. The email connection layer is being absorbed into next-vibe to become part of the unified platform.",
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
      Category.MARKETING_AUTOMATION,
    ],
    achievements: [
      "Single API connecting to 20+ newsletter platforms - one integration regardless of which providers you use",
      "PayPal subscription billing with multiple tiers and webhook-based lifecycle management",
      "Interactive API docs with live request testing built in",
      "Full auth stack: registration, email verification, login, password reset, session management",
      "Email integration layer being merged into next-vibe's unified platform",
    ],
    status: "Live - integrating into next-vibe",
    url: "https://leadthing.dev",
    github: "https://github.com/techfreaque/lead-thing",
  },
  {
    title: "Lead Generation & Email Marketing Platform",
    description:
      "Full-stack lead generation and email marketing platform built for a client - the kind of internal tool that normally gets duct-taped together from five separate SaaS subscriptions. Multi-stage automated email sequences, full IMAP/SMTP integration, SMS notifications, order management, and complete localisation in three languages. One system, zero subscriptions to external marketing tools.",
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
    ],
    categories: [
      Category.MARKETING_AUTOMATION,
      Category.SAAS_PRODUCTS,
      Category.API_INTEGRATION,
    ],
    achievements: [
      "Multi-stage lead nurturing: personalised, results-focused, and urgency-based sequences",
      "Full IMAP/SMTP stack - send, receive, track, archive - no external email service required",
      "Order management with automated email and SMS notifications at each stage",
      "Template system with import/export: CSV, JSON, XML",
      "Full localisation: English, German, Polish",
    ],
    status: "Completed",
    url: "https://socialmediaservice.center",
  },
  {
    title: "Cryptocurrency Trading Platform",
    description:
      "Full-stack platform letting users invest in algorithmic crypto strategies via Bybit - built for a client on top of the trading infrastructure from Octane. Real-time portfolio tracking, automated deposits and withdrawals, strategy performance analytics, and a referral system. The bridge between the technical trading infrastructure I'd built and non-technical users who just wanted returns.",
    icon: Coins,
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Chart.js",
      "Bybit API",
      "WebSockets",
    ],
    categories: [Category.FINTECH_TRADING, Category.SAAS_PRODUCTS],
    achievements: [
      "Live trading execution via Bybit API with automated strategy allocation and rebalancing",
      "Real-time portfolio and performance tracking with interactive charts",
      "Automated deposit/withdrawal processing with full transaction history",
      "Multi-user accounts with referral system and tiered access",
    ],
    status: "Retired",
  },
  {
    title: "FaceArt - Beauty Studio Management System",
    description:
      "Website and management system for a multi-location beauty studio business. Partner portal, appointment coordination, and Git-triggered automated deployment via Docker and Caddy. Matomo for analytics - self-hosted, because client data stays with the client.",
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
    categories: [Category.SAAS_PRODUCTS],
    achievements: [
      "Multi-location partner portal with shared appointment management",
      "Git-push deployment pipeline - Docker and Caddy handle the rest automatically",
      "Self-hosted Matomo analytics - no data leaving the client's infrastructure",
      "SEO-optimised static pages with fast load times",
    ],
    status: "Owner Retired - Business Closed",
  },
  {
    title: "netsepp & expert-service - IT Support Companies",
    description:
      "Co-founded two IT support companies from zero, years apart, with different teams. Started fixing phones and laptops, grew into full IT consultancies with real processes and 5-person teams each. Built company websites and deployed Odoo for ERP and POS because paying someone else to do things I could learn felt like the wrong call. Sold both - they're still operating today under different names.",
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
      "Founded two companies from zero - first customer, first hire, first invoice, first everything",
      "Grew both to stable 5-person teams",
      "Built company websites and deployed Odoo as ERP and POS system - no external consultants",
      "Sold both: still running as viybs.com and notebook-repair-corner.at",
    ],
    status: "Sold",
  },
  {
    title: "Samsung Switzerland - Business Tech Support Lead",
    description:
      "Led the Swiss business tech support team for Samsung - the escalation point for enterprise issues nobody else could resolve. Coordinated across subcontractors and global Samsung engineering teams. Built internal tooling when the existing processes weren't moving fast enough. The pattern was the same one I kept coming back to: if you're spending time answering the same questions or fighting the same broken workflows, you build the tool that makes it stop.",
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
      "Led 10-person support team across multiple subcontractors - different companies, one consistent standard",
      "Final escalation point for complex enterprise issues that had no existing resolution path",
      "Coordinated with global Samsung engineering teams to get undocumented bugs fixed and features added",
      "Built internal tooling to replace broken manual processes instead of just working around them",
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
