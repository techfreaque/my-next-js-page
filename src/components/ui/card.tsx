import { cn } from "lib/utils";
import type { ComponentProps, JSX } from "react";
import React from "react";

interface CardProps extends ComponentProps<"div"> {
  colorScheme?: "blue" | "emerald" | "violet" | "cyan" | "indigo";
  spacingClassName?: string;
  setIsHover?: (hover: boolean) => void;
}

function Card({
  className,
  colorScheme = "blue",
  setIsHover,
  ...props
}: CardProps): JSX.Element {
  const handleMouseEnter = (): void => {
    if (setIsHover) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (setIsHover) {
      setIsHover(false);
    }
  };
  const colorClasses = {
    blue: "hover:border-blue-400 dark:hover:border-blue-500",
    emerald: "hover:border-emerald-400 dark:hover:border-emerald-500",
    violet: "hover:border-violet-400 dark:hover:border-violet-500",
    cyan: "hover:border-cyan-400 dark:hover:border-cyan-500",
    indigo: "hover:border-indigo-400 dark:hover:border-indigo-500",
  };

  return (
    <div
      data-slot="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "py-6 bg-card text-card-foreground flex flex-col gap-6 border rounded-xl shadow-sm transition-all duration-500",
        "hover:shadow-lg",
        colorClasses[colorScheme],
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({
  className,
  ...props
}: ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
