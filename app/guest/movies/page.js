import Filter from "@/app/_components/Filter";
import Load from "@/app/_components/Load";
import MovieContainer from "@/app/_components/MovieContainer";

import { Suspense } from "react";
export async function generateMetadata() {
  return {
    title: `Movies`,
  };
}

async function Page({ searchParams }) {
  const filter = searchParams?.filter ?? "now_playing";
  const pages = searchParams?.page ?? 1;
  const filterArr = [
    {
      slug: "now_playing",
      name: "Now playing",
    },
    {
      slug: "top_rated",
      name: "Top rated",
    },
    {
      slug: "popular",
      name: "Popular",
    },
    {
      slug: "upcoming",
      name: "Upcoming",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Filter defaults={"now_playing"} filterArr={filterArr} />
      <Suspense fallback={<Load />} key={pages || filter}>
        <MovieContainer type="movie" pages={pages} filter={filter} />
      </Suspense>
    </div>
  );
}

export default Page;
