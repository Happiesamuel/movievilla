"use client";
import Link from "next/link";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from "next/navigation";
function Header({ children }) {
  const [show, setShow] = useState(false);
  const pathName = usePathname();
  return (
    <div
      className={`flex justify-between md:px-12 px-6 py-5 items-center z-20  fixed ${
      pathName.length > 1 ? "bg-[#0f0f0f]" : "backdrop-blur-sm"
      } w-full`}
    >
      <h1 className="text-slate-50 font-bold text-3xl z-50">MovieVilla</h1>
      <nav
        className={`${
          !show ? "left-[-100%] " : "left-0"
        } transition-all duration-[1s] fixed top-[0%] bg-red-700 lg:bg-transparent w-full lg:w-max h-screen lg:h-max right-0 lg:static`}
      >
        <ul className="flex gap-6 flex-col lg:flex-row justify-center items-center relative lg:static top-[40%]">
          <li>
            <Link
              onClick={() => setShow(false)}
              className="text-slate-300 text-xl"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              className="text-slate-300 text-xl"
              href="/tv"
            >
              TV Shows
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              className="text-slate-300 text-xl"
              href="/movies"
            >
              Movies
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setShow(false)}
              className="text-slate-300 text-xl"
              href="/guest"
            >
              Guest
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex item-center gap-4 z-30">
        {children}
        {!show ? (
          <AiOutlineMenuUnfold
            onClick={() => setShow(!show)}
            className="text-slate-200 lg:hidden cursor-pointer"
          />
        ) : (
          <AiOutlineMenuFold
            onClick={() => setShow(!show)}
            className="text-slate-200 lg:hidden cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
