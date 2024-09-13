import Image from "next/image";
import { FaStar } from "react-icons/fa";

function MovieHeader({ movie }) {
  const {
    backdrop_path: bg,
    title,
    poster_path: img,
    status,
    overview,
    original_language: language,
    origin_country: country,
    release_date: releaseDate,
    runtime,
    vote_average: rating,
    genres,
    production_companies: companies,
  } = movie;
  return (
    <div className="relative">
      <div className="relative w-full h-[220px] md:h-[300px] lg:h-[50vh]">
        <Image
          fill
          alt={`image of ${title}`}
          className="h-full brightness-50"
          src={`https://image.tmdb.org/t/p/original${bg}`}
        />
      </div>

      <div className="flex gap-2 items-center justify-between text-xs md:text-sm text-zinc-400 bg-zinc-900 px-3 py-3 mt-3">
        <p className="">{title}</p>
        <p>{status}</p>
        <p>{runtime}mins</p>
        <p className="flex gap-1 items-center">
          <span className="text-amber-500">
            <FaStar />
          </span>
          {Math.floor(rating)}
        </p>
        <p>{releaseDate?.split("-").at(0) || ""}</p>
        <p>{language}</p>
        <p>{country}</p>
      </div>

      <p className="text-zinc-300 md:text-base my-2 text-sm">{overview}</p>
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
                  <h6 className="text-zinc-100 text-sm">{company.name}</h6>
                  <p className="text-zinc-400 text-sm">
                    {company.origin_country}
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

export default MovieHeader;
