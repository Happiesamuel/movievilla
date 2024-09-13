"use client";

import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function RatedStar({ rating }) {
  const a = Math.round(rating) / 2;
  const arr = Array.from({ length: 5 }, (v, i) => i + 1);
  return (
    <div className="flex gap-2 text-yellow-500">
      {arr.map((x, i) => {
        if (i < a) return <FaStar key={i} />;
        else return <CiStar key={i} />;
      })}
    </div>
  );
}

export default RatedStar;
