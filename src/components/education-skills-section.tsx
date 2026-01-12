"use client";

import { Badge } from "components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Markdown } from "components/ui/markdown";
import { Title } from "components/ui/title";
import { ChevronDown, ChevronRight, GraduationCap } from "lucide-react";
import { learnings } from "me/learnings";
import type { JSX } from "react";
import React, { useState } from "react";

export function EducationSkillsSection(): JSX.Element {
  const [expandedRabbitHole, setExpandedRabbitHole] = useState<string | null>(null);
  const [isTitleHover, setIsTitleHover] = useState(false);

  const toggleRabbitHole = (category: string): void => {
    setExpandedRabbitHole(expandedRabbitHole === category ? null : category);
  };

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          onMouseEnter={() => setIsTitleHover(true)}
          onMouseLeave={() => setIsTitleHover(false)}
        >
          <Badge variant="sectionBadge" className="mb-4">
            <GraduationCap className="h-4 w-4" />
            Learning Journey
          </Badge>
          <div className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
            Skills &{" "}
            <Title
              level={2}
              variant="primary"
              isHover={isTitleHover}
              className="inline cursor-pointer transition-all duration-500 hover:scale-105"
            >
              Education
            </Title>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From learning rabbit holes to professional mastery - explore my technical journey
            through interactive skill categories and educational adventures.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* Learning Rabbit Holes */}
            {learnings && (
              <div>
                <div className="text-center mb-8">
                  <Title
                    level={3}
                    variant="primary"
                    isHover={isTitleHover}
                    className="text-3xl font-bold mb-4"
                  >
                    Learning Rabbit Holes
                  </Title>
                  <p className="text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
                    {learnings.description}
                  </p>
                  <Badge variant="default" className="mt-2">
                    {learnings.period}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {learnings.learningRabbitHoles.map((rabbitHole, index) => {
                    const isExpanded = expandedRabbitHole === rabbitHole.category;

                    return (
                      <Card
                        key={index}
                        colorScheme="blue"
                        className="group overflow-hidden border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-indigo-50/50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-500 bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-800 dark:to-blue-900/10 cursor-pointer hover:scale-[1.02]"
                        onClick={() => toggleRabbitHole(rabbitHole.category)}
                      >
                        <CardHeader className="transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <div className="p-3 rounded-full bg-linear-to-r from-blue-500 via-violet-500 to-blue-500 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                                <rabbitHole.icon className="h-6 w-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                  {rabbitHole.category}
                                </CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {rabbitHole.technologies?.slice(0, 4).map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="default"
                                      className="text-xs group-hover:scale-105 transition-all duration-200"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                  {rabbitHole.technologies &&
                                    rabbitHole.technologies.length > 4 && (
                                      <Badge
                                        variant="default"
                                        className="text-xs group-hover:scale-105 transition-all duration-200"
                                      >
                                        +{rabbitHole.technologies.length - 4} more
                                      </Badge>
                                    )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={"default"}
                                className="text-xs group-hover:scale-105 transition-all duration-200"
                              >
                                {rabbitHole.passion}{" "}
                                {("customSections" in rabbitHole &&
                                  rabbitHole.customSections?.passionLabel) ||
                                  "Passion"}
                              </Badge>
                              {isExpanded ? (
                                <ChevronDown className="h-5 w-5 text-slate-500" />
                              ) : (
                                <ChevronRight className="h-5 w-5 text-slate-500" />
                              )}
                            </div>
                          </div>
                        </CardHeader>

                        {isExpanded && (
                          <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-500">
                            <div className="space-y-4">
                              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                <Markdown
                                  content={rabbitHole.story}
                                  className="prose prose-sm dark:prose-invert max-w-none"
                                  isHover={isTitleHover}
                                />
                              </div>

                              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <h5 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">
                                  {("customSections" in rabbitHole &&
                                    rabbitHole.customSections?.focusLabel) ||
                                    "Current Focus"}
                                </h5>
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                  {rabbitHole.currentFocus}
                                </p>
                              </div>

                              {"skills" in rabbitHole && rabbitHole.skills && (
                                <div className="space-y-2">
                                  <h5 className="font-semibold text-sm text-slate-900 dark:text-white">
                                    {("customSections" in rabbitHole &&
                                      rabbitHole.customSections?.skillsLabel) ||
                                      "Key Skills Developed"}
                                  </h5>
                                  <div className="grid md:grid-cols-2 gap-3">
                                    {rabbitHole.skills.map((skill) => (
                                      <div
                                        key={skill.name}
                                        className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600"
                                      >
                                        <h6 className="font-medium text-sm text-slate-900 dark:text-white mb-2">
                                          {skill.name}
                                        </h6>
                                        <Markdown
                                          content={skill.description}
                                          className="prose prose-xs dark:prose-invert max-w-none"
                                          isHover={isTitleHover}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
