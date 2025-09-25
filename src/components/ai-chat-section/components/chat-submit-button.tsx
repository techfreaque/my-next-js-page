import { Button } from "components/ui/button";
import { Send, Square } from "lucide-react";
import type React from "react";
import type { JSX } from "react";

interface ChatSubmitButtonProps {
  chatInput: string;
  isLoading: boolean;
  onStop: () => void;
}

export function ChatSubmitButton({
  chatInput,
  isLoading,
  onStop,
}: ChatSubmitButtonProps): JSX.Element {
  return (
    <Button
      type="submit"
      disabled={!chatInput.trim() && !isLoading}
      size="sm"
      variant="rainbow"
      onClick={isLoading ? onStop : undefined}
      className="w-[32%] md:w-auto h-8 p-0"
    >
      {isLoading ? (
        <>
          <Square className="h-3 w-3" />
          <span className="">Stop</span>
        </>
      ) : (
        <>
          <Send className="h-3 w-3" />
          <span className="">Send</span>
        </>
      )}
    </Button>
  );
}
