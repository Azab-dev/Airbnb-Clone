import Banner from "./components/Banner";
import Explore from "./components/Explore";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Live from "./components/Live";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoors
          // img={`${outdoorsImg}`}
          title="The Greatest Outdoors"
          des="Wishlists Curated By Airbnb"
          linkText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}
