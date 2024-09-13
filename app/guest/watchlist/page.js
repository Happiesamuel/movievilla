import Filter from "@/app/_components/Filter";
import Sort from "@/app/_components/Sort";
import Watching from "@/app/_components/Watching";
import WatchlistContainer from "@/app/_components/WatchlistContainer";
import WatchLoad from "@/app/_components/WatchLoad";
import { getWatchlist } from "@/app/_lib/action";
import { auth } from "@/app/_lib/auth";
import { Suspense } from "react";

async function Page({ searchParams }) {
  const session = await auth();
  const sort = searchParams?.sortBy ?? "created_at-desc";
  const [field, direction] = sort.split("-");
  const watchlist = await getWatchlist(session.user.guestId, {
    field,
    direction,
  });

  const arrSort = [
    {
      value: "created_at-desc",
      name: "Date added ",
    },
    {
      value: "created_at-asc",
      name: "Date added (recently) ",
    },
    {
      value: "title-asc",
      name: "Title (A - Z)",
    },
    {
      value: "title-desc",
      name: "Title (Z - A)",
    },
    {
      value: "releaseDate-asc",
      name: "Date released",
    },
    {
      value: "releaseDate-desc",
      name: "Date released (recently) ",
    },
    {
      value: "rating-desc",
      name: "Movilla rating (10 - 0)⭐",
    },
    {
      value: "rating-asc",
      name: "Movilla rating (0 - 10)⭐",
    },
    {
      value: "rate-desc",
      name: "Your rating (10 - 0)⭐",
    },
    {
      value: "rate-asc",
      name: "Your rating (0 - 10)⭐",
    },
  ];
  const filterArr = [
    {
      slug: "all",
      name: "All",
    },
    {
      slug: "movie",
      name: "Movie",
    },
    {
      slug: "tv",
      name: "Tv show",
    },
  ];

  const fil = searchParams?.filter ?? "all";
  const watching = searchParams?.watching;
  const watchId = searchParams?.watchId;

  let data;
  if (fil === "all") data = watchlist;
  if (fil === "movie")
    data = watchlist.filter((watch) => watch.type === "movie");
  if (fil === "tv") data = watchlist.filter((watch) => watch.type === "tv");

  return (
    <div className="flex flex-col gap-4">
      <div className=" flex items-center justify-between ">
        <Sort arrSort={arrSort} defaults={sort} />
        <Filter defaults="all" filterArr={filterArr} />
      </div>
      <Suspense key={fil || sort} fallback={<WatchLoad />}>
        <WatchlistContainer watchlist={data} />
      </Suspense>

      <Watching watchId={watchId} watching={watching} />
    </div>
  );
}

export default Page;
