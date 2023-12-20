import React from "react";
import fetchDivisionAverages from "@/modules/fetchData/fetchDivisionAverages";
import Link from "next/link";

interface DivisionAveragesProps {
  id: number;
}

const DivisionAverages = async ({ id }: DivisionAveragesProps) => {
  const averages = await fetchDivisionAverages(id);

  return (
    <div className="h-full">
      <table className="text-xs md:text-base w-full h-full bg-white">
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Average</th>
            <th>Played</th>
          </tr>
        </thead>
        <tbody>
          {averages.map((e) => (
            <>
              {e.club.includes("St George") && (
                <tr key={e.userId} className="bg-white">
                  <td>
                    <Link
                      className="hover:cursor-pointer"
                      href={`/localLeagues/${e.competitionId}/${e.userId}`}
                    >
                      {e.name}
                    </Link>
                  </td>
                  <td>{e.team}</td>
                  <td>{e.percentage}%</td>
                  <td>{e.played}</td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DivisionAverages;
