import "./styles.css";

import type { JSX } from "react";
import React from "react";

interface LoadingCatProps {
  loading: boolean;
}

export default function LoadingCat({
  loading,
}: LoadingCatProps): JSX.Element | null {
  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-[0] w-screen h-screen bg-background z-[999999] flex items-center justify-center m-0 p-0">
      <div className="cat">
        <div className="cat__body" />
        <div className="cat__body" />
        <div className="cat__tail" />
        <div className="cat__head" />
      </div>
    </div>
  );
}
