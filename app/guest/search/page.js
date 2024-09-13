import Filter from "@/app/_components/Filter";
import FormSearch from "@/app/_components/FormSearch";
import SearchContainer from "@/app/_components/SearchContainer";
import SearchLoader from "@/app/_components/SearchLoader";
import { getSearchDetails } from "@/app/_services/tmbd-data-services";
import { Suspense } from "react";

async function Page({ searchParams }) {
  const filterArr = [
    {
      slug: "movie",
      name: "Movie",
    },
    {
      slug: "tv",
      name: "Tv show",
    },
  ];
  const query = searchParams?.query ?? "";
  const page = searchParams?.page || 1;
  const fil = searchParams?.filter || "movie";
  if (!query || query.length === 0)
    return (
      <div className="min-h-[88vh]">
        <div className="flex justify-between items-center">
          <FormSearch />
          <Filter defaults="movie" filterArr={filterArr} />
        </div>
      </div>
    );
  const result = await getSearchDetails(fil, query, page);

  return (
    <div className="mx-3 lg:mx-6">
      <div className="flex justify-between items-center">
        <FormSearch />
        <Filter defaults="movie" filterArr={filterArr} />
      </div>
      <Suspense key={page || query || fil} fallback={<SearchLoader />}>
        <SearchContainer result={result} query={query} type={fil} />
      </Suspense>
    </div>
  );
}

export default Page;
