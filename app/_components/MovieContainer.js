import { getNowPlaying } from "../_services/tmbd-data-services";
import PageButtons from "./PageButtons";
import TrendList from "./TrendList";

async function MovieContainer({ pages, filter, type }) {
  const {
    total_results: totalResults,
    total_pages: totalPages,
    page,
    results,
  } = await getNowPlaying(type, filter, pages);

  const browseRes = results
    .filter((x) => x.media_type !== "person" && x.poster_path !== null)
    .map((result) => {
      return {
        post: result.poster_path,
        title: result.title ?? result.original_name,
        type: type ?? result.media_type,
        rating: result.vote_average,
        id: result.id,
        releaseDate: result.release_date ?? result.first_air_date,
      };
    });
  return (
    <div>
      <TrendList type={type} browseRes={browseRes} />
      <PageButtons
        page={page}
        totalResults={totalResults}
        totalPages={Math.floor(totalPages / 2)}
      />
    </div>
  );
}

export default MovieContainer;
