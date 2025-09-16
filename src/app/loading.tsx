import type { JSX } from "react";
import React from "react";

import LoadingCat from "@/src/components/loading-cat";

export default function Loading(): JSX.Element {
  return <LoadingCat loading={true} />;
}
