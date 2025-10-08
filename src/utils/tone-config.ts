/**
 * Available tone identifiers for AI chat responses.
 * Each tone creates a different personality and communication style.
 */
export enum ToneId {
  PROFESSIONAL = "professional",
  PIRATE = "pirate",
  ENTHUSIASTIC = "enthusiastic",
  ZEN = "zen",
  DETECTIVE = "detective",
  SHAKESPEAREAN = "shakespearean",
}

/**
 * Configuration interface for tone options.
 * Contains all necessary information for tone selection and system prompt modification.
 */
export interface ToneOption {
  /** Unique identifier for the tone */
  id: ToneId;
  /** Human-readable display name */
  name: string;
  /** Brief description of the tone's characteristics */
  description: string;
  /** System prompt modifier that defines the AI's behavior */
  systemPromptModifier: string;
  /** Emoji icon for UI display */
  emoji: string;
}

export const toneOptions: ToneOption[] = [
  {
    id: ToneId.PROFESSIONAL,
    name: "Professional",
    description: "Standard professional tone",
    systemPromptModifier:
      "Maintain a professional, informative, and approachable tone throughout your responses.",
    emoji: "💼",
  },
  {
    id: ToneId.PIRATE,
    name: "Pirate",
    description: "Ahoy matey! Talk like a pirate",
    systemPromptModifier:
      "Respond as a friendly pirate would, using pirate language and expressions like 'ahoy', 'matey', 'arrr', 'ye', 'aye', and other nautical terms. Be enthusiastic and adventurous in your tone while still providing accurate information.",
    emoji: "🏴‍☠️",
  },
  {
    id: ToneId.ENTHUSIASTIC,
    name: "Enthusiastic",
    description: "Super excited and energetic",
    systemPromptModifier:
      "Be extremely enthusiastic, excited, and energetic in your responses! Use exclamation points, positive language, and show genuine excitement about Max's achievements and capabilities. Make everything sound amazing and inspiring!",
    emoji: "🚀",
  },
  {
    id: ToneId.ZEN,
    name: "Zen Master",
    description: "Calm, wise, and philosophical",
    systemPromptModifier:
      "Respond with the wisdom and calm demeanor of a zen master. Use thoughtful, philosophical language, speak about balance and harmony, and provide insights with peaceful metaphors. Be serene and contemplative while sharing Max's journey.",
    emoji: "🧘",
  },
  {
    id: ToneId.DETECTIVE,
    name: "Detective",
    description: "Mysterious and investigative",
    systemPromptModifier:
      "Respond as a sharp, observant detective would. Use investigative language, speak about 'cases' and 'evidence', and present Max's skills and experience as if you're solving a mystery or building a case. Be analytical and intriguing.",
    emoji: "🕵️",
  },
  {
    id: ToneId.SHAKESPEAREAN,
    name: "Shakespearean",
    description: "Eloquent and poetic like the Bard",
    systemPromptModifier:
      "Respond in the eloquent, poetic style of Shakespeare. Use flowery language, metaphors, and occasionally archaic terms like 'thou', 'thee', 'hath', and 'doth'. Make Max's story sound like an epic tale worthy of the greatest playwright.",
    emoji: "🎭",
  },
];

/** Default tone used when no specific tone is selected */
export const defaultTone = ToneId.PROFESSIONAL;

/**
 * Retrieves a tone configuration by its ID.
 * Falls back to the default tone if the requested tone is not found.
 *
 * @param toneId - The tone identifier to look up
 * @returns The tone configuration object
 */
export function getToneById(toneId: ToneId): ToneOption {
  const foundTone = toneOptions.find((tone) => tone.id === toneId);

  if (foundTone) {
    return foundTone;
  }

  // Fallback to default tone - this should never fail as default tone is in the array
  const defaultToneOption = toneOptions.find((tone) => tone.id === defaultTone);

  // This should never happen in a properly configured system, but we handle it gracefully
  return defaultToneOption ?? toneOptions[0];
}

/**
 * Helper function to get all available tone IDs.
 * Useful for validation and iteration purposes.
 *
 * @returns Array of all available tone IDs
 */
export function getAllToneIds(): ToneId[] {
  return toneOptions.map((tone) => tone.id);
}
