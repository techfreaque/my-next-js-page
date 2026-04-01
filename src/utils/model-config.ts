import {
  SiAnthropic,
  SiGooglegemini,
  SiOpenai,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

/**
 * Available AI model identifiers for the chat system.
 * Each model has different pricing, capabilities, and context windows.
 */
export enum ModelId {
  CLAUDE_HAIKU = "claude-haiku",
  GPT_5_MINI = "gpt-5-mini",
  GPT_5_NANO = "gpt-5-nano",
  GEMINI_3_1_FLASH_LITE = "gemini-3.1-flash-lite",
}

/**
 * Configuration interface for AI model options.
 * Contains all necessary information for model selection and API integration.
 */
export interface ModelOption {
  /** Unique identifier for the model */
  id: ModelId;
  /** Human-readable display name */
  name: string;
  /** AI provider company name */
  provider: string;
  /** Brief description of model capabilities */
  description: string;
  /** Number of parameters in billions */
  parameterCount: number | undefined;
  /** Maximum context window size in tokens */
  contextWindow: number;
  /** Emoji icon for UI display */
  icon: string | ComponentType<{ className?: string }>;
  /** OpenRouter API model identifier */
  openRouterModel: string;
}

export const modelOptions: ModelOption[] = [
  {
    id: ModelId.CLAUDE_HAIKU,
    name: "Claude Haiku 4.5",
    provider: "Anthropic",
    description:
      "Fast, capable, and cost-efficient - Anthropic's best small model",
    parameterCount: undefined,
    contextWindow: 200000,
    icon: SiAnthropic,
    openRouterModel: "anthropic/claude-haiku-4-5",
  },
  {
    id: ModelId.GPT_5_MINI,
    name: "GPT-5 Mini",
    provider: "OpenAI",
    description: "Latest capable small model from OpenAI",
    parameterCount: undefined,
    contextWindow: 200000,
    icon: SiOpenai,
    openRouterModel: "openai/gpt-5-mini",
  },
  {
    id: ModelId.GPT_5_NANO,
    name: "GPT-5 Nano",
    provider: "OpenAI",
    description: "Fastest and most lightweight GPT-5 variant",
    parameterCount: undefined,
    contextWindow: 400000,
    icon: SiOpenai,
    openRouterModel: "openai/gpt-5-nano",
  },
  {
    id: ModelId.GEMINI_3_1_FLASH_LITE,
    name: "Gemini 3.1 Flash Lite",
    provider: "Google",
    description: "Latest Gemini small model - ultra-fast with large context",
    parameterCount: undefined,
    contextWindow: 1050000,
    icon: SiGooglegemini,
    openRouterModel: "google/gemini-3.1-flash-lite-preview",
  },
];

/** Default model used when no specific model is selected */
export const defaultModel = ModelId.CLAUDE_HAIKU;

/**
 * Retrieves a model configuration by its ID.
 * Falls back to the default model if the requested model is not found.
 *
 * @param modelId - The model identifier to look up
 * @returns The model configuration object
 */
export function getModelById(modelId: ModelId): ModelOption {
  const foundModel = modelOptions.find((model) => model.id === modelId);

  if (foundModel) {
    return foundModel;
  }

  // Fallback to default model - this should never fail as default model is in the array
  const defaultModelOption = modelOptions.find(
    (model) => model.id === defaultModel,
  );

  // This should never happen in a properly configured system, but we handle it gracefully
  return defaultModelOption ?? modelOptions[0];
}

/**
 * Helper function to get all available model IDs.
 * Useful for validation and iteration purposes.
 *
 * @returns Array of all available model IDs
 */
export function getAllModelIds(): ModelId[] {
  return modelOptions.map((model) => model.id);
}
