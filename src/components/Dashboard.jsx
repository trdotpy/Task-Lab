import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get("/api/boards").then((res) => {
      setBoards(res.data.data);
    });
  }, []);

  console.log(boards);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-500">Manage your project boards</p>

          <div className="mt-4 flex flex-row">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Recent Projects</h2>
              <div className="mt-4 grid grid-cols-3 gap-8">
                {boards.map((board) => (
                  <div key={board.id} className="">
                    <div className="rounded-lg bg-white p-4 shadow-lg">
                      <h3 className="text-xl font-bold">{board.title}</h3>
                      <p className="text-gray-500">{board.description}</p>
                      <p className="text-gray-500">
                        {new Date(board.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
