import { competition } from "@/types/competition";

const fetchCompetitions = async (
  leagueName: string
): Promise<competition[]> => {
  const response = await fetch("/api/competitions", {
    body: JSON.stringify({
      league: leagueName,
    }),
    method: "POST",
  });

  const competitions = response.json();

  return competitions;
};

export default fetchCompetitions;
