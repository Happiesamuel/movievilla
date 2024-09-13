function FooterThree() {
  return (
    <div className="text-lg px-2 py-3 lg:px-24 text-zinc-400 relative bottom-0 ml-0 md:bottom-0 md:ml-0 lg:-mt-[200px] lg:ml-[15%] text-left ">
      <p>
        MovieVilla automatically tracks what you’re watching, tells you how many
        episodes you’ve missed, recommends what to watch next based on your
        watch history, and connects you to what your friends are into.
      </p>
      <p className="py-3">
        The best way to keep track of your favorite TV shows!
      </p>

      <p className="pb-3">
        {" "}
        Get alerted when new episodes of your favorite TV shows air!{" "}
      </p>

      <p>Get personalized recommendations on what to watch!</p>
      <div className="flex justify-between text-zinc-50 lg:pt-6 pt-4">
        <p>
          124,807 <br />
          TV Shows
        </p>
        <p>
          13,450 <br /> Anime
        </p>
        <p>
          874,226 <br /> Movies
        </p>
        <p>
          3,291,844 <br /> Members
        </p>
      </div>
    </div>
  );
}

export default FooterThree;
