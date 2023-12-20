import React from "react";
import { competitionDivisionType } from "@/types/competitionDivisions";
import CompetitionDivision from "@/components/competitionDivision";
import { competitionType } from "@/types/competition";
import { CompetitionPageProps } from "@/app/localLeagues/[competitionId]/page";

type CompetitonPageType = {
  competition: competitionType;
  competitionDivisions: competitionDivisionType[];
} & CompetitionPageProps;

const CompetitionPageComponent = ({
  competition,
  competitionDivisions,
  params,
}: CompetitonPageType) => (
  <div className="bg-grey min-h-screen">
    <p className="font-bold text-3xl lg:text-4xl text-darkBlue leading-tight tracking-tighter pt-8 md:pt-12 lg:pt-24 text-center">
      {competition?.name}
    </p>
    {competitionDivisions.map((e) => {
      return (
        <div
          key={e.id}
          className="max-w-7xl w-5/6 mx-auto grid place-items-center md:p-12"
        >
          <p className="font-bold text-2xl lg:text-3xl text-blue leading-tight mt-8 mb-4">
            {e.name} Division
          </p>
          <CompetitionDivision id={e.id} params={params} />
        </div>
      );
    })}
  </div>
);

export default CompetitionPageComponent;
