import { getLatestMovie } from "../_services/tmbd-data-services";
import PageButtons from "./PageButtons";
import TrendList from "./TrendList";

async function TrendContainer({ pages }) {
  const {
    total_results: totalResults,
    total_pages: totalPages,
    page,
    results,
  } = await getLatestMovie(pages);

  const browseRes = results
    .filter((x) => x.media_type !== "person" && x.poster_path !== null)
    .map((result) => {
      return {
        post: result.poster_path,
        title: result.title ?? result.original_name,
        type: result.media_type,
        releaseDate: result.release_date ?? result.first_air_date,
        rating: result.vote_average,
        id: result.id,
      };
    });
  return (
    <div>
      <TrendList browseRes={browseRes} />
      <PageButtons
        page={page}
        totalResults={totalResults}
        totalPages={totalPages / 2}
      />
    </div>
  );
}

export default TrendContainer;
