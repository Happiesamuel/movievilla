import Image from "next/image";
import SignInButton from "../_components/SignInButton";
import {
  signInWithFacebookAction,
  signInWithGoogleAction,
} from "../_lib/action";

function Page() {
  return (
    <div className="flex  w-full relative items-center justify-center min-h-[88vh]">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl text-zinc-100 text-center font-bold">
          Log in to MovieVilla
        </h1>
        <div className="flex gap-3 flex-col items-center">
          <SignInButton action={signInWithGoogleAction}>
            {" "}
            <div className="w-6 relative aspect-square">
              <Image
                alt="google image"
                src="https://authjs.dev/img/providers/google.svg"
                fill
              />
            </div>
            <p className="text-sm text-zinc-400">Sign in with Google</p>
          </SignInButton>
          <SignInButton action={signInWithFacebookAction}>
            {" "}
            <div className="w-6 relative aspect-square">
              <Image
                alt="google image"
                src="https://authjs.dev/img/providers/facebook.svg"
                fill
              />
            </div>
            <p className="text-sm text-zinc-400">Sign in with Facebook</p>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}

export default Page;
