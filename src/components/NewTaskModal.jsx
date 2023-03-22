import React from "react";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function NewTaskModal({
  newTaskModal,
  setNewTaskModal,
  boardTitle,
  boardId,
}) {
	
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    status: Yup.string().required("Status is required"),
    priority: Yup.string().required("Priority is required"),
  });

  return (
    <>
      <div className="fixed top-0 left-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center justify-center transition-all ease-out sm:mx-auto sm:w-full sm:max-w-5xl">
          <div className="flex flex-col rounded-lg border bg-white py-3 px-4 shadow-sm">
            <div className="flex items-center justify-between border-b py-3 px-4">
              <h3 className="text-lg font-semibold text-gray-700">
                New Task: {boardTitle}
              </h3>
              <button
                type="button"
                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 outline-1 transition-all hover:text-gray-400 hover:outline focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => setNewTaskModal(false)}
              >
                <span className="sr-only">Close</span>
                <IconX />
              </button>
            </div>
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
                  setNewTaskModal(false);
                } catch (error) {
                  console.error("Error creating task:", error);
                }
              }}
            >
              {(formik) => (
                <form
                  className="overflow-y-auto p-4"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="mb-4 flex">
                    <div className="mr-2 w-full">
                      <h3 className="text-sm font-medium uppercase text-gray-700">
                        Title
                      </h3>
                      <Field
                        name="title"
                        type="text"
                        placeholder="Title"
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        {...formik.getFieldProps("title")}
                      />
                      <ErrorMessage name="title" className="text-red-500" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium uppercase text-gray-700">
                      Description
                    </h3>
                    <Field
                      name="description"
                      component="textarea"
                      placeholder="Description"
                      className="focus:shadow-outline h-32 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                      {...formik.getFieldProps("description")}
                    />
                    <ErrorMessage name="description" className="text-red-500" />
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="col-span-1">
                      <h3 className="text-sm font-medium uppercase text-gray-700">
                        Status
                      </h3>
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
                      <ErrorMessage name="status" className="text-red-500" />
                    </div>

                    <div className="col-span-1">
                      <h3 className="text-sm font-medium uppercase text-gray-700">
                        Priority
                      </h3>
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
                      <ErrorMessage name="priority" className="text-red-500" />
                    </div>
                  </div>
                  <div
                    className="mt-3 flex items-center justify-end gap-x-2 py-3 
							px-4"
                  >
                    <button
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Create
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* Overlay element */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-full bg-gray-800 bg-opacity-20 transition-opacity ${
          newTaskModal ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
