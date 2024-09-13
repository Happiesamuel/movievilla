function loading() {
  const arr = Array.from({ length: 6 });
  return (
    <div className="flex flex-col gap-3">
      {arr.map((x, i) => (
        <div
          key={i}
          className="grid grid-cols-[0.2fr_1fr_0.1fr] gap-6 py-3 items-center "
        >
          <div className="flex gap-3">
            <div className="cursor-pointer relative aspect-square w-[150px]   skeleton"></div>
            <div className="flex flex-col justify-between py-1.5">
              <div className=" italic">
                <p className="mt-2 skeleton skeleton-text w-16 h-1"></p>
                <p className="mt-2 skeleton skeleton-text w-[60%] h-2"></p>
              </div>
              <p className="mt-2 skeleton skeleton-text w-8 h-1"></p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="mt-2 skeleton skeleton-text w-[100%] h-3"></p>
            <p className=" skeleton skeleton-text w-[100%] h-3"></p>
            <p className=" skeleton skeleton-text w-[80%] h-3"></p>
          </div>

          <p className="mt-2 skeleton skeleton-text w-2 h-1"></p>
        </div>
      ))}
    </div>
  );
}

export default loading;
