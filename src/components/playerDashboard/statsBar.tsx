import React from "react";
import { competitionPlayerType } from "@/types/competitionPlayer";
import { exportGameResults } from "./GameResultsChart";
import { exportResults, dataType } from "./MatchResultsChart";

interface StatsBarProps {
  player: competitionPlayerType | undefined;
}

const StatHeader = ({ text }: { text: string | number }) => {
  return <p className="text-center text-darkBlue font-bold text-2xl">{text}</p>;
};

const StatComment = ({ text }: { text: string | number }) => {
  return <p className="text-center text-blue font-semibold text-lg">{text}</p>;
};

const StatsBar = ({ player }: StatsBarProps) => {
  return (
    <>
      {player && (
        <div className="bg-white flex flex-wrap p-4 gap-4 rounded-xl justify-evenly shadow-lg">
          <div>
            <StatHeader
              text={
                Math.round(
                  (player.average.won * 10000) / player.average.played
                ) /
                  100 +
                "%"
              }
            />
            <StatComment
              text={`${player.average.won}/${player.average.played}`}
            />
          </div>
          <div>
            <StatHeader text={`${player.localRanking.position}th`} />
            <StatComment text="Local Ranking" />
          </div>
          <div>
            <StatHeader text={exportResults(player.results)[0].name} />
            <StatComment text="Common Match Result" />
          </div>
          <div>
            <StatHeader text={exportGameResults(player.results)[0].name} />
            <StatComment text="Common Game Result" />
          </div>
        </div>
      )}
    </>
  );
};

export default StatsBar;
