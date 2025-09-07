import { TeamModel } from "@/models/TeamModel";

export async function getTeams(): Promise<TeamModel[]> {
  const res = await fetch(`http://localhost:3333/teams`, {
      method: "GET",
      cache: "no-store",
  });

  if (!res.ok) {
      throw new Error("Failed to fetch teams");
  }

  const json = await res.json();
  return json.teams;
}