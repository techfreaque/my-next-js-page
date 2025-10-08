import { useState } from "react";

import { type StoredMessage, useChatStorage } from "./useChatStorage";

interface UseChatResetProps {
  setMessages: (messages: StoredMessage[]) => void;
}

export function useChatReset({ setMessages }: UseChatResetProps): {
  resetClickCount: number;
  handleResetClick: () => void;
} {
  const { getDefaultMessage: getDefaultMessage, clearMessagesFromStorage } =
    useChatStorage();
  const [resetClickCount, setResetClickCount] = useState(0);

  const handleResetClick = (): void => {
    if (resetClickCount < 1) {
      setResetClickCount(1);
      setTimeout(() => {
        setResetClickCount(0);
      }, 5000);
    } else {
      clearMessagesFromStorage();
      setMessages([getDefaultMessage()]);
      setResetClickCount(0);
    }
  };

  return {
    resetClickCount,
    handleResetClick,
  };
}
