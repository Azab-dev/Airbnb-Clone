import React from "react";
import { getLive } from "../utils/api";
import LiveCard from "./LiveCard";
import { liveData } from "../types/app";

const Live = async () => {
  const liveData: liveData = await getLive();
  // console.log(liveData);

  return (
    <section className="pt-6">
      <div className="container">
        <h1 className="text-4xl font-semibold mb-5">Live Anywhere</h1>
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
          {liveData.map((item, idx) => (
            <LiveCard key={idx} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
