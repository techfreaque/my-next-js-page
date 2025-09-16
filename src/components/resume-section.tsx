"use client";

import {
  Award,
  Briefcase,
  Building,
  Calendar,
  GraduationCap,
  Mail,
  MapPin,
  Star,
  Trophy,
} from "lucide-react";
import type { JSX } from "react";
import React, { useState } from "react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { personalInfo } from "@/src/me/about-me";
import { experience } from "@/src/me/resume";

import { getFancyColorsStyle } from "./colorPalette";

export function ResumeSection(): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  // Using imported experience from constants

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "ETH Zurich",
      location: "Zurich, Switzerland",
      period: "2016 - 2018",
      description:
        "Specialized in Machine Learning and Data Science with focus on algorithmic trading and financial modeling.",
      achievements: [
        "Thesis: 'Deep Learning Applications in Algorithmic Trading'",
        "GPA: 5.7/6.0 (Swiss grading system)",
        "Teaching Assistant for Advanced Algorithms course",
        "Member of Computer Science Student Association",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Zurich",
      location: "Zurich, Switzerland",
      period: "2013 - 2016",
      description:
        "Foundation in computer science fundamentals with emphasis on software engineering and mathematics.",
      achievements: [
        "Graduated Magna Cum Laude",
        "President of Programming Club",
        "Winner of Annual Hackathon 2015",
        "Published research paper on optimization algorithms",
      ],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-MB",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-MB",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-MB",
    },
  ];

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-blue-50/30 via-slate-50 to-violet-50/30 dark:from-blue-950/30 dark:via-slate-900 dark:to-violet-950/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full animate-float" />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 bg-violet-500/10 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              Professional Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-slate-900 dark:text-white">
              My{" "}
              <span
                className="fancy-title cursor-pointer"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={getFancyColorsStyle(isHover)}
              >
                Career Story
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
              A journey through innovation, learning, and creating magical
              solutions that make a difference.
            </p>

            {/* Contact Button */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white font-semibold"
              >
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(personalInfo.contactEmailSubject)}`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Experience */}
            {activeTab === "experience" && (
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <Card
                    key={index}
                    className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                  >
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {job.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mt-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{job.company}</span>
                            <span>•</span>
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-primary/20 text-primary"
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            {job.period}
                          </Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>

                      <div>
                        <h4 className="font-medium mb-3 text-primary">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3 text-primary">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-primary/30 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                  >
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mt-2">
                            <GraduationCap className="h-4 w-4" />
                            <span className="font-medium">{edu.school}</span>
                            <span>•</span>
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary"
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h4 className="font-medium mb-3 text-primary">
                          Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Trophy className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Certifications */}
            {activeTab === "certifications" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="group border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-full w-fit mx-auto">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {cert.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary"
                        >
                          {cert.date}
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
