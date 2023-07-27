"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { competitionPlayerType } from "@/types/competitionPlayer";
import fetchCompetitionPlayer from "@/modules/fetchData/fetchCompetitionPlayerStats";
import RankingChart from "@/components/playerDashboard/RankingChart";
import MatchResultsChart from "@/components/playerDashboard/MatchResultsChart";
import GameResultsChart from "@/components/playerDashboard/GameResultsChart";
import ResultsTables from "@/components/playerDashboard/ResultsTables";
import StatsBar from "@/components/playerDashboard/statsBar";

const PlayerPage = () => {
  const [player, setPlayer] = useState<competitionPlayerType>();
  const { playerId, competitionId } = useParams();

  useEffect(() => {
    const getPlayer = async () => {
      const playerResponse = await fetchCompetitionPlayer(
        competitionId,
        playerId
      );
      setPlayer(playerResponse);
    };

    getPlayer();
  }, [playerId, competitionId]);

  return (
    <div className="my-20 flex flex-col w-11/12 max-w-7xl mx-auto">
      <div className="mb-8">
        <p className="font-bold text-3xl lg:text-4xl text-darkBlue leading-tight tracking-tighter text-center">
          {player?.name}
        </p>
        <p className="font-medium text-base sm:text-lg lg:text-xl text-blue leading-normal text-center">
          {player?.competition.value}
        </p>
      </div>
      <StatsBar player={player} />
      <ResultsTables player={player} />
      {[
        {
          component: <RankingChart key="rank" player={player} />,
          title: "Ranking by match",
        },
        {
          component: <MatchResultsChart key="match" player={player} />,
          title: "Common Match Results",
        },
        {
          component: <GameResultsChart key="game" player={player} />,
          title: "Common Game Results",
        },
      ].map((e, index) => {
        return (
          <div
            key={index}
            className="h-96 my-2 bg-white px-4 pt-8 pb-12 rounded-xl"
          >
            <p className="text-center text-red mb-4">{e.title}</p>
            {e.component}
          </div>
        );
      })}
    </div>
  );
};

export default PlayerPage;
