import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";

export default function NewTaskModal() {
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const createTask = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const status = e.target.status.value;
    const board = "6413767b2dd0de4e18538e12";

    try {
      await axios.post("/api/tasks", { title, status, description, board });
      closeModal();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <>
      <div
        id="hs-large-modal"
        className="hs-overlay fixed top-0 left-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:w-full sm:max-w-5xl lg:mx-auto lg:w-full">
          <div className="flex flex-col rounded-lg border bg-white py-3 px-4 shadow-sm">
            <div className="flex items-center justify-between border-b py-3 px-4">
              <h3 className="text-xl font-semibold text-gray-700">
                Create New Task
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white "
                data-hs-overlay="#hs-large-modal"
              >
                <span className="sr-only">Close</span>
                <IconX />
              </button>
            </div>

            <form className="overflow-y-auto p-4" onSubmit={createTask}>
              <div className="mb-4 flex">
                <div className="mr-2 w-1/2">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="title"
                  >
                    <h3 className="text-sm font-medium uppercase text-gray-700">
                      Title
                    </h3>
                  </label>
                  <input
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                    id="title"
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="ml-2 w-1/2">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="status"
                  >
                    <h3 className="text-sm font-medium uppercase text-gray-700">
                      Status
                    </h3>
                  </label>
                  <select
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                    id="status"
                  >
                    <option value="">Select Status</option>
                    <option value="Backlog">Backlog</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Testing">Testing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="description"
                >
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Description
                  </h3>
                </label>
                <textarea
                  className="focus:shadow-outline h-32 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                  id="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  <label
                    className="mb-2 mr-2 block text-sm font-bold text-gray-700"
                    htmlFor="date"
                  >
                    <h3 className="text-sm font-medium uppercase text-gray-700">
                      Date
                    </h3>
                  </label>
                  <input
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                    id="date"
                    type="text"
                    placeholder="Date"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="mb-2 mr-2 block text-sm font-bold text-gray-700"
                    htmlFor="priority"
                  >
                    <h3 className="text-sm font-medium uppercase text-gray-700">
                      Priority
                    </h3>
                  </label>
                  <select className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none">
                    <option value="">Select Priority</option>
                    <option value="❗️">❗️</option>
                    <option value="❗️❗️">❗️❗️</option>
                    <option value="❗️❗️❗️">❗️❗️❗️</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-5-5 1.41-1.42L10 9.17l4.59-4.59L15 7l-5 5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>

            <div className="flex items-center justify-end gap-x-2 py-3 px-4">
              <button
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="submit"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
