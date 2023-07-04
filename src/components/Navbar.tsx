import React from "react";
import sgLogo from "../../public/stGeorgesLogo.png";
import Image from "next/image";
import Wave from "./Wave";

const NavBar = () => {
  return (
    <>
      <div className="bg-white sticky top-0">
        <div className="flex p-8 max-w-7xl mx-auto">
          <Image src={sgLogo} alt="St Georges Logo" className="h-16 w-auto" />
        </div>
      </div>
      <Wave color="white" />
    </>
  );
};

export default NavBar;
