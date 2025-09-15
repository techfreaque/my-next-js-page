"use client";

import { useChat } from "@ai-sdk/react";
import {
  Bot,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { getFancyColorsStyle } from "./colorPalette";
import { FormattedMessage } from "./formatted-message";

// localStorage utilities
const CHAT_STORAGE_KEY = "max-ai-chat-messages";

interface StoredMessage {
  id: string;
  role: "assistant" | "user" | "system" | "data";
  content: string;
}

const saveMessagesToStorage = (messages: StoredMessage[]): void => {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    // Storage errors are expected in some environments
    void error;
  }
};

const loadMessagesFromStorage = (): StoredMessage[] => {
  try {
    if (typeof window === "undefined") {
      return [];
    }
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as StoredMessage[]) : [];
  } catch (error) {
    // Storage errors are expected in some environments
    void error;
    return [];
  }
};

const clearMessagesFromStorage = (): void => {
  try {
    localStorage.removeItem(CHAT_STORAGE_KEY);
  } catch (error) {
    // Storage errors are expected in some environments
    void error;
  }
};

const getDefaultMessages = (): StoredMessage[] => {
  return [
    {
      id: "welcome",
      role: "assistant" as const,
      content: `## Hi there! 👋

I'm **Max's AI assistant** with comprehensive knowledge about his background, skills, and experience.

Feel free to ask me anything about:
- His **13+ years** of development experience
- **Technical expertise** and projects
- **Leadership roles** and achievements
- **Professional journey** and career highlights

Let's chat! 🚀`,
    },
  ];
};

const getInitialMessages = (): StoredMessage[] => {
  // Always return default messages for SSR consistency
  // We'll load from storage after component mounts
  return getDefaultMessages();
};

export function AIChatSection(): React.ReactElement {
  const [isHover, setIsHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    setMessages,
  } = useChat({
    api: "/api/chat",
    streamProtocol: "text",
    initialMessages: getInitialMessages(),
  });

  const isLoading = status === "streaming" || status === "submitted";

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    // Load messages from localStorage after component mounts
    const storedMessages = loadMessagesFromStorage();
    if (storedMessages.length > 0) {
      setMessages(storedMessages);
    }
  }, [setMessages]);

  // Auto-scroll to bottom when new messages arrive or content streams in
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      // Small delay to ensure content is rendered, especially for streaming messages
      const timeoutId = setTimeout(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }, 50); // Reduced delay for more responsive streaming

      return (): void => clearTimeout(timeoutId);
    }
  }, [messages, status]); // Added status to trigger scroll during streaming

  // Save messages to localStorage when streaming is done
  useEffect(() => {
    if (status === "ready" && messages.length > 0) {
      saveMessagesToStorage(messages);
    }
  }, [status, messages]);

  // Reset chat function
  const resetChat = (): void => {
    clearMessagesFromStorage();
    setMessages(getDefaultMessages());
  };

  const suggestedQuestions = [
    "What's Max's background?",
    "Tell me about his recent role at Sovendus",
    "What technologies does he specialize in?",
    "Show me his key projects",
    "What makes him unique as a developer?",
    "Is he available for new opportunities?",
    "Tell me more about his AI and trading experience",
    "What's his leadership experience?",
  ];

  const handleSuggestionClick = (question: string): void => {
    handleInputChange({
      target: { value: question },
    } as React.ChangeEvent<HTMLInputElement>);
    inputRef.current?.focus();
  };

  return (
    <section
      id="chat"
      className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/30 dark:from-slate-900 dark:via-indigo-950/30 dark:to-violet-950/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float" />
      <div
        className="absolute bottom-10 right-10 w-16 h-16 bg-violet-500/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              AI Assistant
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white text-balance mb-4">
              Chat with My{" "}
              <span
                className="fancy-title cursor-pointer"
                style={getFancyColorsStyle(isHover)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                AI Assistant
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-balance max-w-2xl mx-auto">
              Ask anything about my experience, skills, projects, or
              professional journey. My AI assistant has comprehensive knowledge
              about my work and can help answer your questions!
            </p>
          </div>

          {/* Chat Interface */}
          <Card
            className="shadow-2xl border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <CardHeader className="border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg text-slate-900 dark:text-white">
                  <MessageCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Chat Interface
                </CardTitle>
                {mounted && messages.length > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetChat}
                    className="text-xs"
                    title="Reset chat and clear history"
                  >
                    <RotateCcw className="h-3 w-3 mr-1" />
                    Reset
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div
                ref={messagesContainerRef}
                className="h-96 overflow-y-auto p-6 space-y-4"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3 max-w-[80%]",
                      message.role === "user"
                        ? "ml-auto flex-row-reverse"
                        : "mr-auto",
                    )}
                  >
                    <div
                      className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground",
                      )}
                    >
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-3",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted",
                      )}
                    >
                      {message.role === "user" ? (
                        <div className="text-sm leading-relaxed text-primary-foreground">
                          {message.parts
                            ? message.parts.map((part, index) =>
                                part.type === "text" ? (
                                  <span key={index}>{part.text}</span>
                                ) : null,
                              )
                            : message.content}
                        </div>
                      ) : (
                        <FormattedMessage
                          content={
                            message.parts
                              ? message.parts
                                  .filter((part) => part.type === "text")
                                  .map((part) => part.text)
                                  .join("")
                              : message.content || ""
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 max-w-[80%] mr-auto">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-3 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Try asking:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {suggestedQuestions.slice(0, 6).map((question, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary/20 transition-colors text-xs py-2 px-3 justify-start"
                        onClick={() => handleSuggestionClick(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="border-t border-border/50 p-6">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything about Max's work..."
                    disabled={isLoading}
                    className="flex-1 bg-background border-border/50 focus:border-primary"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
