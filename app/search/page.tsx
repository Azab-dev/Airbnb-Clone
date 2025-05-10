import React from "react";
import Header from "./../components/header/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { getSearchResult } from "../utils/api";
import { searchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";

type SearchParams = {
  location?: string;
  startDate?: string;
  endDate?: string;
  numberOfGuests?: string;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { location = "", startDate = "", endDate = "", numberOfGuests = "" } = searchParams;

  let formatedStartDate = "";
  let formatedEndDate = "";

  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }

  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filters",
  ];

  const searchResult: searchResultData = await getSearchResult();

  return (
    <>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} Guests`}
      />
      <main>
        <section className="pt-10">
          <div className="container flex space-x-5">
            <div>
              <p className="text-xs">
                300+ Stays - {range} - for {numberOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold my-4">
                Stays in {location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
                {filters.map((btn) => (
                  <button type="button" className="filter-btn" key={btn}>
                    {btn}
                  </button>
                ))}
              </div>
              <div>
                {searchResult.map((listing, idx) => (
                  <ListingCard
                    key={idx}
                    img={listing.img}
                    title={listing.title}
                    description={listing.description}
                    location={listing.location}
                    total={listing.total}
                    price={listing.price}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>
            <div className="w-[600px] z-0">
              <Map searchResultData={searchResult} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
