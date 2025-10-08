import { cn } from "lib/utils";
import type { ComponentProps, JSX } from "react";
import React from "react";

function Textarea({
  className,
  rows = 3,
  ...props
}: ComponentProps<"textarea">): JSX.Element {
  return (
    <div className="overflow-hidden rounded-t-md border-b border-border/30">
      <textarea
        data-slot="textarea"
        className={cn(
          "min-h-16 resize-none border-none bg-transparent rounded-t-md rounded-b-none focus-visible:ring-0 focus-visible:ring-offset-0 px-6 pb-4 placeholder:text-muted-foreground flex field-sizing-content w-full rounded-md border py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        rows={rows}
        {...props}
      />
    </div>
  );
}

export { Textarea };
