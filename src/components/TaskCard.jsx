import { IconGridDots } from "@tabler/icons-react";
import { useState } from "react";
import Draggable from "react-draggable";
import TaskModal from "./TaskModal";

export default function TaskCard({ title, description, status }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Draggable handle=".handle">
        <div
          className="mb-4 w-full min-w-[220px] max-w-[350px] cursor-pointer rounded border border-gray-200 bg-white p-4 shadow-md hover:bg-gray-200"
          onClick={() => setShowModal(true)}
        >
          <div className="max-h-[240px] min-h-[160px] space-y-2">
            <div>
              <div className="flex justify-between">
                <h3 className="text-sm font-medium text-gray-700">{title}</h3>
                <IconGridDots className="handle mb-2 h-4 w-4 cursor-move text-gray-400" />
              </div>
              <p className="text-sm text-gray-400">{description}</p>

              <div className="mt-4 flex items-center">
                <h3 className="text-sm font-medium text-gray-700">Priority:</h3>
                <p>❗️</p>
              </div>
            </div>
          </div>
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
