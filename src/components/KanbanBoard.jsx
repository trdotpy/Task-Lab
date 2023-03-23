import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./Column";

import Breadcrumb from "./Breadcrumb";
import {
  IconPlus,
  IconSettings,
  IconSquareRoundedPlus,
  IconUpload,
} from "@tabler/icons-react";
import AddTask from "./Modal/AddTask";

const initialColumns = [
  { id: 1, title: "Backlog" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Testing" },
  { id: 4, title: "Completed" },
];

export default function KanbanBoard({ boardTitle, boardDescription, boardId }) {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState([]);
  const [addTaskModal, setAddTaskModal] = useState(false);

  const toggleAddTaskModal = () => setAddTaskModal(!addTaskModal);

  function getColumnClass(columnId) {
    switch (columnId) {
      case "Backlog":
        return "bg-bice-400";
      case "In Progress":
        return "bg-bitter-500";
      case "Testing":
        return "bg-plum-500";
      case "Completed":
        return "bg-seagreen-500";
      default:
        return "";
    }
  }

  useEffect(() => {
    axios.get(`/api/tasks?boardId=${boardId}`).then((res) => {
      setTasks(res.data.data);
    });
  }, [boardId]);

  console.log(tasks);

  return (
    <>
      <div>
        <div className="pb-4">
          <div className="mb-2 flex justify-between">
            <div>
              <h2 className="text-xl font-medium text-jet-500">{boardTitle}</h2>
              <p className="mt-1 cursor-pointer bg-gray-50 text-sm text-jet-300">
                {boardDescription}
              </p>
            </div>
            <div className="flex items-center gap-x-3 ">
              <button className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100  sm:w-auto">
                <IconUpload size={16} />
                <span>Share</span>
              </button>

              <button
                className="flex w-1/2 shrink-0 items-center justify-center gap-x-2 rounded bg-bitter-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto"
                onClick={toggleAddTaskModal}
              >
                <IconSquareRoundedPlus size={20} />

                <span>Add Task</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          {columns.map((column) => (
            <Column
              key={column.id}
              title={column.title}
              id={column.id}
              columnTasks={tasks.filter(
                (task) => task.status === column.title && task.board === boardId
              )}
              getColumnClass={getColumnClass}
              setTasks={setTasks}
            />
          ))}
        </div>
      </div>
      {addTaskModal && (
        <AddTask
          addTaskModal={addTaskModal}
          boardTitle={boardTitle}
          boardId={boardId}
          toggleAddTaskModal={toggleAddTaskModal}
        />
      )}
    </>
  );
}
