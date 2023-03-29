import React from "react";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="h-32 w-32 animate-spin rounded-full border-4 border-dashed border-bitter-500"></div>
    </div>
  );
}
