"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useWidth } from "./UserContext";
function HomeSwiper({ movies }) {
  const { width } = useWidth();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: width < 640 ? 2 : width < 768 ? 3 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const router = useRouter();
  const pathName = usePathname();
  function handleClick(i) {
    const params = new URLSearchParams();
    params.set("movie", i);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <div className=" w-full flex flex-col gap-5">
      <Slider {...settings}>
        {movies.map((movie, i) => {
          const name =
            movie.media_type === "tv"
              ? movie.original_name
              : movie.original_title;
          return (
            <div key={movie.id} onClick={() => handleClick(i)}>
              <div
                href="#"
                className="cursor-pointer relative aspect-square w-[95%] h-[200px]"
              >
                <Image
                  fill
                  alt={movie.original_title}
                  className="object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </div>
              <p className="text-zinc-200 text-center">
                {name.split(" ").slice(0, 2).join(" ") + " ..." ||
                  movie.original_title}
              </p>
            </div>
          );
        })}
      </Slider>
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

export default HomeSwiper;
