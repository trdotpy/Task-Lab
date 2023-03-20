import React from "react";

export default function Landing() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex w-full flex-col">
        {/* <header>
          <Navbar />
        </header> */}

        <main className="flex-grow px-20 py-8">{children}</main>
      </div>
    </div>
  );
}
