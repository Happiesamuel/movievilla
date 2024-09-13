"use client";
import Link from "next/link";
import { FaCompass, FaSearch } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { IoIosTrendingUp } from "react-icons/io";
import { IoTelescope } from "react-icons/io5";
import { usePathname } from "next/navigation";
function Sidebar() {
  const pathName = usePathname();
  const url = pathName.split("/");
  const tag = url.length > 2 ? url.at(2) : url.at(1);
  const links = [
    {
      href: "/guest",
      name: "Browse",
      svg: <FaCompass />,
      slug: "guest",
    },
    {
      href: "/guest/trending",
      name: "Trending",
      svg: <IoIosTrendingUp />,
      slug: "trending",
    },
    {
      href: "/guest/movies",
      name: "Movies",
      svg: <RiMovie2Fill />,
      slug: "movies",
    },
    {
      href: "/guest/tv",
      name: "Series",
      svg: <FaCompass />,
      slug: "tv",
    },
    {
      href: "/guest/search",
      name: "Search",
      svg: <FaSearch />,
      slug: "search",
    },
    {
      href: "/guest/watchlist",
      name: "Watchlist",
      svg: <IoTelescope />,
      slug: "watchlist",
    },
  ];

  return (
    <div className=" fixed bottom-[-1%] bg-[#0f0f0f] right-0 z-10 h-max flex justify-center lg:block lg:h-full w-full lg:static">
      <div
        className="flex flex-row justify-between md:mx-8 my-4  mx-2 items-center lg:items-start 
      lg:flex-col  lg:mx-0 lg:my-0 lg:mt-12 gap-3 overflow-scroll container"
      >
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`text-xs md:text-sm  lg:text-base flex flex-col gap-1 items-center lg:justify-start w-full justify-center lg:flex-row lg:gap-4 text-zinc-200 ${
              tag === link.slug ? "bg-red-700" : ""
            } mr-4  rounded-lg px-2 py-1.5`}
          >
            {link.svg}
            <div>{link.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
