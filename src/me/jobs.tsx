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
    "My journey from car technician to senior developer - building solutions, leading teams, and creating impact across industries.",
  jobs: [
    {
      title: "Integration Team Lead",
      company: "Sovendus",
      location: "Remote",
      period: "Sep 2023 - Oct 2025",
      type: "Full-time",
      description:
        "Led the integration team. Partners were struggling with onboarding, so I built tools that let them help themselves. Turned a reactive support nightmare into a proactive developer experience.",
      achievements: [
        "Built developer-hub.sovendus.com - documentation platform where partners actually find answers (plugins and testing app linked there)",
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
      period: "Mar 2019 - June 2024",
      type: "Freelance",
      description:
        "Freelance work building whatever clients needed - mostly via Upwork. Trading bots, websites, AI stuff, social media tools. If someone would pay me to build it, I'd figure out how.",
      achievements: [
        "Built Octane - open source trading bot with strategy designer",
        "Created trading algorithms with AI-powered decision-making",
        "Built hedge fund website connected to Octane for automated trading for a client",
        "Developed custom trading strategies based on client requirements",
        "Built social media management platform for a client",
      ],
      technologies: [
        "Python",
        "TypeScript",
        "React",
        "Machine Learning",
        "Neural Networks",
        "TensorFlow",
        "PyTorch",
        "Flask",
        "PostgreSQL",
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
