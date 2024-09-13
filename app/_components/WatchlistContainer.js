"use client";
import { useOptimistic } from "react";
import WatchlistList from "./WatchlistList";
import { deleteFromWatchlist } from "../_lib/action";

function WatchlistContainer({ watchlist }) {
  const [optimisticWatchlist, optimisticDelete] = useOptimistic(
    watchlist,
    (currWatch, watchId) => currWatch.filter((wah) => wah.movieId !== watchId)
  );
  async function handleDelete(watchId) {
    optimisticDelete(watchId);
    await deleteFromWatchlist(watchId);
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mx-2 my-3 lg:mx-2 lg:my-4 gap-3 w-full ">
      {optimisticWatchlist.map((watch) => {
        return (
          <WatchlistList
            watch={watch}
            handleDelete={handleDelete}
            key={watch.id}
          />
        );
      })}
    </div>
  );
}

export default WatchlistContainer;
