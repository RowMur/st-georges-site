"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { competitionDivisionType } from "@/types/competitionDivisions";
import CompetitionDivision from "@/components/competitionDivision";
import fetchCompetitionDivisions from "@/modules/fetchCompetitionsDivisions";
import fetchCompitition from "@/modules/fetchCompetition";
import { competitionType } from "@/types/competition";

const CompetitionPage = () => {
  const [competitionDivisions, setCompetitionDivisions] =
    useState<competitionDivisionType[]>();
  const [competition, setCompetition] = useState<competitionType>();

  const { competitionId } = useParams();

  useEffect(() => {
    if (!competitionId) {
      return;
    }

    const getDivisions = async () => {
      const response = await fetchCompetitionDivisions(competitionId);
      setCompetitionDivisions(response);
    };

    const getCompetition = async () => {
      const response = await fetchCompitition(competitionId);
      setCompetition(response);
    };

    getCompetition();
    getDivisions();
  }, [competitionId]);

  return (
    <div className="bg-grey min-h-screen">
      <Header />
      <p className="font-bold text-3xl lg:text-4xl text-darkBlue leading-tight tracking-tighter mt-8 md:mt-12 lg:mt-24 text-center">
        {competition?.name}
      </p>
      {competitionDivisions?.map((e) => {
        return (
          <div
            key={e.id}
            className="max-w-7xl mx-auto grid place-items-center md:p-12"
          >
            <p className="font-bold text-2xl lg:text-3xl text-blue leading-tight mt-8 mb-4">
              {e.name} Division
            </p>
            <CompetitionDivision id={e.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CompetitionPage;
