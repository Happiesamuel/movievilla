import { getLatestMovie, getNowPlaying } from "../_services/tmbd-data-services";
import BrowseLatest from "./BrowseLatest";
async function BrowseTrendingAll() {
  const [latest, nowPlaying, airing, popular, popularTv, topRated, topRatedTv] =
    await Promise.all([
      await getLatestMovie(),
      await getNowPlaying("movie", "now_playing"),
      await getNowPlaying("tv", "airing_today"),
      await getNowPlaying("movie", "popular"),
      await getNowPlaying("tv", "popular"),
      await getNowPlaying("movie", "top_rated"),
      await getNowPlaying("tv", "top_rated"),
    ]);

  return (
    <div className="flex flex-col gap-4 divide-y divide-zinc-600">
      <BrowseLatest
        results={latest.results}
        name="Browse latest"
        link="/guest/trending"
      />
      <BrowseLatest
        type="movie"
        results={nowPlaying.results}
        name="Now playing"
        link="/guest/movies"
      />
      <BrowseLatest
        type="tv"
        results={airing.results}
        name="Airing series"
        link="/guest/tv"
      />
      <BrowseLatest
        type="movie"
        results={popular.results}
        name="Popular movies"
        link="/guest/movies"
      />
      <BrowseLatest
        type="tv"
        results={popularTv.results}
        name="Popular series"
        link="/guest/tv"
      />
      <BrowseLatest
        type="movie"
        results={topRated.results}
        name="Top movies"
        link="/guest/movies"
      />
      <BrowseLatest
        type="tv"
        results={topRatedTv.results}
        name="Top series"
        link="/guest/tv"
      />
    </div>
  );
}

export default BrowseTrendingAll;
