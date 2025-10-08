/**
 * @fileoverview Message Editor Component
 *
 * This component provides inline editing functionality for chat messages,
 * allowing users to modify their messages and retry with different models/tones.
 *
 * @author Max Brandstaetter
 * @version 1.0.0
 */

import { Button } from "components/ui/button";
import { Textarea } from "components/ui/textarea";
import { Check, X } from "lucide-react";
import type { JSX } from "react";
import React, { useEffect, useRef, useState } from "react";
import type { ModelId } from "utils/model-config";
import type { ToneId } from "utils/tone-config";

import { useAIChatContext } from "../AIChatContext";
import type { StoredMessage } from "../hooks/useChatStorage";
import { ModelSelector } from "./model-selector";
import { ToneSelector } from "./tone-selector";

interface MessageEditorProps {
  message: StoredMessage;
  onSave: (
    messageId: string,
    newContent: string,
    newTone: ToneId,
    newModel: ModelId,
  ) => Promise<void>;
  onCancel: (messageId: string) => void;
}

export function MessageEditor({
  message,
  onSave,
  onCancel,
}: MessageEditorProps): JSX.Element {
  // Get settings from context
  const { selectedTone, selectedModel } = useAIChatContext();
  const [content, setContent] = useState(message.content);
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContent(message.content);
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]); // Intentionally NOT including message.content to prevent revert

  // Scroll into view when editor is mounted
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []); // Empty dependency array - only run once on mount

  const handleSave = async (): Promise<void> => {
    if (!content.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      await onSave(message.id, content.trim(), selectedTone, selectedModel);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      void handleSave();
    } else if (e.key === "Escape") {
      e.preventDefault();
      onCancel(message.id);
    }
  };

  return (
    <div
      ref={editorRef}
      className="space-y-4 pb-5 border border-border/30 rounded-md bg-background/50 backdrop-blur-sm shadow-lg  min-w-[400px] max-w-[85vw]"
    >
      <div className="overflow-hidden rounded-t-md border-b border-border/30">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Edit your message..."
          disabled={isLoading}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-2 px-5">
        <div className="flex flex-col md:flex-1 md:flex-row gap-2">
          <ModelSelector
            disabled={isLoading}
            className="w-full md:w-[49%] lg:w-[230px]"
          />
          <ToneSelector
            disabled={isLoading}
            className="w-full md:w-[49%] lg:w-[200px]"
          />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleSave}
            disabled={!content.trim() || isLoading}
            size="sm"
            variant="rainbow"
            className="flex-1 lg:flex-none h-8"
          >
            <Check className="h-3 w-3 mr-2" />
            {isLoading ? "Saving..." : "Save & Retry"}
          </Button>

          <Button
            onClick={() => onCancel(message.id)}
            disabled={isLoading}
            size="sm"
            variant="rainbow"
            className="flex-1 lg:flex-none h-8"
          >
            <X className="h-3 w-3 mr-2" />
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
