"use client";

import { createRainbowTextStyle, type RainbowVariant } from "lib/rainbow-style";
import { cn } from "lib/utils";
import React, { useState } from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  customSizeClassName?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  isHover?: boolean;
  variant?: RainbowVariant;
  setIsHover?: (hover: boolean) => void;
  useRainbow?: boolean; // When false, uses normal text color
}

export function Title({
  children,
  className = "",
  customSizeClassName,
  level,
  isHover = false,
  variant = "primary",
  setIsHover,
  useRainbow = true,
}: TitleProps): React.JSX.Element {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const [internalHover, setInternalHover] = useState(false);

  // Use external hover state if provided, otherwise use internal state
  const currentHover = isHover || internalHover;

  const handleHover = (_isHover: boolean): void => {
    if (setIsHover) {
      setIsHover(_isHover);
    } else {
      setInternalHover(_isHover);
    }
  };

  const rainbowStyle = useRainbow
    ? createRainbowTextStyle(currentHover, variant)
    : {};

  return (
    <Tag
      className={cn(
        "leading-tight transition-all duration-300",
        customSizeClassName || sizeClasses[level],
        className,
      )}
      style={rainbowStyle}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {children}
    </Tag>
  );
}

const sizeClasses = {
  1: "text-4xl sm:text-5xl lg:text-6xl font-bold",
  2: "text-3xl sm:text-4xl lg:text-4xl font-bold",
  3: "text-xl sm:text-2xl lg:text-3xl font-semibold",
  4: "text-lg sm:text-xl lg:text-2xl font-semibold",
  5: "text-base sm:text-lg lg:text-xl font-medium",
  6: "text-sm sm:text-base lg:text-lg font-medium",
};
