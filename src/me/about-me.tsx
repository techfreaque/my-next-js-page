// ===== BASIC PERSONAL INFORMATION =====
export const personalInfo = {
  fullName: "Max Brandstaetter",
  displayName: "Max B",
  nickname: "Max B",
  location: "Switzerland",
  email: "max@a42.ch",
  github: "https://github.com/techfreaque",
  website: "max.a42.ch",
  experienceYears: "13+",
  startDate: "January 2012",
  currentStatus: "Actively seeking new opportunities with innovation potential",
  contactEmailSubject: "Let's discuss a cooperation",
} as const;

// ===== PROFESSIONAL SUMMARY =====
export const professionalSummary = {
  title:
    "Super Senior Full Stack Developer, AI innovator, entrepreneur, and exceptional team leader",
  description:
    "Super senior developer with over 15 years of experience transforming complex technical challenges into revolutionary solutions. Built universal widget engines expanding €500M to €5B+ markets, AI-driven trading systems, and comprehensive developer tools. My teams always become super happy, close friends who deeply respect each other, creating exceptional learning environments where everyone thrives together.",
  specializations: [
    "Universal widget engines with SSR client hydration",
    "AI-driven trading systems and genetic algorithms",
    "Developer tools and self-service platforms",
    "Plugin development for 20+ platforms",
    "Team leadership creating super happy, close-knit teams",
    "Comprehensive technical solutions solving real-world problems",
    "Market expansion from €500M to €5B+ opportunities",
  ],
  keyAchievements: [
    "Built universal widget engine better than Google Tag Manager",
    "Reduced support tickets by 99% through innovative self-service tools",
    "Led teams that become close friends with exceptional performance",
    "Developed AI trading systems with genetic algorithm optimization",
    "Created 20+ platform-specific plugins and integrations",
    "Expanded market opportunities from €500M to €5B+",
  ],
} as const;

// ===== EDUCATION & LEARNING JOURNEY =====
export const education = [
  {
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
  },
  {
    category: "Continuous Self-Study & Professional Development",
    period: "2012-Present",
    description:
      "Countless offline/online courses, seminars, and hands-on learning",
    learningRabbitHoles: [
      {
        category: "JavaScript Ecosystem Deep Dive",
        technologies: ["JavaScript (ES6+)", "TypeScript", "JSX", "Node.js"],
        progression:
          "From basic scripting to advanced async patterns, type safety, and server-side development",
      },
      {
        category: "React & Modern Frontend Frameworks",
        technologies: ["React", "Next.js", "Preact", "Custom SSR Frameworks"],
        progression:
          "Built own SSR framework similar to Next.js, mastered component architecture and state management",
      },
      {
        category: "Python & Data Science",
        technologies: [
          "Python",
          "Cython",
          "NumPy",
          "Pandas",
          "SQLAlchemy",
          "Flask",
        ],
        progression:
          "From basic scripting to advanced algorithmic trading systems and AI integration",
      },
      {
        category: "DevOps & Infrastructure",
        technologies: [
          "Docker",
          "Docker Compose",
          "Linux",
          "Bash",
          "PowerShell",
        ],
        progression:
          "From basic containerization to complex multi-service orchestration",
      },
      {
        category: "Database & Backend Systems",
        technologies: ["MySQL", "PostgreSQL", "SQLite", "REST APIs", "GraphQL"],
        progression:
          "From simple queries to complex database architecture and API design",
      },
    ],
    topics: [
      "Entrepreneurship and business strategy",
      "Advanced programming paradigms",
      "Character formation and leadership",
      "Marketing and growth strategies",
      "Cybersecurity and ethical hacking",
      "Hardware/software hacking and repair",
      "AI and machine learning applications",
      "Financial technology and algorithmic trading",
    ],
  },
] as const;

