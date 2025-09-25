import { Badge } from "components/ui/badge";
import type { JSX } from "react";
import React from "react";

import { useAIChatContext } from "../contexts/AIChatContext";

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
  const { setInput, selectedTone, selectedModel, handleSubmit, inputRef } =
    useAIChatContext();

  const onQuestionClick = async (question: string): Promise<void> => {
    setInput(question);
    await handleSubmit(question, selectedTone, selectedModel, () =>
      setInput(""),
    );
    inputRef.current?.focus();
  };

  return (
    <div className="pb-6">
      <p className="text-sm text-muted-foreground mb-4 font-medium flex items-center gap-2">
        <span className="text-lg">💬</span>
        Try asking:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {suggestedQuestions.slice(0, 6).map((question, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="word-break-all cursor-pointer hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200 text-xs py-3 px-4 justify-start border border-border/30 shadow-sm hover:shadow-md"
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </Badge>
        ))}
      </div>
    </div>
  );
}
