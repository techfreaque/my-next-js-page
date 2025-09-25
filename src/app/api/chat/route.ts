import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import type { ModelMessage } from "ai";
import { streamText } from "ai";
import type { ChatRequest } from "lib/api-validation";
import {
  APIValidationError,
  createErrorResponse,
  validateChatRequest,
} from "lib/api-validation";
import { env } from "lib/env";
import type { NextRequest } from "next/server";
import { getModelById } from "utils/model-config";
import { generateSystemPrompt } from "utils/system-prompt";

/** Maximum duration for streaming responses (60 seconds) */
export const maxDuration = 60;

/** OpenRouter client instance for AI model access */
const openrouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

export async function POST(req: NextRequest): Promise<Response> {
  // Parse and validate the request with Zod schema validation
  const rawData = (await req.json()) as ChatRequest;
  const { messages, tone, model: modelId } = validateChatRequest(rawData);

  // Get the selected model configuration from our curated list
  const selectedModel = getModelById(modelId);

  // Convert messages to the format expected by the AI SDK
  const formattedMessages: ModelMessage[] = messages.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  // Stream the response using the selected model and tone-specific system prompt
  try {
    const result = streamText({
      model: openrouter.chat(selectedModel.openRouterModel),
      messages: formattedMessages,
      system: generateSystemPrompt(tone),
    });

    // Check stream for errors BEFORE returning response
    const stream = result.fullStream;

    for await (const chunk of stream) {
      if (chunk.type === "error") {
        // Extract error message
        let errorMessage = "AI service error";

        if (chunk.error && typeof chunk.error === "object") {
          // Try to extract from responseBody (OpenRouter errors)
          if (
            "responseBody" in chunk.error &&
            typeof chunk.error.responseBody === "string"
          ) {
            try {
              const errorData = JSON.parse(chunk.error.responseBody) as {
                error?: { message?: string };
              };
              errorMessage = errorData.error?.message || errorMessage;
            } catch {
              // Ignore JSON parse errors
            }
          }

          // Fallback to error.message if available
          if (
            "message" in chunk.error &&
            typeof chunk.error.message === "string"
          ) {
            errorMessage = chunk.error.message;
          }
        }

        // Return HTTP error response
        return Response.json(
          createErrorResponse("AI Service Error", errorMessage, "AI_ERROR"),
          { status: 400 },
        );
      }
    }

    // No errors, return stream
    return result.toTextStreamResponse();
  } catch (error) {
    if (error instanceof APIValidationError) {
      return Response.json(
        createErrorResponse(error.name, error.message, error.code),
        { status: error.statusCode },
      );
    }

    return Response.json(
      createErrorResponse(
        "Server Error",
        "Internal server error",
        "SERVER_ERROR",
      ),
      { status: 500 },
    );
  }
}
