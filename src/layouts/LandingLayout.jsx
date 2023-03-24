import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

export default function LandingLayout({ children }) {
  return (
    <>
      <Head>
        <title>TaskLab | Project Management</title>
        <meta name="description" content="TaskLab | Project Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col justify-between">
        <Header />
        <div className="flex min-h-screen w-full flex-col justify-center">
          <main className="mb-auto flex-grow bg-gray-50">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
