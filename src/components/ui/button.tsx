import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { createRainbowTextStyle } from "lib/rainbow-style";
import { cn } from "lib/utils";
import type { ComponentProps, JSX, RefObject } from "react";
import React, { useState } from "react";

export const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "hover:[&_svg]:!text-violet-500 border-2 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300",
        rainbow:
          "border-2 border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 [&_svg]:!text-blue-500 hover:[&_svg]:!text-violet-500 [&_svg]:transition-colors [&_svg]:duration-300",
        ghost:
          "hover:[&_svg]:!text-violet-500 border-2 border-transparent hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "rainbow",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isHover?: boolean;
  setIsHover?: (hover: boolean) => void;
  children?: React.ReactNode;
  ref?: RefObject<HTMLButtonElement | null>;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  isHover = false,
  children,
  setIsHover,
  onMouseEnter,
  onMouseLeave,
  ref,
  ...props
}: ButtonProps): JSX.Element {
  const [internalHover, setInternalHover] = useState(false);
  const Comp = asChild ? Slot : "button";

  // Use external hover state if provided, otherwise use internal state
  const currentHover = isHover || internalHover;

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIsHover?.(true);
    setInternalHover(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIsHover?.(false);
    setInternalHover(false);
    onMouseLeave?.(e);
  };

  const rainbowStyle =
    variant === "rainbow" || currentHover
      ? createRainbowTextStyle(currentHover, "primary")
      : {};

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={rainbowStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Comp>
  );
}
