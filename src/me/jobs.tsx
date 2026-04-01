export const jobs: {
  subTitle: string;
  jobs: {
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }[];
} = {
  subTitle:
    "My journey from car technician to framework builder - solving problems, leading teams, and shipping software across industries.",
  jobs: [
    {
      title: "Founder & Solo Developer",
      company: "a42 / next-vibe / unbottled.ai",
      location: "Remote",
      period: "Oct 2025 - Present",
      type: "Full-time",
      description:
        "Full-time on next-vibe and unbottled.ai after leaving Sovendus. My role has shifted into something I didn't expect to enjoy: architect, technical director, and code reviewer - with AI as the implementation partner. I spec the architecture, set the patterns, review everything, and direct AI agents to execute. We ship at a pace that would've required a team of five. I miss writing every line myself, but the output is hard to argue with.",
      achievements: [
        "Built unbottled.ai: free speech AI platform with 50+ models (mainstream, open, uncensored) - user-controlled filtering, privacy-first",
        "next-vibe: one definition.ts → web UI, CLI, MCP server tool, native app screen, AI-callable function - zero duplication",
        "Vibe Sense: TradingView-style rich timeseries analytics for any business domain - pipe endpoints together or describe a graph in plain language",
        "Switched to ts-go for 2M+ line codebase - check times from minutes to seconds, revealed architectural debt, drove systematic untangling",
        "Human-AI symbiosis: I architect and review, Hermes and Claude Code implement - patterns strict enough that both human and AI review are fast",
        "TanStack Start + Vite (dev) + Next.js App Router (prod) from the same codebase - zero DX compromise",
        "Hermes (local) and Thea (cloud) AI agents built into the platform - they monitor, delegate, and call endpoints as tools",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "TanStack Start",
        "Vite",
        "Bun",
        "Drizzle ORM",
        "PostgreSQL",
        "React",
        "MCP Servers",
        "AI Agents",
        "Docker",
      ],
    },
    {
      title: "Integration Team Lead",
      company: "Sovendus",
      location: "Remote",
      period: "Sep 2023 - Oct 2025",
      type: "Full-time",
      description:
        "Led the integration team. Partners were struggling with onboarding, so I built tools that let them help themselves. Turned a reactive support nightmare into a proactive developer experience. Nights and weekends during this period went into building what became next-vibe.",
      achievements: [
        "Built developer-hub.sovendus.com - documentation platform where partners actually find answers",
        "Created a testing app that lets partners diagnose 90% of their own integration issues without waiting for support",
        "Wrote 20+ platform-specific plugins (Shopify, Magento, Shopware, Flutter, React Native, Kotlin, Swift) - same core logic, different wrappers",
        "Designed unified codebase with platform-specific overrides - write once, deploy everywhere",
        "Shifted team mindset from 'answer tickets faster' to 'build tools so they don't need tickets'",
        "Left behind documentation and architecture that my successor can actually maintain",
        "Support tickets dropped dramatically because partners could fix things themselves",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "PHP",
        "Swift",
        "Kotlin",
        "Flutter",
        "React Native",
        "Docker",
        "Next.js",
        "Shopify",
        "Plugin Development",
        "Documentation",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Freelance Developer",
      company: "a42",
      location: "Remote",
      period: "Mar 2019 - Present",
      type: "Freelance / Side Projects",
      description:
        "Client work via Upwork alongside day jobs, plus building my own projects in every spare hour. Trading bots, SaaS tools, social media platforms - if it was interesting or someone would pay me, I built it. The side project work eventually evolved into next-vibe after learnings from Octane, anywhere-widgets, leadThing, and a dozen TypeScript full-stack experiments.",
      achievements: [
        "Built Octane - open source trading bot with visual strategy designer (still running)",
        "Built leadThing.dev - SaaS connecting 20+ newsletter platforms through one API",
        "Built anywhere-widgets - universal widget engine running on 20+ platforms from one codebase",
        "Created trading algorithms with ML-powered decision-making (actually 2x'd a test investment)",
        "Built hedge fund website connected to Octane for automated trading",
        "Built social media management and lead generation platform",
        "All of these eventually merged their best ideas into next-vibe",
      ],
      technologies: [
        "Python",
        "TypeScript",
        "React",
        "Next.js",
        "Machine Learning",
        "Neural Networks",
        "TensorFlow",
        "PyTorch",
        "Flask",
        "PostgreSQL",
        "Bun",
        "Drizzle ORM",
      ],
    },
    {
      title: "Business Support Engineer - Team Leader",
      company: "Samsung Switzerland",
      location: "Switzerland",
      period: "Sep 2018 - Sep 2020",
      type: "Full-time",
      description:
        "Led the Swiss business tech support team. Coordinated between subcontractors and global teams to solve enterprise hardware and software issues that nobody else wanted to touch.",
      achievements: [
        "Managed support team across multiple subcontractors - herding cats, but made it work",
        "Tackled complex enterprise issues that got escalated from everywhere else",
        "Worked with global teams to figure out problems nobody had seen before",
        "Built internal tools because the existing ones weren't cutting it",
        "Improved response times by actually fixing processes instead of just working harder",
      ],
      technologies: [
        "Technical Support",
        "Hardware Diagnostics",
        "Software Troubleshooting",
        "Team Leadership",
        "Process Optimization",
        "Documentation",
      ],
    },
    {
      title: "Tech Support Team Leader - Co-Founder",
      company: "netsepp KG (now viybs.com)",
      location: "Austria, Hallein",
      period: "Mar 2016 - Jan 2019",
      type: "Full-time",
      description:
        "Co-founded an IT support company. Started with private customers fixing phones and laptops, grew into a full IT consultancy. Built the team, the systems, and eventually sold it to a former colleague.",
      achievements: [
        "Built the company from zero - found customers, hired people, set up processes",
        "Led a 5-person tech support team (who were way smarter than me, but I learned from them)",
        "Built the website and set up Odoo as our ERP and POS system because I'm too cheap to pay someone else",
        "Sold the company in 2019 to a former co-worker - it's still running today",
      ],
      technologies: [
        "Technical Support",
        "Hardware Diagnostics",
        "Software Troubleshooting",
        "Team Leadership",
        "Odoo",
        "Website Development with PHP and JavaScript",
      ],
    },
    {
      title: "Tech Support Team Lead - Co-Founder",
      company: "expert-service.at (now notebook-repair-corner.at)",
      location: "Austria, Salzburg",
      period: "Jan 2012 - Sep 2016",
      type: "Full-time",
      description:
        "My first company. Fixed phones, laptops, tablets, printers - whatever broke, we fixed it. Started right after my car mechanic apprenticeship because I wanted to work with tech instead of oil changes.",
      achievements: [
        "Built the company from nothing - first customer, first hire, first everything",
        "Grew to a 5-person team (again, way smarter than me - I just asked good questions)",
        "Built the website and set up Odoo for ERP and POS with the team because paying someone felt wrong",
        "Sold to a bigger player in 2016 - they're still running it as notebook-repair-corner.at",
      ],
      technologies: [
        "Hardware Diagnostics",
        "Software Troubleshooting",
        "Team Leadership",
        "Odoo",
        "Website Development with PHP and JavaScript",
      ],
    },
  ],
} as const;
