import LoadingCat from "components/loading-cat";
import type { JSX } from "react";
import React from "react";

/**
 * Loading page component used by Next.js during page transitions.
 * Shows a loading animation while content is being prepared.
 *
 * @returns Loading animation component
 */
export default function Loading(): JSX.Element {
  return <LoadingCat loading={true} />;
}
