"use client";

import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Title } from "components/ui/title";
import { Briefcase, ChevronDown, Sparkles, Trophy } from "lucide-react";
import { experience } from "me/resume";
import type { JSX } from "react";
import React, { useState } from "react";

export function ExperienceSection(): JSX.Element {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const [isTitleHover, setIsTitleHover] = useState(false);

  const toggleJobDetails = (index: number): void => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900/20 relative overflow-hidden"
      onMouseEnter={() => setIsTitleHover(true)}
      onMouseLeave={() => setIsTitleHover(false)}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-30" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-200/20 dark:border-emerald-800/20 transition-all duration-300 hover:bg-emerald-500/20 hover:scale-105">
            <Briefcase className="h-4 w-4" />
            Professional Journey
          </div>
          <Title
            level={2}
            variant="primary"
            isHover={isTitleHover}
            className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white cursor-pointer transition-all duration-500 hover:scale-105"
            onMouseEnter={() => setIsTitleHover(true)}
            onMouseLeave={() => setIsTitleHover(false)}
          >
            Professional Experience
          </Title>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey from car technician to senior developer -
            building solutions, leading teams, and creating impact across
            industries.
          </p>
        </div>

        {/* Modern Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((job, index) => {
            const isExpanded = expandedJob === index;
            const isHovered = hoveredJob === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => {
                  setHoveredJob(index);
                  setIsTitleHover(true);
                }}
                onMouseLeave={() => {
                  setHoveredJob(null);
                  setIsTitleHover(false);
                }}
              >
                <Card
                  colorScheme="emerald"
                  className={`overflow-hidden border-slate-200 dark:border-slate-700 transition-all duration-500 cursor-pointer ${
                    isHovered || isExpanded
                      ? "shadow-2xl shadow-emerald-500/20 border-emerald-400/50 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 dark:from-slate-800 dark:via-emerald-900/10 dark:to-teal-900/5"
                      : "hover:shadow-lg bg-gradient-to-br from-white to-emerald-50/20 dark:from-slate-800 dark:to-emerald-900/5"
                  }`}
                  onClick={() => toggleJobDetails(index)}
                >
                  {/* Header - Always Visible */}
                  <CardHeader className="pb-4 relative">
                    {/* Period Badge */}
                    <div className="absolute top-6 right-6">
                      <Badge
                        variant={isHovered ? "fancy-outline" : "outline"}
                        className="transition-all duration-300"
                      >
                        {job.period}
                      </Badge>
                    </div>

                    <div className="pr-24">
                      <CardTitle
                        className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                          isHovered
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {job.title}
                      </CardTitle>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                          {job.company}
                        </p>
                        <span className="hidden sm:inline text-slate-400">
                          •
                        </span>
                        <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
                          <span>{job.location}</span>
                          <span className="text-xs">({job.type})</span>
                        </p>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="absolute bottom-4 right-6">
                      <div
                        className={`transition-all duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-colors duration-300 ${
                            isHovered ? "text-emerald-500" : "text-slate-400"
                          }`}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-500">
                      <div className="space-y-6">
                        {/* Achievements */}
                        <div>
                          <Title
                            level={4}
                            variant="sub1"
                            isHover={false}
                            className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2"
                          >
                            <Trophy className="h-4 w-4 text-yellow-500" />
                            Key Achievements
                          </Title>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-3"
                              >
                                <Sparkles className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {job.technologies && (
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-blue-500" />
                              Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="tech"
                                  className="hover:scale-105 transition-all duration-200"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Expand/Collapse hint */}
                        <div className="text-center pt-2">
                          <Button
                            variant="fancy-ghost"
                            size="sm"
                            className="text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleJobDetails(index);
                            }}
                          >
                            Click to collapse
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card
            colorScheme="emerald"
            className="inline-block p-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6" />
              <div>
                <Title
                  level={3}
                  variant="success"
                  isHover={false}
                  className="text-lg font-bold"
                >
                  Ready for the Next Challenge
                </Title>
                <p className="text-sm opacity-90">
                  Let's build something amazing together
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
