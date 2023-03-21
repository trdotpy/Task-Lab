import Layout from "@/layouts/Layout";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import NewBoardModal from "@/components/NewBoardModal";

export default function Boards({ boards }) {
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [boardList, setBoardList] = useState(boards);

  const handleDeleteBoard = async (boardId) => {
    try {
      await axios.delete(`${process.env.BASE_URL}/api/boards/${boardId}`);
      setBoardList(boardList.filter((board) => board._id !== boardId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="mb-4 flex justify-end">
          <button
            className="rounded-md bg-green-500 px-4 py-2 font-bold text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setShowBoardModal(true)}
          >
            New Board
          </button>
        </div>
        <h1 className="mb-4 text-2xl font-bold">Boards</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {boardList.map((board) => (
            <div key={board._id} className="rounded-lg bg-white p-4 shadow-md">
              <Link href={`/boards/${board._id}`}>
                <div>
                  <h2 className="mb-2 text-lg font-semibold">{board.title}</h2>
                  <p className="text-sm text-gray-500">{board.description}</p>
                  <p>Board ID: {board._id}</p>
                </div>
              </Link>
              <button
                className="rounded-md bg-red-500 px-4 py-2 font-bold text-white shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => handleDeleteBoard(board._id)}
              >
                Delete
              </button>
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
}

export async function getStaticProps() {
  const res = await axios.get(`${process.env.BASE_URL}/api/boards`);
  const boards = res.data.data;

  return {
    props: {
      boards,
    },
  };
}
