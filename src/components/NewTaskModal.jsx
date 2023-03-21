import React, { useState } from "react";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import axios from "axios";

export default function NewTaskModal({
  newTaskModal,
  setNewTaskModal,
  boardTitle,
  boardId,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const createTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/tasks?boardId=${boardId}`, {
        title,
        description,
        status,
        priority,
      });
      setNewTaskModal(false);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center justify-center transition-all ease-out sm:mx-auto sm:w-full sm:max-w-5xl">
          <div className="flex flex-col rounded-lg border bg-white py-3 px-4 shadow-sm">
            <div className="flex items-center justify-between border-b py-3 px-4">
              <h3 className="text-lg font-semibold text-gray-700">
                New Task: {boardTitle}
              </h3>
              <button
                type="button"
                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 outline-1 transition-all hover:text-gray-400 hover:outline focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => setNewTaskModal(false)}
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="col-span-1">
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
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="Backlog">Backlog</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Testing">Testing</option>
                    <option value="Completed">Completed</option>
                  </select>
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
                  <select
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <div
                className="mt-3 flex items-center justify-end gap-x-2 py-3 
							px-4"
              >
                <button
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Overlay element */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-full bg-gray-800 bg-opacity-20 transition-opacity ${
          newTaskModal ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
