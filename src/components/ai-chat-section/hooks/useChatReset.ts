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
} {
  const [resetClickCount, setResetClickCount] = useState(0);

  const handleResetClick = (): void => {
    if (resetClickCount < 1) {
      setResetClickCount(resetClickCount + 1);
    } else {
      clearMessagesFromStorage();
      setMessages(getDefaultMessages());
      setResetClickCount(0);
    }
  };

  return {
    resetClickCount,
    handleResetClick,
  };
}
