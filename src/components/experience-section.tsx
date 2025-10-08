"use client";

import { Badge } from "components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Title } from "components/ui/title";
import { Briefcase, ChevronDown, Sparkles, Trophy } from "lucide-react";
import { jobs } from "me/jobs";
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
    <div className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="sectionBadge" className="mb-4">
            <Briefcase className="h-4 w-4" />
            Professional Journey
          </Badge>
          <Title
            level={2}
            variant="primary"
            isHover={isTitleHover}
            className="mb-6"
            setIsHover={setIsTitleHover}
          >
            Professional Experience
          </Title>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {jobs.subTitle}
          </p>
        </div>

        {/* Modern Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {jobs.jobs.map((job, index) => {
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
                  className="cursor-pointer"
                  onClick={() => toggleJobDetails(index)}
                >
                  {/* Header - Always Visible */}
                  <CardHeader className="pb-4 relative">
                    {/* Period Badge */}
                    <div className="absolute top-6 right-6">
                      <Badge>{job.period}</Badge>
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
                            isHover={false}
                            useRainbow={false}
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
                                  variant="default"
                                  className="hover:scale-105 transition-all duration-200"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
