import Image from "next/image";
import RatedStar from "./RatedStar";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

function TvHeader({ tv }) {
  const {
    backdrop_path: bg,
    id,
    name,
    last_episode_to_air: lastEpisode,
    status,
    overview,
    original_language: language,
    origin_country: country,
    release_date: releaseDate,
    seasons,
    vote_average: rating,
    created_by: createdBy,
    production_companies: companies,
    number_of_episodes: epiNum,
    number_of_seasons: numSea,
    first_air_date: firstDate,
    last_air_date: secondDate,
  } = tv;
  return (
    <div className="relative ">
      <div className="relative w-full h-[220px] md:h-[300px] lg:h-[50vh]">
        <Image
          fill
          alt={`image of ${name}`}
          className="h-full brightness-50"
          src={`https://image.tmdb.org/t/p/original${bg}`}
        />
      </div>
      <div className="flex gap-2 items-center justify-between text-xs md:text-sm text-zinc-400 bg-zinc-900 px-3 py-3 mt-3">
        <p>{name}</p>
        <p>{status}</p>
        <p>{epiNum} Episodes</p>
        <p className="flex gap-1 items-center">
          <span className="text-amber-500">
            <FaStar />
          </span>
          {Math.floor(rating)}
        </p>
        <p>{numSea} Seasons</p>
        <p>
          {firstDate.split("-").at(0)} - {secondDate.split("-").at(0)}
        </p>
        <p>{language}</p>
        <p>{country}</p>
      </div>
      <p className="text-zinc-300 md:text-base my-2 text-sm">{overview}</p>

      <div>
        <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
          Seasons
        </h1>

        <div className="flex flex-wrap gap-5 ml-6">
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

      {lastEpisode.still_path && (
        <>
          <div>
            <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
              Last episode of season {lastEpisode.episode_type}
            </h1>
          </div>
          <div className="flex gap-5 w-full">
            <div className="relative w-full">
              <Image
                alt={`${lastEpisode.name} image`}
                fill
                className="object-cover w-full rounded-md"
                src={`https://image.tmdb.org/t/p/original${lastEpisode.still_path}`}
              />
            </div>
            <div className="flex flex-col w-full gap-1 items-start">
              <h6 className="text-base text-zinc-200 font-bold">
                {lastEpisode.name}
              </h6>
              <p className="md:text-sm text-zinc-400 text-xs ">
                {lastEpisode.overview}
              </p>
              <p className="text-sm text-zinc-400 ">
                <span className="text-zinc-300 font-bold">
                  {lastEpisode.runtime}
                </span>
                mins
              </p>
              <p className="text-sm text-zinc-400">
                Season{" "}
                <span className="text-zinc-300 font-bold">
                  {lastEpisode.season_number}
                </span>{" "}
                Episode{" "}
                <span className="text-zinc-300 font-bold">
                  {lastEpisode.episode_number}
                </span>
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                {lastEpisode.air_date?.split("-").at(0) || ""}
              </p>
              <RatedStar rating={lastEpisode.vote_average} />
            </div>
          </div>
        </>
      )}

      {companies.length > 0 && (
        <>
          {" "}
          <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
            Companies
          </h1>
          <div className="flex flex-wrap gap-3">
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
                  <h6 className="text-zinc-100 md:text-base text-sm">
                    {company.name}
                  </h6>
                  <p className="text-zinc-400 md:text-sm text-xs">
                    {company.origin_country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {createdBy.length > 0 && (
        <>
          {" "}
          <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
            Created By
          </h1>
          <div className="flex flex-wrap gap-3">
            {createdBy.map((create) => (
              <div key={create.id} className="flex gap-4 item-center">
                {create.profile_path && (
                  <img
                    alt={`image of ${create.name}`}
                    className="object-cover rounded-full w-[50px] h-[50px]"
                    src={`https://image.tmdb.org/t/p/original${create.profile_path}`}
                  />
                )}
                <div className="flex flex-col">
                  <h6 className="text-zinc-100 text-sm">{create.name}</h6>
                  <p className="text-zinc-400 text-sm">
                    {create.gender === 2 ? "Male" : "Female"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TvHeader;
