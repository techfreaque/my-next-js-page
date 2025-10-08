import { SiGithub } from "@icons-pack/react-simple-icons";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Project } from "me/projects";
import { Category } from "me/projects";
import type { JSX } from "react";
import React from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  isHovered: boolean;
  onToggle: (index: number) => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

export function ProjectCard({
  project,
  index,
  isExpanded,
  isHovered,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps): JSX.Element {
  const maxPreviewTechs = 4;
  const maxPreviewAchievements = 2;

  return (
    <Card
      key={index}
      colorScheme="cyan"
      className="cursor-pointer"
      onClick={() => onToggle(index)}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
            {React.createElement(project.icon, {
              className: "h-5 w-5 text-primary",
            })}
          </div>
          <div className="flex items-center gap-2">
            {project.categories.includes(Category.FEATURED) && (
              <Badge
                variant="default"
                className="bg-primary/20 text-primary text-xs"
              >
                Featured
              </Badge>
            )}
            <div
              className={`transition-all duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <ChevronDown
                className={`h-5 w-5 transition-colors duration-300 ${
                  isHovered ? "text-cyan-500" : "text-slate-400"
                }`}
              />
            </div>
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div>
          <div className="flex flex-wrap gap-1">
            {(isExpanded
              ? project.technologies
              : project.technologies.slice(0, maxPreviewTechs)
            ).map((tech) => (
              <Badge key={tech} variant="default" className="text-xs">
                {tech}
              </Badge>
            ))}
            {!isExpanded && project.technologies.length > maxPreviewTechs && (
              <Badge variant="default" className="text-xs">
                +{project.technologies.length - maxPreviewTechs}
              </Badge>
            )}
          </div>
        </div>

        {/* Key Highlights */}
        {isExpanded && (
          <div className="animate-in slide-in-from-top-2 duration-500">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-xs text-muted-foreground flex items-start"
                >
                  <span className="text-cyan-500 mr-2 mt-0.5">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!isExpanded && project.achievements.length > 0 && (
          <div>
            <ul className="space-y-1">
              {project.achievements
                .slice(0, maxPreviewAchievements)
                .map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-muted-foreground flex items-start"
                  >
                    <span className="text-cyan-500 mr-2 mt-0.5">•</span>
                    {achievement}
                  </li>
                ))}
            </ul>
            {project.achievements.length > maxPreviewAchievements && (
              <p className="text-xs text-muted-foreground mt-1 italic">
                +{project.achievements.length - maxPreviewAchievements} more
                achievements...
              </p>
            )}
          </div>
        )}

        {/* Action Buttons - Only visible when expanded */}
        {isExpanded && (
          <>
            {project.url || project.github ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.url && (
                  <Button
                    variant="rainbow"
                    size="sm"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span className="text-xs">View Live</span>
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button
                    variant="rainbow"
                    size="sm"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <SiGithub className="h-3 w-3" />
                      <span className="text-xs">GitHub</span>
                    </a>
                  </Button>
                )}
              </div>
            ) : (
              <div className="pt-2">
                <Button
                  variant="rainbow"
                  size="sm"
                  className="w-full justify-center py-2 text-xs"
                >
                  Status: {project.status}
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
