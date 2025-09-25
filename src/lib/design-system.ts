import type { CSSProperties } from "react";

export type RainbowVariant =
  | "primary"
  | "success"
  | "info"
  | "accent"
  | "warning"
  | "sub1"
  | "sub2";

/**
 * Creates a rainbow text style object for use in React components.
 * This function generates inline styles for creating a gradient effect
 * on text, with optional hover animation.
 *
 * @param isHover - Whether the element is in a hover state
 * @param variant - Optional color variant for the gradient
 * @returns CSSProperties object with gradient styling
 */
export function createRainbowTextStyle(
  isHover: boolean,
  variant: RainbowVariant = "primary",
): CSSProperties {
  const gradients = {
    primary: "var(--rainbow-gradient)",
    success: "var(--rainbow-gradient-alt1)",
    info: "var(--rainbow-gradient-alt2)",
    accent: "var(--rainbow-gradient-alt3)",
    warning: "var(--rainbow-gradient-alt4)",
    sub1: "var(--rainbow-gradient-alt2)",
    sub2: "var(--rainbow-gradient-alt3)",
  };

  return {
    color: "transparent",
    backgroundImage: gradients[variant],
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: isHover ? "200%" : "-200%",
    transition: "background-position ease-in-out 2s",
  };
}
