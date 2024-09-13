import { getMovieDetails } from "../_services/tmbd-data-services";
import YoutubeTrailer from "./YoutubeTrailer";

async function Trailers({ id, slug, type }) {
  const { results } = await getMovieDetails(type, id, slug);
  if (!results.length) return null;

  return (
    <>
      <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
        TRAILERS
      </h1>
      <div
        className=" grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-3
 gap-3 "
      >
        {results.map((result) => (
          <div key={result.key} className="w-full">
            <YoutubeTrailer videoId={result.key} title={result.name} />
            <p className="text-zinc-200 text-center text-sm py-1 text-ellipsis  overflow-hidden">
              {result.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Trailers;
