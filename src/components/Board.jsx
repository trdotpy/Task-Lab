import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
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
  );
}
