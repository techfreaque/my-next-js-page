import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import type { ComponentProps, JSX } from "react";
import React from "react";

export const badgeVariants = cva(
  "inline-flex items-center gap-2 px-2 py-1 text-xs font-medium hover:scale-105 transition-all duration-300 justify-center rounded-md border w-fit shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-500/10 text-blue-600 dark:text-blue-400 [a&]:hover:bg-primary/90",
        sectionBadge:
          "px-4 py-2 text-sm rounded-full border-transparent bg-blue-500/10 text-blue-600 dark:text-blue-400 [a&]:hover:bg-primary/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }): JSX.Element {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}
