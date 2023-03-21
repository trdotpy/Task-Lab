import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

export default function Breadcrumb({ title }) {
  return (
    <div>
      <ol
        className="flex items-center whitespace-nowrap"
        aria-label="Breadcrumb"
      >
        <li className="text-xs lg:text-sm">
          <a
            className="flex items-center text-jet-200 hover:text-bice-600"
            href="#"
          >
            Dashboard
            <IconChevronRight className="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-jet-200" />
          </a>
        </li>
        <li className="text-xs lg:text-sm">
          <a
            className="flex items-center text-jet-200 hover:text-bice-600"
            href="#"
          >
            Projects
            <IconChevronRight className="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-jet-200" />
          </a>
        </li>
        <li
          className="truncate text-xs text-jet-200 lg:text-sm"
          aria-current="page"
        >
          {title}
        </li>
      </ol>
    </div>
  );
}
