import { createContext, useState, useContext, cloneElement } from "react";

export const ModalContext = createContext();
export default function Modal({ children }) {
  const [openModal, setOpenModal] = useState(null);

  const close = () => setOpenModal(null);
  return (
    <ModalContext.Provider value={{ openModal, close, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalOpen({ watchId, children }) {
  const { openModal, setOpenModal, close } = useContext(ModalContext);

  function handleOpen() {
    setOpenModal((id) => (id === watchId ? null : watchId));
  }

  return (
    <div
      onClick={() => handleOpen()}
      className="text-zinc-100 cursor-pointer  bg-purple-900 
       px-3 py-3  text-center  shadow-md shadow-zinc-950 rounded-md "
    >
      {children}
    </div>
  );
}

export function ModalWindow({ watchId, children }) {
  const { openModal, setOpenModal, close } = useContext(ModalContext);

  if (openModal !== watchId) return;
  return (
    <div className="fixed top-0 left-0 right-0 h-screen w-full backdrop-blur-sm z-30 ">
      <div className="fixed top-[50%] shadow-sm shadow-zinc-900 rounded-lg   left-[50%] -translate-y-[50%] -translate-x-[50%]  z-50  bg-zinc-900 ">
        {cloneElement(children, { close: close })}
      </div>
    </div>
  );
}
