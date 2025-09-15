"use client";

import {
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Globe,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { getFancyColorsStyle } from "./colorPalette";

export function SkillsSection(): React.ReactElement {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isTitleHover, setIsTitleHover] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "languages",
      name: "Programming Languages",
      icon: Code2,
      color: "from-blue-500 to-purple-500",
      skills: [
        {
          name: "JavaScript",
          level: 95,
          description: "Modern ES6+ features and frameworks",
        },
        {
          name: "TypeScript",
          level: 90,
          description: "Type-safe development with enhanced productivity",
        },
        {
          name: "Python",
          level: 92,
          description: "Data science, automation, and web development",
        },
        {
          name: "HTML/CSS",
          level: 96,
          description: "Semantic markup and advanced styling",
        },
        {
          name: "PHP",
          level: 85,
          description: "Server-side web development and CMS",
        },
        {
          name: "SQL",
          level: 88,
          description: "Database queries and optimization",
        },
        {
          name: "Bash/PowerShell",
          level: 82,
          description: "System automation and scripting",
        },
        { name: "Swift", level: 80, description: "iOS native app development" },
        {
          name: "Kotlin",
          level: 82,
          description: "Android native app development",
        },
        {
          name: "Go",
          level: 75,
          description: "Concurrent programming and microservices",
        },
        {
          name: "Dart",
          level: 78,
          description: "Flutter mobile app development",
        },
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks & Libraries",
      icon: Zap,
      color: "from-green-500 to-teal-500",
      skills: [
        {
          name: "React.js",
          level: 94,
          description: "Modern component-based UI development",
        },
        {
          name: "Next.js",
          level: 90,
          description: "Full-stack React framework with SSR",
        },
        {
          name: "Node.js",
          level: 88,
          description: "Server-side JavaScript runtime",
        },
        {
          name: "Flask",
          level: 85,
          description: "Lightweight Python web framework",
        },
        {
          name: "Django",
          level: 80,
          description: "Full-featured Python web framework",
        },
        {
          name: "Express.js",
          level: 87,
          description: "Fast Node.js web application framework",
        },
        {
          name: "TensorFlow",
          level: 82,
          description: "Machine learning and AI development",
        },
        {
          name: "PyTorch",
          level: 80,
          description: "Deep learning research and production",
        },
        {
          name: "Flutter",
          level: 85,
          description: "Cross-platform mobile development",
        },
        {
          name: "React Native",
          level: 83,
          description: "Native mobile app development",
        },
      ],
    },
    {
      id: "databases",
      name: "Databases & Storage",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "PostgreSQL",
          level: 88,
          description: "Advanced relational database design",
        },
        {
          name: "MySQL",
          level: 90,
          description: "Popular relational database management",
        },
        { name: "MongoDB", level: 82, description: "NoSQL document database" },
        {
          name: "Redis",
          level: 78,
          description: "In-memory data structure store",
        },
        {
          name: "SQLAlchemy",
          level: 85,
          description: "Python SQL toolkit and ORM",
        },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Infrastructure",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "Docker",
          level: 88,
          description: "Containerization and microservices",
        },
        {
          name: "AWS",
          level: 82,
          description: "Cloud infrastructure and services",
        },
        {
          name: "Git/GitHub",
          level: 95,
          description: "Version control and collaboration",
        },
        {
          name: "Linux/Unix",
          level: 90,
          description: "System administration and scripting",
        },
        {
          name: "Nginx",
          level: 85,
          description: "Web server and reverse proxy",
        },
        {
          name: "SSH/VPN",
          level: 88,
          description: "Secure remote access and networking",
        },
        {
          name: "Load Balancing",
          level: 80,
          description: "Traffic distribution and scaling",
        },
      ],
    },
    {
      id: "integration",
      name: "Integration & APIs",
      icon: Globe,
      color: "from-teal-500 to-cyan-500",
      skills: [
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
          description: "Authentication and authorization",
        },
        {
          name: "Plugin Development",
          level: 90,
          description:
            "Platform-specific integrations (Shopify, Magento, etc.)",
        },
        {
          name: "Webhook Integration",
          level: 89,
          description: "Event-driven architecture",
        },
      ],
    },
    {
      id: "ai-trading",
      name: "AI & Trading",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
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
          description: "Live market data processing",
        },
        {
          name: "Risk Management",
          level: 85,
          description: "Portfolio optimization and risk assessment",
        },
      ],
    },
    {
      id: "leadership",
      name: "Leadership & Business",
      icon: Briefcase,
      color: "from-amber-500 to-orange-500",
      skills: [
        {
          name: "Entrepreneurship",
          level: 90,
          description: "Building and scaling tech businesses",
        },
        {
          name: "Problem Identification",
          level: 95,
          description: "Spotting inefficiencies and opportunities",
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
      ],
    },
  ];

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      category: cat.id,
      categoryName: cat.name,
      categoryColor: cat.color,
    })),
  );

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  const categories = [
    { id: "all", name: "All Skills", icon: Zap },
    ...skillCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      icon: cat.icon,
    })),
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-violet-950/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-float" />
      <div
        className="absolute bottom-20 right-20 w-24 h-24 bg-violet-500/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-10 w-16 h-16 bg-secondary/5 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code2 className="h-4 w-4" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
              Magical{" "}
              <span
                className="fancy-title cursor-pointer"
                style={getFancyColorsStyle(
                  isTitleHover || hoveredSkill !== null,
                )}
                onMouseEnter={() => setIsTitleHover(true)}
                onMouseLeave={() => setIsTitleHover(false)}
              >
                Skills & Expertise
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
              A comprehensive arsenal of technologies and methodologies I've
              mastered to create extraordinary digital experiences and solve
              complex problems.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills by Category */}
          {activeCategory === "all" ? (
            <div className="space-y-16">
              {skillCategories.map((category) => (
                <div key={category.id} className="space-y-8">
                  <div className="text-center">
                    <div
                      className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      <category.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <Card
                        key={skill.name}
                        className="group border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 backdrop-blur-sm"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {skill.name}
                            </h4>
                            <Badge
                              variant="secondary"
                              className={`bg-gradient-to-r ${category.color} text-white border-0`}
                            >
                              {skill.level}%
                            </Badge>
                          </div>

                          <Progress value={skill.level} className="h-2" />

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill) => (
                <Card
                  key={skill.name}
                  className="group border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${skill.categoryColor} text-white border-0`}
                      >
                        {skill.level}%
                      </Badge>
                    </div>

                    <Progress value={skill.level} className="h-2" />

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="text-xs text-primary font-medium">
                      {skill.categoryName}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {allSkills.length}+
              </div>
              <div className="text-sm text-muted-foreground">
                Technologies Mastered
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                13+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Years Experience
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Plugins Built
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                ∞
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Learning Continues
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
