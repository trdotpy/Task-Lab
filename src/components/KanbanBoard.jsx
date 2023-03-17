import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import axios from "axios";
import NewTaskModal from "./NewTaskModal";

const initialData = [
  { id: 1, title: "Backlog" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Testing" },
  { id: 4, title: "Completed" },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialData);
  const [tasks, setTasks] = useState([]);
  const [newTaskModal, setNewTaskModal] = useState(false);

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

  useEffect(() => {
    axios.get("/api/tasks").then((res) => {
      setTasks(res.data);
    });
  }, [tasks]);

  const moveCard = async (taskId, targetColumnId) => {
    const targetColumn = columns.find((column) => column.id === targetColumnId);
    if (!targetColumn) return;

    // Fetch the task details from the server
    let taskDetails;
    try {
      const response = await axios.get(`/api/tasks/${taskId}`);
      taskDetails = response.data;
    } catch (error) {
      console.error("Error fetching task details:", error);
      return;
    }

    // Update the task status in the local state
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...taskDetails, status: targetColumn.title };
      }
      return task;
    });
    setTasks(updatedTasks);

    // Update the task status in the database
    try {
      await axios.patch(`/api/tasks/${taskId}`, { status: targetColumn.title });
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <>
      <div className="py-4">
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl font-semibold uppercase text-gray-200">
            Board Name
          </h2>
          <button
            type="button"
            className="rounded bg-blue-400 py-2 px-4 text-xs font-medium text-white hover:bg-blue-500"
            data-hs-overlay="#hs-large-modal"
            onClick={() => setNewTaskModal(true)}
          >
            New Task
          </button>
        </div>
        <div className="flex bg-gray-900">
          {columns.map((column) => (
            <Column
              key={column.id}
              title={column.title}
              id={column.id}
              moveCard={moveCard}
              columnTasks={tasks.filter((task) => task.status === column.title)}
              getColumnClass={getColumnClass}
            />
          ))}
        </div>
      </div>
      {newTaskModal && <NewTaskModal setNewTaskModal={setNewTaskModal} />}
    </>
  );
}

const Column = ({ title, columnTasks, id, moveCard, getColumnClass }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => moveCard(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`h-full min-h-screen w-1/4 rounded p-4 ${
        isOver ? "border-2 border-gray-600" : ""
      }`}
    >
      <h2
        className={`mr-2 mb-4 rounded px-4 py-1.5 text-base font-medium uppercase text-white ${getColumnClass(
          title
        )}`}
      >
        {title}
      </h2>
      {columnTasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          description={task.description}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  );
};

const Card = ({ id, description, title, status }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`my-2 rounded bg-white p-2 shadow ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="max-h-[240px] min-h-[120px] space-y-2">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>

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
    </div>
  );
};
