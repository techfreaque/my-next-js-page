"use client";

import { Button } from "components/ui/button";
import { ArrowUp } from "lucide-react";
import type { JSX } from "react";
import React, { useEffect, useState } from "react";

export function ScrollToTop(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return (): void => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      variant="rainbow"
      className="fixed bottom-8 right-8 z-50  w-12 h-12"
    >
      <ArrowUp className="size-6" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  );
}
