import { Button } from "components/ui/button";
import { AlertTriangle, Copy, Edit, Trash2 } from "lucide-react";
import type { JSX } from "react";
import React, { useCallback, useEffect } from "react";

import { Markdown } from "../../ui/markdown";
import { useAIChatContext } from "../contexts/AIChatContext";
import { MessageEditor } from "./message-editor";

export function ChatMessages({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}): JSX.Element {
  const {
    messages,
    isLoading,
    loadingText,
    isHover,
    startEditingMessage,
    deleteMessageAndFollowing,
    saveEditedMessage,
    cancelEditingMessage,
    isEditing,
  } = useAIChatContext();

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = useCallback((): void => {
    if (!isEditing && ref?.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [isEditing, ref]);

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  return (
    <div className="h-[28rem] rounded-t-xl overflow-hidden">
      <div
        ref={ref}
        className="h-full overflow-y-auto py-4 sm:py-6 pt-8 pb-0 space-y-6 scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500/30 hover:scrollbar-thumb-blue-500/50 scrollbar-thumb-rounded-full"
      >
        {/* Top spacing */}
        <div className="h-4" />

        {messages.map((message) => (
          <div key={message.id} className="group mb-4">
            {message.role === "user" ? (
              /* User Message - Right aligned with proper navbar-style background */
              <div className="flex flex-col items-end">
                <div className="max-w-[85%]">
                  {isEditing === message.id ? (
                    <MessageEditor
                      message={message}
                      onSave={saveEditedMessage}
                      onCancel={cancelEditingMessage}
                    />
                  ) : (
                    <>
                      <div className="border-2 border-blue-500/50 bg-blue-500/10 rounded-xl px-4 py-3 shadow-lg">
                        <div className="text-sm leading-relaxed font-medium text-blue-600 dark:text-blue-400">
                          {message.content}
                        </div>
                      </div>

                      {/* Message Actions - Below message, right aligned but slightly inset */}
                      <div className="flex justify-end mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex gap-1">
                          <Button
                            variant="rainbow"
                            size="sm"
                            onClick={() => startEditingMessage(message.id)}
                            className="h-7 w-7 p-0"
                            title="Edit"
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="rainbow"
                            size="sm"
                            onClick={() =>
                              navigator.clipboard.writeText(message.content)
                            }
                            className="h-7 w-7 p-0"
                            title="Copy"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="rainbow"
                            size="sm"
                            onClick={() =>
                              deleteMessageAndFollowing(message.id)
                            }
                            className="h-7 w-7 p-0"
                            title="Delete"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : message.role === "error" ? (
              /* Error Message - Centered with clean styling */
              <div className="flex justify-center">
                <div className="max-w-[90%] bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 text-red-800 dark:text-red-200 rounded-xl px-4 py-3">
                  <div className="text-sm leading-relaxed">
                    <div className="font-medium mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Error
                    </div>
                    <div className="mb-2">{message.content}</div>
                    {message.error?.code && (
                      <div className="text-xs opacity-70 mt-2 px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded font-mono">
                        Code: {message.error.code}
                      </div>
                    )}
                  </div>

                  {/* Error message actions */}
                  <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button
                      variant="rainbow"
                      size="sm"
                      onClick={() => deleteMessageAndFollowing(message.id)}
                      className="h-7 w-7 p-0"
                      title="Delete"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* Assistant Message - Full width, no background, clean like navbar */
              <div className="w-full">
                <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                  <Markdown content={message.content || ""} isHover={isHover} />
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

        {/* Bottom spacing */}
        <div className="h-6" />
      </div>
    </div>
  );
}
