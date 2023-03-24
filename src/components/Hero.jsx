import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Brands from "./Brands";

export default function Hero() {
  return (
    <>
      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h1 className="block text-center text-4xl tracking-tight text-jet-800 sm:text-left sm:text-5xl lg:text-6xl lg:leading-tight">
              Revolutionize your organization&apos;s workflow with{" "}
              <span className="text-bitter-500">TaskLab</span>
            </h1>
            <p className="mt-6 text-center text-base text-gray-500 sm:text-left sm:text-lg">
              Ready to see what TaskLab can do for your team? Sign up for a free
              trial today and experience the power of effortless project
              management.
            </p>

            <div className="mt-7 grid w-full justify-center gap-3 sm:inline-flex sm:justify-start">
              <Link href="/trial">
                <button className="inline-flex items-center justify-center gap-2 rounded border-[1px] border-jet-100 bg-jet-800 py-3 px-4 text-sm text-white transition-all hover:border-jet-400">
                  Get Started
                  <IconChevronRight className="h-5 w-5" />
                </button>
              </Link>
              <Link href="https://github.com/trdotpy/Task-Lab">
                <button className="inline-flex items-center justify-center gap-2 rounded border-[1px] border-jet-100 py-3 px-4 text-sm text-jet-600 transition-all hover:border-jet-400">
                  Documentation
                </button>
              </Link>
            </div>
          </div>

          <div className="relative ml-4">
            <Image
              className="w-full rounded-md"
              src="https://res.cloudinary.com/drij60fru/image/upload/v1679461566/pexels-photo-3183150_fkygjy.jpg"
              alt="hero image"
              width={1200}
              height={900}
            />
            {/* <div className="absolute inset-0 -z-[1] mt-4 -mb-4 mr-4 -ml-4 h-full w-full rounded-md bg-gradient-to-tr from-bice-600 via-white/0 to-white/0 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
