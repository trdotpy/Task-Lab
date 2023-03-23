import React from "react";

export default function Comments({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <div className="mt-3 flex items-center" key={comment._id}>
          {comment.createdBy.image ? (
            <img
              className="mr-3 h-6 w-6 rounded-lg"
              src={comment.createdBy.image}
              alt="User avatar"
            />
          ) : (
            <img
              className="mr-3 h-6 w-6 rounded-lg"
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt="User avatar"
            />
          )}

          <div className="flex-1">
            <h2 className="text-sm">{comment.createdBy.name}</h2>
            <div className="rounded-lg border p-3">
              <p className="text-xs text-gray-600">{comment.text}</p>
            </div>

            <div className="mt-2 flex justify-end">
              <span className="text-xs text-gray-400">
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
