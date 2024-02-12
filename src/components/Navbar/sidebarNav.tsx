import React, { Dispatch, SetStateAction } from "react";
import { competitionType } from "@/types/competition";
import { ImCross } from "react-icons/im";

interface SidebarNavProps {
  sideNavOpen: boolean;
  setSideNavOpen: Dispatch<SetStateAction<boolean>>;
  cambridgeCompetitions: competitionType[] | undefined;
  elyCompetitions: competitionType[] | undefined;
}

const SidebarNav = ({
  sideNavOpen,
  setSideNavOpen,
  cambridgeCompetitions,
  elyCompetitions,
}: SidebarNavProps) => {
  return (
    <>
      <div
        className={
          "h-screen fixed z-10 top-0 right-0 bg-grey shadow-2xl overflow-x-hidden duration-500 " +
          (sideNavOpen ? "w-3/4" : "w-0")
        }
      >
        <div className="py-12 px-8 flex flex-col gap-2">
          <button
            onClick={() => {
              setSideNavOpen(false);
            }}
            className="w-6 mb-4 text-darkBlue"
          >
            <ImCross />
          </button>
          <div className="bg-white rounded-md p-2">
            <a href="club-calendar">
              <p className="text-lg font-bold text-darkBlue">Club Calendar</p>
            </a>
          </div>
          <div className="bg-white rounded-md p-2">
            <p className="text-lg font-bold text-darkBlue">Local Leagues</p>
            <div className="py-4">
              {cambridgeCompetitions &&
                cambridgeCompetitions.map((e) => (
                  <a key={e.id} href={"/localLeagues/" + e.id}>
                    <p className="my-2 text-sm leading-tight text-blue">
                      {e.name}
                    </p>
                  </a>
                ))}
            </div>
            <div className="py-4">
              {elyCompetitions &&
                elyCompetitions.map((e) => (
                  <a key={e.id} href={"/localLeagues/" + e.id}>
                    <p className="my-2 text-sm leading-tight text-blue">
                      {e.name}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
