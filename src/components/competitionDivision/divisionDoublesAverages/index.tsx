import React, { useState, useEffect } from "react";
import { divisionDoublesAverageType } from "@/types/division";
import fetchDivisionDoublesAverages from "@/modules/fetchDivisionDoublesAverages";

interface DivisionDoublesAveragesProps {
  id: number;
}

const DivisionDoublesAverages = ({ id }: DivisionDoublesAveragesProps) => {
  const [averages, setAverages] = useState<divisionDoublesAverageType[]>();

  useEffect(() => {
    const fetchDoublesAverages = async () => {
      const doublesAveragesResponse = await fetchDivisionDoublesAverages(id);
      setAverages(doublesAveragesResponse);
    };

    fetchDoublesAverages();
  }, [id]);

  return (
    <div className="h-full">
      {averages && (
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
                  <tr
                    key={e.userOneId + e.userTwoId}
                    className={
                      e.club.includes("St Georges")
                        ? " bg-blue text-white"
                        : " bg-white"
                    }
                  >
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
      )}
    </div>
  );
};

export default DivisionDoublesAverages;
