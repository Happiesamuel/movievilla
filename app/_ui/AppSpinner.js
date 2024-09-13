"use client";
import { ProgressBar } from "react-loader-spinner";

function AppSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[88vh]">
      <ProgressBar
        visible={true}
        height="80"
        barColor="#eab308"
        borderColor="#dc2626"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{ scale: "1.5" }}
        wrapperClass=""
      />
      <p className="text-red-600 text-3xl font-bold">
        Movie<span className="text-yellow-400">Villa</span>
      </p>
    </div>
  );
}

export default AppSpinner;
