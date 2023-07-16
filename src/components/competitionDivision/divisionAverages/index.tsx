import React, { useState, useEffect } from "react";
import { divisionAverageType } from "@/types/division";
import fetchDivisionAverages from "@/modules/fetchDivisionAverages";
import PlaceholderTable from "../placeholderTable";

interface DivisionAveragesProps {
  id: number;
}

const DivisionAverages = ({ id }: DivisionAveragesProps) => {
  const [averages, setAverages] = useState<divisionAverageType[]>();

  useEffect(() => {
    const fetchAverages = async () => {
      const averagesResponse = await fetchDivisionAverages(id);
      setAverages(averagesResponse);
    };

    fetchAverages();
  }, [id]);

  return (
    <div className="h-full">
      {!averages && <PlaceholderTable />}
      {averages && (
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
                  <tr
                    key={e.userId}
                    className={
                      e.club.includes("St Georges")
                        ? " bg-blue text-white"
                        : " bg-white"
                    }
                  >
                    <td>{e.name}</td>
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

export default DivisionAverages;
