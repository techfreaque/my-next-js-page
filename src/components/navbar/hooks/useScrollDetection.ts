import { PAGE_SECTIONS } from "lib/constants";
import { useEffect, useState } from "react";

import { ACTIVE_SECTION_OFFSET, SCROLL_THRESHOLD } from "../constants";

/**
 * Custom hook for detecting scroll position and active section
 * Manages navbar background changes and active navigation item highlighting
 *
 * @returns Object containing scroll state and active section
 */
export function useScrollDetection(): {
  isScrolled: boolean;
  activeSection: string;
} {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    /**
     * Handles scroll events to update navbar appearance and active section
     */
    const handleScroll = (): void => {
      // Update navbar background based on scroll position
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + ACTIVE_SECTION_OFFSET;

      for (const section of Object.values(PAGE_SECTIONS)) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on unmount
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isScrolled,
    activeSection,
  };
}
