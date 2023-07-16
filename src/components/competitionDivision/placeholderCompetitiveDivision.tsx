import React from "react";
import PlaceholderTable from "./placeholderTable";

const PlaceholderCompetitionDivision = () => {
  return (
    <div className="flex flex-col w-full md:grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-2 h-[30rem] overflow-y-scroll">
        <PlaceholderTable />
      </div>
      <div className="col-span-1 h-[30rem] overflow-y-scroll">
        <PlaceholderTable />
      </div>
      <div className="col-span-1 h-[30rem] overflow-y-scroll">
        <PlaceholderTable />
      </div>
      <div className="col-span-2 h-[30rem] overflow-y-scroll">
        <PlaceholderTable />
      </div>
    </div>
  );
};

export default PlaceholderCompetitionDivision;
