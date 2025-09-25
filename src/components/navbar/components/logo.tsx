import { PAGE_SECTIONS } from "lib/constants";
import Image from "next/image";
import type { JSX } from "react";
import React from "react";

import logo from "./logo.png";
import logoWhite from "./logo-white.png";

/**
 * Displays the site logo with appropriate styling based on theme and hover state
 *
 * @returns JSX element representing the logo
 */
export function Logo(): JSX.Element {
  // Intentionally rendering both logo variants to make it fully static without any JS
  // prevents flickering when system theme is dark
  return (
    <div className="flex-shrink-0">
      <a
        href={`#${PAGE_SECTIONS.HOME}`}
        className="hover:opacity-80 transition-opacity"
      >
        <div className="text-4xl h-8 flex items-center fancy-title mr-0 min-[480px]:mr-6 md:mr-8">
          <Image
            src={logoWhite}
            alt="max.a42.ch logo white"
            className="h-full w-auto light:hidden"
          />
          <Image
            src={logo}
            alt="max.a42.ch logo dark"
            className="h-full w-auto dark:hidden"
          />
        </div>
      </a>
    </div>
  );
}
