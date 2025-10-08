import { AlertTriangle } from "lucide-react";
import type { JSX } from "react";
import React from "react";

import type { StoredMessage } from "../hooks/useChatStorage";

export function ChatMessageError({
  message,
}: {
  message: StoredMessage;
}): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="max-w-[90%] bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 text-red-800 dark:text-red-200 rounded-xl px-4 py-3">
        <div className="text-sm leading-relaxed">
          <div className="font-medium mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Oops! Well, at least my error handling works...
          </div>
          <div className="mb-2">{message.content}</div>
          <div className="text-xs opacity-75 mt-2">Sorry about that! 🙈</div>
        </div>
      </div>
    </div>
  );
}
