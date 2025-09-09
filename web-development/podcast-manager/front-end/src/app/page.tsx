// app/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/list?p=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Gerenciador de Podcasts</h1>
      <p className="mb-10 text-gray-400 text-center">
        Ouça. Crie. Explore podcasts rápidos em qualquer lugar.
      </p>

      <button
        onClick={() => router.push("/list")}
        className="mb-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition"
      >
       Ver todos os podcasts
      </button>

      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Pesquisar podcast..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition"
        >
          Pesquisar
        </button>
      </div>
    </main>
  );
}
