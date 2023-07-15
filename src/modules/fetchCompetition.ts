import { competitionType } from "@/types/competition";

const fetchCompitition = async (
  competitionId: string
): Promise<competitionType> => {
  try {
    const response = await fetch(
      `https://ttleagues-api.azurewebsites.net/api/competitions/${competitionId}`
    );

    const competition = await response.json();
    return competition;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchCompitition;
