// ===== PROGRAMMING LANGUAGES WITH PROFICIENCY =====
export const programmingLanguages = [
  {
    name: "Natural Language / Vibe Coding",
    level: 80,
    description:
      "Agents just changed everything, if you're senior and properly force AI to do your way and no other way, you can build anything. But if you're a noob, its just a catastrophe after the first prompt.",
  },
  {
    name: "JavaScript (Oracle please don't sue me)",
    level: 98,
    description:
      'As a compile target its awesome, but as a language its just a dumpster fire. TypeScript is the only way to go and I deeply love it, even quirks like [] + {} → "[object Object]" are just part of the fun.',
  },
  {
    name: "TypeScript",
    level: 95,
    description:
      "Man I love generics, yes I enforce return types and yes unknown and any are counted as errors by my linter config. Theres always a way to make it type safe. Did you know that the typesystem is turing complete?",
  },
  {
    name: "JSX",
    level: 98,
    description:
      "When I started using JSX it was the first time that I really had fun coding websites. It's just so much fun to write HTML in my TypeScript. I'm bound to JSX and not react, so I'm open to new runtimes like preact and solid.",
  },
  {
    name: "Python",
    level: 96,
    description:
      "I once loved python and even built my own trading bot / strategy designer (which i'm still using), but then I discovered Nextjs and other typescript backend frameworks and fell back into the web dev rabbit hole.",
  },
  {
    name: "HTML/CSS",
    level: 98,
    description:
      "As a compile target super nice and my favorite UI framework, but as source I prefer JSX and tailwind. I actually didn't like tailwind at first, but now I love it.",
  },
  {
    name: "SQL",
    level: 92,
    description:
      "Nowadays I basically write 0 SQL and rather use typesafe ORM's like drizzle, where you can even write typesafe nested joins. But I still know how to write SQL if needed.",
  },
  {
    name: "PHP",
    level: 88,
    description:
      "If I have to use it to bridge legacy systems, I can do it. But I rather use TypeScript or other typesafe languages.",
  },
  {
    name: "Bash/PowerShell",
    level: 90,
    description:
      "I still know it, but I even replaced bash with typescript and rather run my typesafe scripts with bun or node.",
  },
  {
    name: "C#",
    level: 20,
    description:
      "I used it here and there, but never got into it. The alternatives just make more sense to me.",
  },
  {
    name: "Swift",
    level: 30,
    description:
      "I mean what choice do you have for iOS development? I recently managed to build a webview based component and a demo app for it.",
  },
  { name: "Kotlin", level: 75, description: "Android native development" },
  { name: "Go", level: 70, description: "Backend services and microservices" },
  {
    name: "Dart/Flutter",
    level: 72,
    description:
      "I built a demo app and the Sovendus web view based flutter component. While its pretty nice, I rather use React Native or a Kotlin/Swift based solution.",
  },
] as const;

// ===== FRAMEWORKS & LIBRARIES =====
export const frameworksLibraries = [
  {
    name: "React and react like frameworks",
    level: 90,
    description:
      "I like how React DOM Server streams UI and pairs with client hydration, so I ship minimal JS but add interactivity where it counts. And the same mental model maps well to faster compilers/runtimes like Preact or Solid—no split-stack pain.",
  },
  {
    name: "Next.js",
    level: 90,
    description:
      "I like Next.js because it blurs backend and frontend with Server Components and colocated data, so I can trace features end-to-end with hover and Ctrl+Click. Less context switching, one codebase, one mental model.",
  },
  {
    name: "node, bun & co",
    level: 90,
    description:
      "I like Node and modern JS runtimes because they make servers feel like an extension of my editor - one language, one package manager, same dev tools. Less context switching, easy Ctrl+Click tracing from route to DB to response, without juggling separate stacks.",
  },
  {
    name: "Flask / Django",
    level: 70,
    description:
      "I used it for past projects and liked it back then, but I'm not missing it.",
  },
  {
    name: "TensorFlow, PyTorch & co",
    level: 82,
    description:
      "I actually built my own trading bot with it and spent a lot of time fine tuning the model architecture and training with my own gpu on over 100 stocks and cryptos. It actually 2x my 1k investment, but it needed continuos watching and as I didn't have the time to build a proper system, it didn't trust it. So instead I'm still running my good old ping pong bot which makes small but steady money with 0 attention.",
  },
  {
    name: "Flutter",
    level: 75,
    description: "Cross-platform mobile development",
  },
  {
    name: "React Native",
    level: 80,
    description: "Cross-platform mobile apps with native performance",
  },
] as const;

