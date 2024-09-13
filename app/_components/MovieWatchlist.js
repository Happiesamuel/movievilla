import Image from "next/image";
import YoutubeTrailer from "./YoutubeTrailer";

function MovieWatchlist({ movie, trailer }) {
  const {
    original_title: title,
    overview,
    release_date: releaseDate,
    production_companies: companies,
    tagline,
    status,
    genres,
  } = movie;
  const vid = trailer.results.at(0);
  return (
    <div className="mx-2 my-2">
      <div className="flex justify-between items-center">
        <h1 className="text-zinc-200 text-3xl font-bold ">{title}</h1>
        <p className="text-zinc-400 text-base">
          {releaseDate.split("-").at(0)} ({status})
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 pb-2 border-b border-zinc-800">
        <p className="text-yellow-500 text-base ">{tagline}</p>
        <div className="flex divide-x divide-zinc-600">
          {genres.map((gen) => (
            <p className=" text-zinc-400 px-2" key={gen.id}>
              {gen.name}
            </p>
          ))}
        </div>
      </div>
      {trailer && (
        <div key={vid.key} className="w-full h-full mt-4">
          <YoutubeTrailer videoId={vid.key} title={vid.name} />
        </div>
      )}
      <div className=" mt-4">
        <p className="text-zinc-400 text-base my-3">{overview}</p>
      </div>

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
              <h6 className="text-zinc-100 text-sm">{company.name}</h6>
              <p className="text-zinc-400 text-sm">{company.origin_country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieWatchlist;
