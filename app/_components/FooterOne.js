import Link from "next/link";
import { FaEnvelope, FaFacebook, FaPlus, FaRedditAlien } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

function FooterOne() {
  const arr = [
    {
      icon: <TiSocialFacebook />,
      link: "",
      className: " bg-blue-900 shadow-blue-900 ",
    },
    {
      icon: <FaXTwitter />,
      link: "",
      className: " bg-blue-500 shadow-blue-500",
    },
    {
      icon: <FaPlus />,
      link: "",
      className: " bg-zinc-400/95 shadow-zinc-400",
    },
    {
      icon: <FaRedditAlien />,
      link: "",
      className: " bg-orange-600 shadow-orange-600",
    },
    {
      icon: <FaEnvelope />,
      link: "",
      className: " bg-yellow-500 shadow-yellow-500",
    },
  ];
  const arr2 = [
    {
      title: "Become beta tester",
      para: "Get access to the next version of MovieVilla v2",
      button: "Join beta",
      type: "white",
    },
    {
      title: "Get VIP",
      para: "Become a Pro or a VIP member and unlock premium perks",
      button: "Unlock ALL Perks",
      type: "yellow",
    },
    {
      title: "Apps",
      para: "MovieVilla has apps for Android, IOS, Chrome Windows, Kodu, Plex and more",
      button: "Unlock ALL Perks",
      type: "white",
    },
  ];

  return (
    <div>
      <div className="h-full w-full py-9">
        <p className="text-zinc-200 text-lg pb-5 text-center">
          Share this page with your friends and followers:
        </p>
        <div className="flex items-center w-full ">
          {arr.map((x, i) => (
            <div
              key={i}
              className={`flex w-[20%] drop-shadow-[0_35px_300px_rgba(0,0,0,0.25)] shadow-[0_35px_65px_-5px_rgb(0,0,0.15)]   justify-center ${x.className}`}
            >
              <Link
                href="#"
                className="text-zinc-200 py-3 tablet:py-4 text-2xl"
              >
                {x.icon}
              </Link>
            </div>
          ))}
        </div>
        <div
          className=" backdrop-blur-sm grid grid-cols-1
             md:grid-cols-3 lg:grid-cols-3 md:divide-x
              divide-zinc-500 mt-10   gap-y-2 md:gap-y-3 lg:gap-y-5 "
        >
          {arr2.map((x, i) => (
            <div
              key={i}
              className=" flex flex-col text-center text-zinc-100 gap-4 items-center w-full tablet:w-full laptop:w-[33.3%] px-3 my-3 tablet:my-4 laptop:my-8 tablet:gap-5"
            >
              <h1
                className={`${
                  x.type === "yellow" ? "text-yellow-400" : ""
                } text-xl md:text-4xl font-bold`}
              >
                {x.title}
              </h1>
              <div className="w-full flex justify-center">
                <p className="text-sm md:text-base w-[40%] md:w-[70%] leading-none text-zinc-300 tracking-wide font-light">
                  {x.para}{" "}
                </p>
              </div>
              <div>
                <button className="text-sm md:text-lg border md:border-2 md:border-zinc-300 transition-all duration-500 hover:bg-yellow-500 border-zinc-500 rounded-full px-10 py-2 tablet:px-16 tablet:py-3">
                  {x.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
