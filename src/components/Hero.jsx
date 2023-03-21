import { IconChevronRight } from "@tabler/icons-react";
import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <>
      <div class="mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Revolutionize your team&apos;s workflow with{" "}
              <span class="text-blue-600">TaskLab</span>
            </h1>
            <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Ready to see what TaskLab can do for your team? Sign up for a free
              trial today and experience the power of effortless project
              management.
            </p>

            <div class="mt-7 grid w-full gap-3 sm:inline-flex">
              <a
                class="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white  lg:text-base"
                href="#"
              >
                Get Your Free Trial
                <IconChevronRight className="h-5 w-5" />
              </a>
              <a
                class="inline-flex items-center justify-center gap-x-3.5 rounded-md border py-3 px-4 text-center text-sm font-medium shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white  lg:text-base"
                href="#"
              >
                Documentation
              </a>
            </div>
          </div>

          <div class="relative ml-4">
            <img
              class="w-full rounded-md"
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hero image"
            />
            <div class="absolute inset-0 -z-[1] mt-4 -mb-4 mr-4 -ml-4 h-full w-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}
