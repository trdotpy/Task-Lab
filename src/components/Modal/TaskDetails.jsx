import { IconDots, IconTrash, IconX, IconMinus } from "@tabler/icons-react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import Comments from "../Comments";
import CommentForm from "../Comments/CommentForm";
import Dropdown from "../StatusDropdown";

export default function TaskDetails({
  title,
  description,
  status,
  setShowModal,
  showModal,
  taskId,
  priority,
  handleDelete,
}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await axios.get(`/api/comments?taskId=${taskId}`);
        if (res.data.success) {
          setComments(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }
    }
    fetchComments();
  }, [taskId]);

  async function handleAddComment(event) {
    event.preventDefault();
    const response = await axios.post("/api/comments", {
      taskId,
      text: newComment,
    });
    setComments([...comments, response.data.data]);
    setNewComment("");
  }

  async function handleDeleteComment(commentId) {
    try {
      await axios.delete(`/api/comments/${commentId}`);
      setComments((prev) =>
        prev.filter((comment) => comment._id !== commentId)
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="fixed top-0 left-0 z-[70] h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center justify-center transition-all ease-out sm:mx-auto sm:w-full sm:max-w-4xl">
          <div className="flex flex-col rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div className="py-3 px-4">
              <div className="flex items-center justify-between">
                <Breadcrumb title={title} />
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="cursor-pointer rounded-xl p-2 hover:bg-jet-100"
                  >
                    <span className="sr-only">Close</span>
                    <IconMinus size={20} className="text-jet-300" />
                  </button>

                  <button className="cursor-pointer rounded-xl p-2 hover:bg-jet-100">
                    <IconTrash
                      size={20}
                      className="text-jet-300"
                      onClick={handleDelete}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-4 items-center pb-4">
                <h3 className="text-2xl font-semibold text-gray-700">
                  {title}
                </h3>

                <div className="mt-2 flex gap-x-2">
                  <div className="whitespace-nowrap py-1">
                    <div>
                      <div className="h-1.5 w-96 overflow-hidden rounded-full bg-seagreen-200">
                        <div
                          className="h-1.5 bg-seagreen-400"
                          style={{
                            width: `${Math.floor(Math.random() * 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex overflow-y-auto p-4">
              {/* Left */}
              <div className="w-2/3">
                <h3 className="text-base font-medium text-jet-700">
                  Description
                </h3>
                <p className="mt-1 text-sm text-gray-400">{description}</p>
              </div>

              {/* Right */}
              <div className="ml-6 border-l px-6">
                <div className="grid grid-cols-2">
                  <div className="grid gap-y-3">
                    <h3 className="text-base font-medium text-jet-700">
                      Assignee
                    </h3>
                    <h3 className="text-base font-medium text-jet-700">Date</h3>
                    <h3 className="text-base font-medium text-jet-700">Tags</h3>
                  </div>
                  <div className="grid gap-y-3">
                    <div className="flex items-center gap-x-2">
                      <h3 className="text-sm font-medium text-jet-600">
                        Adele J.
                      </h3>
                      <div className="relative">
                        <Image
                          className="inline-block h-6 w-6 rounded-full"
                          src="https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="assignee"
                          height={40}
                          width={40}
                        />
                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-plum-400 ring-1 ring-white"></span>
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-jet-600">
                      12 Feb 2024
                    </h3>
                    <div className="flex gap-x-2">
                      <span
                        className={`whitespace-nowrap rounded px-2 py-1 text-xs text-white ${
                          status === "Backlog"
                            ? "bg-bice-200 text-bice-700"
                            : status === "In Progress"
                            ? "bg-xanthous-200 text-xanthous-700"
                            : status === "Testing"
                            ? "bg-plum-200 text-plum-700"
                            : "bg-seagreen-200 text-seagreen-700"
                        }`}
                      >
                        {status}
                      </span>
                      <span
                        className={`rounded px-2 py-1 text-xs ${
                          priority === "High"
                            ? "bg-bitter-100 text-bitter-600"
                            : priority === "Medium"
                            ? "bg-xanthous-100 text-xanthous-600"
                            : "bg-bice-100 text-bice-600"
                        }`}
                      >
                        {priority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div className="mt-2 border-t px-4 pt-4">
              <h3 className="text-base font-medium text-jet-700">Comments</h3>
              <CommentForm
                handleAddComment={handleAddComment}
                setNewComment={setNewComment}
                newComment={newComment}
              />

              <Comments
                comments={comments}
                handleDeleteComment={handleDeleteComment}
              />
            </div>
            <div className="flex justify-end">
              <div className="py-3">
                <Image
                  src="https://res.cloudinary.com/drij60fru/image/upload/v1679375340/tasklab_qjjn6r.png"
                  alt="TaskLab"
                  height={25}
                  width={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay element */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-full bg-gray-800 bg-opacity-20 transition-opacity ${
          showModal ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </div>
  );
}
