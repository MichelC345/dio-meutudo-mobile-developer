// app/list/page.tsx
import { PodcastList } from "@/components/PodcastList";
import { getPodcasts } from "@/services/PodcastService";

export default async function Page({searchParams,
  }: {
    searchParams: { p?: string };
  }) {
  const { p: search = "" } = await searchParams;
  const podcasts = search ? await getPodcasts(search) : await getPodcasts();

  return PodcastList({ podcasts });
}
