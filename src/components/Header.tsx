import React from "react";
import sgLogo from "../../public/stGeorgesLogo.png";
import Image from "next/image";
import Wave from "./svgs/Wave";
import Navbar from "./Navbar";
import fetchCompetitions from "@/modules/fetchData/fetchCompetitions";

const Header = async () => {
  const cambridgeCompetitions = await fetchCompetitions("cambridge")
  const elyCompetitions = await fetchCompetitions("elydistrict")
  return (
    <>
      <div className="bg-white top-0">
        <div className="flex p-8 max-w-7xl justify-between mx-auto">
          <a href="/">
            <Image
              src={sgLogo}
              alt="St Georges Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </a>
          <Navbar cambridgeCompetitions={cambridgeCompetitions} elyCompetitions={elyCompetitions} />
        </div>
      </div>
      <Wave color="white" />
    </>
  );
};

export default Header;
