import { division } from "@/types/division";

const fetchDivisions = async (leagueName: string): Promise<division[]> => {
  const response = await fetch("/api/leagueDivisions", {
    body: JSON.stringify({
      league: leagueName,
    }),
    method: "POST",
  });

  const divisions = response.json();

  return divisions;
};

export default fetchDivisions;
