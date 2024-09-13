"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UserLoginContext = createContext();
function UserProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(function () {
    function handleWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);
    return function () {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <UserLoginContext.Provider value={{ width }}>
      {children}
    </UserLoginContext.Provider>
  );
}
function useWidth() {
  const context = useContext(UserLoginContext);
  if (context === undefined) throw new Error("none");
  return context;
}

export { UserProvider, useWidth };
