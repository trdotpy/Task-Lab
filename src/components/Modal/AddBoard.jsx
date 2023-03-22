import { IconAlertTriangle, IconPlus } from "@tabler/icons-react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AddBoard({
  showBoardModal,
  setShowBoardModal,
  boardList,
  setBoardList,
  addBoardModal,
  toggleAddBoardModal,
}) {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const { user, isLoading } = useUser();

  const handleAddBoard = async (values, actions) => {
    if (!user || isLoading) {
      return;
    }
    try {
      const res = await axios.post("/api/boards", {
        title: values.title,
        description: values.description,
      });
      setBoardList([...boardList, res.data.data]);
      toggleAddBoardModal();
    } catch (err) {
      console.error("Error creating board:", err);
    }
  };

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

            <div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <div>
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 "
                  id="modal-title"
                >
                  Add New Project
                </h3>
                <p className="mt-2 text-sm text-gray-500 ">
                  Your next project is just a click away. Just fill in the
                  details below.
                </p>

                <Formik
                  initialValues={{ title: "", description: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleAddBoard}
                >
                  {(formik) => (
                    <form className="mt-4" onSubmit={formik.handleSubmit}>
                      <Field
                        name="title"
                        type="text"
                        placeholder="Title"
                        className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        {...formik.getFieldProps("title")}
                      />

                      <Field
                        name="description"
                        component="textarea"
                        placeholder="Description"
                        className="mt-3 block h-28 w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        {...formik.getFieldProps("description")}
                      />

                      <button
                        type="button"
                        className="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none"
                      >
                        <IconPlus className="h-4 w-4" />

                        <span className="mx-2 text-sm">Add Team Members</span>
                      </button>

                      <div className="mt-4 sm:-mx-2 sm:flex sm:items-center">
                        <button
                          type="button"
                          onClick={toggleAddBoardModal}
                          className="w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40  sm:mx-2 sm:w-1/2"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="mt-3 w-full transform rounded-md bg-blue-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-1/2"
                          disabled={!formik.isValid}
                        >
                          Create Project
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay element */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-full bg-gray-800 bg-opacity-20 transition-opacity ${
          addBoardModal ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
