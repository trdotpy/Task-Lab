import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="sticky top-0 border-b border-gray-200">
      <div className="px-4">
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
                  className="rounded-md px-3 py-2 text-sm font-medium text-jet-300 hover:bg-jet-100 hover:text-jet-600"
                >
                  Documentation
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-jet-300 hover:bg-jet-100 hover:text-jet-600"
                >
                  Releases
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded hover:bg-jet-100">
            <div className="grid cursor-pointer px-4 text-right ">
              <p className="text-sm font-medium text-jet-400">{user?.name}</p>
              <span className="text-xs text-jet-400">{user?.email}</span>
            </div>
            <div className="relative">
              <Image
                src={user?.picture}
                alt={user?.name}
                className="h-8 w-8 rounded"
                height={32}
                width={32}
              />
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-gray-100"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
