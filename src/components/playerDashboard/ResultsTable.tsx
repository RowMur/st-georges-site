import React, { useState } from "react";
import { resultType } from "@/types/competitionPlayer";
import Button from "../Button";
import isInViewport from "@/modules/isInViewport";

interface ResultsTableProps {
  result: resultType;
}

const ResultsTable = ({ result }: ResultsTableProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const numOfResultsToShow = 5;

  const tableScroll = () => {
    const target = document.getElementById(String(result.team.key));
    if (!target) {
      return;
    }
    if (!isInViewport(target)) {
      target.scrollIntoView(true);
    }
  };

  return (
    <div className="my-8" id={String(result.team.key)}>
      <p className="text-blue font-semibold text-center text-xl mb-4">
        Results for {result.team.value}
      </p>
      <table className="w-full">
        <thead>
          <th className="text-left">Opponent</th>
          <th className="hidden sm:table-cell text-left">Team</th>
          <th className="hidden sm:table-cell text-left">Date</th>
          <th className="text-left">Games</th>
          <th>For</th>
          <th>Against</th>
          <th>Result</th>
        </thead>
        <tbody>
          {result.results
            .slice(0, isExpanded ? result.results.length : numOfResultsToShow)
            .map((match) => {
              return (
                <tr key={match.setId} className="bg-white">
                  <td className="text-left">{match.opponent.value ?? "Bye"}</td>
                  <td className="hidden sm:table-cell text-left">
                    {match.versus.value}
                  </td>
                  <td className="hidden sm:table-cell text-left">
                    {new Date(match.date).toLocaleDateString("en-gb", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="text-left">
                    <p>
                      {match.games.map((e, index) => {
                        return (
                          <span
                            key={
                              String(index) + String(e.for) + String(e.against)
                            }
                            className={
                              e.for > e.against
                                ? "text-green-500"
                                : "text-orange-500"
                            }
                          >
                            {e.for}-{e.against}
                            {index + 1 != match.games.length ? ", " : ""}
                          </span>
                        );
                      })}
                    </p>
                  </td>
                  <td>{match.for}</td>
                  <td>{match.against}</td>
                  <td
                    className={`${
                      match.for > match.against
                        ? "bg-green-500"
                        : "bg-orange-500"
                    } bg-opacity-20`}
                  />
                </tr>
              );
            })}
        </tbody>
      </table>
      {result.results.length > numOfResultsToShow && (
        <div className="w-fit mx-auto">
          <Button
            text={isExpanded ? "Show fewer" : "Show all"}
            fit={true}
            hierachy="secondary"
            onClick={() => {
              setIsExpanded(!isExpanded);
              tableScroll();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
