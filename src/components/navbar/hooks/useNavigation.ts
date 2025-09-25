import type { MouseEvent } from "react";
import { useCallback } from "react";

import type { PageSection } from "../constants";
import { SCROLL_OFFSET } from "../constants";

/**
 * Custom hook for navigation functionality
 * Handles smooth scrolling to sections and menu state management
 *
 * @param closeMobileMenu - Function to close the mobile menu
 * @returns Navigation handler function
 */
export function useNavigation(closeMobileMenu: () => void): {
  handleNavClick: (
    e: MouseEvent<HTMLAnchorElement>,
    pageId: PageSection,
  ) => void;
} {
  /**
   * Handles navigation clicks with smooth scrolling
   * Prevents default link behavior and implements smooth scroll to target section
   *
   * @param e - Mouse event from the navigation link
   * @param href - Target href (e.g., "#about")
   */
  const handleNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, pageId: PageSection): void => {
      e.preventDefault();

      // Extract section ID from href
      const targetElement = document.getElementById(`#${pageId}`);

      if (targetElement) {
        // Calculate scroll position accounting for fixed header
        const offsetTop = targetElement.offsetTop - SCROLL_OFFSET;

        // Smooth scroll to target
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // Close mobile menu after navigation
      closeMobileMenu();
    },
    [closeMobileMenu],
  );

  return {
    handleNavClick,
  };
}
