import { Textarea } from "components/ui/textarea";
import { Sparkles } from "lucide-react";
import type React from "react";
import type { JSX } from "react";
import { toneOptions } from "utils/tone-config";

import { useAIChatContext } from "../contexts/AIChatContext";
import { ChatSubmitButton } from "./chat-submit-button";
import { ModelSelector } from "./model-selector";
import { ResetChatButton } from "./reset-chat-button";
import { SystemPromptModal } from "./system-prompt-modal";
import { ToneSelector } from "./tone-selector";

export function ChatInput({
  ref,
}: {
  ref: React.RefObject<HTMLTextAreaElement | null>;
}): JSX.Element {
  const {
    input,
    isLoading,
    selectedTone,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
    handleStop,
    clearMessagesFromStorage,
    setMessages,
    getDefaultMessages,
    messages,
  } = useAIChatContext();

  return (
    <div className="pt-0 pb-4 sm:pb-6 rounded-b-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Container with clean navbar-style border */}
        <div className="border border-border/20 rounded-xl bg-background focus-within:border-border/40 transition-all duration-200">
          {/* Textarea */}
          <Textarea
            ref={ref}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Max's work..."
            disabled={isLoading}
            className="min-h-[100px] max-h-[200px] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-t-xl px-4 py-4 text-sm"
            rows={3}
          />

          {/* Controls Bar - Below input, inside the container */}
          <div className="p-4 border-t border-border/10 bg-background/10 rounded-b-xl">
            {/* Desktop: Single row with justify-between */}
            <div className="hidden sm:flex items-center justify-between">
              {/* Left side - Model and Tone Selectors */}
              <div className="flex items-center gap-2">
                <ModelSelector disabled={isLoading} className="w-[200px]" />
                <ToneSelector disabled={isLoading} className="w-[170px]" />
              </div>

              {/* Right side - Action buttons */}
              <div className="flex gap-2">
                {/* Reset Button */}
                {messages?.length > 1 && (
                  <ResetChatButton
                    clearMessagesFromStorage={clearMessagesFromStorage}
                    setMessages={setMessages}
                    getDefaultMessages={getDefaultMessages}
                  />
                )}

                {/* System Prompt Button */}
                <SystemPromptModal
                  selectedTone={selectedTone}
                  toneOptions={toneOptions}
                />

                {/* Send/Stop Button */}
                <ChatSubmitButton
                  chatInput={input}
                  isLoading={isLoading}
                  onStop={handleStop}
                />
              </div>
            </div>

            {/* Mobile: Two rows with proper spacing */}
            <div className="sm:hidden space-y-3">
              <div className="flex flex-col gap-2">
                <ModelSelector disabled={isLoading} className="w-full" />
                <ToneSelector disabled={isLoading} className="w-full" />
              </div>

              {/* Second row - Action buttons */}
              <div className="flex items-center justify-between gap-2">
                {/* Reset Button */}
                {messages?.length > 1 && (
                  <ResetChatButton
                    clearMessagesFromStorage={clearMessagesFromStorage}
                    setMessages={setMessages}
                    getDefaultMessages={getDefaultMessages}
                  />
                )}
                {/* System Prompt Button */}
                <SystemPromptModal
                  selectedTone={selectedTone}
                  toneOptions={toneOptions}
                />

                {/* Send/Stop Button */}
                <ChatSubmitButton
                  chatInput={input}
                  isLoading={isLoading}
                  onStop={handleStop}
                />
              </div>
            </div>
          </div>
        </div>
      </form>

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
              for AI responses - they may process your messages but I don't see
              them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
