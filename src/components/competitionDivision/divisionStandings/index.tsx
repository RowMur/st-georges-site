import React from "react";
import fetchDivisionStandings from "@/modules/fetchData/fetchDivisionStandings";

interface DivisionStandingsProps {
  id: number;
}

const DivisionStandings = async ({ id }: DivisionStandingsProps) => {
  const standings = await fetchDivisionStandings(id);

  return (
    <div className="h-full">
      <table className="text-xs md:text-base w-full h-full bg-white">
        <thead>
          <tr>
            <th>Position</th>
            <th className="text-left">Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((e) => (
            <tr
              key={e.entrantId}
              className={
                e.fullName.includes("St George")
                  ? " bg-blue text-white"
                  : "bg-white"
              }
            >
              <td>{e.position}</td>
              <td className="text-left">{e.name}</td>
              <td>{e.played}</td>
              <td>{e.won}</td>
              <td>{e.drawn}</td>
              <td>{e.lost}</td>
              <td>{e.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DivisionStandings;
