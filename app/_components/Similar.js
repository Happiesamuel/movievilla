import Image from "next/image";
import { getMovieDetails } from "../_services/tmbd-data-services";
import Link from "next/link";

async function Similar({ id, slug, type }) {
  const { results } = await getMovieDetails(type, id, slug);
  if (!results.length) return null;

  const similar = results.map((result) => {
    return {
      id: result.id,
      img: result.poster_path,
      title: result.original_title,
    };
  });

  return (
    <>
      <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
        RECOMMENDATIONS
      </h1>
      <div className="flex w-full flex-wrap mb-16">
        {similar.map((sim) => (
          <Link
            href={`/guest/${type === "tv" ? "tv" : "movies"}/${sim.id}`}
            key={sim.id}
            className=" flex-1"
          >
            <div className="relative w-[120px]  aspect-square">
              {sim.img && (
                <Image
                  placeholder="blur"
                  blurDataURL={`https://image.tmdb.org/t/p/original${sim.img}`}
                  fill
                  className="rounded-md"
                  alt={sim.title}
                  src={`https://image.tmdb.org/t/p/original${sim.img}`}
                />
              )}
            </div>
            <p className="text-zinc-200 text-center text-sm py-3 text-ellipsis hidden md:block overflow-hidden">
              {sim.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Similar;
