"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { competitionPlayerType } from "@/types/competitionPlayer";
import fetchCompetitionPlayer from "@/modules/fetchData/fetchCompetitionPlayerStats";
import RankingChart from "@/components/playerDashboard/RankingChart";
import MatchResultsChart from "@/components/playerDashboard/MatchResultsChart";
import GameResultsChart from "@/components/playerDashboard/GameResultsChart";

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
    <div className="my-20 flex flex-col">
      <div className="w-fit mx-auto">
        <RankingChart player={player} />
      </div>
      <MatchResultsChart player={player} />
      <div className="w-screen h-screen">
        <GameResultsChart player={player} />
      </div>
    </div>
  );
};

export default PlayerPage;
