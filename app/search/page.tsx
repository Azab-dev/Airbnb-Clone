// import { format } from "date-fns";
// import Footer from "../components/Footer";
// import Header from "../components/header/Header";
// // import { getSearchResult } from "../utils/api";
// import ListingCard from "../components/ListingCard";
// import Map from "../components/Map";
// import { searchResultData } from "@/app/types/app";

// const getSearchResult = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
//     const searchResultData = await res.json();

//     if (Array.isArray(searchResultData) && searchResultData.length > 1) {
//       searchResultData[1].img = "/private.png";
//     }

//     return searchResultData;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

// type SearchData = {
//   location: string;
//   startDate: string;
//   endDate: string;
//   numberOfGuests: string;
// };

// const SearchResult = async ({
//   searchData: { location, startDate, endDate, numberOfGuests },
// }: {
//   searchData: SearchData;
// }) => {
//   let formattedStartDate;
//   let formattedEndDate;

//   if (startDate && endDate) {
//     formattedStartDate = format(new Date(startDate), "dd MMMM yy");
//     formattedEndDate = format(new Date(endDate), "dd MMMM yy");
//   }

//   const range = `${formattedStartDate} - ${formattedEndDate}`;

//   const filters = [
//     "Cancellation Flexibility",
//     "Type of Place",
//     "Price",
//     "Rooms and Beds",
//     "More Filters",
//   ];

//   const searchResultData:searchResultData = await getSearchResult();

//   return (
//     <>
//       <Header
//         placeholder={`${location} | ${range} | ${numberOfGuests} Guests`}
//       />
//       <main>
//         <section className="pt-10">
//           <div className="container flex space-x-5">
//             <div>
//               <p className="text-xs">
//                 300+ Stays - {range} - for {numberOfGuests} guests
//               </p>
//               <h1 className="text-3xl font-semibold my-4">
//                 Stays in {location}
//               </h1>
//               <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
//                 {filters.map((btn) => (
//                   <button type="button" className="filter-btn" key={btn}>
//                     {btn}
//                   </button>
//                 ))}
//               </div>
//               <div>
//                 {searchResultData.map((listing,idx) => (
//                   <ListingCard
//                     key={idx}
//                     img={listing.img}
//                     title={listing.title}
//                     description={listing.description}
//                     location={listing.location}
//                     total={listing.total}
//                     price={listing.price}
//                     star={listing.star}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="w-[600px] z-0">
//               <Map searchResultData={searchResultData} />
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };
// export default SearchResult;

"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";
// import { searchResultData } from "@/app/types/app";

// تعريف الـ API
const getSearchResult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResultData = await res.json();

    if (Array.isArray(searchResultData) && searchResultData.length > 1) {
      searchResultData[1].img = "/private.png";
    }

    return searchResultData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

type SearchData = {
  location: string;
  startDate: string;
  endDate: string;
  numberOfGuests: string;
};

const SearchResult = ({ searchData }: { searchData: SearchData }) => {

  interface Listing {
    img: string;
    title: string;
    description: string;
    location: string;
    total: string;
    price: string;
    star: number;
    long: number;
    lat: number;
  }

  const [searchResultData, setSearchResultData] = useState<Listing[]>([]);

  // تنسيق التواريخ
  let formattedStartDate;
  let formattedEndDate;

  if (searchData.startDate && searchData.endDate) {
    formattedStartDate = format(new Date(searchData.startDate), "dd MMMM yy");
    formattedEndDate = format(new Date(searchData.endDate), "dd MMMM yy");
  }

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filters",
  ];

  // جلب البيانات
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSearchResult();
      setSearchResultData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header
        placeholder={`${searchData.location} | ${range} | ${searchData.numberOfGuests} Guests`}
      />
      <main>
        <section className="pt-10">
          <div className="container flex space-x-5">
            <div>
              <p className="text-xs">
                300+ Stays - {range} - for {searchData.numberOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold my-4">
                Stays in {searchData.location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
                {filters.map((btn) => (
                  <button type="button" className="filter-btn" key={btn}>
                    {btn}
                  </button>
                ))}
              </div>
              <div>
                {searchResultData.map((listing, idx) => (
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
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );

};export default SearchResult;
