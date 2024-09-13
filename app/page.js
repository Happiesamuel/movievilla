import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import { getLatestMovie } from "./_services/tmbd-data-services";

import HomePage from "./_components/HomePage";
import AppSpinner from "./_ui/AppSpinner";
async function Page({ searchParams }) {
  noStore();
  const movie = await getLatestMovie();
  const position = searchParams.movie ?? 0;
  const move = movie.results.at(position);

  return (
    <Suspense fallback={<AppSpinner />} key={position}>
      <HomePage move={move} movie={movie} />
    </Suspense>
  );
}

export default Page;
