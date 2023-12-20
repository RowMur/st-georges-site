import React from "react";
import fetchCompetitionDivisions from "@/modules/fetchData/fetchCompetitionsDivisions";
import fetchCompitition from "@/modules/fetchData/fetchCompetition";
import CompetitionPageComponent from "@/components/CompetitionPage";

export type CompetitionPageProps = {
  params: {
    competitionId: string;
  };
};

const CompetitionPage = async ({ params }: CompetitionPageProps) => {
  const competitionDivisions = await fetchCompetitionDivisions(
    params.competitionId
  );
  const competition = await fetchCompitition(params.competitionId);

  return (
    <CompetitionPageComponent
      competition={competition}
      competitionDivisions={competitionDivisions}
      params={params}
    />
  );
};

export default CompetitionPage;
