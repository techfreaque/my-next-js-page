import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { createRainbowTextStyle } from "lib/design-system";
import { cn } from "lib/utils";
import type { ComponentProps, JSX } from "react";
import React, { forwardRef, useState } from "react";

export const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        "default":
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        "destructive":
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        "outline":
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        "secondary":
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        "ghost":
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        "link": "text-primary underline-offset-4 hover:underline",
        "fancy":
          "bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300",
        "fancy-outline":
          "border-2 border-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-clip-border hover:text-white hover:bg-clip-padding hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 [&_svg]:text-blue-500 hover:[&_svg]:text-white [&_svg]:transition-colors [&_svg]:duration-300",
        "fancy-ghost":
          "text-slate-600 dark:text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-violet-500/20 hover:to-blue-500/20 hover:shadow-md hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300",
        "rainbow":
          "border-2 border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 [&_svg]:!text-blue-500 hover:[&_svg]:!text-violet-500 [&_svg]:transition-colors [&_svg]:duration-300",
        "collaborate":
          "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300",
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
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant,
      size,
      asChild = false,
      isHover = false,
      children,
      setIsHover,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref,
  ): JSX.Element {
    const [internalHover, setInternalHover] = useState(false);
    const Comp = asChild ? Slot : "button";

    // Use external hover state if provided, otherwise use internal state
    const currentHover = isHover || internalHover;

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if (setIsHover) {
        setIsHover(true);
      } else {
        setInternalHover(true);
      }
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if (setIsHover) {
        setIsHover(false);
      } else {
        setInternalHover(false);
      }
      onMouseLeave?.(e);
    };

    // Apply rainbow text effect as inline style to the button itself
    const rainbowStyle =
      variant === "rainbow" || variant === "fancy-outline"
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
  },
);
