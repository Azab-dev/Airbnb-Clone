import React from "react";
import Image from "next/image";
import Link from "next/link";
// import outdoorsImg from '@/images/outdoor.jpg'

type GreatestOutdoorsProps = {
  // img: string;
  title: string;
  des: string;
  linkText: string;
};

const GreatestOutdoors = ({
  // img,
  title,
  des,
  linkText,
}: GreatestOutdoorsProps) => {
  return (
    <div className="container relative my-10">
      <div className="relative h-[500px] min-w-[300px]">
        <Image
          src="https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/5ed57675460e79a187af3d8f_airbnb%20hero.webp"
          alt="GreatestOutdoors-image"
          fill
          className="rounded-4xl object-cover"
        />
      </div>
      <div className=" absolute top-22 left-10">
        <h3 className="text-5xl text-white mb-3  w-70">{title}</h3>
        <p className="text-white text-xl">{des}</p>
        <Link
          href="/"
          className="text-lg px-4 py-2 block w-fit hover:bg-gray-900 rounded-lg mt-5 text-white bg-black"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default GreatestOutdoors;
