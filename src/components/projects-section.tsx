"use client";

import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Title } from "components/ui/title";
import { createRainbowTextStyle } from "lib/design-system";
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
import { projectCategories, projects } from "me/projects";
import type { JSX } from "react";
import React, { useState } from "react";

export function ProjectsSection(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState("featured");
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
    {
      id: "featured",
      label: "Featured Projects",
      count: projects.filter((p) => p.featured).length,
    },
    { id: "all", label: "All Projects", count: projects.length },
    ...projectCategories
      .filter((cat) => cat.id !== "all") // Avoid duplicate "all" category
      .map((cat) => ({
        id: cat.id,
        label: cat.label,
        count: projects.filter((p) => p.category === cat.id).length,
      })),
  ];

  const filteredProjects =
    activeFilter === "featured"
      ? projects.filter((project) => project.featured)
      : activeFilter === "all"
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
          <div
            className="text-center mb-16"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Badge variant="sectionBadge" className="mb-4">
              <Code className="h-4 w-4" />
              Project Showcase
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
              Magical{" "}
              <span
                className="fancy-title cursor-pointer"
                style={createRainbowTextStyle(isHover, "primary")}
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
                variant="rainbow"
                isHover={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
                className="cursor-pointer"
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
                <Badge variant="tech" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <Title
                level={3}
                variant="accent"
                isHover={isHover}
                className="text-2xl font-bold mb-8 text-center cursor-pointer"
              >
                ✨ Featured Enchantments
              </Title>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <Card
                    key={project.id}
                    colorScheme="cyan"
                    className="group border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          {React.createElement(iconMap[project.icon], {
                            className: "h-5 w-5 text-primary",
                          })}
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary text-xs"
                        >
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies - Compact */}
                      <div>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Key Highlights - Compact */}
                      <div>
                        <ul className="space-y-1">
                          {project.achievements
                            .slice(0, 2)
                            .map((achievement, index) => (
                              <li
                                key={index}
                                className="text-xs text-muted-foreground flex items-start"
                              >
                                <span className="text-primary mr-2 mt-0.5">
                                  •
                                </span>
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* URL if available */}
                      {"url" in project && project.url && (
                        <div className="pt-1">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-xs font-medium"
                          >
                            View Project →
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <Title
                level={3}
                variant="accent"
                isHover={isHover}
                className="text-2xl font-bold mb-8 text-center cursor-pointer"
              >
                🚀 Additional Innovations
              </Title>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <Card
                    key={project.id}
                    colorScheme="violet"
                    className="group border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          {React.createElement(iconMap[project.icon], {
                            className: "h-5 w-5 text-primary",
                          })}
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-0 text-xs"
                        >
                          Innovation
                        </Badge>
                      </div>
                      <CardTitle className="text-base group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies - Compact */}
                      <div>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Key Highlights - Compact */}
                      <div>
                        <ul className="space-y-1">
                          {project.achievements
                            .slice(0, 2)
                            .map((achievement, index) => (
                              <li
                                key={index}
                                className="text-xs text-muted-foreground flex items-start"
                              >
                                <span className="text-primary mr-2 mt-0.5">
                                  •
                                </span>
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* URL if available */}
                      {"url" in project && project.url && (
                        <div className="pt-1">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-xs font-medium"
                          >
                            View Project →
                          </a>
                        </div>
                      )}
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
