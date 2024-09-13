import SkeletonPreloader from "@/app/_ui/SkeletonPreloader";

function loading() {
  return (
    <div>
      <SkeletonPreloader />
      <div className=" gap-2  px-3 py-3 mt-3 skeleton w-full"></div>
      <div className="mt-3">
        <h1 className="skeleton skeleton-text w-full h-2"></h1>
        <h1 className="skeleton skeleton-text w-full h-2"></h1>
        <h1 className="skeleton skeleton-text w-[80%] h-2"></h1>
      </div>
    </div>
  );
}

export default loading;
