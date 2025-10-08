import { Button } from "components/ui/button";
import { RotateCcw } from "lucide-react";
import type React from "react";
import type { JSX } from "react";

import { useChatReset } from "../hooks/useChatReset";
import type { StoredMessage } from "../hooks/useChatStorage";

interface ResetChatButtonProps {
  setMessages: (messages: StoredMessage[]) => void;
}

export function ResetChatButton({
  setMessages,
}: ResetChatButtonProps): JSX.Element {
  const { resetClickCount, handleResetClick } = useChatReset({
    setMessages,
  });
  return (
    <Button
      variant="rainbow"
      size="sm"
      onClick={handleResetClick}
      className="w-[32%] md:w-auto h-8"
      title={resetClickCount > 0 ? "Sure?" : "Reset"}
    >
      <RotateCcw className="h-3 w-3 mr-1" />
      {resetClickCount === 0 ? "Reset" : "Sure?"}
    </Button>
  );
}
