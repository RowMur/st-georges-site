import { divisionStandingType } from "@/types/division";

const fetchDivisionStandings = async (
  divisionId: number
): Promise<divisionStandingType[]> => {
  try {
    const response = await fetch(
      `https://ttleagues-api.azurewebsites.net/api/divisions/${divisionId}/standings`
    );

    const divisionStandings = await response.json();
    return divisionStandings;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchDivisionStandings;
