import { IconX } from "@tabler/icons-react";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Comments from "./Comments";
import Dropdown from "./Dropdown";

export default function TaskModal({
  title,
  description,
  name,
  date,
  status,
  contact,
}) {
  return (
    <div>
      <div
        id="hs-vertically-centered-modal"
        class="hs-overlay fixed top-0 left-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div class="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-5xl">
          <div class="flex flex-col rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div class="py-3 px-4">
              <div className="flex items-center justify-between">
                <Breadcrumb title={title} />
                <button
                  type="button"
                  class="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white "
                  data-hs-overlay="#hs-vertically-centered-modal"
                >
                  <span class="sr-only">Close</span>
                  <IconX />
                </button>
              </div>

              <h3 class="text-2xl font-semibold text-gray-700">{title}</h3>
            </div>

            <div class="flex overflow-y-auto p-4">
              {/* Left */}
              <div className="w-2/3">
                <h3 className="text-sm font-medium uppercase text-gray-700">
                  Description
                </h3>
                <p class="text-sm text-gray-400">{description}</p>

                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Comments
                  </h3>
                  <Comments />
                </div>
              </div>

              {/* Right */}
              <div className="ml-8 border-l px-8">
                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Project Lead
                  </h3>
                  <img
                    class="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="lead"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Team
                  </h3>
                  <div class="flex -space-x-1">
                    <img
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="assignee"
                    />
                    <img
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
                      src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="assignee"
                    />
                    <img
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
                      src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                      alt="assignee"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Priority
                  </h3>
                  <p>❗️</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Status
                  </h3>
                  <Dropdown status={status} />
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div class="flex items-center justify-end gap-x-2 py-3 px-4 ">
              <button
                type="button"
                class="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white py-2 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white  "
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                Close
              </button>
              <a
                class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
