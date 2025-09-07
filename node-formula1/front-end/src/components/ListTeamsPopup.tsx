"use client";

import { TeamModel } from "@/models/TeamModel";

export function ListTeamsPopup({ teams, onClose }: { teams: TeamModel[]; onClose: () => void }) {

  return (
      <div className="p-6 w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-xl font-bold mb-4 text-center">F1 Teams</h1>
       {(!teams || teams.length === 0) && <p>No teams available.</p>}
       {teams && teams.length > 0 &&
      
        <div className="max-h-80 overflow-y-auto pr-2">
          <ul className="space-y-3">
            {teams.map((team) => (
              <li key={team.id} className="p-4 rounded-xl border bg-gray-50 hover:bg-gray-100 transition-shadow shadow-sm">
                <h2 className="font-semibold text-lg">{team.name}</h2>
                <p className="text-gray-600 text-lg">{team.base}</p>
              </li>
            ))}
          </ul>
        </div>}

        <button
            onClick={onClose}
            className="mt-6 w-full bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-colors"
        >
            Close
        </button>
    </div>
  );
}
