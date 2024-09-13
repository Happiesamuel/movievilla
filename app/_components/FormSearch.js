"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FormSearch() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    const params = new URLSearchParams(searchParams);
    params.set("query", data.query);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="w-full my-6 ">
      <input
        className="outline-none focus:outline w-[90%] md:w-[50%]  border-0 border-b-2 border-red-600  focus:border-0 rounded-md bg-zinc-600 text-zinc-300 font-normal"
        placeholder="Search for movies or tv shows"
        type="text"
        name="query"
      />
    </form>
  );
}

export default FormSearch;
