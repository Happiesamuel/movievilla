import Image from "next/image";
import { getMovie, getMovieDetails } from "../_services/tmbd-data-services";
import WatchlistCancel from "./WatchlistCancel";
import TvWatchlist from "./TvWatchlist";
import MovieWatchlist from "./MovieWatchlist";
import Link from "next/link";
import { Suspense } from "react";

async function Watching({ watchId, watching }) {
  if (!watchId) return;
  const [movie, trailer] = await Promise.all([
    await getMovie(watching, watchId),
    await getMovieDetails(watching, watchId, "videos"),
  ]);
  //
  const { backdrop_path: bg, id } = movie;
  return (
    <div className="fixed top-0 left-0 right-0 h-screen w-full backdrop-blur-sm z-30 ">
      <div
        className={`overflow-scroll container rounded-xl shadow-sm
   shadow-zinc-950 fixed  max-h-[88vh] max-w-full   md:left-[50%]
    md:right-[0%] left-0 lg:w-[70%]
    lg:left-[50%] md:bottom-[0%]  md:translate-x-[-50%] bottom-[0%]
     lg:right-0 z-50  bg-zinc-950 `}
      >
        <WatchlistCancel />
        <div className="relative w-full h-[220px] md:h-[300px] lg:h-[40vh]">
          <Image
            fill
            alt={`image of `}
            className="h-full"
            src={`https://image.tmdb.org/t/p/original${bg}`}
          />
        </div>

        {watching === "tv" ? (
          <TvWatchlist tv={movie} trailer={trailer} />
        ) : (
          <MovieWatchlist trailer={trailer} movie={movie} />
        )}

        <div className="text-center w-full bg-red-700 py-3 mt-3">
          <Link
            href={`/guest/${watching === "movie" ? "movies" : "tv"}/${id}`}
            className="text-base text-zinc-200 "
          >
            Read more about {watching === "tv" ? "series" : "movie"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Watching;
