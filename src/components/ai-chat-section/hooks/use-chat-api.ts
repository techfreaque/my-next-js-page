import type { ChatRequest, Message } from "lib/api-validation";
import type React from "react";
import { useState } from "react";
import type { ModelId } from "utils/model-config";
import type { ToneId } from "utils/tone-config";

import type { StoredMessage } from "./useChatStorage";

/**
 * Props interface for the useChatApi hook.
 * Defines all required dependencies for API functionality.
 */
interface UseChatApiProps {
  /** Current chat messages array */
  messages: StoredMessage[];
  /** Function to update messages state */
  setMessages: React.Dispatch<React.SetStateAction<StoredMessage[]>>;
  /** Function to persist messages to localStorage */
  saveMessagesToStorage: (messages: StoredMessage[]) => void;
  /** Function to start loading animation */
  startLoadingAnimation: () => void;
  /** Function to stop loading animation */
  stopLoadingAnimation: () => void;
  /** Function to update loading state */
  setIsLoading: (loading: boolean) => void;
}

/**
 * Custom hook for managing chat API interactions.
 * Handles message submission, streaming responses, and request abortion.
 *
 * @param props - Configuration object with required dependencies
 * @returns Object with API interaction methods and state
 */
export function useChatApi({
  messages,
  setMessages,
  saveMessagesToStorage,
  startLoadingAnimation,
  stopLoadingAnimation,
  setIsLoading,
}: UseChatApiProps): {
  /** Current abort controller for stopping requests */
  abortController: AbortController | null;
  /** Function to submit a new chat message */
  handleSubmit: (
    e: React.FormEvent | undefined,
    input: string,
    selectedTone: ToneId,
    selectedModel: ModelId,
    setInput: (input: string) => void,
    skipUserMessage?: boolean,
    messagesOverride?: StoredMessage[],
  ) => Promise<void>;
  /** Function to stop ongoing API requests */
  handleStop: () => void;
} {
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  /**
   * Stops the current API request if one is in progress.
   * Cleans up the abort controller and resets loading states.
   */
  const handleStop = (): void => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
      setIsLoading(false);
      stopLoadingAnimation();
    }
  };

  const handleSubmit = async (
    e: React.FormEvent | undefined,
    input: string,
    selectedTone: ToneId,
    selectedModel: ModelId,
    setInput: (input: string) => void,
    skipUserMessage = false,
    messagesOverride?: StoredMessage[],
  ): Promise<void> => {
    e?.preventDefault();

    if (!input.trim()) {
      return;
    }

    let newMessages: StoredMessage[];

    if (skipUserMessage) {
      // For edits: use provided messages override (already cleaned by saveEditedMessage)
      newMessages = messagesOverride || messages;
    } else {
      // For new messages: add user message
      const userMessage: StoredMessage = {
        id: Date.now().toString(),
        role: "user",
        content: input.trim(),
        timestamp: Date.now(),
      };

      // Remove any existing error messages AND incomplete assistant messages before adding new user message
      const cleanMessages = messages.filter(
        (msg) =>
          msg.role !== "error" &&
          !(
            msg.role === "assistant" &&
            (!msg.content || msg.content.trim().length === 0)
          ),
      );
      newMessages = [...cleanMessages, userMessage];
      setMessages(newMessages);
      setInput("");
    }

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
          messages: newMessages
            .filter(
              (msg) =>
                // Only include valid roles and non-empty content
                (msg.role === "user" ||
                  msg.role === "assistant" ||
                  msg.role === "system") &&
                msg.content &&
                msg.content.trim().length > 0,
            )
            .map(
              (msg) =>
                ({
                  role: msg.role as Message["role"],
                  content: msg.content.trim(),
                }) satisfies Message,
            ),
          tone: selectedTone,
          model: selectedModel,
        } satisfies ChatRequest),
        signal: controller.signal,
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = "Failed to get response from AI";
        let errorCode = response.status.toString();

        try {
          const errorData = JSON.parse(errorText) as {
            error?: { message?: string; code?: string };
            message?: string;
            code?: string;
          };
          errorMessage =
            errorData.error?.message || errorData.message || errorMessage;
          errorCode = errorData.error?.code || errorData.code || errorCode;
        } catch {
          // If parsing fails, use the raw text or default message
          errorMessage = errorText || errorMessage;
        }

        // Add error message directly to current messages state
        setMessages((currentMessages) => {
          // Remove any existing errors and incomplete assistant messages
          const cleanMessages = currentMessages.filter(
            (msg) =>
              msg.role !== "error" &&
              !(msg.role === "assistant" && !msg.content?.trim()),
          );

          const errorMsg: StoredMessage = {
            id: `error-${Date.now()}`,
            role: "error",
            content: errorMessage,
            timestamp: Date.now(),
            error: {
              type: "API_ERROR",
              message: errorMessage,
              code: errorCode,
            },
          };

          const updatedMessages = [...cleanMessages, errorMsg];
          saveMessagesToStorage(updatedMessages);
          return updatedMessages;
        });
        return;
      }

      const reader = response.body?.getReader();
      if (!reader) {
        // ATOMIC: Add error message directly
        setMessages((currentMessages) => {
          const cleanMessages = currentMessages.filter(
            (msg) =>
              msg.role !== "error" &&
              !(msg.role === "assistant" && !msg.content?.trim()),
          );

          const errorMsg: StoredMessage = {
            id: `error-${Date.now()}`,
            role: "error",
            content: "Unable to read response stream",
            timestamp: Date.now(),
            error: {
              type: "STREAM_ERROR",
              message: "Unable to read response stream",
              code: "NO_READER",
            },
          };

          const updatedMessages = [...cleanMessages, errorMsg];
          saveMessagesToStorage(updatedMessages);
          return updatedMessages;
        });
        return;
      }

      const assistantMessage: StoredMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
        timestamp: Date.now(),
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

      // Handle other errors
      let errorMessage = "An unexpected error occurred";
      let errorCode = "UNKNOWN_ERROR";

      if (error instanceof Error) {
        errorMessage = error.message;
        errorCode = error.name;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      // ATOMIC: Add error message directly
      setMessages((currentMessages) => {
        const cleanMessages = currentMessages.filter(
          (msg) =>
            msg.role !== "error" &&
            !(msg.role === "assistant" && !msg.content?.trim()),
        );

        const errorMsg: StoredMessage = {
          id: `error-${Date.now()}`,
          role: "error",
          content: errorMessage,
          timestamp: Date.now(),
          error: {
            type: "REQUEST_ERROR",
            message: errorMessage,
            code: errorCode,
          },
        };

        const updatedMessages = [...cleanMessages, errorMsg];
        saveMessagesToStorage(updatedMessages);
        return updatedMessages;
      });
    } finally {
      setIsLoading(false);
      setAbortController(null);
      stopLoadingAnimation();
    }
  };

  return {
    abortController,
    handleSubmit,
    handleStop,
  };
}
