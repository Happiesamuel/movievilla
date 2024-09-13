"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter({ filterArr, defaults }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathName = usePathname();

  function handleClick(fil) {
    const params = new URLSearchParams(searchParams);
    params.set("filter", fil);
    router.replace(`${pathName}?${params.toString()}`);
  }

  const active = searchParams.get("filter") || defaults;
  return (
    <div>
      <div
        className={`flex float-right mt-3 mx-6 w-max divide-x divide-zinc-700 border border-zinc-700 rounded-md`}
      >
        {filterArr.map((fil) => (
          <div
            className={`text-zinc-100 cursor-pointer   ${
              active === fil.slug ? "bg-yellow-500" : ""
            }  px-3 py-2`}
            onClick={() => handleClick(fil.slug)}
            key={fil.slug}
          >
            {fil.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
