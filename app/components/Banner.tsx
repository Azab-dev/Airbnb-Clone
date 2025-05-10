import React from "react";
import Image from "next/image";
import airBnbImage from "@/images/image-airbnb.webp";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src={airBnbImage}
        alt="banner-image"
        className="object-cover object-left"
        fill
      />
      <div className="w-full absolute top-3/4 text-center space-y-3">
        <p className="text-sm  sm:text-2xl text-white">
          Not Sure where you go? Perfect.
        </p>
        <button
          type="button"
          className="text-red-400 filter-btn bg-white px-10 py-4 shadow-md rounded-full 
          font-bold cursor-pointer hover:bg-red-400 hover:text-white border-0 duration-200  "
        >
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
