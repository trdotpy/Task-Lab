import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import TaskModal from "./TaskModal";
import NewTaskModal from "./NewTaskModal";
import TaskCard from "./TaskCard";
import axios from "axios";

export default function Board() {
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
