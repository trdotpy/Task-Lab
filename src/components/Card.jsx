import { IconTrash, IconFileDots } from "@tabler/icons-react";
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
        <div className="my-2 cursor-pointer rounded bg-white p-4 shadow hover:bg-gray-200">
          <div className="max-h-[200px] space-y-2">
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

            <div className="flex justify-between">
              <h3 className="text-base font-medium text-jet-500">{title}</h3>
            </div>
            {/* <p className="text-sm text-jet-400">{description}</p> */}
            <div className="flex items-center justify-end">
              <button type="button" onClick={openModal}>
                <IconFileDots size={18} className="text-jet-400" />
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
          priority={priority}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
