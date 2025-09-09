// app/teams/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function TeamsPage() {
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">F1 Teams</h1>
      <ul className="space-y-2">
        {teams.map((team) => (
          <li key={team.id} className="p-4 rounded border shadow-sm">
            <h2 className="font-semibold">{team.name}</h2>
            <p className="text-gray-600">{team.base}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
