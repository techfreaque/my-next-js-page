"use client";

import { Badge } from "components/ui/badge";
import { Card } from "components/ui/card";
import { createRainbowTextStyle } from "lib/design-system";
import { Sparkles } from "lucide-react";
import type React from "react";
import type { JSX } from "react";

import { AIChatProvider, useAIChatContext } from "./AIChatContext";
import { ChatInput } from "./components/chat-input";
import { ChatMessages } from "./components/chat-messages";
import { SuggestedQuestions } from "./components/suggested-questions";

function AIChatSectionInternal(): JSX.Element {
  const { messages, messagesContainerRef, inputRef, setIsHover, isHover } =
    useAIChatContext();

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="sectionBadge" className="mb-4">
            <Sparkles className="h-4 w-4" />
            Because I can!
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white text-balance mb-4">
            Chat with My{" "}
            <span
              className="fancy-title cursor-pointer"
              style={createRainbowTextStyle(isHover, "primary")}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              AI Assistant
            </span>
          </h2>
        </div>

        {/* Chat Interface */}
        <div className="max-w-5xl mx-auto">
          <Card
            setIsHover={setIsHover}
            colorScheme="blue"
            className="gap-0 py-0 relative shadow-2xl border border-border/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
          >
            {/* Messages Area */}
            <ChatMessages ref={messagesContainerRef} />

            {/* Suggested Questions - Only show when no messages */}
            {messages.length <= 1 && <SuggestedQuestions />}

            {/* Chat Input */}
            <ChatInput ref={inputRef} />
          </Card>
        </div>
      </div>
    </div>
  );
}

// Main export component with context provider
export function AIChatSection(): JSX.Element {
  return (
    <AIChatProvider>
      <AIChatSectionInternal />
    </AIChatProvider>
  );
}
