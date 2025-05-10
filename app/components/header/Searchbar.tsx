"use client";
import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Link from "next/link";

const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className=" flex items-center border-2 border-gray-200 rounded-full h-13 my-auto md:shadow-sm  relative ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || "Start your search"}
          className="  w-full h-full pl-5 text-lg text-gray-600 placeholder-gray-400
        flex-grow outline-none bg-transparent placeholder:text-sm"
        />
        <Link
          href={{
            pathname: "/search",
            query: `?location=${input}&startDate=${startDate}&endDate=${endDate}&numberOfGuests=${numberOfGuests}`,
          }}
          onClick={() => setInput("")}
        >
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 md:mx-2 cursor-pointer" />
        </Link>

        {input && (
          <div
            className="
          flex flex-col col-span-3 
          w-[500px] h-[300px] absolute top-13 -left-[9%] rounded-2xl "
          >
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              rangeColors={["#fd5b61"]}
              minDate={new Date()}
            />
            <div className="bg-white p-4 flex items-center border-b ">
              <h2 className="text-2xl flex-grow font-semibold">
                Number Of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
                value={numberOfGuests}
                min={1}
                onChange={(e) => setNumberOfGuests(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center bg-white py-3 ">
              <button
                type="button"
                className="text-gray-500 flex-grow cursor-pointer text-xl "
                onClick={() => setInput("")}
              >
                Cancel
              </button>
              <Link
                href={{
                  pathname: "/search",
                  search: `?location=${input}&startDate=${startDate}&endDate=${endDate}&numberOfGuests=${numberOfGuests}`,
                }}
                onClick={() => setInput("")}
                className="text-red-400 flex-grow text-xl text-center  "
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Searchbar;
