import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="mx-auto mt-16 min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h1 className="block text-center text-4xl font-bold text-jet-800 sm:text-left sm:text-5xl lg:text-6xl lg:leading-tight">
              Revolutionize your team&apos;s workflow with{" "}
              <span className="text-bitter-500">TaskLab</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-jet-300 text-center sm:text-left">
              Ready to see what TaskLab can do for your team? Sign up for a free
              trial today and experience the power of effortless project
              management.
            </p>

            <div className="mt-7 grid w-full gap-3 sm:inline-flex">
              <Link
                className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-bitter-500 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-bitter-600 focus:outline-none focus:ring-2 focus:ring-bitter-600 focus:ring-offset-2 focus:ring-offset-white lg:text-base"
                href="/trial"
              >
                Get Your Free Trial
                <IconChevronRight className="h-5 w-5" />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-x-3.5 rounded-md border py-3 px-4 text-center text-sm font-medium shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white lg:text-base"
                href="https://github.com/trdotpy/Task-Lab"
              >
                Documentation
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
            <div className="absolute inset-0 -z-[1] mt-4 -mb-4 mr-4 -ml-4 h-full w-full rounded-md bg-gradient-to-tr from-bice-600 via-white/0 to-white/0 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}
