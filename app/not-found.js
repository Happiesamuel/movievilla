import Link from "next/link";
import { TbError404 } from "react-icons/tb";
function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-[88vh] justify-center">
      <div className="flex flex-col items-center min-h-[88vh] justify-center">
        <TbError404 className="text-zinc-400 text-6xl" />
        <p className="text-xl text-zinc-400 pb-2">
          This page could not be found!
        </p>
        <Link
          href="/"
          className="bg-yellow-500 text-zinc-100 px-5 py-1.5 text-xl
         hover:scale-[1.05] duration-500 transition-all rounded-md"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
