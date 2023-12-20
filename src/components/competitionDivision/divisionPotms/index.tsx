import React from "react";
import fetchDivisionPotms from "@/modules/fetchData/fetchDivisionPotms";
import Link from "next/link";
import { CompetitionPageProps } from "@/app/localLeagues/[competitionId]/page";

type DivisionPotmsProps = {
  id: number;
} & CompetitionPageProps;

const DivisionPotms = async ({ id, params }: DivisionPotmsProps) => {
  const potms = await fetchDivisionPotms(id);

  return (
    <div className="h-full">
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
                  <td>
                    <Link
                      className="hover:cursor-pointer"
                      href={`/localLeagues/${params.competitionId}/${e.userId}`}
                    >
                      {e.name}{" "}
                    </Link>
                  </td>
                  <td>{e.team}</td>
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

export default DivisionPotms;
