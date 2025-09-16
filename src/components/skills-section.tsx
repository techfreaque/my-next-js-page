"use client";

import {
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Globe,
  Hammer,
  Server,
  Wrench,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent } from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";
import { skillCategories } from "@/src/me/skills";

import { getFancyColorsStyle } from "./colorPalette";

export function SkillsSection(): JSX.Element {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isTitleHover, setIsTitleHover] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Using imported skillCategories from constants
  const iconMap = {
    Code2,
    Zap,
    Database,
    Cloud,
    Globe,
    Brain,
    Briefcase,
    Wrench,
    Hammer,
    Server,
  } as const;

  const skillCategoriesWithIcons = skillCategories.map((cat) => ({
    ...cat,
    icon: iconMap[cat.icon],
  }));

  const allSkills = skillCategoriesWithIcons.flatMap((cat) =>
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
    ...skillCategoriesWithIcons.map((cat) => ({
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
                      {React.createElement(category.icon, {
                        className: "h-8 w-8 text-blue-600 dark:text-blue-400",
                      })}
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
