import Link from "next/link";
import { auth } from "../_lib/auth";
import { FaRegUser, FaSearch } from "react-icons/fa";
import SignOutButton from "../_components/SignOutButton";
import Image from "next/image";

async function SearchLogout() {
  const session = await auth();
  if (session?.user)
    return (
      <>
        <div className="relative aspect-square w-8 -top-1">
          <Image
            fill
            alt="user image"
            className="rounded-full"
            src={session.user.image}
          />
        </div>
        <SignOutButton />
      </>
    );
  else
    return (
      <>
        <Link href="#" className="text-slate-200">
          <FaRegUser />
        </Link>
        <Link href="/guest/search" className="text-slate-200">
          <FaSearch />
        </Link>
      </>
    );
}

export default SearchLogout;
