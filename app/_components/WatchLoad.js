function WatchLoad() {
  const arr = Array.from({ length: 8 });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mx-2 my-3 lg:mx-2 lg:my-4 gap-3 w-full ">
      {arr.map((x, i) => (
        <div key={i} className="bg-zinc-950 w-full rounded-md">
          <div className="relative aspect-square w-full skeleton"></div>

          <div className="px-2 py-2">
            <p className="mt-2 skeleton skeleton-text w-[60%] h-2"></p>
            <div className="flex justify-between">
              <div>
                <div className="flex flex-col  items-start mb-1">
                  <div className="flex items-center gap-2">
                    <p className="mt-2 skeleton skeleton-text w-10 h-2"></p>
                  </div>
                </div>
                <p className="mt-2 skeleton skeleton-text w-6 h-2"></p>
              </div>

              <div className="flex flex-col  items-end">
                <p className="mt-2 skeleton skeleton-text w-10 h-2"></p>
                <p className="mt-2 skeleton skeleton-text w-6 h-2"></p>
              </div>
            </div>

            <div className="flex items-center justify-evenly w-full my-2">
              <div
                className="
               px-3 py-3  skeleton  rounded-md "
              ></div>
              <div
                className="
               px-3 py-3  skeleton  rounded-md "
              ></div>
              <div
                className="
               px-3 py-3  skeleton  rounded-md "
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchLoad;
