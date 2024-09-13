function loading() {
  const arr = Array.from({ length: 6 });
  return (
    <div className="mt-2 md:mt-6 mb-6">
      <div className="flex flex-col items-center w-full gap-3 divide-y divide-zinc-600">
        {arr.map((x, i) => (
          <div
            key={i}
            className={`flex ${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }  gap-5 w-full pt-5`}
          >
            <div className="relative w-full skeleton"></div>
            <div className="flex flex-col gap-1 items-start w-full">
              <h1 className="skeleton skeleton-text w-[20%] h-1"></h1>
              <h1 className="skeleton skeleton-text w-[40%] h-2"></h1>
              <p className="skeleton skeleton-text w-full h-2"></p>
              <p className="skeleton skeleton-text w-full h-2"></p>
              <p className="skeleton skeleton-text w-[80%] h-2"></p>
              <h1 className="skeleton skeleton-text w-5 h-2"></h1>
              <h1 className="skeleton skeleton-text w-[20%] h-2"></h1>

              <h1 className="skeleton skeleton-text w-5 h-2"></h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default loading;
