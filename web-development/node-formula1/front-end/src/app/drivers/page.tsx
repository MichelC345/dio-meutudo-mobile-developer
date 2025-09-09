// app/drivers/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function DriversPage() {
  const [drivers, setDrivers] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/drivers")
      .then((res) => res.json())
      .then((data) => setDrivers(data.drivers));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">F1 Drivers</h1>
      <ul className="space-y-2">
        {drivers.map((driver) => (
          <li key={driver.id} className="p-4 rounded border shadow-sm">
            <h2 className="font-semibold">{driver.name}</h2>
            <p className="text-gray-600">{driver.team}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
