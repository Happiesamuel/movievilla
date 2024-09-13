import { HiOutlineLogout } from "react-icons/hi";
import { signOutAction } from "../_lib/action";
function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button>
        <HiOutlineLogout className="text-zinc-300 text-xl" />
      </button>
    </form>
  );
}

export default SignOutButton;
