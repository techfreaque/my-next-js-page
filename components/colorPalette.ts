export const pageColors = {
  primary: "#3b82f6", // blue-500 - vibrant and accessible
  accent: "#8b5cf6", // violet-500 - vibrant accent
  success: "#10b981", // emerald-500
  warning: "#f59e0b", // amber-500
  danger: "#ef4444", // red-500
};

export const fancyColor =
  "linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6)";

export function getFancyColorsStyle(
  isHover: boolean | undefined,
): Record<string, string | number> {
  return {
    color: "transparent",
    backgroundImage: fancyColor,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "-200%",
    transition: "background-position ease-in-out 2s",
    ...(isHover
      ? {
          backgroundPosition: "200%",
        }
      : {}),
  };
}

export function getFancySubtitleStyle(
  isHover: boolean,
  colorScheme: "primary" | "accent" | "success" | "warning" = "primary",
): Record<string, string | number> {
  const colorSchemes = {
    primary: `linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)`,
    accent: `linear-gradient(to right, #8b5cf6, #ec4899, #f59e0b, #8b5cf6)`,
    success: `linear-gradient(to right, #10b981, #06b6d4, #3b82f6, #10b981)`,
    warning: `linear-gradient(to right, #f59e0b, #ec4899, #8b5cf6, #f59e0b)`,
  };

  return {
    color: "transparent",
    backgroundImage: colorSchemes[colorScheme],
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "-200%",
    transition: "background-position ease-in-out 2s",
    ...(isHover
      ? {
          backgroundPosition: "200%",
        }
      : {}),
  };
}
