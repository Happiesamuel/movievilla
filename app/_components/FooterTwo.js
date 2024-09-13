"use client";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";

function FooterTwo() {
  const [show, setShow] = useState(null);
  function getIdShow(id) {
    setShow((i) => (id === i ? null : id));
  }
  const arrObj = [
    {
      title: "MovieVilla APPS",
      para: [
        ["Enter Pin", "import"],
        [
          "Anime Countdown",
          "Tv Shows Countdown",
          "Drama CountDown",
          "Movies Countdown",
        ],
        ["Automatic Trackers", "Mobile apps"],
        ["My Phone Number"],
        ["TV Guide", "Anime Guide"],
        ["Terms of Service", "Privacy Policy"],
      ],
    },
    {
      title: "ABOUT",
      para: [
        ["About MovieVilla", "Media Kit", "Become VIP", "Merch"],
        ["Special Thanks"],
        ["Contact Us"],
      ],
    },
    {
      title: "COMMUNITY",
      para: [
        ["What should we add next?", "Help match IDS"],
        ["Face Group", "Discord Server"],
        ["Help & Support", "Blog"],
      ],
    },
    {
      title: "DEVELOPERS",
      para: [
        ["API Documentation", "Discuss API on Discord"],
        ["Create an App", "Your Apps"],
      ],
    },
    {
      title: "FOLLOW ON",
      para: [["Twitter", "Facebook", "Instagram", "Reddit", "Youtube"]],
    },
  ];
  return (
    <div className="flex flex-col md:flex-col lg:flex-row w-full justify-evenly mt-16">
      {arrObj.map((x, i) => (
        <Faq key={i} x={x.para} id={i} show={show} getIdShow={getIdShow}>
          {x.title}
        </Faq>
      ))}
    </div>
  );
}

function Faq({ x, id, children, show, getIdShow }) {
  return (
    <div className=" text-zinc-400 border-dashed border-t md:border-t lg:border-none cursor-pointer border-zinc-400">
      <h4 className="text-zinc-200 text-lg  hidden md:hidden lg:block pb-5">
        {children}
      </h4>
      <div
        onClick={() => getIdShow(id)}
        className="py-3 flex md:flex lg:hidden justify-between  border-zinc-800 px-4"
      >
        <h4 className="text-zinc-200 text-lg ">{children}</h4>
        {show === id ? <FaCaretUp /> : <FaCaretDown />}
      </div>
      {show === id && (
        <div>
          {x.map((y, i) => (
            <div key={i} className="flex flex-col pb-8 lg:hidden">
              {y.map((z, i) => (
                <div key={i}>
                  <p className="border lg:border-none border-zinc-800 py-2.5 px-6  text-sm">
                    {z}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="hidden  lg:block ">
        {x.map((y, i) => (
          <div key={i} className="flex flex-col pb-5">
            {y.map((z, i) => (
              <div key={i} className="flex">
                <p className="hover:text-zinc-50">{z}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default FooterTwo;
