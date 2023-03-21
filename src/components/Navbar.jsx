import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Navbar() {
  const { user } = useUser();

  // console.log(user);

  return (
    <nav className="sticky top-0 border-b border-gray-200">
      <div className="px-2 sm:px-6 lg:px-12">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-lg font-semibold text-gray-600">
                Dashboard
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/trdotpy/Task-Lab"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-300 hover:text-gray-900"
                >
                  Documentation
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-300 hover:text-gray-900"
                >
                  API
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="grid cursor-pointer rounded px-4 text-right hover:bg-gray-300">
              <span className="text-sm text-gray-800">{user?.name}</span>
              <span className="text-xs text-gray-500">{user?.email}</span>
            </div>
            <img
              src={user?.picture}
              alt={user?.name}
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
