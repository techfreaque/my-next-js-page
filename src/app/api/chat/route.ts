import type { ModelMessage } from "@ai-sdk/provider-utils";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

import { env } from "@/src/lib/env";
import { generateSystemPrompt } from "@/src/utils/system-prompt";

// Allow streaming responses up to 30 seconds
export const maxDuration = 60;

const openrouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

export async function POST(req: Request): Promise<Response> {
  const { messages, tone } = (await req.json()) as {
    messages: ModelMessage[];
    tone?: string;
  };

  const result = streamText({
    model: openrouter.chat("openai/gpt-5-nano"),
    messages,
    system: generateSystemPrompt(tone),
  });

  return result.toTextStreamResponse();
}
