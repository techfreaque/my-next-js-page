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
        "default":
          "border-transparent bg-blue-500/10 text-blue-600 dark:text-blue-400 [a&]:hover:bg-primary/90",
        "sectionBadge":
          "px-4 py-2 text-sm rounded-full border-transparent bg-blue-500/10 text-blue-600 dark:text-blue-400 [a&]:hover:bg-primary/90",
        "destructive":
          "border-transparent bg-destructive/10 text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        "outline":
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "fancy":
          "border-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 text-white shadow-sm [a&]:hover:shadow-md [a&]:hover:scale-105 transition-all duration-200",
        "fancy-outline":
          "border-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 [a&]:hover:bg-blue-100 dark:[a&]:hover:bg-blue-900/30 [a&]:hover:scale-105 transition-all duration-200",
        "tech":
          "border-transparent bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 [a&]:hover:bg-emerald-100 dark:[a&]:hover:bg-emerald-900/30 [a&]:hover:scale-105 transition-all duration-200",
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
