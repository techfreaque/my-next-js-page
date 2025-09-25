import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Custom hook for managing mobile menu state and interactions
 * Handles opening/closing the menu, keyboard shortcuts, and click-outside behavior
 * Uses refs for better React practices instead of DOM queries
 *
 * @returns Object containing menu state, control functions, and refs
 */
export function useMobileMenu(): {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
} {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for menu elements
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /**
   * Toggles the mobile menu open/closed state
   */
  const toggleMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  /**
   * Closes the mobile menu
   */
  const closeMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen(false);
  }, []);

  /**
   * Handles click events outside the mobile menu
   * Closes menu when clicking outside menu area or menu button
   * Uses refs instead of DOM queries for better React practices
   */
  const handleClickOutside = useCallback(
    (event: Event): void => {
      if (!isMobileMenuOpen) {
        return;
      }

      const target = event.target as Node;

      // Check if click is inside menu or on menu button using refs
      const isClickInsideMenu = menuRef.current?.contains(target);
      const isClickOnMenuButton = menuButtonRef.current?.contains(target);

      if (!isClickInsideMenu && !isClickOnMenuButton) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen],
  );

  // Handle Escape key and click outside to close mobile menu
  useEffect(() => {
    /**
     * Handles keyboard events for menu control
     * Closes menu when Escape key is pressed
     */
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Only add listeners when menu is open for performance
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Use click instead of mousedown to allow menu item clicks to process first
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup listeners
    return (): void => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen, handleClickOutside]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    menuRef,
    menuButtonRef,
  };
}
