"use client";

import { DriverModel } from "@/models/DriverModel";

export function ListDriversPopup({ drivers, onClose }: { drivers: DriverModel[], onClose: () => void }) {
  //if (!drivers || drivers.length === 0) return <p>No drivers available.</p>;

  return (
    <div className="p-6 w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-xl font-bold mb-4 text-center">F1 Drivers</h1>

      {/* Scrollable list */}
      {(!drivers || drivers.length === 0) && <p>No drivers available.</p>}
      {(drivers && drivers.length > 0) && <div className="max-h-80 overflow-y-auto pr-2">
        <ul className="space-y-3">
          {drivers.map((driver) => (
            <li
              key={driver.id}
              className="p-4 rounded-xl border bg-gray-50 hover:bg-gray-100 transition-shadow shadow-sm"
            >
              <h2 className="font-semibold text-lg">{driver.name}</h2>
              <p className="text-gray-600 text-sm">{driver.team}</p>
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
