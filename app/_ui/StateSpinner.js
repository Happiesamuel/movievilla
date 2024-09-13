"use client";

import { PulseLoader } from "react-spinners";

function StateSpinner() {
  return (
    <div className="flex justify-center w-full my-5">
      <PulseLoader color="#dc2626" />;
    </div>
  );
}

export default StateSpinner;
