import React, { useState, useEffect } from "react";
import { divisionPotmType } from "@/types/division";
import fetchDivisionPotms from "@/modules/fetchDivisionPotms";
import PlaceholderTable from "../placeholderTable";

interface DivisionPotmsProps {
  id: number;
}

const DivisionPotms = ({ id }: DivisionPotmsProps) => {
  const [potms, setPotms] = useState<divisionPotmType[]>();

  useEffect(() => {
    const fetchAverages = async () => {
      const averagesResponse = await fetchDivisionPotms(id);
      setPotms(averagesResponse);
    };

    fetchAverages();
  }, [id]);

  return (
    <div className="h-full">
      {potms ? (
        <table className="text-xs md:text-base w-full h-full bg-white">
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>POTMS</th>
            </tr>
          </thead>
          <tbody>
            {potms.map((e) => (
              <>
                {e.club.includes("St George") && (
                  <tr key={e.userId} className="bg-white">
                    <td>{e.name}</td>
                    <td>{e.team}</td>
                    <td>{e.played}</td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      ) : (
        <PlaceholderTable />
      )}
    </div>
  );
};

export default DivisionPotms;
