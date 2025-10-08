import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type React from "react";
import type { JSX, ReactNode } from "react";
import { Suspense } from "react";

import { metadata as _metadata } from "../me/metadata";

/** Application metadata exported for Next.js */
export const metadata: Metadata = _metadata;

/**
 * Root layout component that wraps the entire application.
 * Sets up fonts, theme provider, and HTML structure.
 *
 * @param props.children - Child components to render
 * @returns JSX element with complete HTML structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
