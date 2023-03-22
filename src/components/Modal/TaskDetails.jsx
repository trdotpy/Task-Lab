import { IconDots, IconTrash, IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import Comments from "../Comments";
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
  const [comments, setComments] = useState([]); // state to hold comments
  // const [newComment, setNewComment] = useState(""); // state to hold new comment

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Fetch comments for the current task
    const fetchComments = async () => {
      const res = await fetch(`/api/comments?task=${taskId}`);
      const data = await res.json();
      if (data.success) {
        setComments(data.data);
      }
    };
    fetchComments();
  }, [taskId]); // re-fetch comments whenever the task ID changes

  // const createComment = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post("/api/comments", {
  //     task: taskId, // task ID
  //     comment: newComment, // comment text
  //     createdBy: user,
  //   });
  //   if (res.data.success) {
  //     setComments((prev) => [...prev, res.data.data]);
  //     setNewComment("");
  //   }
  // };

  return (
    <div className="flex justify-center">
      <div className="fixed top-0 left-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center justify-center transition-all ease-out sm:mx-auto sm:w-full sm:max-w-4xl">
          <div className="flex flex-col rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div className="py-3 px-4">
              <div className="flex items-center justify-between">
                <Breadcrumb title={title} />
                <div className="flex items-center gap-x-4">
                  <button>
                    <IconTrash
                      size={20}
                      className="text-jet-300 hover:text-red-500"
                      onClick={handleDelete}
                    />
                  </button>
                  <button type="button" onClick={closeModal}>
                    <span className="sr-only">Close</span>
                    <IconX
                      size={20}
                      className="text-jet-300 hover:text-jet-600"
                    />
                  </button>
                </div>
              </div>

              <div className="mt-4 items-center">
                <h3 className="text-2xl font-semibold text-gray-700">
                  {title}
                </h3>

                <div className="mt-2 flex gap-x-2">
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

            <div className="flex overflow-y-auto p-4">
              {/* Left */}
              <div className="w-2/3">
                <h3 className="text-sm font-medium uppercase text-gray-700">
                  Description
                </h3>
                <p className="text-sm text-gray-400">{description}</p>

                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Comments
                  </h3>
                  <Comments
                    comments={comments.filter(
                      (comment) => comment.task === taskId
                    )}
                  />
                </div>
              </div>

              {/* Right */}
              <div className="ml-8 border-l px-8">
                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Project Lead
                  </h3>
                  <Image
                    className="inline-block h-8 w-8 rounded-xl"
                    src="https://res.cloudinary.com/drij60fru/image/upload/v1677113313/Mark-Zuckerberg-2019_wptrtn.jpg"
                    alt="lead"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium uppercase text-gray-700">
                    Team
                  </h3>
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
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div className="flex justify-end">
              <div className="mt-4">
                <h3 className="text-sm font-medium uppercase text-gray-700">
                  Status
                </h3>
                <Dropdown status={status} />
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
