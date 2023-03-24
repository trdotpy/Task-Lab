import { IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 right-0 border-t bg-jet-800">
      <div className=" px-6 py-4">
        <div className="flex flex-row items-center justify-center sm:flex-row">
          <div className="flex flex-col items-center rounded px-3 py-1 text-center hover:bg-jet-500">
            <Link className="flex items-center" href="/">
              <Image
                src="/assets/tasklab-logo-white.png"
                alt="TaskLab"
                height={25}
                width={25}
              />
            </Link>
          </div>
          <div className="-mx-2 flex">
            <Link
              href="https://github.com/trdotpy/Task-Lab"
              className="mx-2 flex items-center gap-x-2 rounded px-3 py-1 text-jet-100 transition-colors duration-200 hover:bg-jet-500"
            >
              <IconBrandGithubFilled className="h-5 w-5 " />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
