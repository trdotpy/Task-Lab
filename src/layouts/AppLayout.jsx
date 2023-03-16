import Sidebar from "@/components/Board/Sidebar";
import React from "react";

export default function AppLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4 p-4">{children}</div>
    </div>
  );
}
