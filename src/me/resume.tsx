import {
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Wrench,
  Zap,
} from "lucide-react";

// ===== PROFESSIONAL EXPERIENCE =====
export const experience: {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}[] = [
  {
    title: "Integration Team Lead",
    company: "Sovendus",
    location: "Remote",
    period: "Sep 2023 - Sep 2025",
    type: "Full-time",
    description:
      "Led the integration team and revolutionized partner onboarding by building comprehensive developer tools and self-service solutions.",
    achievements: [
      "Built developer-hub.sovendus.com documentation platform (plugins and testing app are linked there)",
      "Created Sovendus testing app enabling self-diagnosis for 99% of onboarding issues",
      "Developed 20+ platform-specific plugins (Shopify, Magento, Shopware, Flutter, React Native, Kotlin, Swift)",
      "Implemented unified codebase architecture with platform-specific overrides",
      "Shifted support from reactive to proactive long-term solutions",
      "Left comprehensive documentation and maintainable foundation for successor",
      "Reduced support tickets significantly through innovative self-service tools",
    ],
    technologies: [
      "JavaScript",
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
      "Git",
      "REST API",
      "Webhook Integration",
      "Plugin Development",
      "Documentation",
      "Testing Frameworks",
    ],
  },
  {
    title: "Freelance AI Trading Systems Developer",
    company: "a42 trading solutions",
    location: "Switzerland",
    period: "Mar 2018 - Present",
    type: "Freelance",
    description:
      "Developing sophisticated AI-driven trading systems with machine learning decision-making and real-time market analysis.",
    achievements: [
      "Built sophisticated trading algorithms with ML decision-making",
      "Implemented real-time market analysis and risk management",
      "Developed custom trading interfaces and portfolio management tools",
      "Created automated trading strategies with deep neural networks",
    ],
    technologies: [
      "Python",
      "JavaScript",
      "React",
      "Machine Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
      "WebSocket",
      "REST API",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "Business Support Engineer - Team Leader",
    company: "Samsung Switzerland",
    location: "Switzerland",
    period: "Sep 2018 - Sep 2020",
    type: "Full-time",
    description:
      "Led Swiss Business Tech Support Team, handling complex software troubleshooting and hardware repairs for Samsung's business product line.",
    achievements: [
      "Managed and mentored technical support team",
      "Handled complex enterprise-level technical issues",
      "Improved support processes and response times",
      "Developed internal tools for efficient problem resolution",
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
    title: "Tech Support Engineer - Team Leader - Administrator",
    company: "netsepp KG, Hallein (now viybs.com)",
    location: "Austria",
    period: "Mar 2016 - Jan 2019",
    type: "Full-time",
    description:
      "Led transformative overhaul of internal business processes and workflows within ERP system while managing support engineering team.",
    achievements: [
      "Spearheaded transformative overhaul of internal business processes in ERP system",
      "Led proficient support engineering team for hardware/software solutions",
      "Crafted comprehensive technical documentation and training materials",
      "Delivered exceptional IT consultancy services to private customers and SMEs",
    ],
    technologies: [
      "Python",
      "JavaScript",
      "React.js",
      "SQL",
      "Flask",
      "Odoo",
      "Docker",
      "Git",
      "REST API",
    ],
  },
  {
    title: "Tech Support Engineer - Team Leader",
    company: "techfreaque Salzburg",
    location: "Austria",
    period: "Aug 2013 - Sep 2016",
    type: "Full-time",
    description:
      "Engineered optimized internal infrastructure and guided skilled support team while managing diverse technological landscape.",
    achievements: [
      "Built and optimized internal infrastructure systems",
      "Led and mentored technical support team",
      "Managed diverse technology stack and integrations",
      "Developed automated solutions for common technical issues",
    ],
    technologies: [
      "System Administration",
      "Infrastructure Management",
      "Team Leadership",
      "Process Automation",
      "Technical Support",
      "Documentation",
    ],
  },
] as const;

export interface RabbitHole {
  category: string;
  icon: typeof Zap;
  technologies: string[];
  story: string;
  passion: string;
  currentFocus: string;
  customSections?: {
    passionLabel?: string;
    focusLabel?: string;
    skillsLabel?: string;
  };
  skills: {
    name: string;
    description: string;
  }[];
}
// ===== EDUCATION & CONTINUOUS LEARNING =====
export const education: {
  category: string;
  period: string;
  description: string;
  learningRabbitHoles: RabbitHole[];
} = {
  category: "Continuous Self-Study & Professional Development",
  period: "2012-Present",
  description:
    "Countless offline/online courses, seminars, and hands-on learning",
  learningRabbitHoles: [
    {
      category: "JavaScript Ecosystem Deep Dive",
      icon: Code2,
      technologies: [
        "JavaScript (ES6+)",
        "TypeScript",
        "JSX",
        "Node.js",
        "Bun",
      ],
      story: `## My JavaScript Journey: From Frankensteining to Framework Building

### The Beginning: Learning by Doing
I learned programming by **fucking around enough** and having an open source project where a mentor taught me basic programming stuff like **git** and got me through the beginning pain.

After that, I used **every spare moment** to create apps and tools, always trying to solve work problems with software.

### The Frankensteining Era
Started by **frankensteining existing open source stuff** - Joomla, WordPress, Odoo. Built templates and plugins to make everything work like I wanted.

### The Evolution: Python → Next.js → TypeScript Everywhere
Had a **Python backend phase**, but then **Next.js changed everything** and made web dev **awesome** for me.

Now I'm pushing **TypeScript everywhere** - not just frontend, but as a backend language too. Even replaced bash with TypeScript!

### Current Innovation: Universal Widget Framework
Built my own **Next.js-like widget framework** for anywhere-widgets:
- **SSR + client hydration** for multiple iframe widgets in parallel
- **Preact signals** for minimal bundle size
- **Custom compiler** for both SSR and client bundles
- **Single codebase** running across **20+ platforms** (Shopify, React, Vue, mobile apps)
- **Native performance** even in webviews

> JavaScript evolved from a browser toy to the foundation for building anything, anywhere.`,
      passion: "Obsession Level: Maximum",
      currentFocus: "Universal widget frameworks and TypeScript everywhere",
      customSections: {
        passionLabel: "Obsession Level",
        focusLabel: "Current Experiments",
        skillsLabel: "Core Technologies Mastered",
      },
      skills: [
        {
          name: "JavaScript (Oracle please don't sue me)",
          description: `As a **compile target** it's awesome, but as a language it's just a dumpster fire.

**TypeScript is the only way to go** and I deeply love it, even quirks like \`[] + {} → "[object Object]"\` are just part of the fun.

> JavaScript: Great destination, terrible journey.`,
        },
        {
          name: "TypeScript",
          description: `**Man I love generics!** Yes, I enforce return types and yes \`unknown\` and \`any\` are counted as **errors** by my linter config.

There's always a way to make it **type-safe**. Did you know that the type system is **Turing complete**?

- Advanced generics and conditional types
- Strict configuration with zero compromises
- Template literal types for API safety`,
        },
        {
          name: "JSX",
          description: `When I started using JSX it was the **first time** that I really had fun coding websites. It's just so much fun to write **HTML in my TypeScript**.

I'm bound to **JSX**, not React - so I'm open to new runtimes like **Preact** and **Solid**.

> JSX = HTML + TypeScript = Pure Joy`,
        },
        {
          name: "Node.js, Bun & Modern Runtimes",
          description: `I like Node and modern JS runtimes because they make servers feel like an **extension of my editor**:

- **One language**, one package manager, same dev tools
- **Less context switching** between frontend and backend
- Easy **Ctrl+Click tracing** from route to DB to response
- No juggling separate stacks

**Bun** is my current favorite for new projects - blazing fast!`,
        },
        {
          name: "Bash/PowerShell",
          description: `I still know it, but I even **replaced bash with TypeScript** and rather run my **type-safe scripts** with bun or node.

Why deal with shell scripting chaos when you can have:
- **Type safety** in your automation scripts
- **Better error handling** and debugging
- **IDE support** with autocomplete and refactoring

> Shell scripts → TypeScript scripts = Sanity restored`,
        },
      ],
    },
    {
      category: "AI & Natural Language Coding",
      icon: Brain,
      technologies: [
        "AI Agents",
        "Prompt Engineering",
        "Code Generation",
        "LLMs",
      ],
      story: `## The AI Revolution: From Skeptic to Conductor

**Agents just changed everything.** This isn't hyperbole - it's reality.

### The Senior vs Noob Divide
If you're **senior** and properly force AI to do your way and **no other way**, you can build anything. But if you're a noob? It's just a catastrophe after the first prompt.

### Becoming the AI Conductor
I've learned to be the **conductor of the AI orchestra**. It's not about letting AI write code - it's about:

- **Precise prompt engineering** that gets exactly what you want
- **Iterative refinement** until the output matches your vision
- **Quality control** that maintains your coding standards
- **Strategic delegation** of the right tasks to AI

> The key is knowing when to use AI and when to code yourself.

### The Future is Here
We're not just using tools anymore - we're **orchestrating intelligence**. The developers who master this will build the impossible.`,
      passion: "Revolutionary",
      currentFocus: "Building sophisticated AI-powered development workflows",
      customSections: {
        passionLabel: "Impact Level",
        focusLabel: "Current Mission",
        skillsLabel: "AI Mastery Areas",
      },
      skills: [
        {
          name: "AI Prompt Engineering",
          description:
            "Crafting precise prompts that get exactly what I want from AI systems.",
        },
        {
          name: "AI Code Generation",
          description:
            "Using AI to generate high-quality code while maintaining my standards.",
        },
        {
          name: "AI Workflow Integration",
          description:
            "Building sophisticated AI-powered development workflows.",
        },
      ],
    },
    {
      category: "React & Modern Frontend Frameworks",
      icon: Code2,
      technologies: [
        "React",
        "Next.js",
        "Preact",
        "Solid.js",
        "Custom SSR Frameworks",
        "Tailwind CSS",
        "HTML/CSS",
      ],
      story: `## React: From DIY to Production Mastery

### Building My Own SSR Framework
I **built my own SSR framework** similar to Next.js before discovering Next.js itself. Talk about reinventing the wheel! But it taught me the fundamentals.

### The Tailwind Journey
I actually **didn't like Tailwind** at first, but now I love it. The transformation from skeptic to advocate was real.

### HTML/CSS vs JSX Philosophy
As a **compile target**, HTML/CSS is super nice and my favorite UI framework. But as **source code**? I prefer JSX and Tailwind every time.

### The Streaming Revolution
The mental model of **React DOM Server streaming UI** paired with client hydration is brilliant:

- **Ship minimal JS** for fast initial loads
- **Add interactivity where it counts** for great UX
- **Progressive enhancement** done right

> The future is streaming, not static.`,
      passion: "Extremely High",
      currentFocus:
        "Component architecture, state management, and performance optimization",
      customSections: {
        passionLabel: "Enthusiasm Level",
        focusLabel: "Current Research",
        skillsLabel: "Frontend Mastery",
      },
      skills: [
        {
          name: "React and React-like Frameworks",
          description: `I like how **React DOM Server streams UI** and pairs with client hydration, so I ship **minimal JS** but add interactivity where it counts.

The same mental model maps well to faster compilers/runtimes like **Preact** or **Solid** - no split-stack pain.

**My React mastery includes:**
- Server Components and streaming
- Advanced hooks and custom patterns
- Performance optimization techniques
- Component architecture at scale`,
        },
        {
          name: "Next.js",
          description: `I like Next.js because it **blurs backend and frontend** with Server Components and colocated data.

I can trace features **end-to-end** with hover and Ctrl+Click:
- **Less context switching** between stacks
- **One codebase**, one mental model
- **File-based routing** that just makes sense
- **API routes** for seamless full-stack development

> Next.js = Full-stack development without the complexity`,
        },
        {
          name: "HTML/CSS",
          description: `As a **compile target** super nice and my favorite UI framework, but as **source** I prefer JSX and Tailwind.

I actually **didn't like Tailwind** at first, but now I love it:
- **Utility-first** approach eliminates CSS bloat
- **Design system** consistency out of the box
- **No more CSS files** that grow into monsters
- **Responsive design** with simple class modifiers

> Tailwind: From skeptic to evangelist`,
        },
      ],
    },
    {
      category: "Python & Algorithmic Trading",
      icon: Database,
      technologies: [
        "Python",
        "Cython",
        "NumPy",
        "Pandas",
        "SQLAlchemy",
        "Flask",
        "Django",
        "TensorFlow",
        "PyTorch",
      ],
      story: `## Python: The Trading Bot Adventure

### The Love Affair That Was
I **once loved Python** and even built my own trading bot/strategy designer (which I'm still using today). But then I discovered Next.js and TypeScript backend frameworks and fell back into the web dev rabbit hole.

### The TensorFlow Experiment
I actually built my own **trading bot with TensorFlow** and spent countless hours:
- **Fine-tuning model architecture** for market prediction
- **Training with my own GPU** on over 100 stocks and cryptos
- **Optimizing for real market conditions**

### The Reality Check
It actually **2x my $1k investment**! But it needed continuous watching, and since I didn't have time to build a proper monitoring system, I didn't trust it for larger amounts.

### The Pragmatic Solution
So instead, I'm still running my **good old ping pong bot** which:
- Makes **small but steady money**
- Requires **0 attention**
- Just works reliably

> Sometimes the boring solution is the best solution.`,
      passion: "Nostalgic",
      currentFocus:
        "Maintaining existing trading systems while focusing more on web technologies",
      customSections: {
        passionLabel: "Current Status",
        focusLabel: "Reality Check",
        skillsLabel: "Trading Arsenal",
      },
      skills: [
        {
          name: "Python",
          description: `I **once loved Python** and even built my own trading bot/strategy designer (which I'm still using today).

But then I discovered **Next.js** and other TypeScript backend frameworks and fell back into the web dev rabbit hole.

**What I built with Python:**
- Custom trading bot with strategy designer
- Data analysis pipelines for market research
- Automated backtesting systems
- Risk management algorithms`,
        },
        {
          name: "TensorFlow, PyTorch & ML",
          description: `I actually built my own **trading bot with TensorFlow** and spent countless hours:

- **Fine-tuning model architecture** for market prediction
- **Training with my own GPU** on 100+ stocks and cryptos
- **Optimizing for real market conditions**

**The results?** It actually **2x my $1k investment**! But it needed continuous watching, and since I didn't have time to build a proper monitoring system, I didn't trust it for larger amounts.

> Sometimes the boring solution beats the fancy one.`,
        },
        {
          name: "Flask / Django",
          description: `I used it for past projects and **liked it back then**, but I'm not missing it.

**Why I moved on:**
- TypeScript backends offer better type safety
- Next.js API routes are more convenient
- Less context switching between languages
- Better developer experience overall

> Python web frameworks: Good memories, better alternatives exist.`,
        },
      ],
    },
    {
      category: "Database & Backend Architecture",
      icon: Database,
      technologies: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Drizzle ORM",
        "REST APIs",
        "GraphQL",
      ],
      story: `## Database Evolution: From Raw SQL to Type-Safe Heaven

### The Type-Safe Revolution
Nowadays I basically write **0 raw SQL** and rather use type-safe ORMs like **Drizzle**, where you can even write type-safe nested joins.

But I still know how to write SQL if needed - the evolution from raw queries to **type-safe database interactions** has been incredible.

### Why Drizzle Changed Everything
- **Type safety** from database to frontend
- **IntelliSense** for database queries
- **Compile-time validation** of schema changes
- **Zero runtime overhead** - it's just SQL under the hood

### API Design Philosophy
I believe in **API-first development**:
- **REST** for simple, predictable interfaces
- **GraphQL** when clients need flexible data fetching
- **Type-safe** end-to-end with TypeScript
- **Documentation** that stays in sync with code

> The best database is the one you never have to debug at 3 AM.`,
      passion: "Extremely High",
      currentFocus: "Type-safe database architecture and API design patterns",
      customSections: {
        passionLabel: "Database Love",
        focusLabel: "Current Architecture",
        skillsLabel: "Backend Arsenal",
      },
      skills: [
        {
          name: "PostgreSQL",
          description: `**Advanced queries, optimization, and database design**

My go-to database for serious applications:
- Complex **joins and aggregations**
- **Performance tuning** and query optimization
- **Schema design** for scalability
- **ACID compliance** when it matters

> PostgreSQL: The database that never lets you down.`,
        },
        {
          name: "Drizzle ORM",
          description: `**My ORM of choice** for TypeScript - it's just so awesome!

Why Drizzle wins:
- **Type-safe** queries with IntelliSense
- **Zero runtime overhead** - compiles to SQL
- **Schema migrations** that actually work
- **Relational queries** without the pain

> Drizzle = SQL + TypeScript = Developer happiness`,
        },
        {
          name: "SQL",
          description: `Nowadays I basically write **0 raw SQL** and rather use type-safe ORMs like Drizzle, where you can even write **type-safe nested joins**.

But I still know how to write SQL if needed:
- **Complex queries** and stored procedures
- **Performance optimization** and indexing
- **Database design** and normalization
- **Legacy system** integration

> SQL: The foundation that never goes away.`,
        },
        {
          name: "REST APIs",
          description: `**RESTful service design and implementation**

My REST API principles:
- **Resource-based** URLs that make sense
- **HTTP methods** used correctly
- **Status codes** that tell the story
- **Consistent response** formats
- **Proper error handling** and validation

> REST: Simple, predictable, and it just works.`,
        },
        {
          name: "GraphQL",
          description: `**Efficient data fetching and API design**

When GraphQL makes sense:
- **Flexible client requirements**
- **Multiple data sources** to combine
- **Type-safe** schema definition
- **Real-time subscriptions**

> GraphQL: Give clients exactly what they need, nothing more.`,
        },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      icon: Cloud,
      technologies: [
        "Docker",
        "Docker Compose",
        "Linux",
        "Bash",
        "PowerShell",
        "CI/CD",
      ],
      story:
        "Started with basic containerization and now handle complex multi-service orchestration. I love the reliability and reproducibility that proper DevOps practices bring to development. It's not just about deployment - it's about creating sustainable, scalable systems.",
      passion: "Medium-High",
      currentFocus:
        "Container orchestration and automated deployment pipelines",
      skills: [
        {
          name: "Docker & Containerization",
          description:
            "Building and orchestrating containerized applications with Docker and Docker Compose.",
        },
        {
          name: "CI/CD Pipelines",
          description:
            "Automated deployment pipelines for reliable and consistent releases.",
        },
        {
          name: "Linux System Administration",
          description:
            "Managing Linux servers and environments for development and production.",
        },
      ],
    },
    {
      category: "Leadership & Business Strategy",
      icon: Briefcase,
      technologies: [
        "Team Management",
        "Agile/Scrum",
        "Strategic Planning",
        "Mentoring",
        "Conflict Resolution",
      ],
      story: `## Leadership & Entrepreneurship: Building Things That Last

### The Entrepreneur's Journey
I **founded several companies**, many of them still running after I left. Leadership isn't just about managing teams - it's about building sustainable systems and cultures.

### The DIY Mindset
I'm too much of a **cheap ass** to pay for skills I have. I still repair my car, phone, washing machine - everything. This DIY approach extends to business: I did my own **balance sheet stuff** to save money, so I know a lot about bookkeeping.

### Leadership Philosophy
**Leadership isn't about being the smartest person in the room** - it's about making everyone else smarter:
- **Humble leadership** - admitting when I don't know something
- **Building friendships** with team members while maintaining standards
- **Collaborative goal-setting** - involving everyone in the vision
- **Creating psychological safety** where mistakes are learning opportunities

### Business Strategy
From car technician to tech entrepreneur:
- **Founded multiple companies** that outlasted my involvement
- **Self-taught bookkeeping** and business operations
- **Long-term thinking** over quick fixes
- **Sustainable growth** through proper systems

> The best teams feel like a group of friends building something amazing together.`,
      passion: "Deep Conviction",
      currentFocus:
        "Building high-performing, collaborative teams and scaling development processes",
      customSections: {
        passionLabel: "Leadership Philosophy",
        focusLabel: "Team Building Mission",
        skillsLabel: "Leadership Arsenal",
      },
      skills: [
        {
          name: "Team Leadership",
          description:
            "Building high-performing teams through friendship, collaboration, and psychological safety.",
        },
        {
          name: "Entrepreneurship",
          description:
            "Founded multiple companies that outlasted my involvement through sustainable systems.",
        },
        {
          name: "Strategic Planning",
          description:
            "Long-term thinking and collaborative goal-setting with team involvement.",
        },
      ],
    },
    {
      category: "AI-Native Framework Development",
      icon: Zap,
      technologies: [
        "Next-Vibe Framework",
        "Zod Schema",
        "CLI Integration",
        "AI Tool Integration",
        "Cron Jobs",
        "Multi-Interface APIs",
      ],
      story: `## Next-Vibe: The AI-Native WordPress Successor

### The Vision
Building **next-vibe** - a spiritual successor to WordPress but **AI-native**. It's basically Next.js with my own framework around it.

### The Architecture
You have **definition.ts** where you define input, output, and UI of the API. Then the API can be accessed via:

**CLI Interface**: API payload is just a CLI option
**Web Interface**: UI defined as Zod + other schema, renders as website page
**AI Chat Interface**: Each API is a tool the AI can use (depending on user roles)
**Cron Interface**: Every API can be executed with config and schedule

### Real-World Example
*"Give me the signups from this week by country"* - the AI has access to all the same APIs as the website and CLI.

### The Power
One API definition becomes:
- **CLI command** with typed options
- **Web page** with auto-generated UI
- **AI tool** with proper context
- **Scheduled job** with configuration

> One definition, infinite interfaces - that's the future of development.`,
      passion: "Revolutionary",
      currentFocus: "Building the future of AI-native web development",
      customSections: {
        passionLabel: "Innovation Level",
        focusLabel: "Current Mission",
        skillsLabel: "Framework Arsenal",
      },
      skills: [
        {
          name: "Next-Vibe Framework",
          description: `**My own Next.js-based framework** that makes APIs accessible through multiple interfaces:

- **Single definition** for input/output/UI
- **Auto-generated CLI** commands
- **Dynamic web pages** from schema
- **AI tool integration** with proper context
- **Cron job scheduling** with configuration

> One API, four interfaces - CLI, Web, AI, Cron.`,
        },
        {
          name: "Zod Schema Integration",
          description: `**Type-safe schema definition** that powers everything:

- **Input validation** across all interfaces
- **Auto-generated UI** components
- **CLI option parsing** with types
- **AI tool descriptions** from schema
- **Documentation generation** from types

> Schema as the single source of truth.`,
        },
        {
          name: "AI Tool Architecture",
          description: `**Each API becomes an AI tool** based on user roles:

- **Role-based access** control for AI capabilities
- **Contextual tool descriptions** from API definitions
- **Structured responses** for AI consumption
- **Real-time data access** for AI queries

> AI that actually understands your business logic.`,
        },
      ],
    },
    {
      category: "Integration & API Architecture",
      icon: Globe,
      technologies: [
        "REST APIs",
        "GraphQL",
        "Webhooks",
        "OAuth",
        "API Gateway",
        "Microservices",
      ],
      story:
        "APIs are the nervous system of modern applications. I've built everything from simple REST endpoints to complex microservice architectures. The key is designing APIs that are intuitive for developers while being robust and scalable. Documentation and developer experience are just as important as the code itself.",
      passion: "High",
      currentFocus:
        "Event-driven architectures and real-time data synchronization",
      skills: [
        {
          name: "REST API Design",
          description:
            "Building intuitive and scalable REST APIs with proper documentation.",
        },
        {
          name: "GraphQL Implementation",
          description:
            "Flexible data fetching and type-safe API design with GraphQL.",
        },
        {
          name: "Microservices Architecture",
          description:
            "Designing and implementing complex microservice architectures.",
        },
      ],
    },
    {
      category: "Other Languages & Legacy Systems",
      icon: Code2,
      technologies: [
        "PHP",
        "Go",
        "C#",
        "SQL",
        "MongoDB",
        "Redis",
        "Prisma",
        "MySQL",
      ],
      story:
        "Sometimes you have to work with what's there. PHP? If I have to use it to bridge legacy systems, I can do it. But I rather use TypeScript or other typesafe languages. Go is nice for backend services and microservices. C#? I used it here and there, but never got into it. The alternatives just make more sense to me. I get the idea of NoSQL with MongoDB, but I didn't have a use case yet. Prisma was a great time, but flexibility and type-safety of drizzle won me over.",
      passion: "Low-Medium",
      currentFocus:
        "Migrating legacy systems to modern, type-safe alternatives",
      skills: [
        {
          name: "PHP",
          description:
            "If I have to use it to bridge legacy systems, I can do it. But I rather use TypeScript or other typesafe languages.",
        },
        {
          name: "Go",
          description: "Backend services and microservices",
        },
        {
          name: "C#",
          description:
            "I used it here and there, but never got into it. The alternatives just make more sense to me.",
        },
        {
          name: "MySQL",
          description: "I always must think of PHP when I think of MySQL...",
        },
        {
          name: "MongoDB",
          description:
            "I get the idea of NoSQL, but I didn't have a use case yet.",
        },
        {
          name: "Redis",
          description:
            "I never really needed that much performance, but I've played with it a bit.",
        },
        {
          name: "Prisma",
          description:
            "It was a great time, but flexibility and type-safety of drizzle won me over.",
        },
      ],
    },
    {
      category: "Mobile & Cross-Platform Development",
      icon: Smartphone,
      technologies: [
        "React Native",
        "Flutter",
        "Dart",
        "Kotlin",
        "Swift",
        "iOS Development",
        "Android Development",
      ],
      story:
        "I mean what choice do you have for iOS development? I recently managed to build a webview based component and a demo app for it. I built a demo app and the Sovendus web view based flutter component. While Flutter is pretty nice, I rather use React Native or a Kotlin/Swift based solution. The mental model consistency between web and mobile development is what I'm after.",
      passion: "Medium",
      currentFocus:
        "Cross-platform solutions that maintain native performance and feel",
      skills: [
        {
          name: "React Native",
          description: "Cross-platform mobile apps with native performance",
        },
        {
          name: "Flutter",
          description: "Cross-platform mobile development",
        },
        {
          name: "Dart/Flutter",
          description:
            "I built a demo app and the Sovendus web view based flutter component. While its pretty nice, I rather use React Native or a Kotlin/Swift based solution.",
        },
        {
          name: "Kotlin",
          description: "Android native development",
        },
        {
          name: "Swift",
          description:
            "I mean what choice do you have for iOS development? I recently managed to build a webview based component and a demo app for it.",
        },
      ],
    },
    {
      category: "Infrastructure & System Administration",
      icon: Server,
      technologies: [
        "GNU/Linux",
        "Docker",
        "Kubernetes",
        "Apache",
        "Nginx",
        "File Servers",
        "Print Servers",
        "Mail/Exchange Server",
        "Active Directory",
        "RADIUS Authentication",
      ],
      story:
        "My primary OS for both server and desktop is Linux - I use Arch btw. If I have to use Mac or Windows, I won't be happy. Docker is my choice for production, but if you force me to use it beyond db for local dev, we will have a long talk. I've set up everything from web servers to complex authentication systems. The key is understanding the full stack from hardware to application layer.",
      passion: "Medium-High",
      currentFocus: "Container orchestration and infrastructure as code",
      skills: [
        {
          name: "GNU/Linux",
          description:
            "My primary OS for both server and desktop, I use Arch btw. If I have to use Mac or Windows, I wont be happy.",
        },
        {
          name: "Docker",
          description:
            "Choice for production, but if you force me to use it beyond db for local dev, we will have a long talk.",
        },
        {
          name: "Webserver Administration",
          description: "Apache, Nginx, and advanced web server configuration",
        },
        {
          name: "File Server Management",
          description:
            "Network file systems, storage solutions, and backup systems",
        },
        {
          name: "Print Server Setup",
          description: "Network printing solutions and print queue management",
        },
        {
          name: "Mail/Exchange Server",
          description: "Email server configuration and management",
        },
        {
          name: "Logon Server (AD)",
          description: "Active Directory and authentication systems",
        },
        {
          name: "RADIUS Authentication",
          description: "Network access control and authentication protocols",
        },
      ],
    },
    {
      category: "Hardware & System Repair",
      icon: Wrench,
      technologies: [
        "Electronics Diagnosis",
        "Component-Level Repair",
        "SMD Soldering",
        "Brazing",
        "Inert Gas Welding",
        "CNC Turning",
        "Multimeter",
        "Oscilloscope",
      ],
      story:
        "My background as a car technician gave me a deep understanding of how things work at the hardware level. I can diagnose and repair electronics down to the component level, do precision SMD soldering, and even handle metalworking like brazing and TIG welding. This hardware knowledge gives me a unique perspective on software optimization and system architecture - when you understand how electrons flow through circuits, debugging software becomes intuitive.",
      passion: "Medium",
      currentFocus:
        "Applying hardware troubleshooting methodologies to software debugging",
      skills: [
        {
          name: "Server Hardware",
          description: "Advanced server maintenance, diagnosis, and repair",
        },
        {
          name: "PC & Notebook Repair",
          description:
            "Complete hardware diagnosis and repair of desktop and laptop systems",
        },
        {
          name: "Mobile Device Repair",
          description:
            "Smartphone and tablet hardware repair and troubleshooting",
        },
        {
          name: "Automotive Electronics",
          description: "ICE vehicle electronic systems, diagnosis, and repair",
        },
        {
          name: "SMD Soldering",
          description:
            "Surface-mount device soldering and microelectronics assembly",
        },
        {
          name: "Brazing & Welding",
          description:
            "Metal joining techniques for precision applications, including TIG welding and oxyacetylene work",
        },
        {
          name: "CNC Turning",
          description: "Precision machining and metal turning operations",
        },
        {
          name: "Gaming Console Repair",
          description: "Hardware repair and modification of gaming systems",
        },
        {
          name: "IoT & Wearables",
          description:
            "Internet of Things devices and wearable technology repair",
        },
        {
          name: "Household Electronics",
          description: "Consumer electronics repair and maintenance",
        },
      ],
    },
  ],
} as const;

export const formalEducation = {
  category: "Formal Education",
  items: [
    {
      degree: "Car Technician Apprenticeship",
      institution:
        "Karner & Grossegger, Salzburg (Ferrari, Maserati, Aston Martin & Bentley specialist)",
      period: "2007-2011",
      focus:
        "Diagnosis, maintenance and repair of ICE vehicles, electronic systems integration",
      achievements: [
        "Successfully completed final apprenticeship exam",
        "Specialized in luxury vehicle diagnostics and electronic retrofitting",
        "Internal First level IT support and second level interface",
        "Attended seminars on personality, appearance and communication",
      ],
    },
    {
      degree: "Polytechnic School",
      institution: "Neumarkt (Department of Electrical Engineering)",
      period: "2006-2007",
      focus: "Electrical engineering fundamentals",
    },
    {
      degree: "Military Service",
      institution: "Salzburg/Tamsweg",
      period: "2011",
      focus: "Leadership and discipline training",
    },
  ],
} as const;
