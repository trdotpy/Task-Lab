import { teams } from "@/hooks/useTeams";
import React from "react";

export default function Teams() {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">Team Overview</div>
      <div className="flex w-full flex-col overflow-x-auto py-4">
        {teams.map((team) => (
          <div key={team.name} className="mb-4 flex flex-row">
            <div className="w-1/6 text-lg font-medium">{team.name}</div>
            <div className="flex w-5/6">
              {team.members.map((member) => (
                <div key={member.name} className="w-1/5 p-2">
                  <div className="rounded-md bg-white p-2 shadow-md">
                    <div className="font-medium text-gray-800">
                      {member.task}
                    </div>
                    <div className="text-gray-600"> {member.name}</div>
                    <div className="flex justify-end">
                      <img
                        src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="h-9 w-9 rounded-full border-2 border-green-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
