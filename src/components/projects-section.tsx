"use client";

import {
  Bot,
  Briefcase,
  Calendar,
  Code,
  Cpu,
  Database,
  Filter,
  Globe,
  TrendingUp,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { projectCategories, projects } from "@/src/me/projects";

import { getFancyColorsStyle, getFancySubtitleStyle } from "./colorPalette";

export function ProjectsSection(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isHover, setIsHover] = useState(false);

  // Icon mapping for project icons
  const iconMap = {
    TrendingUp,
    Database,
    Code,
    Cpu,
    Zap,
    Bot,
    Briefcase,
    Globe,
    Calendar,
  } as const;

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    ...projectCategories.map((cat) => ({
      id: cat.id,
      label: cat.label,
      count: projects.filter((p) => p.category === cat.id).length,
    })),
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
                          {React.createElement(iconMap[project.icon], {
                            className: "h-8 w-8 text-primary",
                          })}
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
                          {React.createElement(iconMap[project.icon], {
                            className: "h-7 w-7 text-primary",
                          })}
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
