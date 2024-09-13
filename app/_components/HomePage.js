import Image from "next/image";
import RatedStar from "./RatedStar";
import { Suspense } from "react";
import GenreList from "./GenreList";
import HomeSwiper from "./HomeSwiper";
import StateSpinner from "../_ui/StateSpinner";

function HomePage({ move, movie }) {
  const {
    backdrop_path: bg,
    genre_ids: genreList,
    original_title: title,
    original_name: name,
    overview,
    release_date: releaseDate,
    vote_average: rating,
    media_type: mediaType,
  } = move;
  return (
    <main className="  pb-10 ">
      <Image
        alt="bcg"
        className="brightness-50 object-cover object-top "
        src={`https://image.tmdb.org/t/p/original${bg}`}
        fill
        placeholder="blur"
        blurDataURL={`https://image.tmdb.org/t/p/original${bg}`}
        quality={80}
      />
      <div className="flex min-h-[88vh] flex-col justify-center ">
        <div className="relative flex flex-col gap-5">
          <h1 className="text-5xl text-zinc-50 font-bold">{title || name}</h1>
          <p className="text-zinc-200 text-base font-normal  w-[90%]  lg:w-[60%]">
            {overview}
          </p>
          <div className="flex gap-3 items-center text-zinc-400">
            <p>{releaseDate?.split("-").at(0) ?? ""}</p>
            <RatedStar rating={rating} />
            <p>{mediaType.toUpperCase()}</p>
          </div>
          {
            <Suspense fallback={<StateSpinner />}>
              <GenreList type={mediaType} genreList={genreList} />
            </Suspense>
          }

          <Suspense fallback={<StateSpinner />}>
            <div className="w-[100%] lg:w-[50%]">
              <HomeSwiper movies={movie.results} />
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
