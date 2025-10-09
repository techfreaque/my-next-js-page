import { ModelId } from "utils/model-config";
import { ToneId } from "utils/tone-config";
import { z } from "zod";

/**
 * Schema for individual chat messages.
 * Validates message structure and ensures content is not empty.
 */
export const MessageSchema = z.object({
  /** Message role: user, assistant, or system */
  role: z.enum(["user", "assistant", "system"]),
  /** Message content - must not be empty */
  content: z.string().min(1, "Message content cannot be empty"),
});

/**
 * Schema for complete chat requests.
 * Validates the entire request structure with strict limits and defaults.
 */
export const ChatRequestSchema = z.object({
  /** Array of chat messages - limited to prevent abuse */
  messages: z
    .array(MessageSchema)
    .min(1, "At least one message is required")
    .max(50, "Too many messages in conversation"),
  /** Optional tone selection with professional default */
  tone: z.enum(ToneId).optional().default(ToneId.PROFESSIONAL),
  /** Model selection with GPT-5 Nano default */
  model: z.enum(ModelId).default(ModelId.GPT_5_NANO),
});

/** Type definition for validated chat requests */
export type ChatRequest = z.infer<typeof ChatRequestSchema>;

/** Type definition for individual chat messages */
export type Message = z.infer<typeof MessageSchema>;

/**
 * Schema for API error responses.
 * Provides consistent error structure across all endpoints.
 */
export const ErrorResponseSchema = z.object({
  /** Error type or category */
  error: z.string(),
  /** Human-readable error message */
  message: z.string(),
  /** Optional error code for programmatic handling */
  code: z.string().optional(),
});

/** Type definition for API error responses */
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;

/**
 * Custom error class for API validation failures.
 * Extends the standard Error class with additional context for API responses.
 */
export class APIValidationError extends Error {
  /**
   * Creates a new API validation error.
   *
   * @param message - Human-readable error message
   * @param code - Error code for programmatic handling
   * @param statusCode - HTTP status code for the response
   */
  constructor(
    message: string,
    public code = "VALIDATION_ERROR",
    public statusCode = 400,
  ) {
    super(message);
    this.name = "APIValidationError";
  }
}

/**
 * Helper function to create standardized error responses.
 * Ensures consistent error format across all API endpoints.
 *
 * @param error - Error type or category
 * @param message - Human-readable error message
 * @param code - Optional error code for programmatic handling
 * @returns Standardized error response object
 */
export function createErrorResponse(
  error: string,
  message: string,
  code?: string,
): ErrorResponse {
  return {
    error,
    message,
    code,
  };
}

/**
 * Validates incoming chat requests against the schema.
 * Provides custom error messages for security and user experience.
 *
 * @param data - Raw request data to validate
 * @returns Validated and typed chat request
 * @throws APIValidationError when validation fails
 */
export function validateChatRequest(data: ChatRequest): ChatRequest {
  const result = ChatRequestSchema.safeParse(data);

  if (!result.success) {
    const issues = result.error.issues.map((issue) => {
      if (issue.path.includes("model")) {
        return `Invalid model. Nice try hackerman! 🕵️ Valid models: ${Object.values(ModelId).join(", ")}`;
      }
      if (issue.path.includes("tone")) {
        return `Invalid tone. Valid tones: ${Object.values(ToneId).join(", ")}`;
      }
      return `${issue.path.join(".")}: ${issue.message}`;
    });

    const error = new APIValidationError(
      `Validation failed: ${issues.join("; ")}`,
      "INVALID_REQUEST",
      400,
    );
    // eslint-disable-next-line no-restricted-syntax
    throw error;
  }

  return result.data;
}
