"use client";

import { createRainbowTextStyle } from "lib/rainbow-style";
import { cn } from "lib/utils";
import type { JSX } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  content: string;
  className?: string;
  isHover?: boolean;
}

export function Markdown({
  content,
  className,
  isHover = false,
}: MarkdownProps): JSX.Element {
  return (
    <div className={cn("leading-relaxed max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <span
              className="text-xl font-bold mb-3 mt-4 first:mt-0 leading-tight"
              style={createRainbowTextStyle(isHover, "primary")}
            >
              {children}
            </span>
          ),
          h2: ({ children }) => (
            <span
              className="text-lg font-bold mb-2 mt-3 first:mt-0 leading-tight"
              style={createRainbowTextStyle(isHover, "primary")}
            >
              {children}
            </span>
          ),
          h3: ({ children }) => (
            <span
              className="text-base font-semibold mb-2 mt-3 first:mt-0 leading-tight"
              style={createRainbowTextStyle(isHover, "primary")}
            >
              {children}
            </span>
          ),
          h4: ({ children }) => (
            <span
              className="text-sm font-semibold mb-1 mt-2 first:mt-0"
              style={createRainbowTextStyle(isHover, "primary")}
            >
              {children}
            </span>
          ),
          h5: ({ children }) => (
            <span
              className="text-sm font-medium mb-1 mt-2 first:mt-0 tracking-wide"
              style={createRainbowTextStyle(isHover, "primary")}
            >
              {children}
            </span>
          ),

          p: ({ children }) => (
            <p className="text-sm leading-relaxed mb-3 last:mb-0 text-slate-700 dark:text-slate-300">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="space-y-2 mb-3 text-sm ml-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 mb-3 text-sm ml-4">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2">
              <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">
                •
              </span>
              <span>{children}</span>
            </li>
          ),

          strong: ({ children }) => (
            <strong
              className="font-bold"
              style={createRainbowTextStyle(isHover, "primary")}
            >
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-600 dark:text-slate-400">
              {children}
            </em>
          ),

          // Code with enhanced styling
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-slate-100 dark:bg-slate-800 text-violet-600 dark:text-violet-400 px-2 py-1 rounded-md text-xs font-mono border border-slate-200 dark:border-slate-700">
                  {children}
                </code>
              );
            }
            return (
              <code className={cn("text-xs font-mono", className)}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto mb-3 text-xs border border-slate-200 dark:border-slate-800">
              {children}
            </pre>
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-3 bg-gradient-to-r from-blue-50/50 to-violet-50/50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-r-lg mb-3 italic text-sm text-slate-700 dark:text-slate-300 shadow-sm">
              {children}
            </blockquote>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),

          table: ({ children }) => (
            <div className="overflow-x-auto mb-2">
              <table className="min-w-full border-collapse border border-border text-xs">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-muted px-2 py-1 text-left font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-2 py-1 text-foreground">
              {children}
            </td>
          ),

          hr: () => <hr className="border-border my-3" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
