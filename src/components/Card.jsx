import { IconTrash, IconFileDots } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import Draggable from "react-draggable";
import TaskDetails from "./Modal/TaskDetails";

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
          onClick={openModal}
        >
          <div className="max-h-[400px] space-y-2">
            <div className="flex justify-between">
              <h3 className="text-base text-jet-600">{title}</h3>
            </div>
            <p className="text-xs text-jet-300">{description}</p>

            <div className="flex items-center justify-end">
              <span
                className={`rounded px-2 py-1 text-xs  ${
                  priority === "High"
                    ? "bg-bitter-200 text-bitter-700"
                    : priority === "Medium"
                    ? "bg-xanthous-200 text-xanthous-700"
                    : "bg-bice-200 text-bice-700"
                }`}
              >
                {priority}
              </span>
            </div>
          </div>
        </div>
      </Draggable>
      {showModal && (
        <TaskDetails
          title={title}
          description={description}
          status={status}
          showModal={showModal}
          setShowModal={setShowModal}
          taskId={taskId}
          priority={priority}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
