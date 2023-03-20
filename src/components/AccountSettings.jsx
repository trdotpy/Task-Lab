import React, { useState } from "react";

export default function AccountSettings() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = () => {
    // code to save changes
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold uppercase text-gray-700">
        Project Settings
      </h2>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Name
        </label>
        <input
          className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight focus:outline-none"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Description
        </label>
        <textarea
          className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          URL
        </label>
        <input
          className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight focus:outline-none"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Category
        </label>
        <select
          className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Web">Web</option>
          <option value="Mobile">Mobile</option>
          <option value="Desktop">Desktop</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          className="rounded bg-blue-400 py-2 px-4 text-xs font-medium text-white hover:bg-blue-500"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
