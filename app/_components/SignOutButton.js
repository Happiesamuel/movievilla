"use client";
import { HiOutlineLogout } from "react-icons/hi";
import { signOutAction } from "../_lib/action";
function SignOutButton() {
  function handleSignOut() {
    const sure = confirm("Are you sure you want to logout?");
    if (sure) signOutAction();
  }

  return (
    <form action={handleSignOut}>
      <button>
        <HiOutlineLogout className="text-zinc-300 text-xl" />
      </button>
    </form>
  );
}

export default SignOutButton;
