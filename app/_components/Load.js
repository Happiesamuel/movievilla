function Load() {
  const arr = Array.from({ length: 18 });
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 mx-2 my-3 lg:mx-6 lg:my-6">
        {arr.map((x, i) => (
          <div key={i} className="w-full">
            <div className=" relative aspect-square w-full  skeleton "></div>
            <div className="flex justify-between items-center gap-2 text-sm px-2 py-2">
              <div className="flex flex-col gap-1 w-full">
                <p className="mt-2 skeleton skeleton-text w-[60%] h-2"></p>
                <p className="mt-2 skeleton skeleton-text w-2 h-1"></p>
              </div>
              <div className="mt-2 skeleton skeleton-text w-1 h-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Load;
