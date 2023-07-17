import { competitionPlayerType } from "@/types/competitionPlayer";

const fetchCompetitionPlayer = async (
  competitionId: string,
  playerId: string
): Promise<competitionPlayerType> => {
  try {
    const response = await fetch(
      `https://ttleagues-api.azurewebsites.net/api/competitions/${competitionId}/player/${playerId}/stats`
    );

    const competitionPlayer = await response.json();
    return competitionPlayer;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchCompetitionPlayer;
