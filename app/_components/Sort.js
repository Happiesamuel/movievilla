"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Sort({ arrSort, defaults }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  function handleChange(value) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", value);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <form>
      <select
        className="border-none outline-none text-zinc-400 bg-zinc-800 rounded-full mx-3"
        value={defaults}
        onChange={(e) => handleChange(e.target.value)}
      >
        {arrSort.map((sort, i) => (
          <option key={i} value={sort.value}>
            {sort.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Sort;
