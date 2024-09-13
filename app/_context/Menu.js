"use client";

import { createContext, useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import useClick from "../_components/useClick";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const MenuContext = createContext();
export default function Menu({ children }) {
  const [show, setShow] = useState(null);
  const [position, setPosition] = useState(null);
  const close = () => setShow(null);

  return (
    <MenuContext.Provider
      value={{ show, close, setPosition, position, setShow }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function MenuList({ children, id }) {
  const { show, close } = useContext(MenuContext);
  const { position } = useContext(MenuContext);

  const ref = useClick(close);
  if (show !== id) return;

  return createPortal(
    <div
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      ref={ref}
      className={`flex flex-col fixed z-10 transition-all duration-500 bg-zinc-900 gap-1 px-2 py-2 rounded-sm `}
    >
      {children}
    </div>,
    document.body
  );
}
export function MenuButton({ children, onClick }) {
  const { close } = useContext(MenuContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <div
      onClick={() => handleClick()}
      className="cursor-pointer text-zinc-400 text-sm"
    >
      {children}
    </div>
  );
}
export function MenuToogle({ id }) {
  const { setShow, show, setPosition } = useContext(MenuContext);
  useEffect(() => {
    document.body.querySelector("main").querySelector(".hide").style.overflow =
      show ? "hidden" : "scroll";

    return () => {
      if (document.body.querySelector("main").querySelector(".hide")) {
        document.body
          .querySelector("main")
          .querySelector(".hide").style.overflow = "scroll";
      }
    };
  }, [show, id]);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("div").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.height + rect.y - 25,
    });
    setShow((show) => (show === id ? null : id));
  }
  return (
    <BsThreeDotsVertical
      onClick={handleClick}
      className="text-zinc-400 cursor-pointer"
    />
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) throw Error("wrong");
  return context;
}
