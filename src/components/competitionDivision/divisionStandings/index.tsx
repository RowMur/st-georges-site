"use client";

import React, { useState, useEffect } from "react";
import { divisionStandingType } from "@/types/division";
import fetchDivisionStandings from "@/modules/fetchDivisionStandings";

interface DivisionStandingsProps {
  id: number;
}

const DivisionStandings = ({ id }: DivisionStandingsProps) => {
  const [standings, setStandings] = useState<divisionStandingType[]>();

  useEffect(() => {
    const fetchStandings = async () => {
      const standingsResponse = await fetchDivisionStandings(id);
      setStandings(standingsResponse);
    };

    fetchStandings();
  }, [id]);

  return (
    <div className="min-h-min">
      {standings && (
        <table className="text-xs md:text-base mx-auto w-11/12">
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
                  e.fullName.includes("St Georges")
                    ? " bg-blue text-white"
                    : " bg-white"
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
      )}
    </div>
  );
};

export default DivisionStandings;
