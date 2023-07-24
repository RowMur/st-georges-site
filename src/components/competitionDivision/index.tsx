import React from "react";
import DivisionStandings from "./divisionStandings";
import DivisionAverages from "./divisionAverages";
import DivisionDoublesAverages from "./divisionDoublesAverages";
import DivisionPotms from "./divisionPotms";

interface CompetitionDivisionProps {
  id: number;
}

const CompetitionDivision = ({ id }: CompetitionDivisionProps) => {
  return (
    <div className="flex flex-col w-full md:grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-2 max-h-[30rem] overflow-y-auto">
        <DivisionStandings id={id} />
      </div>
      <div className="col-span-1 max-h-[30rem] overflow-y-auto">
        <DivisionPotms id={id} />
      </div>
      <div className="col-span-1 max-h-[30rem] overflow-y-auto">
        <DivisionDoublesAverages id={id} />
      </div>
      <div className="col-span-2 max-h-[30rem] overflow-y-auto">
        <DivisionAverages id={id} />
      </div>
    </div>
  );
};

export default CompetitionDivision;
