import { Button } from "components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import type { JSX } from "react";
import React from "react";

import { useAIChatContext } from "../AIChatContext";
import type { StoredMessage } from "../hooks/useChatStorage";
import { CopyMessageButton } from "./copy-message-button";
import { MessageEditor } from "./message-editor";

export function UserMessage({
  message,
}: {
  message: StoredMessage;
}): JSX.Element {
  const {
    startEditingMessage,
    deleteMessageAndFollowing,
    saveEditedMessage,
    cancelEditingMessage,
    isEditing,
  } = useAIChatContext();
  return (
    <div className="flex flex-col items-end">
      <div className="max-w-[85%]">
        {isEditing === message.id ? (
          <MessageEditor
            message={message}
            onSave={saveEditedMessage}
            onCancel={cancelEditingMessage}
          />
        ) : (
          <>
            <div className="bg-blue-500/10 rounded-xl px-4 py-3 shadow-lg">
              <div className="text-sm leading-relaxed font-medium text-blue-600 dark:text-blue-400">
                {message.content}
              </div>
            </div>

            {/* Message Actions - Below message, right aligned but slightly inset */}
            <div className="flex justify-end mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex gap-1">
                <Button
                  variant="rainbow"
                  size="sm"
                  onClick={() => startEditingMessage(message.id)}
                  className="h-7 w-7 p-0"
                  title="Edit"
                >
                  <Edit className="h-3 w-3" />
                </Button>
                <CopyMessageButton content={message.content} />
                <Button
                  variant="rainbow"
                  size="sm"
                  onClick={() => deleteMessageAndFollowing(message.id)}
                  className="h-7 w-7 p-0"
                  title="Delete"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
