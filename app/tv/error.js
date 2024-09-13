"use client";
import { BiSolidError } from "react-icons/bi";
function error({ error, reset }) {
  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center">
      <div className="text-zinc-200 text-3xl flex gap-2 items-center px-2 pb-2">
        <span className="text-red-600">
          <BiSolidError />
        </span>
        <h1>Something went wrong!</h1>
      </div>
      <p className="text-zinc-400 mb-3 text-xl">{error.message}</p>
      <button
        className="bg-yellow-500 text-zinc-100 px-5 py-1.5 text-xl
         hover:scale-[1.05] duration-500 transition-all rounded-md"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}

export default error;