// ===== DATABASES & DATA MANAGEMENT =====
export const databases = [
  {
    name: "PostgreSQL",
    level: 90,
    description: "Advanced queries, optimization, and database design",
  },
  {
    name: "drizzle",
    level: 85,
    description: "My ORM of choice for TypeScript, it's just so awesome.",
  },
  {
    name: "Prisma",
    level: 85,
    description:
      "It was a great time, but flexibility and type-safety of drizzle won me over.",
  },
  {
    name: "MySQL",
    level: 85,
    description: "I always must think of PHP when I think of MySQL...",
  },
  {
    name: "MongoDB",
    level: 20,
    description: "I get the idea of NoSQL, but I didn't have a use case yet.",
  },
  {
    name: "Redis",
    level: 50,
    description:
      "I never really needed that much performance, but I've played with it a bit.",
  },
  {
    name: "SQLAlchemy",
    level: 88,
    description: "I once loved python, but man its a shitshow...",
  },
] as const;

// ===== DEVOPS & INFRASTRUCTURE =====
export const devopsInfrastructure = [
  {
    name: "Docker",
    level: 88,
    description:
      "Choice for production, but if you force me to use it beyond db for local dev, we will have a long talk.",
  },
  {
    name: "Hosting Providers & Deployment",
    level: 85,
    description:
      "My private projects don't go beyond my root server and on my day jobs I only had to prepare dockerfiles and kubernetes yamls. And DevOps took care of the rest. But if none else does it, I can figure it out.",
  },
  {
    name: "Git/GitHub/GitLab",
    level: 92,
    description:
      "I like the idea that there could be a better vcs than Git, but I really love git(lab/hub) already. It's just so awesome to work with.",
  },
  {
    name: "GNU/Linux",
    level: 90,
    description:
      "My primary OS for both server and desktop, I use Arch btw. If I have to use Mac or Windows, I wont be happy.",
  },
  {
    name: "Monitoring & Logging",
    level: 85,
    description:
      "Nice central logger classes that report to api's, apps that show fancy graphs and alerts that I can act on. Stuff like that make me happy.",
  },
  {
    name: "CI/CD",
    level: 85,
    description:
      "I recently built end to end tests for a demo app thats using the Sovendus web view based kotlin component and it actually runs the test in the pipeline on a emulator.",
  },
] as const;

// ===== INTEGRATION & APIS =====
export const integrationApis = [
  {
    name: "REST APIs",
    level: 92,
    description: "RESTful service design and implementation",
  },
  {
    name: "GraphQL",
    level: 85,
    description: "Efficient data fetching and API design",
  },
  {
    name: "WebSockets",
    level: 88,
    description: "Real-time bidirectional communication",
  },
  {
    name: "OAuth/JWT",
    level: 87,
    description: "Authentication and authorization systems",
  },
  {
    name: "Plugin Development",
    level: 90,
    description:
      "Platform-specific integrations (Shopify, Magento, Shopware, etc.)",
  },
  {
    name: "Webhook Integration",
    level: 89,
    description: "Event-driven architecture and real-time notifications",
  },
] as const;

// ===== AI & TRADING SPECIALIZATION =====
export const aiTradingSkills = [
  {
    name: "Algorithmic Trading",
    level: 92,
    description: "Quantitative finance and trading strategies",
  },
  {
    name: "Machine Learning",
    level: 88,
    description: "Predictive modeling and pattern recognition",
  },
  {
    name: "Data Science",
    level: 85,
    description: "Statistical analysis and data visualization",
  },
  {
    name: "OpenRouter",
    level: 87,
    description: "AI model routing and integration",
  },
  {
    name: "Real-time Analysis",
    level: 90,
    description: "Live market data processing and decision making",
  },
  {
    name: "Risk Management",
    level: 85,
    description: "Portfolio optimization and risk assessment",
  },
  {
    name: "Neural Networks",
    level: 82,
    description: "Deep learning architectures and implementation",
  },
] as const;

// ===== LEADERSHIP & BUSINESS SKILLS =====
export const leadershipBusinessSkills = [
  {
    name: "Entrepreneurship",
    level: 90,
    description: "Building and scaling tech businesses",
  },
  {
    name: "Problem Identification",
    level: 95,
    description: "Expert at spotting inefficiencies and opportunities",
  },
  {
    name: "Solution Architecture",
    level: 92,
    description: "Designing comprehensive technical solutions",
  },
  {
    name: "Team Leadership",
    level: 88,
    description: "Leading and mentoring development teams",
  },
  {
    name: "Process Optimization",
    level: 90,
    description: "Streamlining workflows and operations",
  },
  {
    name: "Strategic Planning",
    level: 85,
    description: "Long-term technical and business strategy",
  },
  {
    name: "Innovation Management",
    level: 88,
    description: "Driving technological innovation and change",
  },
  {
    name: "Client Relations",
    level: 87,
    description: "Managing stakeholder relationships and expectations",
  },
] as const;

