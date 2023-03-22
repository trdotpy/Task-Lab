import {
  IconArrowRight,
  IconDotsVertical,
  IconSquareRoundedPlus,
  IconUpload,
  IconSearch,
} from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Layout from "@/layouts/Layout";
import NewBoardModal from "@/components/NewBoardModal";
import Warning from "@/components/Modal/Warning";

export async function getStaticProps() {
  const res = await axios.get(`${process.env.BASE_URL}/api/boards`);
  const boards = res.data.data;

  return {
    props: {
      boards,
    },
  };
}

export default withPageAuthRequired(function Projects({ boards }) {
  const [boardList, setBoardList] = useState(boards);
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);

  const toggleWarningModal = () => setWarningModal(!warningModal);

  console.log(boardList);

  const handleDeleteBoard = async (boardId) => {
    try {
      await axios.delete(`/api/boards/${boardId}`);
      setBoardList(boardList.filter((board) => board._id !== boardId));
      toggleWarningModal();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Layout>
        <section className="container mx-auto px-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 ">Projects</h2>
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
                onClick={() => setShowBoardModal(true)}
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
                          Date Created
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
                          Team
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
                        key={board._id}
                      >
                        <tr>
                          <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                            <div>
                              <h2 className="text-base font-normal text-jet-700">
                                {board.title}
                              </h2>
                              {/* <h2 className="font-medium text-gray-800 "></h2> */}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
                            <div className="inline gap-x-2 rounded  px-3 py-1 text-sm font-normal">
                              {new Date(board.createdAt).toLocaleDateString()}
                            </div>
                          </td>

                          {/* Progress bar */}
                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            <div>
                              <div className="h-1.5 w-48 overflow-hidden rounded-full bg-seagreen-200">
                                <div
                                  className="h-1.5 bg-seagreen-400"
                                  style={{
                                    width: `${Math.floor(
                                      Math.random() * 100
                                    )}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </td>

                          {/* End progress bar */}
                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            <div className="flex items-center">
                              <img
                                className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                alt=""
                              />
                              <img
                                className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                alt=""
                              />
                              <img
                                className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                alt=""
                              />
                              <img
                                className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover"
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                alt=""
                              />
                              <p className="-mx-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs text-blue-600">
                                +4
                              </p>
                            </div>
                          </td>

                          <td className="p-8">
                            <p className="text-xs text-jet-300">
                              {board.description}
                            </p>
                          </td>

                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            <div class="hs-dropdown relative inline-flex">
                              <button
                                id="hs-dropdown-custom-icon-trigger"
                                type="button"
                                class="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-1 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
                              >
                                <IconDotsVertical class="h-5 w-5 text-jet-200" />
                              </button>

                              <div
                                class="hs-dropdown-menu duration z-20 mt-2 hidden rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
                                aria-labelledby="hs-dropdown-custom-icon-trigger"
                              >
                                <button class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                                  Edit Project
                                </button>
                                <button
                                  class="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                  // onClick={() => handleDeleteBoard(board._id)}
                                  onClick={toggleWarningModal}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                          {warningModal && (
                            <Warning
                              toggleWarningModal={toggleWarningModal}
                              handleDeleteBoard={handleDeleteBoard}
                              warningModal={warningModal}
                              boardId={board._id}
                            />
                          )}
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
            <p className="text-sm text-gray-500 ">
              Page <span className="font-medium text-gray-700 ">1 of 1</span>
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
      {/* {warningModal && (
        <Warning
          toggleWarningModal={toggleWarningModal}
          handleDeleteBoard={handleDeleteBoard}
					warningModal={warningModal}
        />
      )} */}
      {showBoardModal && (
        <NewBoardModal
          showBoardModal={showBoardModal}
          setShowBoardModal={setShowBoardModal}
          boardList={boardList}
          setBoardList={setBoardList}
        />
      )}
    </>
  );
});
