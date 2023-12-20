import React from "react";
import DivisionStandings from "./divisionStandings";
import DivisionAverages from "./divisionAverages";
import DivisionDoublesAverages from "./divisionDoublesAverages";
import DivisionPotms from "./divisionPotms";
import { CompetitionPageProps } from "@/app/localLeagues/[competitionId]/page";

type CompetitionDivisionProps = {
  id: number;
} & CompetitionPageProps;

const CompetitionDivision = ({ id, params }: CompetitionDivisionProps) => {
  return (
    <div className="flex flex-col w-full md:grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-2 max-h-[30rem] overflow-y-auto">
        <DivisionStandings id={id} />
      </div>
      <div className="col-span-1 max-h-[30rem] overflow-y-auto">
        <DivisionPotms id={id} params={params} />
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
