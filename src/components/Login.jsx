import { IconCircleDashed } from "@tabler/icons-react";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/login", { email, password })
      .then((res) => {
        console.log(res.data);
        router.push("/dashboard");
      })
      .catch((error) => {
        setError("Invalid email or password");
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <div className="mx-auto flex justify-center">
          <IconCircleDashed className="h-12 w-auto text-violet-400" />
        </div>

        <form className="mt-6" onSubmit={handleLogin}>
          <div>
            <label for="email" className="block text-sm text-gray-800 ">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm text-gray-800 ">
                Password
              </label>
              <a href="#" className="text-xs text-gray-600 hover:underline ">
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              name="password"
              className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full transform rounded-lg bg-violet-400 px-6 py-2.5 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/5 border-b  lg:w-1/5"></span>

          <a
            href="#"
            className="text-center text-xs uppercase text-gray-500 hover:underline "
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b  lg:w-1/5"></span>
        </div>

        <div className="-mx-2 mt-6 flex flex-col items-center gap-y-2">
          <button
            type="button"
            className="mx-2 flex w-full transform items-center justify-center rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="mx-2 h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="mx-2 hidden sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-center text-xs font-light text-gray-400">
          {" "}
          Don&apos;t have an account?{" "}
          <a href="#" className="font-medium text-gray-700 hover:underline ">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
