import React, { useState } from "react";
import Draggable from "react-draggable";
import { IconGridDots } from "@tabler/icons-react";
import TaskModal from "./TaskModal";
import NewTaskModal from "./NewTaskModal";
import TaskCard from "./TaskCard";

export default function Board() {
  const columns = [
    { id: "backlog", title: "Backlog 📖" },
    { id: "in-progress", title: "In Progress 💪" },
    { id: "testing", title: "Testing 🔬" },
    { id: "completed", title: "Completed ✅" },
  ];

  const tasks = [
    {
      id: "task1",
      title: "Refactor Codebase",
      description:
        "Refactor the codebase to use hooks. This will make the codebase more maintainable and easier to understand.",
      status: "backlog",
      priority: "high",
    },
    {
      id: "task2",
      title: "Lead Generation",
      description: "Generate leads for the company. This will increase sales.",
      status: "in-progress",
      priority: "low",
    },
    {
      id: "task3",
      title: "Marketing Campaigns",
      description: "Create marketing campaigns for the company.",
      status: "completed",
      priority: "medium",
    },
    {
      id: "task4",
      title: "Test backend API",
      description: "Test the backend API for the company.",
      status: "testing",
      priority: "high",
    },
  ];

  const [tasksData, setTasksData] = useState(tasks);
  const [newTaskModal, setNewTaskModal] = useState(false);

  const getColumnClass = (columnId) => {
    switch (columnId) {
      case "backlog":
        return "bg-blue-500";
      case "in-progress":
        return "bg-orange-500";
      case "testing":
        return "bg-violet-500";
      case "completed":
        return "bg-green-500";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="min-h-screen py-4 px-8">
        <div className="mb-4 flex items-center justify-between px-4">
          <div>
            <h2 className="text-xl font-semibold uppercase text-gray-200">
              Board Name
            </h2>
          </div>
          <button
            type="button"
            className="rounded bg-blue-400 py-2 px-4 text-xs font-medium text-white hover:bg-blue-500"
            data-hs-overlay="#hs-large-modal"
            onClick={() => setNewTaskModal(true)}
          >
            New Task
          </button>
        </div>

        <div className="flex h-screen flex-row overflow-x-auto py-4">
          <div className="flex w-full justify-center rounded-lg py-4">
            <div className="mx-4 grid gap-x-4 sm:grid-cols-2 md:grid-cols-4">
              {columns.map((column) => (
                <div
                  key={column.id}
                  className="min-w-[300px] max-w-[350px] rounded py-4 px-3"
                >
                  <div className="mx-1 mb-2 flex flex-row items-center justify-between">
                    <div className="grid px-4">
                      <h2
                        className={`mr-2 mb-4 rounded px-4 py-1.5 text-base font-medium uppercase text-white ${getColumnClass(
                          column.id
                        )}`}
                      >
                        {column.title}
                      </h2>

                      {tasksData
                        .filter((task) => task.status === column.id)
                        .map((task) => (
                          <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {newTaskModal && (
        <NewTaskModal setNewTaskModal={setNewTaskModal} tasks={tasks} />
      )}
    </>
  );
}
