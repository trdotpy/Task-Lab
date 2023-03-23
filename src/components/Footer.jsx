import { IconBrandGithubFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bottom-0 max-w-7xl">
        <div className="mx-auto px-6 py-8">
          <div className="flex flex-row items-center justify-between sm:flex-row">
            <div className="flex flex-col items-center rounded px-3 py-1 text-center hover:bg-jet-100">
              <Link className="flex items-center" href="/">
                <Image
                  src="https://res.cloudinary.com/drij60fru/image/upload/v1679375340/tasklab_qjjn6r.png"
                  alt="TaskLab"
                  height={25}
                  width={25}
                />
                <h1 className="ml-3 flex-none rounded text-xl font-semibold tracking-tight text-jet-600">
                  TaskLab
                </h1>
              </Link>
            </div>
            <p className="hidden text-sm text-jet-400 sm:block">
              © Copyright 2023. All Rights Reserved.
            </p>

            <div className="-mx-2 flex">
              <Link
                href="https://github.com/trdotpy/Task-Lab"
                className="mx-2 flex items-center gap-x-2 rounded px-3 py-1 text-jet-400 transition-colors duration-200 hover:bg-jet-100 hover:text-bitter-500"
              >
                <span className="text-sm">Github Repo</span>
                <IconBrandGithubFilled className="h-5 w-5 fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
