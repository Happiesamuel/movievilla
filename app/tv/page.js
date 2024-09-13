import DelayPreviewTvList from "../_components/DelayPreviewTvList";
import MovieLayout from "../_components/MovieLayout";
import { getLatestMovie } from "../_services/tmbd-data-services";
import Footer from "../_ui/Footer";

export async function generateMetadata() {
  return {
    title: `Tv`,
  };
}

async function Page() {
  const latest = await getLatestMovie();
  const latest2 = latest.results.filter(
    (x) => x.media_type === "tv" && x.backdrop_path !== undefined
  );

  const latestMovie = latest2.at(Math.floor(Math.random() * latest2.length));
  return (
    <div className="overflow-hidden">
      <MovieLayout latestMovie={latestMovie} />
      <DelayPreviewTvList />
      <Footer />
    </div>
  );
}

export default Page;
