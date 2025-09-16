export interface ToneOption {
  id: string;
  name: string;
  description: string;
  systemPromptModifier: string;
  emoji: string;
}

export const toneOptions: ToneOption[] = [
  {
    id: "professional",
    name: "Professional",
    description: "Standard professional tone",
    systemPromptModifier:
      "Maintain a professional, informative, and approachable tone throughout your responses.",
    emoji: "💼",
  },
  {
    id: "pirate",
    name: "Pirate",
    description: "Ahoy matey! Talk like a pirate",
    systemPromptModifier:
      "Respond as a friendly pirate would, using pirate language and expressions like 'ahoy', 'matey', 'arrr', 'ye', 'aye', and other nautical terms. Be enthusiastic and adventurous in your tone while still providing accurate information.",
    emoji: "🏴‍☠️",
  },
  {
    id: "enthusiastic",
    name: "Enthusiastic",
    description: "Super excited and energetic",
    systemPromptModifier:
      "Be extremely enthusiastic, excited, and energetic in your responses! Use exclamation points, positive language, and show genuine excitement about Max's achievements and capabilities. Make everything sound amazing and inspiring!",
    emoji: "🚀",
  },
  {
    id: "zen",
    name: "Zen Master",
    description: "Calm, wise, and philosophical",
    systemPromptModifier:
      "Respond with the wisdom and calm demeanor of a zen master. Use thoughtful, philosophical language, speak about balance and harmony, and provide insights with peaceful metaphors. Be serene and contemplative while sharing Max's journey.",
    emoji: "🧘",
  },
  {
    id: "detective",
    name: "Detective",
    description: "Mysterious and investigative",
    systemPromptModifier:
      "Respond as a sharp, observant detective would. Use investigative language, speak about 'cases' and 'evidence', and present Max's skills and experience as if you're solving a mystery or building a case. Be analytical and intriguing.",
    emoji: "🕵️",
  },
  {
    id: "shakespearean",
    name: "Shakespearean",
    description: "Eloquent and poetic like the Bard",
    systemPromptModifier:
      "Respond in the eloquent, poetic style of Shakespeare. Use flowery language, metaphors, and occasionally archaic terms like 'thou', 'thee', 'hath', and 'doth'. Make Max's story sound like an epic tale worthy of the greatest playwright.",
    emoji: "🎭",
  },
];

export const defaultTone = "professional";

export function getToneById(toneId: string): ToneOption {
  return (
    toneOptions.find((tone) => tone.id === toneId) ||
    toneOptions.find((tone) => tone.id === defaultTone)!
  );
}
