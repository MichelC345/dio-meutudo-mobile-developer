// app/page.tsx
"use client";

import { useState } from "react";
import { ListDriversPopup } from "@/components/ListDriversPopup";
import { ListTeamsPopup } from "@/components/ListTeamsPopup";
import { getDrivers } from "@/services/DriverService";
import { getTeams } from "@/services/TeamService";
import { DriverModel } from "@/models/DriverModel";
import { TeamModel } from "@/models/TeamModel";

export default function Page() {
  const [search, setSearch] = useState("");
  const [drivers, setDrivers] = useState<DriverModel[]>([]);
  const [teams, setTeams] = useState<TeamModel[]>([]);
  const [searchPopupOpen, setSearchPopupOpen] = useState(false);
  const [driversPopupOpen, setDriversPopupOpen] = useState(false);
  const [teamsPopupOpen, setTeamsPopupOpen] = useState(false);

  const handleSearchDriver = () => {
    if (search.trim() !== "") {
      getDrivers({ id: (search) }).then((data) => {
        console.log("Fetched driver for search:", data);
        setDrivers(Array.isArray(data) ? data : (data ? [data] : []));
        console.log("drivers state:", drivers);
        setSearchPopupOpen(true);
      });
    }
  };

  const handleListDrivers = () => {
    getDrivers({}).then((data) => {
      console.log("Fetched drivers:", data);
      console.log("map test", data.map(d => d.name));
      setDrivers(data);
      setDriversPopupOpen(true);
    });
  }

  const handleListTeams = () => {
    getTeams().then((data) => {
      console.log("Fetched teams:", data);
      setTeams(data);
      setTeamsPopupOpen(true);
    });
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6">
      <h1 className="text-4xl font-bold mb-4 text-black-400">Formula 1 simple front-end</h1>

      <button
        onClick={handleListDrivers}
        className="mb-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition"
      >
       List drivers
      </button>

      <button
        onClick={handleListTeams}
        className="mb-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition"
      >
       List teams
      </button>

      <div className="flex gap-2 w-full max-w-md">
        {(!driversPopupOpen && !teamsPopupOpen && !searchPopupOpen) && <input
          type="text"
          placeholder="Search driver by id..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />} 
        {(!driversPopupOpen && !teamsPopupOpen && !searchPopupOpen) &&
        <button
          onClick={handleSearchDriver}
        >
          Search
        </button>}

        {searchPopupOpen && <ListDriversPopup drivers={drivers} onClose={() => setSearchPopupOpen(false)} />}
        {driversPopupOpen && <ListDriversPopup drivers={drivers} onClose={() => setDriversPopupOpen(false)} />}
        {teamsPopupOpen && <ListTeamsPopup teams = {teams} onClose={() => setTeamsPopupOpen(false)} />}
      </div>
    </main>
  );
}
