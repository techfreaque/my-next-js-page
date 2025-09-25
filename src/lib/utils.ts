import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges CSS classes using clsx and tailwind-merge.
 * This function is essential for conditional styling with Tailwind CSS,
 * ensuring proper class precedence and removing duplicate classes.
 *
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns Merged and optimized class string
 *
 * @example
 * ```typescript
 * cn("px-4 py-2", "bg-blue-500", { "text-white": isActive })
 * // Returns: "px-4 py-2 bg-blue-500 text-white" (if isActive is true)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
