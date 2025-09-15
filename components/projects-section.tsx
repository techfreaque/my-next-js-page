"use client";

import {
  Bot,
  Code,
  Cpu,
  Database,
  Filter,
  TrendingUp,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getFancyColorsStyle, getFancySubtitleStyle } from "./colorPalette";

export function ProjectsSection(): React.ReactElement {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isHover, setIsHover] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Trading Bot User Interface & Customized OctoBot Backend",
      description:
        "Developed a sophisticated trading bot with real-time market analysis, machine learning decision-making, and deep neural networks for advanced trading strategies.",
      icon: TrendingUp,
      technologies: [
        "Python",
        "JavaScript",
        "React",
        "Machine Learning",
        "Neural Networks",
        "WebSocket",
        "REST API",
      ],
      category: "ai-ml",
      achievements: [
        "Real-time market analysis integration",
        "Advanced ML-based decision making",
        "Custom OctoBot backend modifications",
        "Sophisticated trading algorithms",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "AI-Powered Data Analytics Platform",
      description:
        "Built a comprehensive data analytics platform that transforms complex datasets into actionable insights using advanced machine learning and predictive analytics.",
      icon: Database,
      technologies: [
        "Python",
        "TensorFlow",
        "PostgreSQL",
        "React",
        "D3.js",
        "Docker",
        "AWS",
      ],
      category: "ai-ml",
      achievements: [
        "Complex dataset processing",
        "Predictive analytics implementation",
        "Interactive data visualizations",
        "Scalable cloud architecture",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Open Source Library Enhancement",
      description:
        "Revamped and enhanced multiple open-source libraries, improving performance, adding new features, and modernizing codebases for better developer experience.",
      icon: Code,
      technologies: [
        "TypeScript",
        "Node.js",
        "Jest",
        "GitHub Actions",
        "npm",
        "Documentation",
      ],
      category: "opensource",
      achievements: [
        "Performance optimizations",
        "Modern TypeScript migration",
        "Comprehensive test coverage",
        " developer documentation",
      ],
      featured: true,
    },
    {
      id: 4,
      title: "Algorithmic Trading System",
      description:
        "Designed and implemented sophisticated algorithmic trading systems with advanced risk management, backtesting capabilities, and real-time execution.",
      icon: Cpu,
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "QuantLib",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      category: "fintech",
      achievements: [
        "Advanced risk management",
        "Backtesting framework",
        "Real-time execution engine",
        "Performance monitoring",
      ],
      featured: false,
    },
    {
      id: 5,
      title: "Full Stack Web Applications",
      description:
        "Created multiple scalable web applications with modern architectures, focusing on performance, user experience, and maintainable code.",
      icon: Zap,
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Vercel",
      ],
      category: "fullstack",
      achievements: [
        "Scalable architecture design",
        "Optimized performance",
        "Modern UI/UX implementation",
        "Production deployment",
      ],
      featured: false,
    },
    {
      id: 6,
      title: "AI Assistant Integration",
      description:
        "Integrated advanced AI capabilities into web applications, including natural language processing, intelligent chat systems, and automated workflows.",
      icon: Bot,
      technologies: [
        "OpenAI API",
        "LangChain",
        "React",
        "TypeScript",
        "Vector Databases",
        "Streaming",
      ],
      category: "ai-ml",
      achievements: [
        "Natural language processing",
        "Intelligent chat systems",
        "Automated workflow creation",
        "Real-time AI responses",
      ],
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "ai-ml",
      label: "AI & ML",
      count: projects.filter((p) => p.category === "ai-ml").length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "fintech",
      label: "FinTech",
      count: projects.filter((p) => p.category === "fintech").length,
    },
    {
      id: "opensource",
      label: "Open Source",
      count: projects.filter((p) => p.category === "opensource").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-violet-50/30 via-slate-50 to-blue-50/30 dark:from-violet-950/30 dark:via-slate-900 dark:to-blue-950/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-float" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-violet-500/10 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-600 dark:text-violet-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code className="h-4 w-4" />
              Project Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
              Magical{" "}
              <span
                className="fancy-title cursor-pointer"
                style={getFancyColorsStyle(isHover)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                Creations
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
              As a testament to my expertise and versatility, here's a showcase
              of notable projects I've conjured up, highlighting the
              technologies and magical solutions that deliver extraordinary
              results.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`cursor-pointer ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                    : ""
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h3
                className="text-2xl font-bold mb-8 text-center cursor-pointer"
                style={getFancySubtitleStyle(isHover, "accent")}
              >
                ✨ Featured Enchantments
              </h3>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="group border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden"
                    onMouseEnter={() => {
                      setIsHover(true);
                    }}
                    onMouseLeave={() => {
                      setIsHover(false);
                    }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <project.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary"
                        >
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-primary">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-primary">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                🚀 Additional Innovations
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="group border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <project.icon className="h-7 w-7 text-primary" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-0"
                        >
                          Innovation
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-primary">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-primary">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {project.achievements
                            .slice(0, 3)
                            .map((achievement, index) => (
                              <li
                                key={index}
                                className="text-sm text-muted-foreground flex items-start"
                              >
                                <span className="text-primary mr-2 mt-1">
                                  •
                                </span>
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
