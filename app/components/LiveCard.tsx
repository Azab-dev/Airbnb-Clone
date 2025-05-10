import React from "react";
import { LiveItems } from "../types/app";
import Image from "next/image";

type LiveCardProps = LiveItems;

const LiveCard = ({ img, title }: LiveCardProps) => {
  return (
    <div className="cursor-pointer  hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="live-card-image" fill />
      </div>
      <div>
        <h2 className="mt-3 text-2xl">{title}</h2>
      </div>
    </div>
  );
};

export default LiveCard;
