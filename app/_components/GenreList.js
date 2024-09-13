import { loadGenre } from "../_services/tmbd-data-services";

async function GenreList({ genreList, type }) {
  const { genres } = await loadGenre(type);
  const genre = genreList.map((gen) => genres.find((x) => x.id === gen).name);
  return (
    <div className="flex gap-5 md:gap-8 flex-wrap leading-none">
      {genre.map((gen) => (
        <div
          key={gen}
          className="text-zinc-50 border border-zinc-300 px-4 py-2 rounded-3xl"
        >
          {gen}
        </div>
      ))}
    </div>
  );
}

export default GenreList;
