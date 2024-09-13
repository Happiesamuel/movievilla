import Image from "next/image";
import PageButtons from "./PageButtons";
import RatedStar from "./RatedStar";
import Menu, { MenuButton, MenuList, MenuToogle } from "../_context/Menu";
import Link from "next/link";
import { format } from "date-fns";
import GenreList from "./GenreList";
import { Suspense } from "react";
import { PiBinocularsFill } from "react-icons/pi";
import ClientMenuButton from "./ClientMenuButton";
import { getWatchlist } from "../_lib/action";
import { auth } from "../_lib/auth";
async function SearchContainer({ result, type, query }) {
  const session = await auth();
  const watchlist = await getWatchlist(session.user.guestId);
  if (result.results.length === 0)
    return (
      <div className="flex flex-col items-center gap-3 justify-center my-24">
        <PiBinocularsFill className="text-7xl  text-zinc-300 bg-zinc-900 rounded-full px-2 py-2" />
        <p className="text-xl text-zinc-400">No results for "{query}" </p>
      </div>
    );
  const filData = result.results
    .filter((res) => res.poster_path !== null && res.backdrop_path !== null)
    .map((res) => {
      return {
        post: res.poster_path,
        releaseDate: res.release_date || res.first_air_date,
        title: res.original_title || res.original_name,
        genreId: res.genre_ids,
        id: res.id,
        overview: res.overview,
        rating: res.vote_average,
        type: type,
      };
    });
  return (
    <div>
      <Menu>
        <div className="flex flex-col  divide-y divide-zinc-600 ">
          {filData.map((res) => {
            const view = res.overview.split(" ");
            const overview = view
              .slice(0, Math.floor(view.length / 2))
              .join(" ");
            return (
              <div
                key={res.id}
                className=" grid grid-cols-[1fr_0.1fr] md:grid-cols-[0.5fr_1fr_0.1fr] lg:grid-cols-[0.2fr_1fr_0.1fr] gap-6 py-3 items-center "
              >
                <div className="flex gap-3">
                  <div className="cursor-pointer relative aspect-square w-[150px]  ">
                    <Image
                      fill
                      alt={res.title}
                      className="object-cover rounded-md"
                      src={`https://image.tmdb.org/t/p/original${res.post}`}
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1.5">
                    <div className="text-zinc-400 text-xs italic">
                      {res?.releaseDate?.length > 1 &&
                        format(
                          new Date(res.releaseDate.split("-").join(",")),
                          "MMMM Qo, yyyy"
                        )}
                      <h6 className="text-zinc-300 pt-1 font-bold text-sm">
                        {res.title}
                      </h6>
                    </div>
                    <RatedStar rating={res.rating} />
                  </div>
                </div>

                <div className="flex flex-col gap-2 hidden md:block">
                  {res.overview.length > 1 ? (
                    <p className="text-sm text-zinc-400 mb-3">
                      {overview + "..."}
                    </p>
                  ) : (
                    <p className="text-sm text-center text-zinc-400 mb-3">
                      ______
                    </p>
                  )}
                  <Suspense fallback={<p>Load...</p>}>
                    <GenreList type={type} genreList={res.genreId} />
                  </Suspense>
                </div>

                <MenuToogle id={res.id} />

                <MenuList id={res.id}>
                  <MenuButton>
                    <Link
                      href={`/guest/${type === "tv" ? "tv" : "movies"}/${
                        res.id
                      }`}
                    >
                      {" "}
                      View {type === "tv" ? "series" : "movie"}
                    </Link>
                  </MenuButton>
                  <ClientMenuButton watchlist={watchlist} obj={res} />
                </MenuList>
              </div>
            );
          })}
        </div>

        <PageButtons
          page={result.page}
          totalPages={result.total_pages}
          totalResults={result.total_results}
        />
      </Menu>
    </div>
  );
}

export default SearchContainer;
