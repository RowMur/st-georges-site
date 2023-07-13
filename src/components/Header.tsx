import React from "react";
import sgLogo from "../../public/stGeorgesLogo.png";
import Image from "next/image";
import Wave from "./svgs/Wave";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="bg-white sticky top-0">
        <div className="flex p-8 max-w-7xl mx-auto justify-between align-middle">
          <a href="/">
            <Image src={sgLogo} alt="St Georges Logo" className="h-16 w-auto" />
          </a>
          <Navbar />
        </div>
      </div>
      <Wave color="white" />
    </>
  );
};

export default Header;
