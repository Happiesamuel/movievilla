import foot1 from "@/public/foot_1.png";
import foot2 from "@/public/foot_2.png";
import foot3 from "@/public/foot_3.png";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function FooterFour() {
  const arr3 = [
    {
      title: "Tutorials",
      para: "Explore our tutorials to enhance your understanding of how to keep track of your watch history on MovieVilla.",
      img: foot1,
      link: "What is MovieVilla?",
    },
    {
      title: "Twitter",
      para: "Stay updated with Movievilla on Twitter for the latest product developments and other interesting news about TV Shows and Movies.",
      img: foot2,
      link: "Follow @movievilla",
    },
    {
      title: "Discord",
      para: "Chat with the Movievilla team and fellow MovieVilla members. The ultimate community experience.",
      img: foot3,
      link: "Join our Discord",
    },
  ];

  return (
    <div className="py-12">
      <p className="py-5 bg-gradient-to-br from-yellow-500 to-red-500 bg-[100%] bg-clip-text text-transparent text-2xl text-center font-bold">
        COMMUNITY
      </p>
      <h1 className="font-semibold text-center lg:text-5xl text-3xl text-zinc-100 tracking-wide pb-5">
        MovieVilla is nothing without you
      </h1>
      <p className="text-zinc-400 lg:text-xl text-lg  text-center pb-3">
        Give feedback on Discord or Twitter, improve your MovieVilla skills
        through tutorials.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center place-items-center gap-y-3  gap-x-5 px-6 my-8">
        {arr3.map((x, i) => (
          <div
            key={i}
            className="h-[350px] lg:h-[400px] flex flex-col lg:gap-6 gap-3 bg-zinc-900 justify-center items-center border rounded-xl border-zinc-800"
          >
            <div className="relative aspect-square w-[80px] h-[80px]">
              <Image src={x.img} alt={x.title} className="w-full" />
            </div>
            <h3 className=" text-2xl lg:text-3xl text-zinc-200">{x.title}</h3>
            <p className="text-zinc-400  text-center text-lg px-6">{x.para}</p>
            <button className=" text-base text-zinc-200 border flex items-center gap-2 border-zinc-700 px-5 py-2.5 rounded-xl">
              <span>{x.link} </span>
              <FaArrowUpRightFromSquare />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterFour;
