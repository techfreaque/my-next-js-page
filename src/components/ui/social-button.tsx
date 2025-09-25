import { cn } from "lib/utils";
import type { ComponentProps, JSX } from "react";
import React from "react";

interface SocialButtonProps extends ComponentProps<"a"> {
  children: React.ReactNode;
  isHover?: boolean;
}

export function SocialButton({
  children,
  className,
  isHover = false,
  ...props
}: SocialButtonProps): JSX.Element {
  return (
    <a
      className={cn(
        "text-white/80 hover:text-white transition-all duration-300 p-3 rounded-full backdrop-blur-sm border transform hover:scale-110",
        "bg-white/20 hover:bg-white/30 border-white/20 hover:border-white/40",
        "hover:shadow-lg hover:shadow-white/20",
        isHover &&
          "scale-110 bg-white/30 border-white/40 shadow-lg shadow-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
