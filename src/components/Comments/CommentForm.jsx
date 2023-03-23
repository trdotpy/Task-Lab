

export default function CommentForm({
  handleAddComment,
  setNewComment,
  newComment,
}) {
  return (
    <div>
      <div className="mt-2 flex items-center">
        <form className="flex-1" onSubmit={handleAddComment}>
          <textarea
            // type="text"
            className="block w-full rounded-md border border-gray-300 px-4 py-2 text-xs placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Add a comment"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          ></textarea>

          <div className="mt-2 flex items-center justify-end">
            <button
              type="submit"
              className="rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
