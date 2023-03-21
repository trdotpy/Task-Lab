import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./Column";
import NewTaskModal from "./NewTaskModal";
import Breadcrumb from "./Breadcrumb";
import { IconPlus, IconSettings } from "@tabler/icons-react";

const initialColumns = [
  { id: 1, title: "Backlog" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Testing" },
  { id: 4, title: "Completed" },
];

export default function KanbanBoard({ title, description, boardId }) {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState([]);
  const [newTaskModal, setNewTaskModal] = useState(false);
  console.log(tasks);

  const openNewTaskModal = () => {
    setNewTaskModal(true);
  };

  function getColumnClass(columnId) {
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
  }

  useEffect(() => {
    axios.get(`/api/tasks?boardId=${boardId}`).then((res) => {
      setTasks(res.data.data);
    });
  }, [boardId]);

  return (
    <>
      <div>
        <Breadcrumb title={title} />
        <div className="py-4">
          <div className="mb-2 flex justify-between">
            <h2 className="cursor-pointer text-2xl font-semibold text-gray-800">
              {title}
            </h2>
            <div className="flex items-center">
              <button
                type="button"
                className="rounded-xl p-1 text-gray-500 hover:bg-gray-200"
                onClick={openNewTaskModal}
              >
                <IconPlus size={24} stroke={2.0} />
              </button>
              <button className="rounded-xl p-1 text-gray-500 hover:bg-gray-200">
                <IconSettings size={24} stroke={2.0} />
              </button>
            </div>
          </div>
          <div>
            <p className="w-full cursor-pointer bg-gray-50 text-sm text-gray-500">
              {description}
            </p>
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
      {newTaskModal && (
        <NewTaskModal
          setNewTaskModal={setNewTaskModal}
          newTaskModal={newTaskModal}
          boardTitle={title}
          boardId={boardId}
        />
      )}
    </>
  );
}
