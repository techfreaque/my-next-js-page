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

// Navbar-specific styling functions for consistency
export function getNavItemClasses(isActive: boolean): string {
  if (isActive) {
    // Active state: filled with fancy gradient background
    return "text-white bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 shadow-lg shadow-blue-500/25";
  }
  // Inactive state: subtle colors with fancy gradient on hover
  return "text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-500/80 hover:via-violet-500/80 hover:to-blue-500/80 hover:shadow-md hover:shadow-blue-500/20";
}

export function getNavButtonClasses(
  variant: "primary" | "secondary" | "ghost" = "ghost",
): string {
  const baseClasses =
    "group relative transition-all duration-300 hover:scale-105";

  switch (variant) {
    case "primary":
      // Primary button: filled with fancy gradient
      return `${baseClasses} bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30`;
    case "secondary":
      // Secondary button: outline with fancy gradient border and text
      return `${baseClasses} border-2 border-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-clip-border text-transparent bg-clip-text hover:text-white hover:bg-clip-padding hover:shadow-lg hover:shadow-blue-500/25`;
    case "ghost":
    default:
      // Ghost button: subtle with fancy gradient on hover
      return `${baseClasses} text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-violet-500/20 hover:to-blue-500/20 hover:shadow-md hover:shadow-blue-500/20`;
  }
}

export function getThemeToggleClasses(): string {
  return "group relative transition-all duration-300 hover:scale-105 text-muted-foreground hover:text-violet-400 hover:bg-gradient-to-r hover:from-violet-500/20 hover:via-pink-500/20 hover:to-violet-500/20 hover:shadow-md hover:shadow-violet-500/20";
}
