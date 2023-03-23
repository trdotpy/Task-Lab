import MobileSidebar from "@/components/Sidebar/MobileSidebar";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>TaskLab | Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen bg-gray-50">
        <aside className="px-4">
          <Sidebar />
          <MobileSidebar />
        </aside>

        <div className="relative ml-16 flex w-full flex-col sm:ml-60">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow py-8 px-4 bg-gray-50">{children}</main>
        </div>
      </div>
    </>
  );
}
