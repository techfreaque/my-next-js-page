import { Badge } from "components/ui/badge";
import type { JSX } from "react";
import React from "react";

import { useAIChatContext } from "../AIChatContext";

// Suggested questions
const suggestedQuestions = [
  "What's Max's background?",
  "Tell me about his recent role at Sovendus",
  "What technologies does he specialize in?",
  "Show me his key projects",
  "What makes him unique as a developer?",
  "What's his experience with AI and machine learning?",
];

export function SuggestedQuestions(): JSX.Element {
  const { setInput, inputRef } = useAIChatContext();

  const onQuestionClick = (question: string): void => {
    setInput(question);
    inputRef.current?.focus();
  };

  return (
    <div className="px-2 sm:px-6 md:px-8 pb-6 mt-[-70px]">
      <p className="text-sm text-muted-foreground mb-4 font-medium flex items-center gap-2">
        <span className="text-lg">💬</span>
        Try asking:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {suggestedQuestions.slice(0, 6).map((question, index) => (
          <Badge
            key={index}
            variant="sectionBadge"
            className="word-break-all cursor-pointer rounded-md"
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </Badge>
        ))}
      </div>
    </div>
  );
}
