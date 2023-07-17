"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { competitionPlayerType } from "@/types/competitionPlayer";
import fetchCompetitionPlayer from "@/modules/fetchData/fetchCompetitionPlayerStats";
import RankingChart from "@/components/playerDashboard/RankingChart";

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
    <>
      <RankingChart player={player} />
    </>
  );
};

export default PlayerPage;
