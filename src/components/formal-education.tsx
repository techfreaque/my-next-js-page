"use client";

import { Badge } from "components/ui/badge";
import { Card, CardContent, CardTitle } from "components/ui/card";
import { Title } from "components/ui/title";
import { formalEducation } from "me/education";
import type { JSX } from "react";
import React, { useState } from "react";

export function FormalEducationSection(): JSX.Element {
  const [isTitleHover, setIsTitleHover] = useState(false);

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Formal Education */}
        <div>
          <div className="text-center mb-8">
            <Title
              level={3}
              // variant="secondary"
              isHover={isTitleHover}
              className="text-3xl font-bold mb-4"
            >
              {formalEducation.category}
            </Title>
            <p className="text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
              {formalEducation.subTitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {formalEducation.items.map((item, index) => (
              <Card
                key={index}
                colorScheme="violet"
                onMouseEnter={() => setIsTitleHover(true)}
                onMouseLeave={() => setIsTitleHover(false)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {item.degree}
                      </CardTitle>
                      <p className="text-lg text-slate-700 dark:text-slate-300 mb-1">
                        {item.institution}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {item.focus}
                      </p>
                      {"achievements" in item && item.achievements && (
                        <ul className="space-y-1">
                          {item.achievements.map(
                            (achievement: string, idx: number) => (
                              <li
                                key={idx}
                                className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                              >
                                <span className="text-purple-500 mt-1">•</span>
                                {achievement}
                              </li>
                            ),
                          )}
                        </ul>
                      )}
                    </div>
                    <Badge
                      variant="default"
                      className="w-fit hover:scale-105 transition-all duration-200"
                    >
                      {item.period}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
