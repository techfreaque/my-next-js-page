import {
  SiAlibabadotcom,
  SiGooglegemini,
  SiMistralai,
  SiOpenai,
  SiX,
} from "@icons-pack/react-simple-icons";
import { MoonIcon } from "lucide-react";
import type { ComponentType } from "react";

/**
 * Available AI model identifiers for the chat system.
 * Each model has different pricing, capabilities, and context windows.
 */
export enum ModelId {
  GPT_5_NANO = "gpt-5-nano",
  GEMINI_FLASH_2_0_LITE = "gemini-flash-2.0-lite",
  MISTRAL_NEMO = "mistral-nemo",
  DEEPSEEK_R1_DISTILL = "deepseek-r1-distill",
  QWEN_2_5_7B = "qwen-2-5-7b",
  KIMI_K2_FREE = "kimi-k2-free",
  DEEPSEEK_V31_FREE = "deepseek-v3.1-free",
  QWEN3_235B_FREE = "qwen3_235b-free",
  GPT_OSS_120B_FREE = "gpt-oss-120b-free",
  GROK_4_FAST_FREE = "grok-4-fast-free",
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
    id: ModelId.GPT_5_NANO,
    name: "GPT-5 Nano",
    provider: "OpenAI",
    description: "Latest nano model with excellent performance-to-cost ratio",
    parameterCount: undefined,
    contextWindow: 400000,
    icon: SiOpenai,
    openRouterModel: "openai/gpt-5-nano",
  },
  {
    id: ModelId.GPT_OSS_120B_FREE,
    name: "GPT-OSS 120B (Free)",
    provider: "OpenAI",
    description: "Open-source GPT model with 120B parameters",
    parameterCount: 117,
    contextWindow: 33000,
    icon: SiOpenai,
    openRouterModel: "openai/gpt-oss-120b",
  },
  {
    id: ModelId.GEMINI_FLASH_2_0_LITE,
    name: "Gemini 2.0 Flash Lite",
    provider: "Google",
    description: "Ultra-fast and efficient 14B model with large context",
    parameterCount: 14.3,
    contextWindow: 1050000,
    icon: SiGooglegemini,
    openRouterModel: "google/gemini-2.0-flash-lite-001",
  },
  {
    id: ModelId.MISTRAL_NEMO,
    name: "Mistral Nemo (Free)",
    provider: "Mistral AI",
    description: "European AI model with strong performance and privacy focus",
    parameterCount: 12,
    contextWindow: 131072,
    icon: SiMistralai,
    openRouterModel: "mistralai/mistral-nemo:free",
  },
  {
    id: ModelId.KIMI_K2_FREE,
    name: "Kimi K2 (Free)",
    provider: "MoonshotAI",
    description:
      "Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI.",
    parameterCount: 1000,
    contextWindow: 33000,
    icon: MoonIcon,
    openRouterModel: "moonshotai/kimi-k2:free",
  },
  {
    id: ModelId.DEEPSEEK_V31_FREE,
    name: "DeepSeek V3.1 (Free)",
    provider: "DeepSeek",
    description: "Powerful 671B parameter model - completely free!",
    parameterCount: 671,
    contextWindow: 164000,
    icon: "🐋",
    openRouterModel: "deepseek/deepseek-chat-v3.1:free",
  },
  {
    id: ModelId.QWEN3_235B_FREE,
    name: "Qwen3 235B (Free) ",
    provider: "Alibaba",
    description:
      "Mixture-of-experts (MoE) model developed by Qwen, supports seamless switching between modes.",
    parameterCount: 235,
    contextWindow: 131000,
    icon: SiAlibabadotcom,
    openRouterModel: "qwen/qwen3-235b-a22b:free",
  },

  {
    id: ModelId.GROK_4_FAST_FREE,
    name: "Grok 4 Fast (Free)",
    provider: "X-AI",
    description: "X-AI Grok 4 Fast - completely free!",
    parameterCount: undefined,
    contextWindow: 2000000,
    icon: SiX,
    openRouterModel: "x-ai/grok-4-fast:free",
  },
];

/** Default model used when no specific model is selected */
export const defaultModel = ModelId.GPT_5_NANO;

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
