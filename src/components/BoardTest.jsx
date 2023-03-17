import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { IconGridDots } from "@tabler/icons-react";
import NewTaskModal from "./NewTaskModal";
import TaskModal from "./TaskModal";
import axios from "axios";

export default function BoardTest() {
  const [tasks, setTasks] = useState([]);
  const [newTaskModal, setNewTaskModal] = useState(false);

  const columns = [
    { id: "Backlog", title: "Backlog 📖" },
    { id: "In Progress", title: "In Progress 💪" },
    { id: "Testing", title: "Testing 🔬" },
    { id: "Completed", title: "Completed ✅" },
  ];

  useEffect(() => {
    axios.get("/api/tasks").then((res) => {
      setTasks(res.data);
      console.log(tasks);
    });
  }, []);

  const getColumnClass = (columnId) => {
    switch (columnId) {
      case "Backlog":
        return "bg-blue-500";
      case "In Progress":
        return "bg-orange-500";
      case "Testing":
        return "bg-violet-500";
      case "Completed":
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
                  <div className="mx-1 mb-2">
                    <div className="grid px-4">
                      <h2
                        className={`mr-2 mb-4 rounded px-4 py-1.5 text-base font-medium uppercase text-white ${getColumnClass(
                          column.id
                        )}`}
                      >
                        {column.title}
                      </h2>
                      {tasks.map((task) => {
                        if (task.status === column.id) {
                          return (
                            <TaskCard
                              key={task.id}
                              title={task.title}
                              description={task.description}
                              status={task.status}
                            />
                          );
                        }
                      })}
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

function TaskCard({ title, description, status }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Draggable handle=".handle">
        <div
          className="mb-4 w-full min-w-[220px] max-w-[350px] cursor-pointer rounded border border-gray-200 bg-white p-4 shadow-md hover:bg-gray-200"
          onClick={() => setShowModal(true)}
        >
          <div className="max-h-[240px] min-h-[160px] space-y-2">
            <div>
              <div className="flex justify-between">
                <h3 className="text-sm font-medium text-gray-700">{title}</h3>
                <IconGridDots className="handle mb-2 h-4 w-4 cursor-move text-gray-400" />
              </div>
              <p className="text-sm text-gray-400">{description}</p>

              <div className="mt-4 flex items-center">
                <h3 className="text-sm font-medium text-gray-700">Priority:</h3>
                <p>❗️</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="rounded bg-yellow-200 py-1.5 px-2 text-xs font-medium text-gray-800">
              {status}
            </h3>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-2 px-4 text-xs font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-vertically-centered-modal"
            >
              Details
            </button>
          </div>
        </div>
      </Draggable>
      {showModal && (
        <TaskModal
          title={title}
          description={description}
          status={status}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
