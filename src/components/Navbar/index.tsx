"use client";

import React, { useEffect, useState } from "react";
import fetchCompetitions from "@/modules/fetchCompetitions";
import { competition } from "@/types/competition";

const navbarItems = [
  {
    title: "Local Leagues",
    url: "/localLeagues",
    submenu: [
      {
        title: "Cambridge",
        value: "cambridge",
        url: "/localLeagues/cambridge",
      },
      {
        title: "Ely",
        value: "elyanddistrict",
        url: "/localLeagues/elyanddistrict",
      },
    ],
  },
];

const Navbar = () => {
  const [cambridgeCompetitions, setCambridgeCompetitions] =
    useState<competition[]>();
  const [elyCompetitions, setElyCompetitions] = useState<competition[]>();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const getCompetitions = async () => {
      const cambridgeResponse = await fetchCompetitions("cambridge");
      const elyResponse = await fetchCompetitions("ely");

      setCambridgeCompetitions(cambridgeResponse);
      setElyCompetitions(elyResponse);
    };

    getCompetitions();
  }, []);

  return (
    <nav>
      <ul className="flex h-full">
        {navbarItems.map((item, index) => (
          <li key={index}>
            {item.submenu ? (
              <div className="relative h-full">
                <button
                  aria-expanded={showDropdown ? "true" : "false"}
                  onClick={() => setShowDropdown((prev) => !prev)}
                  aria-haspopup="menu"
                  className="h-full"
                >
                  {item.title}
                </button>
                <ul
                  className={`${
                    showDropdown ? "" : "hidden"
                  } absolute top-100 w-full`}
                >
                  {item.submenu.map((submenu, index) => (
                    <li key={index}>
                      <a href={submenu.url}>{submenu.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a href={item.url}>{item.title}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
