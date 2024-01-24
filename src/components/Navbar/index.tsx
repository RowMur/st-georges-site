"use client";

import React, { useState } from "react";
import { competitionType } from "@/types/competition";
import SidebarNav from "./sidebarNav";
import TopNavbar from "./topNavbar";

type Props = {
  cambridgeCompetitions: competitionType[];
  elyCompetitions: competitionType[];
};

const Navbar = ({ cambridgeCompetitions, elyCompetitions }: Props) => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);

  return (
    <>
      <TopNavbar
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
    </>
  );
};

export default Navbar;
