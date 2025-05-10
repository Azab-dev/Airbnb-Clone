import React from "react";
import { listingCardItems } from "../types/app";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

type listingCardProps = Omit<listingCardItems, "long" | "lat">;
const ListingCard = ({
  img,
  title,
  description,
  location,
  total,
  price,
  star,
}: listingCardProps) => {


  return (
    <>
      <div className="flex p-2  border-b-2 border-gray-300 cursor-pointer pr-4 hover:opacity-80 hover:shadow hover:scale-105 duration-200">
        <div className="relative  w-40 md:h-52 md:w-80 flex-shrink-0">
          <Image
            src={img}
            alt="listing-Card"
            className="rounded-2xl object-cover"
            fill
          />
        </div>
        <div className="flex flex-col flex-grow pl-5 ">
          <div className="flex justify-between ">
            <p>{location}</p>
            <HeartIcon className="h-7 cursor-pointer text-red-600" />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="flex flex-col pt-2 ">
            <p className="pt-2 text-sm text-gray-500 flex-grow inline">
              {description}
            </p>
            <div className="flex flex-col  justify-between items-end ">
              <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
              <p className="text-right font-medium pb-2">{total}</p>
            </div>
          </div>
          <p className="flex items-center ">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
        </div>
      </div>
    </>
  );
};
export default ListingCard;
