import { Sparkles } from "lucide-react";
import type { JSX } from "react";
import React from "react";

export function PrivacyNotice(): JSX.Element {
  return (
    <div className="mt-6 p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/50 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
          <Sparkles className="h-3 w-3 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <p className="font-medium mb-1">Privacy Notice</p>
          <p>
            Your conversations are stored locally in your browser only and never
            sent to me. AI responses are powered by{" "}
            <a
              href="https://openrouter.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-300"
            >
              OpenRouter
            </a>
            , which routes requests to various AI providers. While I cannot see
            your messages, the AI providers may retain your conversations
            according to their privacy policies, particularly when using free
            models.
          </p>
        </div>
      </div>
    </div>
  );
}
