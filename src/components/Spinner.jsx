import React from "react";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-bitter-500"></div>
    </div>
  );
}
