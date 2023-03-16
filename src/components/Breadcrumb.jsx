import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

export default function Breadcrumb({ title }) {
  return (
    <div>
      <ol
        class="flex min-w-0 items-center whitespace-nowrap"
        aria-label="Breadcrumb"
      >
        <li class="text-sm">
          <a
            class="flex items-center text-gray-500 hover:text-blue-600"
            href="#"
          >
            Dashboard
            <IconChevronRight class="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-gray-400" />
          </a>
        </li>
        <li class="text-sm">
          <a
            class="flex items-center text-gray-500 hover:text-blue-600"
            href="#"
          >
            Tasks
            <IconChevronRight class="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-gray-400" />
          </a>
        </li>
        <li
          class="truncate text-sm font-medium text-gray-800"
          aria-current="page"
        >
          {title}
        </li>
      </ol>
    </div>
  );
}
