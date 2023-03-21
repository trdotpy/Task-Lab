import { useEffect, useState } from "react";
import axios from "axios";
import Column from "./Column";
import NewTaskModal from "./NewTaskModal";

const initialColumns = [
  { id: 1, title: "Backlog" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Testing" },
  { id: 4, title: "Completed" },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState([]);
  const [newTaskModal, setNewTaskModal] = useState(false);

  const [boardName, setBoardName] = useState("Frontend Board");
  const [editingBoardName, setEditingBoardName] = useState(false);

  const [boardDescription, setBoardDescription] = useState(
    "Board description. This is the board and the tasks associated with it."
  );
  const [editingBoardDescription, setEditingBoardDescription] = useState(false);

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
    axios.get("/api/tasks").then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  const handleBoardNameClick = () => {
    setEditingBoardName(true);
  };

  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleBoardDescriptionClick = () => {
    setEditingBoardDescription(true);
  };

  const handleBoardDescriptionChange = (e) => {
    setBoardDescription(e.target.value);
  };

  return (
    <>
      <div className="pt-6">
        <div className="py-4">
          <div className="mb-2 flex justify-between">
            {editingBoardName ? (
              <input
                type="text"
                className="bg-gray-50 text-2xl font-semibold uppercase text-gray-800 focus:outline-none"
                value={boardName}
                onChange={handleBoardNameChange}
              />
            ) : (
              <h2
                className="cursor-pointer text-2xl font-semibold uppercase text-gray-800"
                onClick={handleBoardNameClick}
              >
                {boardName}
              </h2>
            )}
            <button
              type="button"
              className="rounded bg-blue-400 py-2 px-4 text-xs font-medium text-white hover:bg-blue-500"
              onClick={openNewTaskModal}
            >
              New Task
            </button>
          </div>
          <div>
            {editingBoardDescription ? (
              <input
                type="text"
                className="w-full bg-gray-50 text-sm text-gray-500 focus:outline-none"
                value={boardDescription}
                onChange={handleBoardDescriptionChange}
              />
            ) : (
              <p
                className="w-full cursor-pointer bg-gray-50 text-sm text-gray-500"
                onClick={handleBoardDescriptionClick}
              >
                {boardDescription}
              </p>
            )}
          </div>
        </div>
        <div className="flex">
          {columns.map((column) => (
            <Column
              key={column.id}
              title={column.title}
              id={column.id}
              columnTasks={tasks.filter((task) => task.status === column.title)}
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
        />
      )}
    </>
  );
}
