import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

const Header = ({placeholder}:{placeholder?:string}) => {
  return (
    <header className="sticky top-0 z-50 bg-white  shadow-md ">
      <div className="container grid grid-cols-3  ">
        <Link href="/" className="relative flex items-center h-22 my-auto">
          <Image
            className="object-contain object-left "
            src={logo}
            alt="airbnb_logo"
            fill
          />
        </Link>
        <Searchbar placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
