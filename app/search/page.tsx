import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";
import { searchResultData } from "@/app/types/app";

type SearchData = {
  location: string;
  startDate: string;
  endDate: string;
  numberOfGuests: string;
};

const SearchResult = async ({ searchData }: { searchData: SearchData }) => {
  const { location, startDate, endDate, numberOfGuests } = searchData;

  let formattedStartDate = "";
  let formattedEndDate = "";
  
  // تنسيق التواريخ
  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  }

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  
  // جلب بيانات البحث من الـ API أو من مصدر البيانات
  const searchResult: searchResultData = await getSearchResult();

  // الفلاتر المعروضة
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filters",
  ];

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
};

// لا حاجة لاستخدام getServerSideProps في App Folder، هنا سيتم جلب البيانات داخل المكون مباشرة.
export default SearchResult;



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
