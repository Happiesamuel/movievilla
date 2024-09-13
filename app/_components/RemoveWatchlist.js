"use client";
import { FaTrashCan } from "react-icons/fa6";

function RemoveWatchlist({ movieId, handleDelete }) {
  return (
    <button
      onClick={() => handleDelete(movieId)}
      className="text-zinc-200 bg-red-800 px-3 py-3
        text-center   shadow-md shadow-zinc-950 rounded-md "
    >
      <FaTrashCan />
    </button>
  );
}

export default RemoveWatchlist;
