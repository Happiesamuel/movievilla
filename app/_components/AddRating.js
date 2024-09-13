import { FaXmark } from "react-icons/fa6";
import { useFormStatus } from "react-dom";
function AddRating({ onAdd, close, children, title, closeRate, disabled }) {
  const { pending } = useFormStatus();
  function handleClose() {
    close();
    closeRate();
  }
  return (
    <form onSubmit={(e) => e.preventDefault()} className="my-6 mx-6">
      <h1 className="text-zinc-300 text-sm font-bold text-center">{title}</h1>
      <button
        onClick={() => handleClose()}
        className="cursor-pointer absolute -top-[15%] left-[90%] z-50 bg-red-700 mt-2 ml-2 text-zinc-100 p-2 rounded-full font-bold"
      >
        <FaXmark />
      </button>
      {children}
      <div
        onClick={() => {
          onAdd();
          close();
        }}
        className="w-full flex items-center justify-center"
      >
        <button
          disabled={disabled}
          className="disabled:cursor-not-allowed hover:scale-[1.02] duration-500 transition-all bg-purple-800 py-2 text-zinc-100 rounded-full w-[80%]"
        >
          {pending ? "Adding rating..." : "Add rating"}
        </button>
      </div>
    </form>
  );
}

export default AddRating;
