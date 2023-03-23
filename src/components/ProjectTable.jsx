import { IconDotsVertical, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

export default function ProjectTable({ board, handleBoardDelete }) {
  return (
    <tr>
      <td className="whitespace-nowrap p-4 text-sm font-medium">
        <Link href={`/boards/${board?._id}`}>
          <h2 className="text-base font-normal text-jet-700 underline-offset-8 hover:underline">
            {board?.title}
          </h2>
        </Link>
        <div className="mt-4 flex items-center justify-start">
          <img
            className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
          <img
            className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
          <img
            className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
            alt=""
          />

          <p className="-mx-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs text-blue-600">
            +4
          </p>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
        <div className="inline gap-x-2 rounded  px-3 py-1 text-sm font-normal">
          {new Date(board?.createdAt).toLocaleDateString()}
        </div>
      </td>

      <td className="whitespace-nowrap p-4 text-sm">
        <div>
          <div className="h-1.5 w-48 overflow-hidden rounded-full bg-seagreen-200">
            <div
              className="h-1.5 bg-seagreen-400"
              style={{
                width: `${Math.floor(Math.random() * 100)}%`,
              }}
            ></div>
          </div>
        </div>
      </td>

      <td className="p-4">
        <p className="text-xs text-jet-300">{board?.description}</p>
      </td>

      <td className="whitespace-nowrap p-4 text-sm">
        <div className="hs-dropdown relative inline-flex gap-x-2">
          <button
            id="hs-dropdown-custom-icon-trigger"
            type="button"
            className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-1 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
          >
            <IconDotsVertical className="h-5 w-5 text-jet-200" />
          </button>

          <div
            className="hs-dropdown-menu duration z-20 mt-2 hidden rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
            aria-labelledby="hs-dropdown-custom-icon-trigger"
          >
            <button className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
              Edit Project
            </button>

            <button
              className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
              onClick={() => handleBoardDelete(board._id)}
            >
              Delete Project
            </button>
          </div>
          <Link href={`/boards/${board?._id}`}>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-white p-1 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white">
              <IconExternalLink className="h-5 w-5 text-jet-400" />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
}
