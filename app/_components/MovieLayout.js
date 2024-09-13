import Image from "next/image";

function MovieLayout({ latestMovie }) {
  const {
    backdrop_path: bg,
    overview,
    release_date: releaseDate,
    media_type: mediaType,
  } = latestMovie;
  const text = overview
    .split(" ")
    .slice(0, Math.floor(overview.split(" ").length / 3))
    .join(" ");
  const title =
    mediaType === "tv" ? latestMovie.original_name : latestMovie.original_title;
  return (
    <div className="relative w-full h-[220px] md:h-[300px] lg:h-[50vh]">
      <Image
        fill
        alt={`image of ${title}`}
        className="h-full brightness-50"
        src={`https://image.tmdb.org/t/p/original${bg}`}
      />
      <div className="absolute text-zinc-100 text-3xl bottom-[10%]  left-4 flex flex-col gap-1">
        <p className="text-zinc-400 text-sm italic">
          {mediaType.toUpperCase()}
        </p>
        <h1 className="text-3xl text-zinc-50 font-bold">{title}</h1>
        <p className="text-zinc-200 font-normal text-sm w-[70%] leading-tight  lg:w-[70%]">
          {text + "..."}
        </p>
      </div>
    </div>
  );
}

export default MovieLayout;
// h-[30vh] md:h-[50vh]
