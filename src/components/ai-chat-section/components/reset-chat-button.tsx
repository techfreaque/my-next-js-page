import { Button } from "components/ui/button";
import { RotateCcw } from "lucide-react";
import type React from "react";
import type { JSX } from "react";

import { useChatReset } from "../hooks/useChatReset";
import type { StoredMessage } from "../hooks/useChatStorage";

interface ResetChatButtonProps {
  clearMessagesFromStorage: () => void;
  setMessages: (messages: StoredMessage[]) => void;
  getDefaultMessages: () => StoredMessage[];
}

export function ResetChatButton({
  clearMessagesFromStorage,
  setMessages,
  getDefaultMessages,
}: ResetChatButtonProps): JSX.Element {
  const { resetClickCount, resetMessages, handleResetClick } = useChatReset({
    clearMessagesFromStorage,
    setMessages,
    getDefaultMessages,
  });
  return (
    <Button
      variant="rainbow"
      size="sm"
      onClick={handleResetClick}
      className="w-[32%] md:w-auto h-8"
      title={
        resetClickCount > 0
          ? resetMessages[resetClickCount]
          : "Reset chat and clear history"
      }
    >
      <RotateCcw className="h-3 w-3 mr-1" />
      {resetClickCount === 0 ? "Reset" : resetMessages[resetClickCount]}
    </Button>
  );
}
