import React from "react";
import ExploreCard from "./ExploreCard";
import { getExplore } from "../utils/api";
import { exploreData } from "@/app/types/app";

const Explore = async () => {
  const exploreData: exploreData = await getExplore();
  // console.log(exploreData);

  return (
    <section className="pt-6 ">
      <div className="container">
        <h2 className="text-4xl font-semibold mb-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 md:grid-cols-2col lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 ">
          {exploreData.map((item, idx) => (
            <ExploreCard
              key={idx}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
