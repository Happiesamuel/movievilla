import { FaStar } from "react-icons/fa";
import Menu, { MenuButton, MenuList, MenuToogle } from "../_context/Menu";
import Image from "next/image";
import Link from "next/link";
import ClientMenuButton from "./ClientMenuButton";
import { auth } from "../_lib/auth";
import { getWatchlist } from "../_lib/action";

async function BrowseLatest({ results, name, link, type }) {
  const session = await auth();
  const watchlist = await getWatchlist(session.user.guestId);
  const browseRes = results
    .map((result) => {
      return {
        post: result.poster_path,
        title: result.title ?? result.original_name,
        rating: result.vote_average,
        id: result.id,
        type: type ?? result.media_type,
        releaseDate: result.release_date ?? result.first_air_date,
      };
    })
    .slice(0, 8);

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-base text-zinc-100 my-2 ml-2">{name}</h1>
        <Link
          href={link}
          className="text-sm text-zinc-500 border border-zinc-500 px-2 py-1 rounded-md cursor-pointer"
        >
          SEE MORE
        </Link>
      </div>
      <Menu>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:mx-6 mx-2 ">
          {browseRes.map((res) => {
            return (
              <div key={res.id}>
                <div className="relative w-full aspect-square ">
                  <Image
                    fill
                    quality={80}
                    alt={`image of ${res.title}`}
                    className="rounded-xl "
                    src={`https://image.tmdb.org/t/p/original${res.post}`}
                  />
                </div>
                <div className="flex justify-between items-center gap-2 text-sm px-2 py-2">
                  <div className="flex flex-col gap-1">
                    <p className="text-zinc-300 hidden md:block">{res.title}</p>
                    <p className="text-zinc-600 flex items-center gap-1">
                      <span className="text-yellow-500">
                        <FaStar />
                      </span>
                      {Math.round(res.rating)}
                    </p>
                  </div>
                  <MenuToogle id={res.id} />
                </div>

                <MenuList id={res.id}>
                  <MenuButton>
                    <Link
                      href={`/guest/${
                        res.type === "tv" || type === "tv" ? "tv" : "movies"
                      }/${res.id}`}
                    >
                      {" "}
                      View{" "}
                      {res.type === "tv" || type === "tv" ? "series" : "movie"}
                    </Link>
                  </MenuButton>
                  <ClientMenuButton watchlist={watchlist} obj={res} />
                </MenuList>
              </div>
            );
          })}
        </div>
      </Menu>
    </div>
  );
}

export default BrowseLatest;
