import Filter from "@/app/_components/Filter";
import Load from "@/app/_components/Load";
import MovieContainer from "@/app/_components/MovieContainer";
import { Suspense } from "react";

async function Page({ searchParams }) {
  const filter = searchParams?.filter ?? "airing_today";
  const pages = searchParams?.page ?? 1;
  const filterArr = [
    {
      slug: "airing_today",
      name: "Airing Today",
    },
    {
      slug: "top_rated",
      name: "Top rated",
    },
    {
      slug: "popular",
      name: "Popular",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Filter defaults={"airing_today"} filterArr={filterArr} />
      <Suspense fallback={<Load />} key={filter || pages}>
        <MovieContainer type="tv" pages={pages} filter={filter} />
      </Suspense>
    </div>
  );
}

export default Page;
