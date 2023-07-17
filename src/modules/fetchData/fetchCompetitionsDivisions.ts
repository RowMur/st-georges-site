import { competitionDivisionType } from "@/types/competitionDivisions";

const fetchCompetitionDivisions = async (
  competitionId: string
): Promise<competitionDivisionType[]> => {
  try {
    const response = await fetch(
      `https://ttleagues-api.azurewebsites.net/api/competitions/${competitionId}/divisions`
    );

    const competitionDivisions = await response.json();
    return competitionDivisions;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchCompetitionDivisions;
