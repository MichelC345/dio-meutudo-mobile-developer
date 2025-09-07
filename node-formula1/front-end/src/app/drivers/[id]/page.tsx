// app/drivers/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DriverPage() {
  const params = useParams();
  const [driver, setDriver] = useState<any | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3333/drivers/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDriver(data.driver));
  }, [params.id]);

  if (!driver) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{driver.name}</h1>
      <p className="text-gray-600">Team: {driver.team}</p>
    </div>
  );
}
