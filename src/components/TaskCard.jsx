import { IconGridDots } from "@tabler/icons-react";
import { useState } from "react";
import Draggable from "react-draggable";
import TaskModal from "./TaskModal";

export default function TaskCard({ task }) {
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
