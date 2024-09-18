import Image from "next/image";
import Link from "next/link";
import RatedStar from "./RatedStar";
import YoutubeTrailer from "./YoutubeTrailer";

function TvWatchlist({ tv, trailer }) {
  const {
    name,
    overview,
    status,
    tagline,
    first_air_date: firstAir,
    id,
    last_air_date: lastAir,
    production_companies: companies,
    seasons,
    genres,
  } = tv;
  const vid = trailer.results.at(0);
  console.log(firstAir, lastAir);
  return (
    <div className="mx-2 my-2">
      <div className="flex justify-between items-center">
        <h1 className="text-zinc-200 text-3xl font-bold ">{name}</h1>
        <p className="text-zinc-400 text-base">
          {firstAir?.split("-").at(0)} -{" "}
          {lastAir?.split("-")?.at(0) ?? "Till date"} ({status})
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 border-b border-zinc-800 pb-2">
        <p className="text-yellow-500 text-base ">{tagline}</p>
        <div className="flex divide-x divide-zinc-600">
          {genres.map((gen) => (
            <p className=" text-zinc-400 px-2" key={gen.id}>
              {gen.name}
            </p>
          ))}
        </div>
      </div>
      {trailer.results.length > 0 && (
        <div key={vid.key} className=" w-full h-full mt-4">
          <YoutubeTrailer videoId={vid.key} title={vid.name} />
        </div>
      )}
      <div className=" mt-4">
        <p className="text-zinc-400 text-base my-3">{overview}</p>
      </div>
      <div className="flex flex-wrap gap-3 my-6">
        {companies.map((company) => (
          <div key={company.id} className="flex gap-4 item-center">
            <div className="relative aspect-auto w-[150px] ">
              {company.logo_path && (
                <Image
                  alt="a"
                  fill
                  className="object-cover"
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                />
              )}
            </div>
            <div className="flex flex-col">
              <h6 className="text-zinc-100 text-sm">{company.name}</h6>
              <p className="text-zinc-400 text-sm">{company.origin_country}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 ml-6 mt-6">
        {seasons.map((season) => (
          <Link
            href={`/guest/tv/${id}/season/${season.season_number}`}
            key={season.id}
            className="flex gap-2 cursor-pointer items-start"
          >
            <div className="relative w-[120px] h-[120px]">
              {season.poster_path && (
                <Image
                  alt={`${season.name} image`}
                  fill
                  className="object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                />
              )}
            </div>
            <div className="gap-1">
              <h5 className="text-zinc-200 text-base font-bold">
                {season.name}
              </h5>
              <p className="text-zinc-300 text-sm font-bold">
                {season.air_date?.split("-").at(0) || ""}
              </p>
              <p className="text-zinc-200 text-sm font-bold">
                {season.episode_count}{" "}
                <span className="text-zinc-400  font-normal">episodes</span>
              </p>
              <RatedStar rating={season.vote_average} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TvWatchlist;
