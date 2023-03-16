import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="ml-8 bg-gray-800">
        <Navbar />
        <div className="px-8">{children}</div>
      </div>
    </div>
  );
}
