import { useState } from "react";

import type { StoredMessage } from "./useChatStorage";

interface UseChatResetProps {
  clearMessagesFromStorage: () => void;
  getDefaultMessages: () => StoredMessage[];
  setMessages: (messages: StoredMessage[]) => void;
}

export function useChatReset({
  clearMessagesFromStorage,
  getDefaultMessages,
  setMessages,
}: UseChatResetProps): {
  resetClickCount: number;
  handleResetClick: () => void;
  resetMessages: string[];
} {
  const [resetClickCount, setResetClickCount] = useState(0);

  // Fun 5-click reset confirmation
  const resetMessages = [
    "Are you sure you want to reset?",
    "Really? We were having such a nice chat!",
    "Come on, give me one more chance!",
    "This is your last warning... I'll miss our conversation!",
    "Fine! Resetting... but I'll remember this betrayal!",
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

  return {
    resetClickCount,
    handleResetClick,
    resetMessages,
  };
}
