import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ boardTitle, taskTitle }) {
  return (
    <div>
      <ol
        className="flex items-center whitespace-nowrap"
        aria-label="Breadcrumb"
      >
        <li className="text-xs lg:text-sm">
          <Link
            className="flex items-center text-jet-200 hover:text-bice-600"
            href="/boards"
          >
            Boards
            <IconChevronRight className="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-jet-200" />
          </Link>
        </li>
        {boardTitle && (
          <li
            className="truncate text-xs text-jet-200 lg:text-sm"
            aria-current="page"
          >
            {boardTitle}
          </li>
        )}
        {taskTitle && (
          <>
            <IconChevronRight className="mx-3 h-3.5 w-3.5 flex-shrink-0 overflow-visible text-jet-200" />
            <li
              className="truncate text-xs text-jet-200 lg:text-sm"
              aria-current="page"
            >
              {taskTitle}
            </li>
          </>
        )}
      </ol>
    </div>
  );
}
