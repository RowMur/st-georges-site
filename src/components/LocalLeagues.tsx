import React from "react";
import Wave from "./Wave";

const LocalLeagues = () => {
  return (
    <>
      <div className="bg-grey px-2">
        <div className="max-w-7xl mx-auto grid place-items-center py-12 lg:py-36 xl:py-48">
          <p className="font-bold text-3xl lg:text-4xl text-darkBlue leading-tight tracking-tighter">
            Local Leagues
          </p>
          <p className="text-left font-medium text-base sm:text-lg lg:text-xl text-blue leading-normal py-2 lg:py-4 max-w-lg px-4">
            For the 2022-23 season, we have 5 teams playing in the Cambridge &
            District Table Tennis League and 2 teams in the Ely and District
            Table Tennis League. League matches start in October, and home
            nights are Mondays and Wednesdays.
          </p>
          <div className="mx-auto md:mx-0 mt-2 lg:mt-4 flex justify-center md:justify-start flex-col md:flex-row gap-2">
            <a
              href="https://cambridge.ttleagues.com/"
              target="_blank"
              className="mx-auto md:mx-0 w-fit border-solid border-red border-2 rounded-2xl hover:cursor-pointer text-red lg:text-lg font-bold px-8 py-2 hover:bg-red hover:text-grey duration-300"
            >
              Cambridge League
            </a>
            <a
              href="https://elydistrict.ttleagues.com/"
              target="_blank"
              className="mx-auto md:mx-0 w-fit border-solid border-red border-2 rounded-2xl hover:cursor-pointer text-red lg:text-lg font-bold px-8 py-2 hover:bg-red hover:text-grey duration-300"
            >
              Ely League
            </a>
          </div>
        </div>
      </div>
      <Wave color="#E9EEF2" />
    </>
  );
};

export default LocalLeagues;
