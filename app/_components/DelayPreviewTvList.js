import { getNowPlaying } from "../_services/tmbd-data-services";
import PreviewList from "./PreviewList";

async function DelayPreviewTvList() {
  const [nowPlaying, topRated, upcoming] = await Promise.all([
    await getNowPlaying("tv", "airing_today"),
    await getNowPlaying("tv", "popular"),
    await getNowPlaying("tv", "top_rated"),
  ]);
  return (
    <div className="flex flex-col divide-y divide-zinc-600">
      <PreviewList
        slug="airing_today"
        type="tv"
        title="Airing Today"
        movies={nowPlaying.results}
      />
      <PreviewList
        slug="popular"
        type="tv"
        title="Popular"
        movies={topRated.results}
      />
      <PreviewList
        slug="top_rated"
        type="tv"
        title="Top Rated"
        movies={upcoming.results}
      />
    </div>
  );
}

export default DelayPreviewTvList;
