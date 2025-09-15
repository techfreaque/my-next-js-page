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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getFancyColorsStyle } from "./colorPalette";
import { contactEmailSubject, myEmailAddress } from "./constantsAboutMe";

export function ResumeSection(): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  const experience = [
    {
      title: "Integration Team Lead",
      company: "Sovendus",
      location: "Remote",
      period: "Sep 2023 - Sep 2025",
      type: "Full-time",
      description:
        "Led the integration team and revolutionized partner onboarding by building comprehensive developer tools and self-service solutions.",
      achievements: [
        "Built developer-hub.sovendus.com documentation platform (plugins and testing app are linked there)",
        "Created Sovendus testing app enabling self-diagnosis for 99% of onboarding issues",
        "Developed 20+ platform-specific plugins (Shopify, Magento, Shopware, Flutter, React Native, Kotlin, Swift)",
        "Implemented unified codebase architecture with platform-specific overrides",
        "Shifted support from reactive to proactive long-term solutions",
        "Left comprehensive documentation and maintainable foundation for successor",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Flutter",
        "React Native",
        "Kotlin",
        "Swift",
        "PHP",
        "Docker",
      ],
    },
    {
      title: "Full Stack Trading Bot Developer",
      company: "a42 trading solutions",
      location: "Remote",
      period: "Mar 2018 - Present",
      type: "Freelance",
      description:
        "Architected and implemented AI-driven trading systems with advanced pattern recognition and predictive modeling capabilities.",
      achievements: [
        "Architected AI-driven algorithms for real-time market analysis with advanced pattern recognition",
        "Revamped open-source trading bot libraries (ccxt, OctoBot) with cutting-edge AI capabilities",
        "Engineered intuitive platform integrating AI and data science methodologies",
        "Developed automated hedge fund with state-of-the-art AI-driven strategies",
      ],
      technologies: [
        "Python",
        "JavaScript",
        "React.js",
        "SQL",
        "Flask",
        "TensorFlow",
        "PyTorch",
        "WebSocket",
        "GraphQL",
        "REST API",
      ],
    },
    {
      title: "Business Support Engineer - Team Leader",
      company: "Samsung Switzerland",
      location: "Switzerland",
      period: "Sep 2018 - Sep 2020",
      type: "Full-time",
      description:
        "Led Swiss Business Tech Support Team, handling software troubleshooting and hardware repairs for Samsung's business product line.",
      achievements: [
        "Orchestrated and mentored highly skilled Swiss Business Tech Support Team",
        "Collaborated with global teams and developers for complex issue resolution",
        "Conducted advanced training courses on supported products and industry knowledge",
        "Implemented comprehensive training programs reducing escalations",
        "Achieved remarkable KPI improvements in resolution rate and response time",
      ],
      technologies: [
        "Python",
        "JavaScript",
        "React.js",
        "SQL",
        "REST API",
        "Git",
        "Docker",
      ],
    },
    {
      title: "Tech Support Engineer - Team Leader - Administrator",
      company: "netsepp KG, Hallein (now viybs.com)",
      location: "Austria",
      period: "Mar 2016 - Jan 2019",
      type: "Full-time",
      description:
        "Led transformative overhaul of internal business processes and workflows within ERP system while managing support engineering team.",
      achievements: [
        "Spearheaded transformative overhaul of internal business processes in ERP system",
        "Led proficient support engineering team for hardware/software solutions",
        "Crafted comprehensive technical documentation and training materials",
        "Delivered exceptional IT consultancy services to private customers and SMEs",
      ],
      technologies: [
        "Python",
        "JavaScript",
        "React.js",
        "SQL",
        "Flask",
        "Odoo",
        "Docker",
        "Git",
        "REST API",
      ],
    },
    {
      title: "Tech Support Engineer - Team Leader - Administrator",
      company: "techfreaque Salzburg (now notebook-repair-corner.at)",
      location: "Austria",
      period: "Aug 2013 - Sep 2016",
      type: "Full-time",
      description:
        "Engineered optimized internal infrastructure and guided skilled support team while managing diverse technological landscape.",
      achievements: [
        "Engineered optimized and robust internal infrastructure",
        "Guided and mentored skilled first and second-level support team",
        "Mastered configuration, maintenance, and repair of wide array of devices",
        "Authored detailed technical documentation and user manuals",
      ],
      technologies: [
        "ERP Systems",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "Bash",
        "PowerShell",
        "Python",
      ],
    },
    {
      title: "Tech Support Engineer - Team Leader - Administrator",
      company: "Expert Service, Salzburg (now notebook-repair-corner.at)",
      location: "Austria",
      period: "Mar 2013 - Aug 2013",
      type: "Full-time",
      description:
        "Spearheaded infrastructure development and led technical service team for diverse device repairs and support.",
      achievements: [
        "Spearheaded dynamic development of infrastructure and business process optimization",
        "Orchestrated planning and implementation of cutting-edge infrastructure for technical service shops",
        "Led proficient technical service team handling repairs for smartphones, tablets, computers, servers, and game consoles",
      ],
      technologies: [
        "Infrastructure Development",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "Docker",
        "Bash",
        "Python",
      ],
    },
    {
      title: "Tech Support Engineer - Team Leader - Administrator",
      company: "Kaya KG, Salzburg",
      location: "Austria",
      period: "Jan 2012 - Feb 2013",
      type: "Full-time",
      description:
        "Implemented robust ticket system and led website development while providing exceptional second-level support.",
      achievements: [
        "Innovatively implemented robust ticket system for streamlined issue tracking",
        "Led development of company's captivating website with modern design principles",
        "Provided exceptional second-level support through multiple channels",
        "Orchestrated installation, configuration, maintenance, and repair of various hardware and software",
      ],
      technologies: [
        "Ticket Systems",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "Bash",
        "Python",
      ],
    },
  ];

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
                  href={`mailto:${myEmailAddress}?subject=${encodeURIComponent(contactEmailSubject)}`}
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
