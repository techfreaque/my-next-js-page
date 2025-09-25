import type React from "react";
import { useCallback, useEffect, useState } from "react";
import type { ModelId } from "utils/model-config";
import type { ToneId } from "utils/tone-config";

import type { StoredMessage } from "./useChatStorage";

const CHAT_INPUT_STORAGE_KEY = "ai-chat-input";

export function useChatInput(
  handleFormSubmit: (
    e: React.FormEvent | undefined,
    input: string,
    selectedTone: ToneId,
    selectedModel: ModelId,
    setInput: (input: string) => void,
    skipUserMessage?: boolean,
    messagesOverride?: StoredMessage[],
  ) => Promise<void>,
  selectedTone: ToneId,
  selectedModel: ModelId,
  isLoading: boolean,
): {
  input: string;
  setInput: (input: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
} {
  const [input, setInput] = useState("");

  // Load input from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const storedInput = localStorage.getItem(CHAT_INPUT_STORAGE_KEY);
      if (storedInput) {
        setInput(storedInput);
      }
    } catch {
      // Storage errors are expected in some environments, fail silently
    }
  }, []);

  // Save input to localStorage whenever it changes (debounced via state)
  const saveInputToStorage = useCallback((value: string) => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      if (value.trim()) {
        localStorage.setItem(CHAT_INPUT_STORAGE_KEY, value);
      } else {
        localStorage.removeItem(CHAT_INPUT_STORAGE_KEY);
      }
    } catch {
      // Storage errors are expected in some environments, fail silently
    }
  }, []);

  // Enhanced setInput that also saves to localStorage
  const setInputWithStorage = useCallback(
    (value: string) => {
      setInput(value);
      saveInputToStorage(value);
    },
    [saveInputToStorage],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setInputWithStorage(e.target.value);
    },
    [setInputWithStorage],
  );

  // Internal submit logic (shared between form and keyboard)
  const performSubmit = useCallback(async (): Promise<void> => {
    if (!input.trim() || isLoading) {
      return;
    }

    // Clear input from localStorage before submitting
    try {
      localStorage.removeItem(CHAT_INPUT_STORAGE_KEY);
    } catch {
      // Storage errors are expected in some environments, fail silently
    }

    await handleFormSubmit(
      undefined,
      input,
      selectedTone,
      selectedModel,
      setInput,
    );
  }, [input, isLoading, handleFormSubmit, selectedTone, selectedModel]);

  // Form submit handler
  const handleSubmit = useCallback(
    async (e: React.FormEvent): Promise<void> => {
      e.preventDefault();
      await performSubmit();
    },
    [performSubmit],
  );

  // Enhanced keydown handler that uses the same submit logic
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        void performSubmit();
      }
    },
    [performSubmit],
  );

  return {
    input,
    setInput: setInputWithStorage,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
  };
}