// ===== PERSONALITY & APPROACH =====
export const personalityApproach = {
  description:
    "Max is a super senior developer and natural problem-solver who thrives on innovation and technical challenges. His teams always become super happy, close friends who deeply respect each other. He creates learning environments where everyone thrives together, never being arrogant and always considering different perspectives.",
  leadership: {
    style: "Collaborative leadership where every team member's voice matters",
    teamDynamics:
      "Teams become close-knit groups where respect, friendship, and continuous learning are the foundation",
    communication:
      "Openly discusses failures, blind spots, and reflections when explaining concepts",
    approach:
      "Makes goals, plans, and visions together with the team, ensuring everyone is involved in continuous learning and innovation",
  },
  learningMindset: {
    philosophy:
      "Everything must be questioned and continuously reevaluated based on stakeholder feedback",
    transparency:
      "Makes thought process transparent, always focusing on collaborative problem-solving and mutual growth",
    failureHandling:
      "Focuses on how he's failed and then progressed, making it clear that mistakes are learning opportunities",
    environment:
      "Creates environments where questioning assumptions and learning from failures is celebrated",
  },
  characterTraits: [
    "Thirsty for knowledge",
    "Purposeful",
    "Resilient",
    "Causally analytical",
    "Empathetic",
    "Flexible",
    "Out of the box thinking",
  ],
  coreValues: [
    "Elegant solutions over quick fixes",
    "Long-term thinking and sustainable architecture",
    "Continuous learning and adaptation",
    "Innovation and cutting-edge technology integration",
    "Team empowerment and knowledge sharing",
    "Collaborative problem-solving and mutual growth",
  ],
  workingStyle: [
    "Proactive problem identification and solution development",
    "Comprehensive documentation and knowledge transfer",
    "Building self-service tools and empowering users",
    "Focus on scalable, maintainable solutions",
    "Collaborative leadership and mentoring approach",
    "Creating super happy teams that become close friends",
  ],
  passions: [
    "Philosophize and enjoy life with friends and family",
    "Develop and work on innovative solutions",
    "Read, listen, watch, learn & execute continuously",
    "Building teams that become close friends",
    "Solving complex technical challenges",
    "Creating tools that empower others",
  ],
} as const;

// ===== OPPORTUNITIES SEEKING =====
export const opportunitiesSeeking = [
  "Room for innovation and technical challenges",
  "Opportunities to work with cutting-edge technologies, especially AI",
  "Leadership roles where he can build and mentor teams",
  "Projects that require complex problem-solving and architectural thinking",
  "Companies that value long-term solutions over quick fixes",
] as const;

// ===== HERO SECTION TYPEWRITER STRINGS =====
export const heroTypewriterStrings = [
  "Marcus Brandstaetter",
  "your next Full Stack Developer",
  "an experienced Entrepreneur",
  "your Problem Solver",
  "a strategic Problem Identifier",
  "Max Brandstaetter",
  "your Data Science partner",
  "an AI Innovation expert",
  "your Tech Innovator",
  "a proven Team Leader",
] as const;

// ===== ABOUT SECTION CONTENT =====
export const aboutContent = {
  welcomeText:
    "Welcome to my magical world of tech! I'm Max Brandstaetter, a Full Stack Developer and data sorcerer. With a touch of innovation and a sprinkle of wizardry, I create extraordinary solutions that bring visions to life.",
  problemSolvingText:
    "As a problem-solving wizard, I empower businesses with advanced technologies and elegant solutions. From revamping open-source libraries to architecting AI-driven marvels, I conjure up remarkable results.",
  dataText:
    "Unleashing the power of data, I delve into complex datasets, extracting valuable insights and making accurate predictions. With my expertise in machine learning and AI, I transform raw information into strategic advantages.",
  highlights: [
    {
      icon: "Code",
      title: "Full Stack Mastery",
      description:
        "13+ years crafting elegant solutions across the entire technology stack",
    },
    {
      icon: "Brain",
      title: "AI Innovation",
      description:
        "Pioneering AI-driven applications and intelligent automation systems",
    },
    {
      icon: "Users",
      title: "Team Leadership",
      description:
        "Proven track record of leading teams and mentoring developers",
    },
    {
      icon: "Rocket",
      title: "Problem Solving",
      description:
        "Expert at identifying inefficiencies and architecting scalable solutions",
    },
    {
      icon: "Palette",
      title: "Creative Solutions",
      description:
        "Blending technical expertise with innovative thinking for unique results",
    },
    {
      icon: "Zap",
      title: "Performance Focus",
      description:
        "Optimizing systems for maximum efficiency and user experience",
    },
  ],
} as const;

// ===== METADATA =====
export const metadata = {
  title: "Max B - Full Stack Developer & Designer",
  description:
    "Personal portfolio showcasing my work in web development, design, and technology. Chat with my AI assistant to learn more about my experience and projects.",
  keywords: [
    "developer",
    "designer",
    "portfolio",
    "full stack",
    "web development",
  ],
  author: "Max B",
  openGraph: {
    title: "Max B - Full Stack Developer & Designer",
    description:
      "Personal portfolio showcasing my work in web development, design, and technology.",
    type: "website",
  },
} as const;
