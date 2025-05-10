
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
      <p className="hidden md:inline cursor-pointer"> Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer" />
      <div className="flex space-x-2 border-2 border-gray-200 p-2 rounded-full">
        <MenuIcon className="h-6 cursor-pointer" />
        <UserCircleIcon className="h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
