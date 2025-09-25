import type React from "react";
import { useState } from "react";
import type { ModelId } from "utils/model-config";
import type { ToneId } from "utils/tone-config";

import type { StoredMessage } from "./useChatStorage";

export function useChatInput(
  handleFormSubmit: (
    e: React.FormEvent | undefined,
    input: string,
    selectedTone: ToneId,
    selectedModel: ModelId,
    setInput: (input: string) => void,
    skipUserMessage?: boolean,
    messagesOverride?: StoredMessage[],
  ) => void,
  selectedTone: ToneId,
  selectedModel: ModelId,
): {
  input: string;
  setInput: (input: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
} {
  const [input, setInput] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleFormSubmit(e);
    }
  };

  return {
    input,
    setInput,
    handleInputChange,
    handleKeyDown,
  };
}
