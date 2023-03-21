import {
  IconLockOpen,
  IconPassword,
  IconUserPlus,
  IconLink,
  IconExternalLink,
  IconChecklist,
} from "@tabler/icons-react";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import SuccessToast from "./Toast/SuccessToast";

export default function TrialCredentials() {
  const [copied, setCopied] = useState(false);
  const username = "demo@tasklab.com";
  const password = "rde0QHY_rnj5hjz5upw";

  return (
    <div>
      <div className="flex justify-end">
        {copied && (
          <SuccessToast message="Copied to clipboard!" toastState={setCopied} />
        )}
      </div>

      <div className="mx-auto px-6 py-8">
        <p className="text-center text-xl text-gray-500">
          Access your trial account
        </p>

        <h1 className="mt-4 text-center text-2xl font-semibold capitalize text-gray-800 lg:text-3xl">
          Login Credentials
        </h1>

        <div className="mt-6 space-y-8 xl:mt-12">
          <div className="mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border px-8 py-4 ">
            <div className="flex items-center">
              <IconUserPlus className="h-5 w-5 text-blue-600 sm:h-9 sm:w-9" />

              <div className="mx-5 flex flex-col items-center space-y-1">
                <h2 className="text-lg font-medium text-gray-700 sm:text-xl">
                  Username
                </h2>
              </div>
            </div>

            <div>
              <CopyToClipboard text={username} onCopy={() => setCopied(true)}>
                <button className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <IconLink className="h-5 w-5 text-white" />
                  <span className="ml-2">Copy</span>
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border px-8 py-4">
            <div className="flex items-center">
              <IconPassword className="h-5 w-5 text-blue-600 sm:h-9 sm:w-9" />

              <div className="mx-5 flex flex-col items-center space-y-1">
                <h2 className="text-lg font-medium text-gray-700 sm:text-xl">
                  Password
                </h2>
              </div>
            </div>
            <div>
              <CopyToClipboard text={password} onCopy={() => setCopied(true)}>
                <button className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <IconLink className="h-5 w-5 text-white" />
                  <span className="ml-2">Copy</span>
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border px-8 py-4 ">
            <div className="flex items-center">
              <IconLockOpen className="h-5 w-5 text-blue-600 sm:h-9 sm:w-9" />

              <div className="mx-5 flex flex-col items-center space-y-1">
                <h2 className="text-lg font-medium text-gray-700 sm:text-xl">
                  Sign In
                </h2>
              </div>
            </div>

            <div>
              <Link href="/api/auth/login">
                <p className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <IconExternalLink className="h-5 w-5 text-white" />
                  <span className="ml-2">Open</span>
                </p>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="transform rounded-md bg-blue-600 px-8 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
