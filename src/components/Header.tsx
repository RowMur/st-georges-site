"use client";

import React, { useState, useEffect } from "react";
import sgLogo from "../../public/stGeorgesLogo.png";
import Image from "next/image";
import Wave from "./svgs/Wave";
import Navbar from "./Navbar";
import SidebarNav from "./sidebarNav";
import { competitionType } from "@/types/competition";
import fetchCompetitions from "@/modules/fetchCompetitions";

const Header = () => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);

  const [cambridgeCompetitions, setCambridgeCompetitions] =
    useState<competitionType[]>();
  const [elyCompetitions, setElyCompetitions] = useState<competitionType[]>();

  useEffect(() => {
    const getCompetitions = async () => {
      const cambridgeResponse = await fetchCompetitions("cambridge");
      const elyResponse = await fetchCompetitions("elydistrict");

      setCambridgeCompetitions(cambridgeResponse);
      setElyCompetitions(elyResponse);
    };

    getCompetitions();
  }, []);

  return (
    <>
      <div className="bg-white sticky top-0">
        <div className="flex p-8 max-w-7xl justify-between mx-auto">
          <a href="/">
            <Image
              src={sgLogo}
              alt="St Georges Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </a>
          <Navbar
            setSideNavOpen={setSideNavOpen}
            cambridgeCompetitions={cambridgeCompetitions}
            elyCompetitions={elyCompetitions}
          />
          <SidebarNav
            sideNavOpen={sideNavOpen}
            setSideNavOpen={setSideNavOpen}
            cambridgeCompetitions={cambridgeCompetitions}
            elyCompetitions={elyCompetitions}
          />
        </div>
      </div>
      <Wave color="white" />
    </>
  );
};

export default Header;
