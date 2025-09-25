import { useCallback } from "react";

// localStorage utilities
const CHAT_STORAGE_KEY = "max-ai-chat-messages";

export interface StoredMessage {
  id: string;
  role: "assistant" | "user" | "system" | "data" | "error";
  content: string;
  /** Timestamp when the message was created */
  timestamp?: number;
  /** Model used for this message (for assistant messages) */
  model?: string;
  /** Tone used for this message (for assistant messages) */
  tone?: string;
  /** Whether this message is being edited */
  error?: {
    type: string;
    message: string;
    code?: string;
  };
}

export function useChatStorage(): {
  saveMessagesToStorage: (messages: StoredMessage[]) => void;
  loadMessagesFromStorage: () => StoredMessage[];
  clearMessagesFromStorage: () => void;
  getDefaultMessages: () => StoredMessage[];
  ensureLatestWelcomeMessage: (messages: StoredMessage[]) => StoredMessage[];
} {
  const saveMessagesToStorage = useCallback(
    (messages: StoredMessage[]): void => {
      try {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        // Storage errors are expected in some environments
        void error;
      }
    },
    [],
  );

  const loadMessagesFromStorage = useCallback((): StoredMessage[] => {
    try {
      if (typeof window === "undefined") {
        return [];
      }
      const stored = localStorage.getItem(CHAT_STORAGE_KEY);
      return stored ? (JSON.parse(stored) as StoredMessage[]) : [];
    } catch (error) {
      // Storage errors are expected in some environments
      void error;
      return [];
    }
  }, []);

  const clearMessagesFromStorage = useCallback((): void => {
    try {
      localStorage.removeItem(CHAT_STORAGE_KEY);
    } catch (error) {
      // Storage errors are expected in some environments
      void error;
    }
  }, []);

  const getDefaultMessages = useCallback((): StoredMessage[] => {
    // Create a dynamic welcome message that stays current with Max's information
    const welcomeContent = `## Hi there! 👋

I'm **Max's AI assistant** with comprehensive knowledge about his background, skills, and experience.

Feel free to ask me anything about:
- His **13+ years** of development experience across multiple domains
- **Technical expertise** in full-stack development, AI, and cross-platform solutions
- **Leadership roles** and team management experience
- **Professional journey** from car technician to senior tech roles
- **Current projects** and innovative solutions he's building

Let's chat! 🚀

*Note: I'm always up-to-date with Max's latest information and achievements.*`;

    return [
      {
        id: "welcome",
        role: "assistant" as const,
        content: welcomeContent,
        timestamp: Date.now(),
      },
    ];
  }, []);

  const ensureLatestWelcomeMessage = useCallback(
    (messages: StoredMessage[]): StoredMessage[] => {
      if (messages.length === 0) {
        return getDefaultMessages();
      }

      // Check if the first message is the welcome message
      const firstMessage = messages[0];
      if (firstMessage.id === "welcome" && firstMessage.role === "assistant") {
        // Replace with the latest welcome message
        const latestWelcome = getDefaultMessages()[0];
        return [latestWelcome, ...messages.slice(1)];
      }

      return messages;
    },
    [getDefaultMessages],
  );

  return {
    saveMessagesToStorage,
    loadMessagesFromStorage,
    clearMessagesFromStorage,
    getDefaultMessages,
    ensureLatestWelcomeMessage,
  };
}
