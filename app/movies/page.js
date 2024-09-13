import { getLatestMovie } from "../_services/tmbd-data-services";
import MovieLayout from "../_components/MovieLayout";
import DelayPreviewList from "../_components/DelayPreviewList";
import Footer from "../_ui/Footer";
export async function generateMetadata() {
  return {
    title: `Movies`,
  };
}
async function Page() {
  const latest = await getLatestMovie();
  const latest2 = latest.results.filter(
    (x) => x.media_type === "movie" && x.backdrop_path !== undefined
  );
  const latestMovie = latest2.at(Math.floor(Math.random() * latest2.length));
  return (
    <div className="overflow-hidden">
      <MovieLayout latestMovie={latestMovie} />
      <DelayPreviewList />
      <Footer />
    </div>
  );
}

export default Page;
