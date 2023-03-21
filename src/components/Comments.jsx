import React from "react";

export default function Comments({ comments }) {
  return (
    <>
      <div className="mt-4 flex items-center">
        <div className="flex-1">
          <textarea
            className="block w-full rounded-md border border-gray-300 px-4 py-2 text-xs placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Add a comment"
          ></textarea>

          <div className="mt-2 flex items-center justify-end">
            <button className="rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Post
            </button>
          </div>
        </div>
      </div>

      {comments.map((comment) => (
        <div className="mt-3 flex items-center" key={comment._id}>
          <img
            className="mr-3 h-6 w-6 rounded-lg"
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="User avatar"
          />

          <div className="flex-1">
            <div className="flex">{comment.createdBy.name}</div>
            <div className="rounded-lg border p-3">
              <p className="text-xs text-gray-600">{comment.text}</p>
            </div>

            <div className="mt-2 flex justify-end">
              <span className="text-xs text-gray-400">
                {comment.createdAt.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
