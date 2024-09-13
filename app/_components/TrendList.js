import Image from "next/image";
import Menu, { MenuButton, MenuList, MenuToogle } from "../_context/Menu";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import ClientMenuButton from "./ClientMenuButton";
import { getWatchlist } from "../_lib/action";
import { auth } from "../_lib/auth";

async function TrendList({ browseRes, type }) {
  const session = await auth();
  const watchlist = await getWatchlist(session.user.guestId);
  return (
    <Menu>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mx-2 my-3 lg:mx-6 lg:my-6">
        {browseRes.map((res) => (
          <div key={res.id}>
            <div className="relative w-full aspect-square ">
              <Image
                priority={true}
                fill
                quality={80}
                alt={`image of ${res.title}`}
                className="rounded-xl "
                placeholder="blur"
                blurDataURL={`https://image.tmdb.org/t/p/original${res.post}`}
                src={`https://image.tmdb.org/t/p/original${res.post}`}
              />
            </div>
            <div className="flex justify-between items-center gap-2 text-sm px-2 py-2">
              <div className="flex flex-col gap-1">
                <p className="text-zinc-300 md:block hidden">{res.title}</p>
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
                  href={`/guest/${type === "tv" ? "tv" : "movies"}/${res.id}`}
                >
                  {" "}
                  View {type === "tv" ? "series" : "movie"}
                </Link>
              </MenuButton>
              <ClientMenuButton watchlist={watchlist} obj={res} />
            </MenuList>
          </div>
        ))}
      </div>
    </Menu>
  );
}

export default TrendList;
