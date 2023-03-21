import React from "react";
import Header from "./Header";

export default function Landing() {
  return (
    <>
      <Header />
      <div class="mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h1 class="block text-3xl font-bold text-gray-800  sm:text-4xl lg:text-6xl lg:leading-tight">
              Start your journey with{" "}
              <span class="text-blue-600">Task Lab</span>
            </h1>
            <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Hand-picked professionals and expertly crafted components,
              designed for any kind of entrepreneur.
            </p>

            <div class="mt-7 grid w-full gap-3 sm:inline-flex">
              <a
                class="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white  lg:text-base"
                href="#"
              >
                Get started
                <svg
                  class="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
              <a
                class="inline-flex items-center justify-center gap-x-3.5 rounded-md border py-3 px-4 text-center text-sm font-medium shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white  lg:text-base"
                href="#"
              >
                Contact sales team
              </a>
            </div>
          </div>

          <div class="relative ml-4">
            <img
              class="w-full rounded-md"
              src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Image Description"
            />
            <div class="absolute inset-0 -z-[1] mt-4 -mb-4 mr-4 -ml-4 h-full w-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}
