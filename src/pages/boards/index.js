import {
  IconArrowRight,
  IconDotsVertical,
  IconSquareRoundedPlus,
  IconUpload,
  IconSearch,
  IconExternalLink,
} from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Layout from "@/layouts/Layout";
import Warning from "@/components/Modal/Warning";
import Link from "next/link";
import AddBoard from "@/components/Modal/AddBoard";
import Spinner from "@/components/Spinner";
import ProjectTable from "@/components/ProjectTable";

export default withPageAuthRequired(function Projects() {
  const [boardList, setBoardList] = useState([]);
  const [warningModal, setWarningModal] = useState(false);
  const [addBoardModal, setAddBoardModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleAddBoardModal = () => setAddBoardModal(!addBoardModal);

  useEffect(() => {
    const fetchBoards = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/boards");
        setBoardList(res.data.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchBoards();
  }, []);

  async function handleBoardDelete(boardId) {
    try {
      await axios.delete(`/api/boards/${boardId}`);
      setBoardList((prevBoardList) =>
        prevBoardList.filter((board) => board._id !== boardId)
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Layout>
          <section className="container mx-auto px-4">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-x-3">
                  <h2 className="text-lg font-medium text-gray-800 ">
                    Projects
                  </h2>
                  <span className="rounded bg-bice-100 px-3 py-1 text-xs text-bice-700">
                    {boardList.length} boards
                  </span>
                </div>

                <p className="mt-1 text-sm text-jet-300">
                  These boards have been created in the last 12 months.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-x-3">
                <button className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100  sm:w-auto">
                  <IconUpload size={16} />
                  <span>Share</span>
                </button>

                <button
                  className="flex w-1/2 shrink-0 items-center justify-center gap-x-2 rounded bg-bitter-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto"
                  onClick={toggleAddBoardModal}
                >
                  <IconSquareRoundedPlus size={20} />

                  <span>Add board</span>
                </button>
              </div>
            </div>

            <div className="mt-6 md:flex md:items-center md:justify-between">
              <div className="inline-flex divide-x overflow-hidden rounded-lg border bg-white">
                <button className="bg-gray-100 px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200  sm:text-sm">
                  View all
                </button>

                <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-sm">
                  Shared
                </button>

                <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100  sm:text-sm">
                  Archived
                </button>
              </div>

              <div className="relative mt-4 flex items-center md:mt-0">
                <div className="absolute">
                  <IconSearch className="mx-3 h-5 w-5 text-jet-300" />
                </div>

                <input
                  type="text"
                  value="Search"
                  placeholder="Search"
                  className="block w-full rounded-lg border border-gray-200 bg-white py-1.5 pr-5 pl-11 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:w-80"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-left text-sm font-normal text-gray-500"
                          >
                            <button className="flex items-center gap-x-3 focus:outline-none">
                              <span>Project</span>
                            </button>
                          </th>
                          <th
                            scope="col"
                            className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                          >
                            Start Date
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                          >
                            Progress
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                          >
                            Description
                          </th>

                          <th scope="col" className="relative py-3.5 px-4">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      {boardList.map((board) => (
                        <tbody
                          className="divide-y divide-gray-200 bg-white"
                          key={board?._id}
                        >
                          <ProjectTable
                            board={board}
                            handleBoardDelete={handleBoardDelete}
                          />
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
              <p className="text-sm text-jet-300">
                Page <span className="font-medium text-jet-300">1 of 1</span>
              </p>

              <div className="mt-4 flex items-center gap-x-4 sm:mt-0">
                <button className="flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-jet-100 transition-colors duration-200 hover:bg-gray-100 sm:w-auto">
                  <span>Next</span>

                  <IconArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </section>
        </Layout>
      )}
      {addBoardModal && (
        <AddBoard
          addBoardModal={addBoardModal}
          toggleAddBoardModal={toggleAddBoardModal}
          boardList={boardList}
          setBoardList={setBoardList}
        />
      )}
    </>
  );
});
