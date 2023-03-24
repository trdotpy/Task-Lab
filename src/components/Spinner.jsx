import React from "react";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="h-32 w-32 animate-pulse rounded-full border-4 border-double border-violet-500"></div>
    </div>
  );
}
