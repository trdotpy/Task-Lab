import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { IconChevronDown, IconUserPlus, IconLogout } from "@tabler/icons-react";
import Tooltip from "./Tooltip/Tooltip";

export default function Navbar() {
  const { user } = useUser();

  console.log(user);

  return (
    <>
      <nav className="sticky top-0 border-b border-gray-200">
        <div className="px-4">
          <div className="relative flex h-14 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="text-lg font-semibold text-gray-600">
                  {user?.given_name}&apos;s Lab
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
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-jet-300 hover:bg-jet-100 hover:text-jet-600"
                  >
                    <Tooltip>API</Tooltip>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hs-dropdown hs-dropdown-toggle flex cursor-pointer items-center rounded py-1 px-2">
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
              <div
                class="hs-dropdown-menu duration mt-2 hidden min-w-[10rem] divide-y divide-gray-200 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 "
                aria-labelledby="hs-dropdown-with-dividers"
              >
                <div class="py-2 first:pt-0 last:pb-0">
                  <Tooltip>
                    <button class="flex items-center gap-x-3.5 rounded-md py-1 px-3 text-sm text-gray-400 focus:ring-2 focus:ring-blue-500">
                      <IconUserPlus className="mx-1 h-5 w-5" />
                      Invite Team Members
                    </button>
                  </Tooltip>
                </div>

                <div class="py-2 first:pt-0 last:pb-0">
                  <Link
                    class="flex items-center gap-x-3.5 rounded-md py-1 px-3 text-sm text-jet-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    href="/api/auth/logout"
                  >
                    <IconLogout className="mx-1 h-5 w-5" />
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
