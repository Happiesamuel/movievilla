import { getNowPlaying } from "../_services/tmbd-data-services";
import PreviewList from "./PreviewList";

async function DelayPreviewList() {
  const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
    await getNowPlaying("movie", "now_playing"),
    await getNowPlaying("movie", "popular"),
    await getNowPlaying("movie", "top_rated"),
    await getNowPlaying("movie", "upcoming"),
  ]);
  return (
    <div className="flex flex-col  divide-y divide-zinc-600">
      <PreviewList
        slug="now_playing"
        type="movies"
        title="Now Playing"
        movies={nowPlaying.results}
      />
      <PreviewList
        type="movies"
        slug="popular"
        title="Popular Movies"
        movies={popular.results}
      />
      <PreviewList
        type="movies"
        slug="top_rated"
        title="Top Rated"
        movies={topRated.results}
      />
      <PreviewList
        type="movies"
        slug="upcoming"
        title="Upcoming Movies"
        movies={upcoming.results}
      />
    </div>
  );
}

export default DelayPreviewList;
