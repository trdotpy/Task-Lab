import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <aside className="w-64 bg-white p-4">
        <Sidebar />
      </aside>

      <div className="flex w-full flex-col">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
