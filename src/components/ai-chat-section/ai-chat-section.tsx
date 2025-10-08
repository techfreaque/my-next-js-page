"use client";

import { Badge } from "components/ui/badge";
import { Card } from "components/ui/card";
import { Title } from "components/ui/title";
import { createRainbowTextStyle } from "lib/rainbow-style";
import { Sparkles } from "lucide-react";
import type React from "react";
import type { JSX } from "react";

import { AIChatProvider, useAIChatContext } from "./AIChatContext";
import { ChatInput } from "./components/chat-input";
import { ChatMessages } from "./components/chat-messages";
import { SuggestedQuestions } from "./components/suggested-questions";

function AIChatSectionInternal(): JSX.Element {
  const { messages, inputRef, setIsHover, isHover } = useAIChatContext();

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="sectionBadge" className="mb-4">
            <Sparkles className="h-4 w-4" />
            Because I can!
          </Badge>
          <Title level={2} useRainbow={false}>
            Chat with My{" "}
            <span style={createRainbowTextStyle(isHover, "primary")}>
              AI Assistant
            </span>
          </Title>
        </div>

        {/* Chat Interface */}
        <div className="max-w-5xl mx-auto">
          <Card
            setIsHover={setIsHover}
            colorScheme="blue"
            className="gap-0 py-0 relative shadow-2xl border border-border/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
          >
            <ChatMessages />

            {messages.length <= 1 && <SuggestedQuestions />}

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
