import { IconMessage2 } from "@tabler/icons-react";

export default function CommentForm({
  handleAddComment,
  setNewComment,
  newComment,
}) {
  return (
    <div className="mb-6 mt-3">
      <div className="flex items-center">
        <form className="flex-1" onSubmit={handleAddComment}>
          <textarea
            // type="text"
            className="block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-xs placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Add a comment"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          ></textarea>

          <div className="mt-2.5 flex items-center justify-end">
            <button
              type="submit"
              className="flex gap-x-2 rounded-md border border-gray-300 bg-jet-800 py-2 px-4 text-sm font-medium text-jet-100 shadow-sm transition duration-300 hover:bg-jet-500"
            >
              <IconMessage2 stroke={1.0} size={20} />
              <p>Reply</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
