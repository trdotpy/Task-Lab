import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white p-4">
        <Sidebar />
      </aside>

      <div className="flex w-full flex-col">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow px-20 py-8">{children}</main>
      </div>
    </div>
  );
}
