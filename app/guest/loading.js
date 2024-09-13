import SkeletonPreloader from "../_ui/SkeletonPreloader";

function loading() {
  const arr = Array.from({ length: 6 });
  return (
    <div>
      <SkeletonPreloader />
      <div className="flex justify-between items-center my-4 ">
        <h1 className="skeleton skeleton-text w-20 h-3"></h1>
        <h1 className="skeleton skeleton-text w-10 h-2"></h1>
      </div>
      <div className="flex gap-2 w-full justify-between">
        {arr.map((x, i) => (
          <div key={i} className="w-full">
            <div className=" relative aspect-square w-full  skeleton "></div>
            <p className="mt-2 skeleton skeleton-text w-full h-2"></p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center my-4 ">
        <h1 className="skeleton skeleton-text w-20 h-3"></h1>
        <h1 className="skeleton skeleton-text w-10 h-2"></h1>
      </div>
      <div className="flex gap-2 w-full justify-between">
        {arr.map((x, i) => (
          <div key={i} className="w-full">
            <div className=" relative aspect-square w-full  skeleton "></div>
            <p className="mt-2 skeleton skeleton-text w-full h-2"></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default loading;
