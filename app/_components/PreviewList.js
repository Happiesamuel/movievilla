"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { useWidth } from "./UserContext";
function PreviewList({ title, movies, type, slug }) {
  const { width } = useWidth();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: width < 640 ? 3 : width < 768 ? 4 : width < 1024 ? 5 : 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      <div className="flex justify-between items-center my-2 md:my-4">
        <h1 className="text-zinc-100 font-bold text-xl">{title}</h1>
        <Link
          href={`/guest/${type}?filter=${slug}`}
          className="cursor-pointer text-zinc-400 md:text-sm text-xs border border-zinc-400 px-2 py-1 md:px-4 md:py-2 rounded-md"
        >
          SEE MORE
        </Link>
      </div>

      <div className=" w-full flex flex-col gap-5 mx-3 mb-3">
        <Slider {...settings}>
          {movies
            .filter((x) => x.poster_path !== null)
            .map((movie, i) => {
              const name =
                type === "tv" ? movie.original_name : movie.original_title;
              return (
                <Link href={`/guest/${type}/${movie.id}`} key={movie.id}>
                  <div className="cursor-pointer relative aspect-square w-[95%] sm:h-[200px] ">
                    <Image
                      fill
                      alt={movie.original_title}
                      className="object-cover rounded-md"
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                  </div>
                  <p className="text-zinc-200 text-center text-xs leading-none mx-1 mt-1 md:text-base">
                    {name.split(" ").length > 3
                      ? name
                          .split(" ")
                          .slice(0, Math.ceil(name.split(" ").length / 2))
                          .join(" ") + " ..."
                      : name || movie.original_title}
                  </p>
                </Link>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
export default PreviewList;
