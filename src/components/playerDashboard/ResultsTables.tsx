import React from "react";
import { competitionPlayerType } from "@/types/competitionPlayer";

interface ResultsTableProps {
  player: competitionPlayerType | undefined;
}

const ResultsTables = ({ player }: ResultsTableProps) => {
  return (
    <div className="my-4">
      {player &&
        player.results.map((e) => {
          return (
            <div key={e.team.key} className="my-8">
              <p className="text-blue font-semibold text-center text-xl mb-4">
                Results for {e.team.value}
              </p>
              <table className="w-full">
                <thead>
                  <th className="text-left">Opponent</th>
                  <th>For</th>
                  <th>Against</th>
                  <th>Result</th>
                </thead>
                <tbody>
                  {e.results.map((result) => {
                    return (
                      <tr key={result.setId} className="bg-white">
                        <td className="text-left">
                          {result.opponent.value ?? "Bye"}
                        </td>
                        <td>{result.for}</td>
                        <td>{result.against}</td>
                        <td
                          className={`${
                            result.for > result.against
                              ? "bg-green-500"
                              : "bg-orange-500"
                          } bg-opacity-20`}
                        />
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default ResultsTables;
