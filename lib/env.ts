import { z } from "zod";

const envSchema = z.object({
  OPENROUTER_API_KEY: z.string().min(1, "OPENROUTER_API_KEY is required"),
});

function validateEnvironment(): z.infer<typeof envSchema> {
  try {
    // eslint-disable-next-line node/no-process-env
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err) => `${err.path.join(".")}: ${err.message}`,
      );

      // eslint-disable-next-line no-console
      console.error(
        `Server environment validation failed:\n${errorMessages.join("\n")}`,
      );
    } else {
      // eslint-disable-next-line no-console
      console.error(
        `Server environment validation error: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    // eslint-disable-next-line no-restricted-syntax
    throw error;
  }
}

export const env = validateEnvironment();
