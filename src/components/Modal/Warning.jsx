import { IconAlertTriangle } from "@tabler/icons-react";
import React, { useState } from "react";

export default function Warning({
  toggleWarningModal,
  handleDeleteBoard,
  warningModal,
  boardId,
}) {
  return (
    <>
      <div className="relative z-50 flex justify-center">
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all rtl:text-right sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <div>
                <div className="flex items-center justify-center">
                  <IconAlertTriangle className="h-8 w-8 text-gray-700 " />
                </div>

                <div className="mt-2 text-center">
                  <h3
                    className="text-lg font-medium capitalize leading-6 text-gray-800 "
                    id="modal-title"
                  >
                    Delete Project
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 ">
                    Are you sure you want to delete this project? This action
                    cannot be undone.
                  </p>
                </div>
              </div>

              <div className="mt-5 justify-center sm:flex sm:items-center">
                <div className="sm:flex sm:items-center ">
                  <button
                    onClick={toggleWarningModal}
                    className="mt-2 w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>

                  <button
                    className="mt-2 w-full transform rounded-md bg-blue-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mt-0 sm:w-auto"
                    onClick={() => handleDeleteBoard(boardId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay element */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-full bg-gray-800 bg-opacity-20 transition-opacity ${
          warningModal ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
