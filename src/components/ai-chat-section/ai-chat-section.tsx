"use client";

import { Card } from "components/ui/card";
import { createRainbowTextStyle } from "lib/design-system";
import { Sparkles } from "lucide-react";
import type React from "react";
import type { JSX } from "react";

import { ChatInput } from "./components/chat-input";
import { ChatMessages } from "./components/chat-messages";
import { SuggestedQuestions } from "./components/suggested-questions";
import { AIChatProvider, useAIChatContext } from "./contexts/AIChatContext";

function AIChatSectionInternal(): JSX.Element {
  const { messages, messagesContainerRef, inputRef, setIsHover, isHover } =
    useAIChatContext();

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Because I can!
          </div>
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
            className="gap-0 px-2 sm:px-6 md:px-8 py-0 relative shadow-2xl border border-border/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
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
