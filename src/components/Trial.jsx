import {
  IconChevronDown,
  IconChevronUp,
  IconClipboard,
  IconCloud,
  IconExternalLink,
  IconKey,
  IconLock,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Trial() {
  const username = "demo@tasklab.com";
  const password = "rde0QHY_rnj5hjz5upw";

  return (
    <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="md:col-span-1">
          <div class="max-w-xs">
            <h2 class="text-2xl font-bold  md:text-5xl md:leading-tight">
              Welcome to your TaskLab trial
            </h2>
            <p class="mt-1 hidden text-gray-600  md:block">
              Follow these instructions to access your free demo account.
            </p>
          </div>
        </div>

        <div class="md:col-span-1">
          <div class="hs-accordion-group divide-y divide-gray-200">
            <div
              class="hs-accordion active pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 pb-3 text-left font-semibold text-gray-800 transition hover:text-gray-500  md:text-lg"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                <p className="flex items-center">
                  Username
                  <IconKey className="ml-3 h-5 w-5" />
                </p>
                <IconChevronDown class="block h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden " />
                <IconChevronUp class="hidden h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block " />
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div>
                  <CopyToClipboard text={username}>
                    <button
                      type="button"
                      class="inline-flex w-full items-center justify-between gap-2 rounded-md border border-transparent bg-bitter-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-bitter-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <p>demo@tasklab.com</p>
                      <IconClipboard class="h-5 w-5" />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 pb-3 text-left font-semibold text-gray-800 transition hover:text-gray-500  md:text-lg"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                <p className="flex items-center">
                  Password
                  <IconLock className="ml-3 h-5 w-5" />
                </p>
                <IconChevronDown class="block h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden " />
                <IconChevronUp class="hidden h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block " />
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <div class="items-center">
                  <CopyToClipboard text={password}>
                    <button
                      type="button"
                      class="inline-flex w-full items-center justify-between gap-2 rounded-md border border-transparent bg-bitter-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-bitter-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <p>rde0QHY_rnj5hjz5upw</p>
                      <IconClipboard class="h-5 w-5" />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>

            <div
              class="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 pb-3 text-left font-semibold text-gray-800 transition hover:text-gray-500  md:text-lg"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                <p className="flex items-center">
                  Sign in
                  <IconCloud className="ml-3 h-5 w-5" />
                </p>
                <IconChevronDown class="block h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden " />
                <IconChevronUp class="hidden h-5 w-5 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block " />
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p class="text-gray-600 ">
                  That&apos;s it! Take your account credentials to the login
                  page to securely sign in.
                </p>
                <Link href="/api/auth/login">
                  <button
                    type="button"
                    class="inline-flex w-full items-center justify-between gap-2 rounded-md border border-transparent bg-bitter-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-bitter-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <p>Sign in</p>
                    <IconExternalLink class="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
