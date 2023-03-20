import { IconCircleDashed } from "@tabler/icons-react";
import React from "react";

export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div class="m-auto mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <div class="mx-auto flex justify-center">
          <IconCircleDashed className="h-12 w-auto text-violet-400" />
        </div>

        <form class="mt-6">
          <div>
            <label for="username" class="block text-sm text-gray-800 ">
              Username
            </label>
            <input
              type="text"
              class="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
          </div>

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm text-gray-800 ">
                Password
              </label>
              <a href="#" class="text-xs text-gray-600 hover:underline ">
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              class="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
            />
          </div>

          <div class="mt-6">
            <button class="w-full transform rounded-lg bg-violet-400 px-6 py-2.5 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>

        <div class="mt-4 flex items-center justify-between">
          <span class="w-1/5 border-b  lg:w-1/5"></span>

          <a
            href="#"
            class="text-center text-xs uppercase text-gray-500 hover:underline "
          >
            or login with Social Media
          </a>

          <span class="w-1/5 border-b  lg:w-1/5"></span>
        </div>

        <div class="-mx-2 mt-6 flex items-center">
          <button
            type="button"
            class="mx-2 flex w-full transform items-center justify-center rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg class="mx-2 h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span class="mx-2 hidden sm:inline">Sign in with Google</span>
          </button>

          <a
            href="#"
            class="mx-2 transform rounded-lg bg-gray-300 p-2 text-sm font-medium text-gray-500 transition-colors duration-300 hover:bg-gray-200"
          >
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
            </svg>
          </a>
        </div>

        <p class="mt-8 text-center text-xs font-light text-gray-400">
          {" "}
          Don&apos;t have an account?{" "}
          <a href="#" class="font-medium text-gray-700 hover:underline ">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
