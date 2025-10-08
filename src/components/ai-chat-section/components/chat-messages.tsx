import { Button } from "components/ui/button";
import { Edit } from "lucide-react";
import type { JSX } from "react";
import React, { useCallback, useEffect } from "react";

import { Markdown } from "../../ui/markdown";
import { useAIChatContext } from "../AIChatContext";
import { ChatMessageError } from "./chat-message-error";
import { UserMessage } from "./chat-message-user";
import { CopyMessageButton } from "./copy-message-button";

export function ChatMessages(): JSX.Element {
  const {
    messages,
    isLoading,
    loadingText,
    isHover,
    startEditingMessage,
    isEditing,
    messagesContainerRef,
  } = useAIChatContext();

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = useCallback((): void => {
    if (!isEditing && messages.length > 1 && messagesContainerRef?.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [isEditing, messages.length, messagesContainerRef]);

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, isLoading]);

  return (
    <div className="h-[28rem] rounded-t-xl overflow-hidden">
      <div
        ref={messagesContainerRef}
        className="h-full overflow-y-auto py-4 sm:py-6 pt-8 pb-0 space-y-6 scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500/30 hover:scrollbar-thumb-blue-500/50 scrollbar-thumb-rounded-full"
      >
        <div className="px-4 sm:px-8 md:px-10 pt-2">
          {messages.map((message, index) => (
            <div key={message.id} className="group mb-4">
              {message.role === "user" ? (
                /* User Message - Right aligned with proper navbar-style background */
                <UserMessage message={message} />
              ) : message.role === "error" ? (
                /* Error Message - Centered with clean styling */
                <ChatMessageError message={message} />
              ) : (
                /* Assistant Message - Full width, no background */
                <div className="w-full">
                  <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                    <Markdown
                      content={message.content || ""}
                      isHover={isHover}
                    />
                    {/* Message Actions - Below message, right aligned but slightly inset */}
                    {index !== 0 && (
                      <div className="flex justify-end mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex gap-1">
                          <Button
                            variant="rainbow"
                            size="sm"
                            onClick={() =>
                              startEditingMessage(messages[index - 1].id)
                            }
                            className="h-7 w-7 p-0"
                            title="Edit"
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <CopyMessageButton content={message.content} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="group mb-4">
              <div className="w-full">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                  <span className="text-sm italic transition-all duration-500">
                    {loadingText}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
