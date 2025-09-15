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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
      className="dark:!bg-slate-900"
    >
      <div className="cat">
        <div className="cat__body" />
        <div className="cat__body" />
        <div className="cat__tail" />
        <div className="cat__head" />
      </div>
    </div>
  );
}
