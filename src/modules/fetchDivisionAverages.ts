import { divisionAverageType } from "@/types/division";

const fetchDivisionAverages = async (
  divisionId: number
): Promise<divisionAverageType[]> => {
  try {
    const response = await fetch(
      `https://ttleagues-api.azurewebsites.net/api/divisions/${divisionId}/averages`
    );

    const divisionAverages = await response.json();
    return divisionAverages;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchDivisionAverages;
