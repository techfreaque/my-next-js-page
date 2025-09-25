/**
 * Simple navigation styling utilities
 */

import { createRainbowTextStyle } from "lib/design-system";
import type { CSSProperties } from "react";

export function getFancyColorsStyle(isHover: boolean): CSSProperties {
  return createRainbowTextStyle(isHover, "primary");
}
