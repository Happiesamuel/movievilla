"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaXmark } from "react-icons/fa6";

function WatchlistCancel() {
  const router = useRouter();
  const pathName = usePathname();
  function handleClose() {
    router.replace(`${pathName}`);
  }
  return (
    <div
      className="cursor-pointer absolute top-[0%] left-[90%] z-50 bg-red-700 mt-2 ml-2 text-zinc-100 p-2 rounded-full font-bold"
      onClick={() => handleClose()}
    >
      <FaXmark />
    </div>
  );
}

export default WatchlistCancel;
