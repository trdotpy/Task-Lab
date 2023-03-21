import { IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import Draggable from "react-draggable";
import TaskModal from "./TaskModal";

export default function Card({
  id,
  description,
  title,
  status,
  index,
  taskId,
  setTasks,
  priority,
}) {
  const [showModal, setShowModal] = useState(false);
  const [trashHover, setTrashHover] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Draggable>
        <div
          className="my-2 cursor-pointer rounded bg-white p-4 shadow hover:bg-gray-200"
          onMouseEnter={() => setTrashHover(true)}
          onMouseLeave={() => setTrashHover(false)}
        >
          <div className="max-h-[240px] space-y-2">
            <span
              className={`rounded px-2 py-1 text-sm text-white ${
                priority === "High"
                  ? "bg-red-400"
                  : priority === "Medium"
                  ? "bg-yellow-400"
                  : "bg-blue-400"
              }`}
            >
              {priority}
            </span>

            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-700">{title}</h3>
              {trashHover && (
                <IconTrash
                  size={20}
                  stroke={1.5}
                  className="text-gray-400 hover:text-red-500"
                  onClick={handleDelete}
                />
              )}
            </div>
            <p className="text-sm text-gray-400">{description}</p>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-1.5 px-4 text-xs font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                onClick={openModal}
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
          showModal={showModal}
          setShowModal={setShowModal}
          taskId={taskId}
        />
      )}
    </>
  );
}
