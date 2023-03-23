import {
  IconTrash,
  IconMessage2,
  IconBookmark,
  IconDots,
  IconStar,
} from "@tabler/icons-react";
import moment from "moment/moment";
import Image from "next/image";

export default function Comments({ comments, handleDeleteComment }) {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment._id} className="min-h-[80px] border-b px-2 py-4">
          <div className="flex">
            <div className="">
              <Image
                className="mr-3 rounded-lg"
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
                <div className="cursor-pointer">
                  <IconDots
                    stroke={1.0}
                    className="text-jet-300 hover:text-jet-800"
                    size={24}
                  />{" "}
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-jet-400">{comment.text}</p>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="flex items-center justify-end">
            <div
              onClick={() => handleDeleteComment(comment._id)}
              className="cursor-pointer rounded-xl p-2 hover:bg-jet-100"
            >
              <IconTrash stroke={1.0} className="text-jet-300" size={24} />{" "}
            </div>
            <div className="cursor-pointer rounded-xl p-2 hover:bg-jet-100">
              <IconStar stroke={1.0} className="text-jet-300" size={20} />{" "}
            </div>
            <div className="cursor-pointer rounded-xl p-2 hover:bg-jet-100">
              <IconBookmark stroke={1.0} className="text-jet-300" size={24} />{" "}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
