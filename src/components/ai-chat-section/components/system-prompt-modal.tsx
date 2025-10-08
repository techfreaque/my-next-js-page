"use client";

import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import { Code } from "lucide-react";
import type { JSX } from "react";
import React, { useState } from "react";
import { generateSystemPrompt } from "utils/system-prompt";
import type { ToneId, ToneOption } from "utils/tone-config";

interface SystemPromptModalProps {
  selectedTone: ToneId;
  toneOptions: ToneOption[];
}

export function SystemPromptModal({
  selectedTone,
  toneOptions,
}: SystemPromptModalProps): JSX.Element {
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);

  return (
    <>
      <Dialog open={showSystemPrompt} onOpenChange={setShowSystemPrompt}>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="rainbow"
            size="sm"
            className="w-[32%] md:h-8 md:w-8 md:p-0"
            title="View system prompt"
          >
            <Code className="h-3 w-3" />
            <span className="md:hidden">System</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>AI System Prompt</DialogTitle>
            <DialogDescription>
              The same data that builds this website also powers the AI chat.
              Currently using{" "}
              <Badge variant="default" className="ml-1">
                {toneOptions.find((t) => t.id === selectedTone)?.emoji}{" "}
                {toneOptions.find((t) => t.id === selectedTone)?.name}
              </Badge>{" "}
              tone.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <pre className="text-xs bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
              {generateSystemPrompt(selectedTone)}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
