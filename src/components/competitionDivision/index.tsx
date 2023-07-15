import React from "react";
import DivisionStandings from "./divisionStandings";

interface CompetitionDivisionProps {
  id: number;
}

const CompetitionDivision = ({ id }: CompetitionDivisionProps) => {
  return (
    <div className="grid grid-cols-3 w-full">
      <div className="col-span-3">
        <DivisionStandings id={id} />
      </div>
    </div>
  );
};

export default CompetitionDivision;
