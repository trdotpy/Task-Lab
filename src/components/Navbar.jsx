import Link from "next/link";
import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import NavDropdown from "./Navbar/NavDropdown";
import { IconChevronDown } from "@tabler/icons-react";

export default function Navbar() {
  const [navDropdown, setNavDropdown] = useState(false);
  const { user } = useUser();

  const toggleNavDropdown = () => {
    setNavDropdown(!navDropdown);
  };

  return (
    <>
      <nav className="sticky top-0 border-b border-gray-200">
        <div className="px-4">
          <div className="relative flex h-14 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
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

            <div
              className="flex cursor-pointer items-center rounded py-1 px-2 hover:bg-jet-100"
              onClick={toggleNavDropdown}
            >
              <div className="relative cursor-pointer">
                <Image
                  src={user?.picture}
                  alt={user?.name}
                  className="h-8 w-8 rounded"
                  height={32}
                  width={32}
                />
                <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-gray-100"></span>
              </div>
              <div className="grid cursor-pointer px-4 text-left">
                <p className="text-xs font-medium text-jet-400">{user?.name}</p>
                <span className="text-xs text-jet-400">{user?.email}</span>
              </div>
              <IconChevronDown className="h-5 w-5" stroke={1.0} />
              {/* {navDropdown && (
                <NavDropdown
                  toggleNavDropdown={toggleNavDropdown}
                  navDropdown={navDropdown}
                  user={user}
                />
              )} */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
