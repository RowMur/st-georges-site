import React from "react";
import fetchDivisionDoublesAverages from "@/modules/fetchData/fetchDivisionDoublesAverages";

interface DivisionDoublesAveragesProps {
  id: number;
}

const DivisionDoublesAverages = async ({
  id,
}: DivisionDoublesAveragesProps) => {
  const averages = await fetchDivisionDoublesAverages(id);

  return (
    <div className="h-full">
      <table className="text-xs md:text-base w-full bg-white h-full">
        <thead>
          <tr>
            <th>Players</th>
            <th>Team</th>
            <th>Average</th>
            <th>Played</th>
          </tr>
        </thead>
        <tbody>
          {averages.map((e) => (
            <>
              {e.club.includes("St George") && (
                <tr key={e.userOneId + e.userTwoId} className="bg-white">
                  <td>
                    {e.nameOne} + {e.nameTwo}
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

export default DivisionDoublesAverages;
