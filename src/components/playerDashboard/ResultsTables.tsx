import React from "react";
import { competitionPlayerType } from "@/types/competitionPlayer";
import ResultsTable from "./ResultsTable";

interface ResultsTablesProps {
  player: competitionPlayerType | undefined;
}

const ResultsTables = ({ player }: ResultsTablesProps) => {
  return (
    <div className="my-4">
      {player &&
        player.results.map((e) => {
          return <ResultsTable key={e.team.key} result={e} />;
        })}
    </div>
  );
};

export default ResultsTables;
