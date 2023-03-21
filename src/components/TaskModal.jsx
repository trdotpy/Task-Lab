import { IconX } from "@tabler/icons-react";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Comments from "./Comments";
import Dropdown from "./StatusDropdown";

export default function TaskModal({
  title,
  description,
  status,
  setShowModal,
  showModal,
}) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center">
      <div className="fixed top-0 left-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center justify-center transition-all ease-out sm:mx-auto sm:w-full sm:max-w-4xl">
          <div className="flex flex-col rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div className="py-3 px-4">
              <div className="flex items-center justify-between">
                <Breadcrumb title={title} />
                <button
                  type="button"
                  className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <IconX />
                </button>
              </div>

              <div className="items-center">
                <h3 className="text-2xl font-semibold text-gray-700">
                  {title}
                </h3>
                <div className="w-1/6">
                  <p className="rounded bg-yellow-200 py-1.5 px-2 text-xs font-medium text-gray-800">
                    {status}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex overflow-y-auto p-4">
              {/* Left */}
              <div className="w-2/3">
                <h3 className="text-sm font-medium uppercase text-gray-700">
                  Description
                </h3>
                <p className="text-sm text-gray-400">{description}</p>

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
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="lead"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Team
                  </h3>
                  <div className="flex -space-x-1">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="assignee"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
                      src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="assignee"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-500"
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
            <div className="flex items-center justify-end gap-x-2 py-3 px-4 ">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border bg-white py-2 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white  "
              >
                Close
              </button>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay element */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-full bg-gray-800 bg-opacity-20 transition-opacity ${
          showModal ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </div>
  );
}
