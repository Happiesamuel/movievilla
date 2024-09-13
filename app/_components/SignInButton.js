import Image from "next/image";

function SignInButton({ action, children }) {
  return (
    <form action={action}>
      <button className="flex gap-3 items-center border border-zinc-500 px-8 py-3 rounded-full hover:scale-[1.1] transition-all duration-500">
        {children}
      </button>
    </form>
  );
}

export default SignInButton;
