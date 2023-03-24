import { IconMenu2, IconMinus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="z-50 flex w-full flex-wrap border-b bg-transparent py-3 text-sm sm:flex-nowrap sm:justify-start">
        <nav
          className="relative mx-auto w-full max-w-6xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link className="flex items-center rounded px-3 py-1" href="/">
              <Image
                src="/assets/tasklab-logo-blk.png"
                alt="TaskLab"
                height={35}
                width={35}
              />
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded border border-jet-100 p-2 align-middle text-sm font-medium text-jet-200 shadow-sm transition-all"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <IconMenu2 className="h-4 w-4 hs-collapse-open:hidden" />
                <IconMinus className="hidden h-4 w-4 hs-collapse-open:block" />
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
          >
            <div className="mt-5 flex flex-col gap-y-4 gap-x-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:pl-7">
              <div className="flex flex-col justify-center sm:flex-row">
                <button className="rounded px-3 py-1.5 text-base text-jet-800 hover:bg-gray-100">
                  Home
                </button>
                <button className="rounded px-3 py-1.5 text-base text-jet-800 hover:bg-gray-100">
                  Pricing
                </button>
                <button className="rounded px-3 py-1.5 text-base text-jet-800 hover:bg-gray-100">
                  Contact
                </button>
              </div>
              <div className="flex items-center justify-center gap-x-2 sm:ml-auto">
                <Link href="/api/auth/login">
                  <button className="inline-flex items-center justify-center gap-2 rounded border-[1px] border-jet-100 py-2 px-4 text-sm text-jet-600 transition-all hover:border-jet-400">
                    Account
                  </button>
                </Link>

                <Link className="flex items-center gap-x-2" href="/trial">
                  <button className="inline-flex items-center justify-center gap-2 rounded border-jet-100 bg-bitter-500 py-2 px-4 text-sm text-white transition-all hover:border-jet-400 hover:bg-bitter-600">
                    Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
