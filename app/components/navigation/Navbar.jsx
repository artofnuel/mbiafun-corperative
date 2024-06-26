import React from "react";
import { linksData } from "./links";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="w-full h-16 bg-background">
      <nav className="w-11/12 md:w-full max-w-7xl mx-auto h-full flex justify-between items-center">
        <h1 className="w-5/12 font-bold text-2xl md:text-4xl">TMC.</h1>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Navbar;
