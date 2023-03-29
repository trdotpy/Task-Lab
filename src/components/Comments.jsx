import { IconBookmark, IconDots, IconStar } from "@tabler/icons-react";
import moment from "moment/moment";
import Image from "next/image";
import Tooltip from "./Shared/Tooltip";

export default function Comments({ comments, handleDeleteComment }) {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment._id} className="min-h-[80px] px-2 py-4">
          <div className="flex">
            <div className="flex-shrink-0 overflow-hidden">
              <Image
                className="mr-3 rounded"
                src={comment.createdBy.picture}
                alt="user picture"
                width={32}
                height={32}
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium tracking-tight text-jet-600">
                    {comment.createdBy.name}
                  </p>
                  <span className="text-xs text-jet-200">
                    {moment(comment.createdAt).fromNow()}
                  </span>
                </div>
                <div className="hs-dropdown relative [--placement:left-top]">
                  <button
                    id="hs-dropdown-with-icons"
                    type="button"
                    className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-lg bg-white px-1 align-middle shadow-sm transition-all hover:bg-jet-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    <IconDots
                      stroke={1.0}
                      className="text-jet-300 hover:text-jet-800 hs-dropdown-open:rotate-180"
                      size={24}
                    />{" "}
                  </button>

                  <div
                    className="hs-dropdown-menu duration hidden min-w-[5rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
                    aria-labelledby="hs-dropdown-with-icons"
                  >
                    <div className="py-2 first:pt-0 last:pb-0">
                      <button
                        className="flex items-center rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-jet-100 focus:ring-2 focus:ring-blue-500"
                        onClick={() => handleDeleteComment(comment._id)}
                      >
                        Delete comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-jet-400">{comment.text}</p>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="mt-2.5 flex items-center justify-end border-b">
            <Tooltip>
              <div className="cursor-pointer rounded-xl p-2 hover:bg-jet-100">
                <IconStar stroke={1.0} className="text-jet-300" size={20} />{" "}
              </div>
            </Tooltip>
            <Tooltip>
              <div className="cursor-pointer rounded-xl p-2 hover:bg-jet-100">
                <IconBookmark stroke={1.0} className="text-jet-300" size={24} />{" "}
              </div>
            </Tooltip>
          </div>
        </div>
      ))}
    </>
  );
}
