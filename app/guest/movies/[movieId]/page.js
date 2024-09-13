import { getMovie } from "@/app/_services/tmbd-data-services";
import Trailers from "../../../_components/Trailers";
import { Suspense } from "react";
import Similar from "@/app/_components/Similar";
import Reviews from "@/app/_components/Reviews";
import MovieHeader from "@/app/_components/MovieHeader";
import StateSpinner from "@/app/_ui/StateSpinner";
export default async function Page({ params }) {
  const movie = await getMovie("movie", params.movieId);
  const { genres } = movie;
  return (
    <div className="lg:mx-6 mx-0 relative ">
      <MovieHeader movie={movie} />
      <div>
        <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
          Genres
        </h1>
        <div className="flex gap-3  mt-3 ml-3">
          {genres.map((genre) => (
            <p className="text-sm text-zinc-300 " key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>
      </div>
      <Suspense fallback={<StateSpinner />}>
        <Trailers type="movie" id={params.movieId} slug="videos" />
      </Suspense>
      <Suspense fallback={<StateSpinner />}>
        <Reviews type="movie" id={params.movieId} slug="reviews" />
      </Suspense>
      <Suspense fallback={<StateSpinner />}>
        <Similar type="movie" id={params.movieId} slug="recommendations" />
      </Suspense>
    </div>
  );
}
