import { divisionPotmType } from "@/types/division";

const fetchDivisionPotms = async (
  divisionId: number
): Promise<divisionPotmType[]> => {
  try {
    const response = await fetch(
      `https://ttleagues-api.azurewebsites.net/api/divisions/${divisionId}/potms`
    );

    const divisionPotms = await response.json();
    return divisionPotms;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchDivisionPotms;
