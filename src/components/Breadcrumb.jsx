import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

export default function Breadcrumb({ title }) {
  return (
    <div>
      <ol
        className="flex min-w-0 items-center whitespace-nowrap"
        aria-label="Breadcrumb"
      >
        <li className="text-sm">
          <a
            className="flex items-center text-gray-500 hover:text-blue-600"
            href="#"
          >
            Dashboard
            <IconChevronRight className="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-gray-400" />
          </a>
        </li>
        <li className="text-sm">
          <a
            className="flex items-center text-gray-500 hover:text-blue-600"
            href="#"
          >
            Projects
            <IconChevronRight className="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-gray-400" />
          </a>
        </li>
        <li
          className="truncate text-sm font-medium text-gray-600"
          aria-current="page"
        >
          {title}
        </li>
      </ol>
    </div>
  );
}
