import Link from "next/link";

function FooterFive() {
  const date = new Date().getFullYear();

  return (
    <div
      className="text-zinc-400  bg-zinc-900 py-4
     text-center flex flex-col gap-4 border border-zinc-800 md:flex-row
      justify-evenly  mt-16 md:mt-24 items-center"
    >
      <h3 className="text-zinc-400 text-sm">MADE BY HS IN NIGERIA </h3>
      <Link
        href="#"
        className=" text-xl md:text-3xl text-zinc-100  cursor-pointer"
      >
        MovieVilla
      </Link>
      <p className="pb-3 text-sm">© {date}. ALL RIGHTS RESERVED.</p>
    </div>
  );
}

export default FooterFive;
