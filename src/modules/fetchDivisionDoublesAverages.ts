import { divisionDoublesAverageType } from "@/types/division";

const fetchDivisionDoublesAverages = async (
  divisionId: number
): Promise<divisionDoublesAverageType[]> => {
  try {
    const response = await fetch(
      `https://ttleagues-api.azurewebsites.net/api/divisions/${divisionId}/doublesaverages`
    );

    const divisionDoublesAverages = await response.json();
    return divisionDoublesAverages;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchDivisionDoublesAverages;
