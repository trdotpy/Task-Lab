import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

export default function Dropdown({ status }) {
  return (
    <div class="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-with-icons"
        type="button"
        class="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white py-3 px-4 align-middle text-xs font-medium uppercase text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2  focus:ring-offset-white"
      >
        {status}

        <IconChevronDown className="h-4 w-4 text-gray-600 hs-dropdown-open:rotate-180" />
      </button>

      <div
        class="hs-dropdown-menu duration mt-2 hidden min-w-[15rem] divide-y divide-gray-200 rounded-sm bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
        aria-labelledby="hs-dropdown-with-icons"
      >
        <div class="py-2 first:pt-0 last:pb-0">
          <a
            class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-xs uppercase text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            href="#"
          >
            Backlog
          </a>
          <a
            class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-xs uppercase text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            href="#"
          >
            In Progress
          </a>
          <a
            class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-xs uppercase text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            href="#"
          >
            Testing
          </a>
          <a
            class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-xs uppercase text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            href="#"
          >
            Complete
          </a>
        </div>
      </div>
    </div>
  );
}
