import type { JSX } from "react";
import React from "react";

export function BackgroundDecorations(): JSX.Element {
  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-float" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-violet-500/10 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </>
  );
}
