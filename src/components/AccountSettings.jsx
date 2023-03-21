import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AccountSettings() {
  const { user } = useUser();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold uppercase text-gray-700">
          Account Settings
        </h1>
        <div className="mb-4">
          <div className="items-center">
            <img src={user?.picture} alt="" />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="mb-4">
          <div className="items-center">
            <h2 className="mb-2 block text-lg font-bold text-gray-700">Name</h2>
            <p className="block font-semibold text-gray-700">{user?.name}</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="items-center">
            <h2 className="mb-2 block text-lg font-bold text-gray-700">
              Email Address
            </h2>
            <p className="block font-semibold text-gray-700">{user?.email}</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="items-center">
            <h2 className="mb-2 block text-lg font-bold text-gray-700">
              Language
            </h2>
            <p className="block font-semibold uppercase text-gray-700">
              {user?.locale}
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className="items-center">
            <h2 className="mb-2 block text-lg font-bold text-gray-700">
              Member since:
            </h2>
            <p className="block font-semibold uppercase text-gray-700">
              {new Date(user?.updated_at).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
