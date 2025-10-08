import { personalInfo } from "me/about-me";
import { useCallback } from "react";

const CHAT_STORAGE_KEY = "max-ai-chat-messages";

const WELCOME_CONTENT = `## Hi there! 👋

I'm **Max's AI assistant** with comprehensive knowledge about his background, skills, and experience.

Feel free to ask me anything about:
- His **${personalInfo.experienceYears} years** of development experience across multiple domains
- **Technical expertise** in full-stack development, AI, and cross-platform solutions
- **Leadership roles** and team management experience
- **Professional journey** from car technician to senior tech roles
- **Current projects** and innovative solutions he's building

Let's chat! 🚀`;

const WELCOME_MESSAGE_ID = "welcome";

export interface StoredMessage {
  id: string;
  role: "assistant" | "user" | "system" | "data" | "error";
  content: string;
  timestamp: number;
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
  getDefaultMessage: () => StoredMessage;
  ensureLatestWelcomeMessage: (messages: StoredMessage[]) => StoredMessage[];
} {
  const saveMessagesToStorage = useCallback(
    (messages: StoredMessage[]): void => {
      try {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // Storage errors are expected in some environments
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

  const getDefaultMessage = useCallback((): StoredMessage => {
    return {
      id: WELCOME_MESSAGE_ID,
      role: "assistant",
      content: WELCOME_CONTENT,
      timestamp: Date.now(),
    };
  }, []);

  const ensureLatestWelcomeMessage = useCallback(
    (messages: StoredMessage[]): StoredMessage[] => {
      if (messages.length === 0) {
        return [getDefaultMessage()];
      }

      // Check if the first message is the welcome message
      const firstMessage = messages[0];
      if (
        firstMessage.id === WELCOME_MESSAGE_ID &&
        firstMessage.role === "assistant"
      ) {
        // Replace with the latest welcome message
        const latestWelcome = getDefaultMessage();
        return [latestWelcome, ...messages.slice(1)];
      }

      return messages;
    },
    [getDefaultMessage],
  );

  return {
    saveMessagesToStorage,
    loadMessagesFromStorage,
    clearMessagesFromStorage,
    getDefaultMessage: getDefaultMessage,
    ensureLatestWelcomeMessage,
  };
}
