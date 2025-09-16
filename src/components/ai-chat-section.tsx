"use client";

import {
  Bot,
  Code,
  RotateCcw,
  Send,
  Sparkles,
  Square,
  User,
} from "lucide-react";
import type React from "react";
import type { JSX } from "react";
import { useEffect, useRef, useState } from "react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import { cn } from "@/src/lib/utils";
import { generateSystemPrompt } from "@/src/utils/system-prompt";
import { defaultTone, toneOptions } from "@/src/utils/tone-config";

import { getFancyColorsStyle } from "./colorPalette";
import { FormattedMessage } from "./ui/formatted-message";

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

export function AIChatSection(): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [resetClickCount, setResetClickCount] = useState(0);
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);
  const [messages, setMessages] =
    useState<StoredMessage[]>(getDefaultMessages());
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTone, setSelectedTone] = useState(defaultTone);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);
  const [loadingText, setLoadingText] = useState("Thinking...");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const loadingIntervalRef = useRef<number | null>(null);

  // Funny loading messages that get progressively more concerning
  const loadingMessages = [
    "Thinking...",
    "Processing your request...",
    "Consulting the digital archives...",
    "Asking Max's brain for permission...",
    "Decoding professional achievements...",
    "Still thinking... this is a good question!",
    "Hmm, let me think harder...",
    "Calculating the perfect response...",
    "This is taking longer than expected...",
    "Did you break me? Just kidding, still working...",
    "Okay, this is getting embarrassing...",
    "I'm definitely overthinking this now...",
    "Maybe I should have paid attention in AI school...",
    "Is this thing on? *taps microphone*",
    "I'm not stuck, you're stuck!",
    "Calling tech support... just kidding, still processing...",
    "Error 404: Patience not found. Still working though!",
    "I promise I'm not just staring at the wall...",
    "This is fine. Everything is fine. 🔥",
    "At this point I'm just shutting down... 🔥",
    "At this point I'm just shutting down..🔥🔥",
    "At this point I'm just shutting down🔥🔥",
    "At this point I'm just shutting do🔥🔥",
    "At this point I'm just shutting 🔥🔥",
    "At this point I'm just shuttin🔥🔥",
    "At this point I'm just shutt🔥🔥",
    "At this point I'm just shu🔥🔥",
    "At this point I'm just s🔥🔥",
    "At this point I'm just🔥🔥",
    "At this point I'm ju🔥🔥",
    "At this point I'm 🔥🔥",
    "At this point I'🔥🔥",
    "At this point 🔥🔥",
    "At this poin🔥🔥",
    "At this po🔥🔥",
    "At this 🔥🔥",
    "At thi🔥🔥",
    "At t🔥🔥",
    "At🔥🔥",
    "🔥🔥",
    "🔥",
    "",
  ];

  // Custom chat functions
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSubmit(e);
    }
  };

  const startLoadingAnimation = (): void => {
    setLoadingText(loadingMessages[0]);

    let messageIndex = 0;
    loadingIntervalRef.current = window.setInterval(() => {
      messageIndex++;
      if (messageIndex < loadingMessages.length) {
        setLoadingText(loadingMessages[messageIndex]);
      } else {
        // After all messages, cycle through the last few funny ones
        const funnyMessages = loadingMessages.slice(-5);
        setLoadingText(funnyMessages[messageIndex % funnyMessages.length]);
      }
    }, 2000); // Change message every 2 seconds
  };

  const stopLoadingAnimation = (): void => {
    if (loadingIntervalRef.current) {
      clearInterval(loadingIntervalRef.current);
      loadingIntervalRef.current = null;
    }
    setLoadingText("Thinking...");
  };

  const handleStop = (): void => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
      setIsLoading(false);
      stopLoadingAnimation();
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!input.trim() || isLoading) {
      return;
    }

    const userMessage: StoredMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    startLoadingAnimation();

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          tone: selectedTone,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        return;
      }

      const reader = response.body?.getReader();
      if (!reader) {
        return;
      }

      const assistantMessage: StoredMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      };

      const messagesWithAssistant = [...newMessages, assistantMessage];
      setMessages(messagesWithAssistant);

      let fullContent = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        const chunk = new TextDecoder().decode(value);
        fullContent += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessage.id
              ? { ...msg, content: fullContent }
              : msg,
          ),
        );
      }

      // Save to localStorage
      const finalMessages = messagesWithAssistant.map((msg) =>
        msg.id === assistantMessage.id ? { ...msg, content: fullContent } : msg,
      );
      saveMessagesToStorage(finalMessages);
    } catch (error) {
      // Handle abort error (user clicked stop)
      if (error instanceof Error && error.name === "AbortError") {
        // Keep the partial response if any
        return;
      }
      // Remove the user message on other errors
      setMessages(messages);
    } finally {
      setIsLoading(false);
      setAbortController(null);
      stopLoadingAnimation();
    }
  };

  useEffect(() => {
    setMounted(true);
    // Load messages from localStorage after component mounts
    const storedMessages = loadMessagesFromStorage();
    if (storedMessages.length > 0) {
      setMessages(storedMessages);
    }

    // Cleanup loading animation on unmount
    return (): void => {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    };
  }, []);

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
  }, [messages]); // Auto-scroll when messages change

  // Fun 5-click reset confirmation
  const resetMessages = [
    "🤔 Are you sure you want to reset?",
    "🤨 Really? We were having such a nice chat!",
    "😅 Come on, give me one more chance!",
    "😢 This is your last warning... I'll miss our conversation!",
    "💥 Fine! Resetting... but I'll remember this betrayal! 😤",
  ];

  const handleResetClick = (): void => {
    if (resetClickCount < 4) {
      setResetClickCount(resetClickCount + 1);
    } else {
      // Actually reset on the 5th click
      clearMessagesFromStorage();
      setMessages(getDefaultMessages());
      setResetClickCount(0);
    }
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
    setInput(question);
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
            className="shadow-2xl border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative w-full max-w-none"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {/* Sticky Reset Button */}
            {mounted && messages.length > 1 && (
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetClick}
                  className={cn(
                    "text-xs transition-all duration-300 ease-in-out whitespace-nowrap",
                    resetClickCount > 0 &&
                      " bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
                  )}
                  title={
                    resetClickCount > 0
                      ? resetMessages[resetClickCount]
                      : "Reset chat and clear history"
                  }
                >
                  <RotateCcw className="h-3 w-3 mr-1" />
                  {resetClickCount === 0
                    ? "Reset"
                    : resetMessages[resetClickCount]}
                </Button>
              </div>
            )}

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className="h-96 overflow-y-auto p-4 sm:p-6 pt-16 space-y-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3 max-w-[95%] sm:max-w-[80%]",
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
                        {message.content}
                      </div>
                    ) : (
                      <FormattedMessage content={message.content || ""} />
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[95%] sm:max-w-[80%] mr-auto">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
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
                      <span className="text-sm italic transition-all duration-500">
                        {loadingText}
                      </span>
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
            <div className="border-t border-border/50 p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Input Container with visual border styling */}
                <div className="border border-border/50 rounded-xl bg-background focus-within:border-primary transition-colors">
                  {/* Textarea */}
                  <Textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything about Max's work..."
                    disabled={isLoading}
                    className="min-h-[80px] max-h-[200px] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-t-xl"
                    rows={3}
                  />

                  {/* Controls Bar - Below input, inside the container */}
                  <div className="flex items-center justify-between p-3 border-t border-border/30 bg-muted/20 rounded-b-xl">
                    {/* Left side - Tone Selector */}
                    <Select
                      value={selectedTone}
                      onValueChange={setSelectedTone}
                    >
                      <SelectTrigger className="w-[160px] h-8 border-0 bg-transparent hover:bg-muted/50 focus:ring-0 focus:ring-offset-0 text-sm">
                        <SelectValue>
                          <span className="flex items-center gap-2">
                            <span className="text-base">
                              {
                                toneOptions.find((t) => t.id === selectedTone)
                                  ?.emoji
                              }
                            </span>
                            <span className="font-medium">
                              {
                                toneOptions.find((t) => t.id === selectedTone)
                                  ?.name
                              }
                            </span>
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {toneOptions.map((tone) => (
                          <SelectItem key={tone.id} value={tone.id}>
                            <span className="flex items-center gap-3">
                              <span className="text-base">{tone.emoji}</span>
                              <div className="flex flex-col">
                                <span className="font-medium">{tone.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  {tone.description}
                                </span>
                              </div>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Right side - Action buttons */}
                    <div className="flex items-center gap-2">
                      {/* System Prompt Button */}
                      <Dialog
                        open={showSystemPrompt}
                        onOpenChange={setShowSystemPrompt}
                      >
                        <DialogTrigger asChild>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-muted/50"
                            title="View system prompt"
                          >
                            <Code className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>AI System Prompt</DialogTitle>
                            <DialogDescription>
                              This is the comprehensive system prompt that
                              guides the AI assistant's responses about Max's
                              professional background. Currently using{" "}
                              <Badge variant="secondary" className="ml-1">
                                {
                                  toneOptions.find((t) => t.id === selectedTone)
                                    ?.emoji
                                }{" "}
                                {
                                  toneOptions.find((t) => t.id === selectedTone)
                                    ?.name
                                }
                              </Badge>{" "}
                              tone.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
                              {generateSystemPrompt(selectedTone)}
                            </pre>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Send/Stop Button */}
                      <Button
                        type="submit"
                        disabled={!input.trim() && !isLoading}
                        size="sm"
                        onClick={isLoading ? handleStop : undefined}
                        className="h-8 w-8 p-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                      >
                        {isLoading ? (
                          <Square className="h-4 w-4" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Card>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/50 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <p className="font-medium mb-1">🔒 Privacy Notice</p>
                <p>
                  Chats are stored locally in your browser only. I use{" "}
                  <a
                    href="https://openrouter.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    OpenRouter
                  </a>{" "}
                  for AI responses - they may process your messages but I don't
                  see them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
