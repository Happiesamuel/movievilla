"use client";
import { FaTrashCan } from "react-icons/fa6";

function RemoveWatchlist({ movieId, handleDelete, title }) {
  function confirmDelete() {
    const sure = confirm(
      `Are you sure you want to delete ${title} from your watchlist`
    );
    if (sure) handleDelete(movieId);
  }
  return (
    <button
      onClick={() => confirmDelete()}
      className="text-zinc-200 bg-red-800 px-3 py-3
        text-center   shadow-md shadow-zinc-950 rounded-md "
    >
      <FaTrashCan />
    </button>
  );
}

export default RemoveWatchlist;
