import RatedStar from "@/app/_components/RatedStar";
import { getTvSeason } from "@/app/_services/tmbd-data-services";
import { format } from "date-fns";
import Image from "next/image";
export async function generateMetadata({ params }) {
  const movie = await getTvSeason(params.tvId, params.seasonId);
  return {
    title: `${movie.name}`,
  };
}
async function Page({ params }) {
  const { tvId, seasonId } = params;
  const season = await getTvSeason(tvId, seasonId);
  console.log(season);
  const {
    poster_path: bg,
    name,
    vote_average: rating,
    overview,
    season_number: seasonNum,
    air_date: airDate,
    episodes,
  } = season;
  const episodeArr = episodes.map((epi) => {
    return {
      runtime: epi.runtime,
      numSeason: epi.season_number,
      img: epi.still_path,
      rating: epi.vote_average,
      numEpisode: epi.episode_number,
      airDate: epi.air_date,
      type: epi.episode_type,
      title: epi.name,
      overview: epi.overview,
      id: epi.id,
    };
  });
  return (
    <div className="mt-2 md:mt-6 mb-6 lg:mx-6">
      <div className="flex flex-col items-center w-full gap-3 divide-y divide-zinc-600">
        {episodeArr.map((episode, i) => (
          <div
            key={episode.id}
            className={`flex ${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }  gap-5 w-full pt-5`}
          >
            {episode.img ? (
              <div className="relative w-full">
                <Image
                  alt={`${episode.title} image`}
                  fill
                  className="object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original${episode.img}`}
                />
              </div>
            ) : (
              <div className="relative w-full skeleton"></div>
            )}
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-zinc-400 text-sm italic">
                {format(
                  new Date(episode.airDate.split("-").join(",")),
                  "MMMM Qo, yyyy"
                )}
              </p>
              <h6 className="text-base text-zinc-200 font-bold">
                {episode.title}
              </h6>
              <p className="text-sm text-zinc-400  ">{episode.overview}</p>
              <p className="text-sm text-zinc-400 ">
                <span className="text-zinc-300 font-bold">
                  {episode.runtime}
                </span>
                mins
              </p>
              <p className="text-sm text-zinc-400">
                Season{" "}
                <span className="text-zinc-300 font-bold">
                  {episode.numSeason}
                </span>{" "}
                Episode{" "}
                <span className="text-zinc-300 font-bold">
                  {episode.numEpisode}
                </span>{" "}
                <span className="font-normal italic">({episode.type})</span>
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                {episode.air_date?.split("-").at(0) || ""}{" "}
              </p>
              <RatedStar rating={episode.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
