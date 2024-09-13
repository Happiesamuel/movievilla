"use client";

import { getPages } from "../_features/helper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function PageButtons({ page, totalResults, totalPages }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const tp = totalPages > 500 ? 500 : totalPages;
  const buts = getPages(page, tp);
  function handleClick(but) {
    const params = new URLSearchParams(searchParams);
    params.set("page", but);
    router.replace(`${pathName}?${params.toString()}`);
  }
  const active = searchParams.get("page") || 1;
  if (totalPages === 1) return;
  return (
    <div className="mb-16 mt-6 md:mx-6 mx-0  flex justify-between items-center gap-2 ">
      <p className=" text-xs md:text-sm  text-zinc-400">
        Page <span className="text-zinc-300">{page}</span> out of{" "}
        <span className="text-zinc-300">{tp}</span>
      </p>
      <div className="flex items-center md:gap-3 gap-1.5  flex-wrap justify-center">
        {page > 1 && (
          <div
            onClick={() => handleClick(1)}
            className={`text-xs text-zinc-200 cursor-pointer px-2 py-2 ${
              +active === 1 ? "bg-yellow-500" : " bg-red-700"
            }  rounded-full hover:scale-[1.1] transition-all duration-500 hover:bg-yellow-700`}
          >
            first
          </div>
        )}
        {buts.map((but) => (
          <div
            onClick={() => handleClick(but)}
            key={but}
            className={`text-xs text-zinc-200 cursor-pointer px-2 py-2 ${
              +active === but ? "bg-yellow-500" : " bg-red-700"
            }  rounded-full hover:scale-[1.1] transition-all duration-500 hover:bg-yellow-700`}
          >
            {+active === but ? `page ${but}` : but}
          </div>
        ))}
        {page < tp && (
          <div
            onClick={() => handleClick(tp)}
            className={`text-xs text-zinc-200 cursor-pointer px-2 py-2 ${
              +active === 1 ? "bg-yellow-500" : " bg-red-700"
            }  rounded-full hover:scale-[1.1] transition-all duration-500 hover:bg-yellow-700`}
          >
            last
          </div>
        )}
      </div>
      <p className="text-xs md:text-sm  text-zinc-400 leading-none">
        <span className="text-zinc-300">{totalResults}</span> results
      </p>
    </div>
  );
}

export default PageButtons;
