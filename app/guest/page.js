import { Suspense } from "react";
import BrowseTrendingAll from "../_components/BrowseTrendingAll";
import MovieLayout from "../_components/MovieLayout";
import { getLatestMovie } from "../_services/tmbd-data-services";
import { auth } from "../_lib/auth";

import StateSpinner from "../_ui/StateSpinner";

async function Page() {
  const latest = await getLatestMovie();
  const latestMovie = latest.results
    .filter((x) => x.backdrop_path !== undefined)
    .at(Math.floor(Math.random() * latest.results.length));
  const session = await auth();

  return (
    <div className="">
      <MovieLayout latestMovie={latestMovie} />
      <div className="mx-3 my-3">
        <h1 className="font-bold text-2xl text-zinc-100">
          Welcome, {session?.user?.name}
        </h1>
      </div>
      <Suspense fallback={<StateSpinner />}>
        <BrowseTrendingAll />
      </Suspense>
    </div>
  );
}

export default Page;
