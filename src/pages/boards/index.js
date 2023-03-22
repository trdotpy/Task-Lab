import Layout from "@/layouts/Layout";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import NewBoardModal from "@/components/NewBoardModal";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { IconDots } from "@tabler/icons-react";

export default withPageAuthRequired(function Boards({ boards }) {
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [boardList, setBoardList] = useState(boards);

  const handleDeleteBoard = async (boardId) => {
    try {
      await axios.delete(`/api/boards/${boardId}`);
      setBoardList(boardList.filter((board) => board._id !== boardId));
    } catch (error) {
      console.error(error);
    }
  };

  console.log(boardList);

  return (
    <>
      <Layout>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-semibold">All Project Boards</h1>
          <button
            className="rounded-md bg-blue-400 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setShowBoardModal(true)}
          >
            New Board
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {boardList.map((board) => (
            <div
              key={board._id}
              className="w-96 cursor-pointer rounded-lg bg-white p-4 shadow-md hover:bg-gray-100"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="mb-2 text-lg font-medium text-jet-600">
                      {board.title}
                    </h2>
                    <p className="text-xs text-jet-400">
                      {new Date(board.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div class="hs-dropdown relative inline-flex">
                    <button
                      id="hs-dropdown-custom-icon-trigger"
                      type="button"
                      class="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-1 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <IconDots class="h-5 w-5 text-jet-200" />
                    </button>

                    <div
                      class="hs-dropdown-menu duration mt-2 hidden rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
                      aria-labelledby="hs-dropdown-custom-icon-trigger"
                    >
                      <button class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                        Edit Project
                      </button>
                      <button
                        class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                        onClick={() => handleDeleteBoard(board._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-jet-300">{board.description}</p>
              </div>
              <div className="flex justify-end">
                <Link href={`/boards/${board._id}`}>
                  <button className="rounded-md bg-bice-400 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-bice-600 focus:outline-none focus:ring-2 focus:ring-bice-500">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
      {showBoardModal && (
        <NewBoardModal
          showBoardModal={showBoardModal}
          setShowBoardModal={setShowBoardModal}
        />
      )}
    </>
  );
});

export async function getStaticProps() {
  const res = await axios.get(`${process.env.BASE_URL}/api/boards`);
  const boards = res.data.data;

  return {
    props: {
      boards,
    },
  };
}
