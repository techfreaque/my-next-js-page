import type { CSSProperties, ReactElement } from "react";
import React from "react";

import { Button } from "@/components/ui/button";

import { getFancyColorsStyle } from "./colorPalette";

interface RainbowButtonProps {
  children: ReactElement;
  href?: string;
  isHover?: boolean;
  fontSize?: string;
  size?: "sm" | "lg" | "default" | "icon";
  style?: CSSProperties;
  className?: string;
}

export default function RainbowButton({
  children,
  href,
  isHover,
  fontSize = "25px",
  size = "lg",
  style = {},
  className,
}: RainbowButtonProps): ReactElement {
  return (
    <Button
      asChild
      size={size}
      className={`mx-auto text-center border-none mt-1 ${className || ""}`}
      style={{
        fontSize,
        ...getFancyColorsStyle(isHover),
        ...style,
      }}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}
