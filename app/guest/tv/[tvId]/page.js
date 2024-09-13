import MovieHeader from "@/app/_components/MovieHeader";
import Reviews from "@/app/_components/Reviews";
import Similar from "@/app/_components/Similar";
import Trailers from "@/app/_components/Trailers";
import TvHeader from "@/app/_components/TvHeader";
import { getMovie } from "@/app/_services/tmbd-data-services";
import StateSpinner from "@/app/_ui/StateSpinner";
import { Suspense } from "react";
export async function generateMetadata({ params }) {
  const movie = await getMovie("tv", params.tvId);
  return {
    title: `${movie.name}`,
  };
}
async function Page({ params }) {
  const tv = await getMovie("tv", params.tvId);
  const { genres } = tv;
  console.log(tv);
  return (
    <div className="lg:mx-6 mx-0 relative ">
      <TvHeader tv={tv} />
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
        <Trailers type="tv" id={params.tvId} slug="videos" />
      </Suspense>

      <Suspense fallback={<StateSpinner />}>
        <Reviews type="tv" id={params.tvId} slug="reviews" />
      </Suspense>
      <Suspense fallback={<StateSpinner />}>
        <Similar type="tv" id={params.tvId} slug="recommendations" />
      </Suspense>
    </div>
  );
}

export default Page;
