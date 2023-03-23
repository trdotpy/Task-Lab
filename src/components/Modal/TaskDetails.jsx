import {
  IconDots,
  IconTrash,
  IconX,
  IconMessages,
  IconMinus,
} from "@tabler/icons-react";
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
      <div className="fixed top-0 left-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center justify-center transition-all ease-out sm:mx-auto sm:w-full sm:max-w-4xl">
          <div className="flex flex-col rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div className="py-3 px-4">
              <div className="flex items-center justify-between">
                {/* <Breadcrumb title={title} /> */}
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

              <div className="mt-4 items-center">
                <h3 className="text-2xl font-semibold text-gray-700">
                  {title}
                </h3>

                <div className="mt-2 flex gap-x-2">
                  {/* <span
                    className={`rounded px-2 py-1 text-xs text-white ${
                      status === "Backlog"
                        ? "bg-bice-400"
                        : status === "In Progress"
                        ? "bg-xanthous-400"
                        : status === "Testing"
                        ? "bg-plum-400"
                        : "bg-seagreen-400"
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
                  </span> */}

                  <div className="whitespace-nowrap py-1 text-sm">
                    <div>
                      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-seagreen-200">
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
                <p className="text-sm text-gray-400">{description}</p>
              </div>

              {/* Right */}
              <div className="ml-6 border-l px-6">
                <div className="grid grid-cols-2 gap-x-8">
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
                        className={`rounded px-2 py-1 text-xs text-white ${
                          status === "Backlog"
                            ? "bg-bice-400"
                            : status === "In Progress"
                            ? "bg-xanthous-400"
                            : status === "Testing"
                            ? "bg-plum-400"
                            : "bg-seagreen-400"
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
                {/* <div className="flex">
                  <div className="flex-shrink-0">
                    <Image
                      className="mr-2 inline-block h-9 w-9 rounded"
                      src="https://res.cloudinary.com/drij60fru/image/upload/v1677113313/Mark-Zuckerberg-2019_wptrtn.jpg"
                      alt="lead"
                      height={40}
                      width={40}
                    />
                  </div>
                  <div>
                    <p className="text-base text-jet-600">Marketh Zuckering</p>
                    <p className="text-sm text-jet-600">mark@meta.com</p>
                    <p className="text-sm text-jet-600">111-111-1111</p>
                  </div>
                </div> */}
                {/* <div className="mt-4">
                  <h3 className="text-base font-medium text-gray-700">Team</h3>
                  <div className="flex -space-x-1">
                    <Image
                      className="inline-block h-8 w-8 rounded-xl"
                      src="https://res.cloudinary.com/drij60fru/image/upload/v1677040807/keanu_lbdxqq.webp"
                      alt="assignee"
                      height={40}
                      width={40}
                    />
                    <Image
                      className="inline-block h-8 w-8 rounded-xl"
                      src="https://res.cloudinary.com/drij60fru/image/upload/v1677040687/drake_nhpiyb.jpg"
                      alt="assignee"
                      height={40}
                      width={40}
                    />
                    <Image
                      className="inline-block h-8 w-8 rounded-xl"
                      src="https://res.cloudinary.com/drij60fru/image/upload/v1677040714/01ebfc40ecc194a2abc81e82ab877af4_400x400_l8zmzd.jpg"
                      alt="assignee"
                      height={40}
                      width={40}
                    />
                  </div>
                </div> */}
              </div>
            </div>
            {/* Bottom */}
            <div className="mt-2 px-4">
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
            {/* <div className="flex justify-end">
              <div className="mt-3">
                <Dropdown status={status} />
              </div>
            </div> */}
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
