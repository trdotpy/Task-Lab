import {
  IconCategory2,
  IconCircleDashed,
  IconPlayerPlayFilled,
  IconUser,
  IconUserCircle,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <header className="z-50 flex w-full flex-wrap border-b border-gray-700 bg-jet-800 py-3 text-sm sm:flex-nowrap sm:justify-start">
        <nav
          className="relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link className="flex items-center" href="/">
              <IconCircleDashed className="h-8 w-auto text-[#FF6663]" />
              <h1 className="flex-none rounded px-3 py-1 text-xl font-semibold tracking-tight text-white hover:bg-gray-600">
                TaskLab
              </h1>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <IconCategory2 className="h-4 w-4 hs-collapse-open:hidden" />
                <IconX className="hidden h-4 w-4 hs-collapse-open:block" />
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
          >
            <div className="mt-5 flex flex-col gap-y-4 gap-x-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:pl-7">
              <div className="flex items-center gap-x-2 sm:ml-auto">
                <Link
                  className="flex items-center gap-x-2 font-medium"
                  href="/api/auth/login"
                >
                  <button className="flex items-center gap-x-2 rounded px-2 py-1 font-medium text-gray-300 hover:bg-gray-600">
                    Log in
                  </button>
                </Link>

                <Link
                  className="flex items-center gap-x-2 font-medium text-gray-500"
                  href="/trial"
                >
                  <button className="flex items-center gap-x-2 rounded px-2 py-1 font-medium text-gray-300 hover:bg-gray-600">
                    Trial
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