// ===== HARDWARE & REPAIR SKILLS =====
export const hardwareRepairSkills = [
  {
    name: "Server Hardware",
    level: 95,
    description: "Advanced server maintenance, diagnosis, and repair",
  },
  {
    name: "PC & Notebook Repair",
    level: 98,
    description:
      "Complete hardware diagnosis and repair of desktop and laptop systems",
  },
  {
    name: "Mobile Device Repair",
    level: 90,
    description: "Smartphone and tablet hardware repair and troubleshooting",
  },
  {
    name: "Printer Systems",
    level: 92,
    description:
      "Advanced printer maintenance, repair, and network integration",
  },
  {
    name: "Gaming Console Repair",
    level: 85,
    description: "Hardware repair and modification of gaming systems",
  },
  {
    name: "IoT & Wearables",
    level: 88,
    description: "Internet of Things devices and wearable technology repair",
  },
  {
    name: "Automotive Electronics",
    level: 95,
    description: "ICE vehicle electronic systems, diagnosis, and repair",
  },
  {
    name: "Household Electronics",
    level: 90,
    description: "Consumer electronics repair and maintenance",
  },
] as const;

// ===== CRAFT & MANUFACTURING SKILLS =====
export const craftSkills = [
  {
    name: "SMD Soldering",
    level: 92,
    description: "Surface-mount device soldering and microelectronics assembly",
  },
  {
    name: "Brazing",
    level: 88,
    description: "Metal joining techniques for precision applications",
  },
  {
    name: "Inert Gas Welding",
    level: 85,
    description: "TIG welding for high-quality metal fabrication",
  },
  {
    name: "Oxyacetylene Welding",
    level: 82,
    description: "Traditional gas welding and cutting techniques",
  },
  {
    name: "CNC Turning",
    level: 80,
    description: "Precision machining and metal turning operations",
  },
] as const;

// ===== INFRASTRUCTURE & SYSTEMS =====
export const infrastructureSkills = [
  {
    name: "Webserver Administration",
    level: 95,
    description: "Apache, Nginx, and advanced web server configuration",
  },
  {
    name: "File Server Management",
    level: 92,
    description: "Network file systems, storage solutions, and backup systems",
  },
  {
    name: "Print Server Setup",
    level: 90,
    description: "Network printing solutions and print queue management",
  },
  {
    name: "Mail/Exchange Server",
    level: 88,
    description: "Email server configuration and management",
  },
  {
    name: "Logon Server (AD)",
    level: 85,
    description: "Active Directory and authentication systems",
  },
  {
    name: "RADIUS Authentication",
    level: 82,
    description: "Network access control and authentication protocols",
  },
] as const;

// ===== SKILL CATEGORIES FOR UI =====
export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    color: "from-blue-500 to-purple-500",
    skills: programmingLanguages,
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    icon: "Zap",
    color: "from-green-500 to-blue-500",
    skills: frameworksLibraries,
  },
  {
    id: "databases",
    name: "Databases & Data",
    icon: "Database",
    color: "from-purple-500 to-pink-500",
    skills: databases,
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    icon: "Cloud",
    color: "from-orange-500 to-red-500",
    skills: devopsInfrastructure,
  },
  {
    id: "integration",
    name: "Integration & APIs",
    icon: "Globe",
    color: "from-cyan-500 to-blue-500",
    skills: integrationApis,
  },
  {
    id: "ai-trading",
    name: "AI & Trading",
    icon: "Brain",
    color: "from-violet-500 to-purple-500",
    skills: aiTradingSkills,
  },
  {
    id: "leadership",
    name: "Leadership & Business",
    icon: "Briefcase",
    color: "from-emerald-500 to-teal-500",
    skills: leadershipBusinessSkills,
  },
  {
    id: "hardware",
    name: "Hardware & Repair",
    icon: "Wrench",
    color: "from-orange-500 to-red-500",
    skills: hardwareRepairSkills,
  },
  {
    id: "craft",
    name: "Craft & Manufacturing",
    icon: "Hammer",
    color: "from-amber-500 to-yellow-500",
    skills: craftSkills,
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Systems",
    icon: "Server",
    color: "from-slate-500 to-gray-500",
    skills: infrastructureSkills,
  },
] as const;
