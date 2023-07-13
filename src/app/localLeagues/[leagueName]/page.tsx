"use client";

import React, { useState, useEffect } from "react";
import fetchDivisions from "@/modules/fetchDivisions";
import { division } from "@/types/division";
import Header from "@/components/Header";
import { useParams } from "next/navigation";

const LeaguePage = () => {
  const [divisions, setDivisions] = useState<division[]>();

  const { leagueName } = useParams();

  useEffect(() => {
    if (!leagueName) {
      return;
    }
    const getDivisions = async () => {
      const response = await fetchDivisions(String(leagueName));
      setDivisions(response);
    };

    getDivisions();
  }, [leagueName]);

  return (
    <div className="bg-grey">
      <div>
        <Header />
        {divisions?.map((e) => {
          return (
            <div key={e.divisionId}>
              {e.standings.map((e) => {
                return <div key={e.entrantId}>{e.name}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaguePage;
