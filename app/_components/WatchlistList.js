import Image from "next/image";
import { FaEye, FaStar } from "react-icons/fa";
import { MdOutlineStarRate } from "react-icons/md";
import RemoveWatchlist from "./RemoveWatchlist";
import { usePathname, useRouter } from "next/navigation";
import Modal, { ModalOpen, ModalWindow } from "./Modal";
import RateMovie from "./RateMovie";
import { useState } from "react";

import AddRating from "./AddRating";
import { updateRating } from "../_lib/action";
function WatchlistList({ watch, handleDelete }) {
  const router = useRouter();
  const pathName = usePathname();
  const [clickRate, setClickRate] = useState(watch.rate);
  function handleOpen() {
    const params = new URLSearchParams();
    params.set("watching", watch.type);
    params.set("watchId", watch.movieId);
    router.replace(`${pathName}?${params.toString()}`);
  }
  function handleAdd() {
    updateRating(watch.movieId, {
      rate: clickRate,
    });
  }
  return (
    <Modal>
      <div className="bg-zinc-950 w-full rounded-md">
        <div className="relative aspect-square w-full">
          <Image
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/original${watch.image}`}
            fill
            className=" w-full"
            alt={watch.title}
            src={`https://image.tmdb.org/t/p/original${watch.image}`}
          />
        </div>

        <div className="px-2 py-2">
          <h6 className="text-zinc-200 text-base">{watch.title}</h6>
          <div className="flex justify-between">
            <div>
              <div className="flex flex-col  items-start mb-1">
                <div className="flex items-center gap-2">
                  <p className="flex gap-1 items-center text-zinc-300 text-sm">
                    <span className="text-amber-500">
                      <FaStar />
                    </span>
                    {Math.floor(watch.rating)}
                  </p>
                  <p className="text-zinc-400 italic text-xs">
                    {watch.type.toUpperCase()}
                  </p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm">Your rating : </p>
            </div>

            <div className="flex flex-col  items-end">
              <p className="text-zinc-400">
                {watch.releaseDate.split("-").at(0)}
              </p>
              <p className="flex gap-1 items-center text-zinc-300 text-sm">
                <span className="text-amber-500">
                  <FaStar />
                </span>
                {Math.floor(watch.rate)}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-evenly w-full my-2">
            <div
              onClick={() => handleOpen()}
              className="text-zinc-100 cursor-pointer
               bg-yellow-500 px-3 py-3 text-center  shadow-md shadow-zinc-950 rounded-md "
            >
              <FaEye />
            </div>

            <ModalOpen watchId={watch.movieId}>
              <MdOutlineStarRate />
            </ModalOpen>

            <RemoveWatchlist
              movieId={watch.movieId}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      <ModalWindow watchId={watch.movieId}>
        <AddRating
          disabled={clickRate === watch.rate}
          closeRate={() => setClickRate(watch.rate)}
          onAdd={() => handleAdd()}
          title={`Rate ${watch.title} out of 10`}
        >
          <RateMovie clickRate={clickRate} setClickRate={setClickRate} />
        </AddRating>
      </ModalWindow>
    </Modal>
  );
}

export default WatchlistList;
