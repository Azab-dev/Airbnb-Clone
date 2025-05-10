import React from "react";
import { ExploreItems } from "../types/app";
import Image from "next/image";

type ExploreCardProps = ExploreItems;

const ExploreCard = ({ img, distance, location }: ExploreCardProps) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 cursor-pointer
      hover:scale-105 hover:bg-gray-100 transition transform duration-200 ease-out"
    >
      <div className="relative h-16 w-16 ">
        <Image
          src={img || "/defaultEcplore.png"}
          alt="ExploreCard-image"
          fill
        />
      </div>
      <div className="flex flex-col">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
