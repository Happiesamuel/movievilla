import Image from "next/image";
import { getLatestMovie } from "../_services/tmbd-data-services";
import { unstable_noStore as noStore } from "next/cache";
import GenreList from "../_components/GenreList";
import { Suspense } from "react";
async function Page() {
  noStore();
  const movie = await getLatestMovie();
  const move = movie.results.at(2);
  //   console.log(move);
  const {
    backdrop_path: bg,
    genre_ids: genreList,
    original_title: title,
    overview,
  } = move;
  return (
    <main className="mt-24 bg-zinc-600">
      <Image
        alt="bcg"
        className="object-cover object-top "
        src={`https://image.tmdb.org/t/p/original${bg}`}
        fill
        placeholder="blur"
        blurDataURL={`https://image.tmdb.org/t/p/original${bg}`}
        quality={80}
      />
      <div className="relative flex flex-col gap-5 bg-zinc-600">
        <h1 className="text-5xl text-slate-50 font-bold">{title}</h1>
        <p className="text-slate-300 font-normal text-xl w-[50%]">{overview}</p>

        <Suspense fallback={<p>Load...</p>}>
          <GenreList genreList={genreList} />
        </Suspense>
      </div>
    </main>
  );
}

export default Page;
// noStore();
// const [movie, setMovie] = useState([]);
// const [load, setLoad] = useState(false);
// useEffect(function () {
//   async function loadMovie() {
//     setLoad(true);
//     const data = await getLatestMovie();
//     setMovie(data.results);
//     setLoad(false);
//   }
//   loadMovie();
// }, []);
// if (load) return <p>load</p>;
// console.log(load, movie);
// const move = movie.at(2);

// const {
//   backdrop_path: bg,
//   genre_ids: genreList,
//   original_title: title,
//   overview,
// } = move;
