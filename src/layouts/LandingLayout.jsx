import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

export default function LandingLayout({ children }) {
  return (
    <>
      <Head>
        <title>TaskLab | Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Header />
        <div className="flex w-full flex-col">
          <main className="flex-grow px-20">{children}</main>
        </div>
      </div>
    </>
  );
}