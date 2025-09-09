import { PodcastModel } from "@/models/PodcastModel";

export async function getPodcasts(search?: string | ""): Promise<PodcastModel[]> {
    const res = !search ? await fetch("http://localhost:3333/api/list", {
        method: "GET",
        cache: "no-store",
    }) : await fetch(`http://localhost:3333/api/podcasts?p=${search}`, {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Falha ao obter os podcasts");
    }
    const json: PodcastModel[] = await res.json();

    return json;
}