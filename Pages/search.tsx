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

import Footer from "@/app/components/Footer";
import Header from "@/app/components/header/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Map from "@/app/components/Map";
import { GetServerSideProps, NextPage } from "next";
import InfoCard from "@/app/components/InfoCard";


type SearchResult = {
  img: string;
  location: string;
  description: string;
  price: string;
  total: string;
  star: number;
  title: string;
};

type SearchProps = {
  searchResults: SearchResult[];
};

const Search: NextPage<SearchProps> = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  let formatedStartDate = "";
  let formatedEndDate = "";
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate as string), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate as string), "dd MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const searchResultsWithCoords = searchResults.map(result => ({
    ...result,
    lat: 0,
    long: 0
  }));

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, description, price, total, star, title }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  title={title}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
        <Map searchResultData={searchResultsWithCoords} />
        </section>
      </main>
      <Footer />
    </div>
  );

};
export default Search;

export const getServerSideProps: GetServerSideProps<SearchProps> = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchResults: SearchResult[] = await res.json();

  return {
    props: {
      searchResults,
    },
  };
};
