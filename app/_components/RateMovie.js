import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function RateMovie({ clickRate, setClickRate }) {
  const arr = Array.from({ length: 10 }, (v, i) => i);

  const [hoverRate, setHoverRate] = useState(null);
  function handleRate(i) {
    setClickRate((r) => (r === i + 1 ? 0 : i + 1));
  }
  function handleMouse(i) {
    setHoverRate(i + 1);
  }

  return (
    <div className="flex gap-3 items-center mb-3  justify-between mx-6">
      <div className="flex gap-2 ">
        {arr.map((star, i) =>
          hoverRate > star || clickRate > star ? (
            <FaStar
              key={i}
              onMouseEnter={() => handleMouse(i)}
              onMouseLeave={() => setHoverRate(clickRate)}
              className="text-yellow-500 cursor-pointer"
              onClick={() => handleRate(star)}
            />
          ) : (
            <CiStar
              onMouseEnter={() => handleMouse(i)}
              onMouseLeave={() => setHoverRate(clickRate)}
              key={i}
              onClick={() => handleRate(star)}
              className="text-yellow-500 cursor-pointer"
            />
          )
        )}
      </div>
      <p className="text-yellow-500">{clickRate || 0}</p>
    </div>
  );
}

export default RateMovie;
