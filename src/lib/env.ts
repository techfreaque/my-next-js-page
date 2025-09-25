/* eslint-disable no-console, node/no-process-env */
import { z } from "zod";

/**
 * Schema for validating required environment variables.
 * Add new environment variables here as the application grows.
 */
const envSchema = z.object({
  /** OpenRouter API key for AI model access */
  OPENROUTER_API_KEY: z.string().min(1, "OPENROUTER_API_KEY is required"),
});

/**
 * Validates environment variables against the schema.
 * Provides detailed error messages for missing or invalid variables.
 *
 * @returns Validated environment variables object
 * @throws Exits the process with code 1 if validation fails
 */
function validateEnvironment(): z.infer<typeof envSchema> {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err) => `${err.path.join(".")}: ${err.message}`,
      );

      console.error(
        `Server environment validation failed:\n${errorMessages.join("\n")}`,
      );
    } else {
      console.error(
        `Server environment validation error: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    process.exit(1);
  }
}

/**
 * Validated environment variables object.
 * Use this instead of process.env to ensure type safety and validation.
 */
export const env = validateEnvironment();
