/**
 * @fileoverview Root Layout Component
 *
 * This is the root layout component for the Next.js application.
 * It sets up the HTML structure, fonts, theme provider, and global styles.
 *
 * Features:
 * - Geist font family integration (Sans and Mono variants)
 * - Theme provider for dark/light mode switching
 * - Metadata configuration from personal information
 * - Suspense boundary for loading states
 * - Hydration warning suppression for theme switching
 *
 * @author Max Brandstaetter
 * @version 2.0.0
 */

import "./globals.css";

import { ThemeProvider } from "components/theme-provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
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
 * @param props - Component props
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
