import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import type { JSX, ReactNode } from "react";
import { Suspense } from "react";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Max B - Full Stack Developer & Designer",
  description:
    "Personal portfolio showcasing my work in web development, design, and technology. Chat with my AI assistant to learn more about my experience and projects.",
  keywords: [
    "developer",
    "designer",
    "portfolio",
    "full stack",
    "web development",
  ],
  authors: [{ name: "Max B" }],
  openGraph: {
    title: "Max B - Full Stack Developer & Designer",
    description:
      "Personal portfolio showcasing my work in web development, design, and technology.",
    type: "website",
  },
};

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
