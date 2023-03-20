import React from "react";

export default function NewLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex w-full flex-col">
        {/* <header>
          <Navbar />
        </header> */}

        <main className="flex-grow px-20">{children}</main>
      </div>
    </div>
  );
}
