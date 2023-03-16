import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Draggable from "react-draggable";
import { IconGridDots, IconInfoSquare } from "@tabler/icons-react";
import NewTaskModal from "./NewTaskModal";
import TaskModal from "./TaskModal";

export default function BoardTest() {
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

  const handleDragEnd = React.useCallback(
    ({ active, over }) => {
      if (active.id !== over.id) {
        const newTasks = [...tasksData];
        const activeTaskIndex = newTasks.findIndex(
          (task) => task.id === active.id
        );
        const overTaskIndex = newTasks.findIndex((task) => task.id === over.id);

        const movedTask = newTasks[activeTaskIndex];
        movedTask.status = over.id;

        newTasks.splice(activeTaskIndex, 1);
        newTasks.splice(
          overTaskIndex < activeTaskIndex ? overTaskIndex : overTaskIndex - 1,
          0,
          movedTask
        );

        setTasksData(newTasks);
      }
    },
    [tasksData]
  );

  return (
    <>
      <DndContext
        onDragEnd={handleDragEnd}
        collisionDetection={rectSortingStrategy}
      >
        <div className="min-h-screen bg-gray-800 py-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold uppercase text-gray-300">
                Web Development Project
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
            <div className="flex justify-between rounded-lg py-4">
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
                {columns.map((column) => (
                  <div
                    key={column.id}
                    className="min-w-[300px] rounded px-2  py-2"
                  >
                    <div className="mx-1 mb-2 flex flex-row items-center justify-between">
                      <div className="grid px-4">
                        <h2 className="mr-2 mb-4 rounded px-1 text-lg font-medium uppercase text-gray-100">
                          {column.title}
                        </h2>
                        <SortableContext
                          items={tasksData.filter(
                            (task) => task.status === column.id
                          )}
                          strategy={rectSortingStrategy}
                        >
                          {tasksData
                            .filter((task) => task.status === column.id)
                            .map((task) => (
                              <TaskCard key={task.id} task={task} />
                            ))}
                        </SortableContext>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DndContext>
      {newTaskModal && (
        <NewTaskModal setNewTaskModal={setNewTaskModal} tasks={tasks} />
      )}
    </>
  );
}

function TaskCard({ task }) {
  const [showModal, setShowModal] = useState(false);
  const { title, description, status } = task;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Draggable>
        <div
          className="mb-4 min-w-[250px] max-w-[300px] cursor-pointer bg-white p-4 shadow-md hover:bg-gray-200"
          onClick={() => setShowModal(true)}
        >
          <div className="space-y-2">
            <div>
              <div className="flex justify-between">
                <h3 className="text-sm font-medium text-gray-700">{title}</h3>
                <IconGridDots className="mb-2 h-4 w-4 cursor-move text-gray-400" />
              </div>
              <p class="text-sm text-gray-400">{description}</p>
              <div className="mt-4 flex items-center">
                <h3 className="text-sm font-medium text-gray-700">Priority:</h3>
                <p>❗️</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-2 px-4 text-xs font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                Details
              </button>
            </div>
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
