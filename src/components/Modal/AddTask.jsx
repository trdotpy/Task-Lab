import { IconAlertTriangle, IconPlus } from "@tabler/icons-react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function AddTask({
  addTaskModal,
  boardTitle,
  boardId,
  toggleAddTaskModal,
}) {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    status: Yup.string().required("Status is required"),
    priority: Yup.string().required("Priority is required"),
  });

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
              class="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all rtl:text-right sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <div>
                <h3
                  class="text-lg font-medium leading-6 text-gray-800 "
                  id="modal-title"
                >
                  Add Task
                </h3>
                <p class="mt-2 text-sm text-gray-500 ">
                  Describe the task you want to add to{" "}
                  <span className="text-bitter-400">{boardTitle}</span> below.
                </p>

                <Formik
                  initialValues={{
                    title: "",
                    description: "",
                    status: "",
                    priority: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, actions) => {
                    try {
                      await axios.post(`/api/tasks?boardId=${boardId}`, values);
                      toggleAddTaskModal();
                    } catch (error) {
                      console.error("Error creating task:", error);
                    }
                  }}
                >
                  {(formik) => (
                    <form class="mt-4" onSubmit={formik.handleSubmit}>
                      <Field
                        name="title"
                        type="text"
                        placeholder="Title"
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        {...formik.getFieldProps("title")}
                      />
                      <ErrorMessage name="title" className="text-red-500" />

                      <Field
                        name="description"
                        component="textarea"
                        placeholder="Description"
                        className="focus:shadow-outline mt-3 h-32 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        {...formik.getFieldProps("description")}
                      />
                      <ErrorMessage
                        name="description"
                        className="text-red-500"
                      />

                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div className="col-span-1">
                          <Field
                            name="status"
                            as="select"
                            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                            {...formik.getFieldProps("status")}
                          >
                            <option value="">Select Status</option>
                            <option value="Backlog">Backlog</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Testing">Testing</option>
                            <option value="Completed">Completed</option>
                          </Field>
                          <ErrorMessage
                            name="status"
                            className="text-red-500"
                          />
                        </div>

                        <div className="col-span-1">
                          <Field
                            name="priority"
                            as="select"
                            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                            {...formik.getFieldProps("priority")}
                          >
                            <option value="">Select Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </Field>
                          <ErrorMessage
                            name="priority"
                            className="text-red-500"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        class="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none"
                      >
                        <IconPlus class="h-4 w-4" />

                        <span class="mx-2 text-sm">Add Team Members</span>
                      </button>

                      <div class="mt-4 sm:-mx-2 sm:flex sm:items-center">
                        <button
                          type="button"
                          onClick={toggleAddTaskModal}
                          class="w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40  sm:mx-2 sm:w-1/2"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          class="mt-3 w-full transform rounded-md bg-blue-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-1/2"
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
          addTaskModal ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
