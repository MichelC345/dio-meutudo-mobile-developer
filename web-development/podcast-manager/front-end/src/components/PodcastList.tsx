import { PodcastModel } from "@/models/PodcastModel";

export function PodcastList({ podcasts, search }: { podcasts: PodcastModel[], search?: string }) {

  return (
    <main className="bg-black text-white min-h-screen p-8">

      {search ? (
          <h1 className="text-3xl font-bold mb-8 text-green-400"> Resultados da pesquisa por "{search}" </h1>
        ) : (
          <h1 className="text-3xl font-bold mb-8 text-green-400">Todos os Podcasts</h1> 
        )
      }

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {podcasts.length === 0 && (
          <p className="text-gray-400">Nenhum podcast encontrado.</p>
        )}

        {podcasts.map((podcast) => (
          <div
            key={podcast.videoId}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
          >

            <img
              src={`https://i.ytimg.com/vi/${podcast.coverId}/hqdefault.jpg`}
              alt={podcast.podcastName}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {podcast.podcastName}
              </h2>
              <p className="text-gray-400 mb-1">Episódio: {podcast.episode}</p>
              <p className="text-sm text-gray-500 mb-3">
                {podcast.categories.join(", ")}
              </p>
              <a
                href={`https://youtube.com/watch?v=${podcast.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                ▶ Assista no YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}