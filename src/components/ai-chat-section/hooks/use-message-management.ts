import type { FormEvent } from "react";
import { useCallback } from "react";
import type { ModelId } from "utils/model-config";
import type { ToneId } from "utils/tone-config";

import type { StoredMessage } from "./useChatStorage";

interface UseMessageManagementProps {
  messages: StoredMessage[];
  setMessages: (messages: StoredMessage[]) => void;
  saveMessagesToStorage: (messages: StoredMessage[]) => void;
  handleSubmit: (
    e: FormEvent | undefined,
    input: string,
    selectedTone: ToneId,
    selectedModel: ModelId,
    setInput: (input: string) => void,
    skipUserMessage?: boolean,
    messagesOverride?: StoredMessage[],
  ) => Promise<void>;
  setIsEditing: (messageId: string | undefined) => void;
}

/**
 * Interface for message management actions.
 * Provides functions for deleting, editing, and error handling of messages.
 */
export interface MessageManagementActions {
  /** Delete a user message and all messages that follow it */
  deleteMessageAndFollowing: (messageId: string) => void;
  /** Start editing a message */
  startEditingMessage: (messageId: string) => void;
  /** Cancel editing a message */
  cancelEditingMessage: () => void;
  /** Save edited message and retry with new content and model */
  saveEditedMessage: (
    messageId: string,
    newContent: string,
    newTone: ToneId,
    newModel: ModelId,
  ) => Promise<void>;
  /** Add an error message to the chat */
  addErrorMessage: (error: {
    type: string;
    message: string;
    code?: string;
  }) => void;
}

/**
 * Custom hook for managing chat message operations.
 * Provides functions for deleting, editing, and error handling of messages.
 */
export function useMessageManagement({
  messages,
  setMessages,
  saveMessagesToStorage,
  handleSubmit,
  setIsEditing,
}: UseMessageManagementProps): MessageManagementActions {
  /**
   * Deletes a user message and all messages that follow it in the conversation.
   * For error messages, just deletes the error message itself.
   * Only works for user messages and error messages to maintain conversation integrity.
   */
  const deleteMessageAndFollowing = useCallback(
    (messageId: string): void => {
      const messageIndex = messages.findIndex((msg) => msg.id === messageId);
      if (messageIndex === -1) {
        return;
      }

      const messageToDelete = messages[messageIndex];

      if (messageToDelete.role === "error") {
        // For error messages, just remove the error message itself
        const updatedMessages = messages.filter((msg) => msg.id !== messageId);
        setMessages(updatedMessages);
        saveMessagesToStorage(updatedMessages);
        return;
      }

      if (messageToDelete.role === "user") {
        // For user messages, remove the message and all following messages
        const updatedMessages = messages.slice(0, messageIndex);
        setMessages(updatedMessages);
        saveMessagesToStorage(updatedMessages);
        return;
      }

      // Only user messages and error messages can be deleted
    },
    [messages, setMessages, saveMessagesToStorage],
  );

  /**
   * Starts editing mode for a message.
   * Only user messages can be edited.
   */
  const startEditingMessage = useCallback(
    (messageId: string): void => {
      const message = messages.find((msg) => msg.id === messageId);
      if (message && message.role === "user") {
        setIsEditing(messageId);
      }
    },
    [messages, setIsEditing],
  );

  /**
   * Cancels editing mode for a message.
   */
  const cancelEditingMessage = useCallback((): void => {
    setIsEditing(undefined);
  }, [setIsEditing]);

  /**
   * Saves an edited message and retries the conversation with new content and model.
   * Deletes all messages after the edited message and resubmits.
   */
  const saveEditedMessage = useCallback(
    async (
      messageId: string,
      newContent: string,
      newTone: ToneId,
      newModel: ModelId,
    ): Promise<void> => {
      // STEP 1: Find and validate the message
      const messageIndex = messages.findIndex((msg) => msg.id === messageId);
      if (messageIndex === -1) {
        return;
      }

      const messageToEdit = messages[messageIndex];
      if (messageToEdit.role !== "user") {
        return;
      }

      if (!newContent.trim()) {
        return;
      }

      // STEP 2: Create the updated message with new content and exit editing mode
      const updatedMessage: StoredMessage = {
        ...messages[messageIndex],
        content: newContent.trim(),
        timestamp: Date.now(),
      };

      // STEP 3: CRITICAL: Exit editing mode immediately
      setIsEditing(undefined);

      // STEP 4: Create clean message array - ATOMIC OPERATION
      // Keep only messages up to and including the edited message
      // This removes ALL following messages (assistant responses, errors, etc.)
      const cleanMessages: StoredMessage[] = [
        ...messages.slice(0, messageIndex),
        updatedMessage,
      ];

      // STEP 5: Update state and storage
      setMessages(cleanMessages);
      saveMessagesToStorage(cleanMessages);

      // STEP 6: Submit with the new content, passing clean messages to prevent stale closure
      await handleSubmit(
        undefined,
        newContent.trim(),
        newTone,
        newModel,
        () => {},
        true,
        cleanMessages,
      );
    },
    [messages, setIsEditing, setMessages, saveMessagesToStorage, handleSubmit],
  );

  /**
   * Adds an error message to the chat to display API or other errors.
   * First removes any existing error messages and incomplete assistant messages to prevent duplicates.
   */
  const addErrorMessage = useCallback(
    (error: { type: string; message: string; code?: string }): void => {
      // CLEAN: Remove ALL errors and incomplete assistant messages
      const lastMessage = messages[messages.length - 1];
      const cleanMessages =
        lastMessage.role !== "error" && lastMessage.role === "assistant"
          ? messages
          : messages.slice(0, -1);

      const errorMessage: StoredMessage = {
        id: `error-${Date.now()}`,
        role: "error",
        content: error.message,
        timestamp: Date.now(),
        error,
      };

      const updatedMessages = [...cleanMessages, errorMessage];
      setMessages(updatedMessages);
      saveMessagesToStorage(updatedMessages);
    },
    [messages, setMessages, saveMessagesToStorage],
  );

  return {
    deleteMessageAndFollowing,
    startEditingMessage,
    cancelEditingMessage,
    saveEditedMessage,
    addErrorMessage,
  };
}
