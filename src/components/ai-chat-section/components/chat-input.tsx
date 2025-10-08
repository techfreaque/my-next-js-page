import { Textarea } from "components/ui/textarea";
import type React from "react";
import type { JSX } from "react";
import { toneOptions } from "utils/tone-config";

import { useAIChatContext } from "../AIChatContext";
import { ChatSubmitButton } from "./chat-submit-button";
import { ModelSelector } from "./model-selector";
import { PrivacyNotice } from "./privacy-notice";
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
    setMessages,
    messages,
  } = useAIChatContext();

  return (
    <div className="px-2 sm:px-6 md:px-8 pt-0 pb-4 sm:pb-6 rounded-b-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border border-border/20 rounded-xl bg-background focus-within:border-border/40 transition-all duration-200">
          <Textarea
            ref={ref}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Max's work..."
            disabled={isLoading}
          />
          {/* Controls Bar - Below input, inside the container */}
          <div className="p-4 border-t border-border/10 bg-background/10 rounded-b-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-2">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <ModelSelector
                  disabled={isLoading}
                  className="w-full md:w-[210px]"
                />
                <ToneSelector
                  disabled={isLoading}
                  className="w-full md:w-[170px]"
                />
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between md:justify-end gap-2">
                {messages?.length > 1 && (
                  <ResetChatButton setMessages={setMessages} />
                )}

                <SystemPromptModal
                  selectedTone={selectedTone}
                  toneOptions={toneOptions}
                />

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

      <PrivacyNotice />
    </div>
  );
}
