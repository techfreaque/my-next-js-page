/**
 * @fileoverview AI Chat Context
 *
 * Centralized state management for ALL AI chat functionality:
 * - Messages and storage
 * - Input handling
 * - Loading states
 * - Settings (tone, model) with localStorage
 * - API calls and message management
 *
 * Eliminates ALL prop drilling by providing complete chat state through context.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ModelId } from "utils/model-config";
import { defaultModel, getAllModelIds } from "utils/model-config";
import type { ToneId } from "utils/tone-config";
import { defaultTone, getAllToneIds } from "utils/tone-config";

import { useChatApi } from "./hooks/use-chat-api";
import { useChatInput } from "./hooks/use-chat-input";
import { useMessageManagement } from "./hooks/use-message-management";
import { useChatLoading } from "./hooks/useChatLoading";
import type { StoredMessage } from "./hooks/useChatStorage";
import { useChatStorage } from "./hooks/useChatStorage";

const CHAT_SETTINGS_KEY = "max-ai-chat-settings";

interface ChatSettings {
  selectedTone: ToneId;
  selectedModel: ModelId;
}

const DEFAULT_SETTINGS: ChatSettings = {
  selectedTone: defaultTone,
  selectedModel: defaultModel,
};

interface AIChatContextValue {
  // Messages
  messages: StoredMessage[];
  setMessages: (messages: StoredMessage[]) => void;

  // Input
  input: string;
  setInput: (input: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;

  // Loading
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingText: string;

  // Settings
  selectedTone: ToneId;
  selectedModel: ModelId;
  setSelectedTone: (tone: ToneId) => void;
  setSelectedModel: (model: ModelId) => void;

  // Storage
  saveMessagesToStorage: (messages: StoredMessage[]) => void;
  loadMessagesFromStorage: () => StoredMessage[];
  clearMessagesFromStorage: () => void;
  getDefaultMessages: () => StoredMessage[];
  ensureLatestWelcomeMessage: (messages: StoredMessage[]) => StoredMessage[];

  // API & Actions
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleStop: () => void;

  // Message Management
  startEditingMessage: (messageId: string) => void;
  cancelEditingMessage: (messageId: string) => void;
  deleteMessageAndFollowing: (messageId: string) => void;
  saveEditedMessage: (
    messageId: string,
    newContent: string,
    newTone: ToneId,
    newModel: ModelId,
  ) => Promise<void>;

  // Refs
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;

  // UI State
  isHover: boolean;
  setIsHover: (hover: boolean) => void;
  mounted: boolean;
  isEditing: string | undefined;
  setIsEditing: (messageId: string | undefined) => void;
}

const AIChatContext = createContext<AIChatContextValue | null>(null);

interface AIChatProviderProps {
  children: React.ReactNode;
}

export function AIChatProvider({
  children,
}: AIChatProviderProps): React.JSX.Element {
  // Settings state with localStorage
  const [settings, setSettings] = useState<ChatSettings>(DEFAULT_SETTINGS);
  const [mounted, setMounted] = useState(false);

  // UI state
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState<string | undefined>(undefined);

  // Refs
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Storage hook
  const {
    saveMessagesToStorage,
    loadMessagesFromStorage,
    clearMessagesFromStorage,
    getDefaultMessages,
    ensureLatestWelcomeMessage,
  } = useChatStorage();

  // Messages state
  const [messages, setMessages] = useState<StoredMessage[]>([]);

  // Input hook

  // Loading hook
  const { loadingText, startLoadingAnimation, stopLoadingAnimation } =
    useChatLoading();

  // API hook
  const { handleSubmit: apiHandleSubmit, handleStop } = useChatApi({
    messages,
    setMessages,
    saveMessagesToStorage,
    startLoadingAnimation,
    stopLoadingAnimation,
    setIsLoading,
  });

  const { input, setInput, handleInputChange, handleKeyDown, handleSubmit } =
    useChatInput(
      apiHandleSubmit,
      settings.selectedTone,
      settings.selectedModel,
      isLoading,
    );

  // Message management hook
  const messageManagement = useMessageManagement({
    messages,
    setMessages,
    saveMessagesToStorage,
    handleSubmit: apiHandleSubmit,
    setIsEditing,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = localStorage.getItem(CHAT_SETTINGS_KEY);
      if (stored) {
        const parsedSettings = JSON.parse(stored) as ChatSettings;

        // Validate that stored IDs are still valid (handle prod changes)
        const validToneIds = getAllToneIds();
        const validModelIds = getAllModelIds();

        const validatedSettings: ChatSettings = {
          selectedTone: validToneIds.includes(parsedSettings.selectedTone)
            ? parsedSettings.selectedTone
            : DEFAULT_SETTINGS.selectedTone,
          selectedModel: validModelIds.includes(parsedSettings.selectedModel)
            ? parsedSettings.selectedModel
            : DEFAULT_SETTINGS.selectedModel,
        };

        setSettings(validatedSettings);

        // If we had to fix invalid settings, save the corrected version
        if (
          validatedSettings.selectedTone !== parsedSettings.selectedTone ||
          validatedSettings.selectedModel !== parsedSettings.selectedModel
        ) {
          localStorage.setItem(
            CHAT_SETTINGS_KEY,
            JSON.stringify(validatedSettings),
          );
        }
      }
    } catch {
      // If parsing fails, use defaults silently
    }

    setMounted(true);
  }, []);

  // Load messages on mount
  useEffect(() => {
    const loadedMessages = loadMessagesFromStorage();
    if (loadedMessages.length > 0) {
      const updatedMessages = ensureLatestWelcomeMessage(loadedMessages);
      setMessages(updatedMessages);
      if (updatedMessages !== loadedMessages) {
        saveMessagesToStorage(updatedMessages);
      }
    } else {
      // If no messages in storage, set default welcome message
      const defaultMessages = getDefaultMessages();
      setMessages(defaultMessages);
      saveMessagesToStorage(defaultMessages);
    }
    setMounted(true);
  }, [
    loadMessagesFromStorage,
    ensureLatestWelcomeMessage,
    getDefaultMessages,
    setMessages,
    saveMessagesToStorage,
  ]);

  // Save settings to localStorage whenever they change
  const saveSettings = useCallback(
    (newSettings: ChatSettings) => {
      if (!mounted) {
        return;
      }

      try {
        localStorage.setItem(CHAT_SETTINGS_KEY, JSON.stringify(newSettings));
      } catch {
        // Storage errors are expected in some environments, fail silently
      }
    },
    [mounted],
  );

  const setSelectedTone = useCallback(
    (tone: ToneId) => {
      const newSettings = { ...settings, selectedTone: tone };
      setSettings(newSettings);
      saveSettings(newSettings);
    },
    [settings, saveSettings],
  );

  const setSelectedModel = useCallback(
    (model: ModelId) => {
      const newSettings = { ...settings, selectedModel: model };
      setSettings(newSettings);
      saveSettings(newSettings);
    },
    [settings, saveSettings],
  );

  const contextValue: AIChatContextValue = {
    // Messages
    messages,
    setMessages,

    // Input
    input,
    setInput,
    handleInputChange,
    handleKeyDown,

    // Loading
    isLoading,
    setIsLoading,
    loadingText,

    // Settings
    selectedTone: settings.selectedTone,
    selectedModel: settings.selectedModel,
    setSelectedTone,
    setSelectedModel,

    // Storage
    saveMessagesToStorage,
    loadMessagesFromStorage,
    clearMessagesFromStorage,
    getDefaultMessages,
    ensureLatestWelcomeMessage,

    // API & Actions
    handleSubmit,
    handleStop,

    // Message Management
    startEditingMessage: messageManagement.startEditingMessage,
    cancelEditingMessage: messageManagement.cancelEditingMessage,
    deleteMessageAndFollowing: messageManagement.deleteMessageAndFollowing,
    saveEditedMessage: messageManagement.saveEditedMessage,

    // Refs
    messagesContainerRef,
    inputRef,

    // UI State
    isHover,
    setIsHover,
    mounted,
    isEditing,
    setIsEditing,
  };

  return (
    <AIChatContext.Provider value={contextValue}>
      {children}
    </AIChatContext.Provider>
  );
}

/**
 * Hook to access AI chat context
 * @throws Error if used outside of AIChatProvider
 */
export function useAIChatContext(): AIChatContextValue {
  const context = useContext(AIChatContext);
  if (!context) {
    // eslint-disable-next-line no-restricted-syntax
    throw new Error("useAIChatContext must be used within an AIChatProvider");
  }
  return context;
}
