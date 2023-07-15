import { competition } from "@/types/competition";

const fetchCompetitions = async (
  leagueName: string
): Promise<competition[]> => {
  try {
    const activeCompetitionResponse = await fetch(
      "https://ttleagues-api.azurewebsites.net/api/competitions/all",
      {
        headers: {
          Tenant: leagueName + ".ttleagues.com",
        },
      }
    );
    const activeCompetition = await activeCompetitionResponse.json();

    const archiveCompetitionsResponse = await fetch(
      "https://ttleagues-api.azurewebsites.net/api/competitions/archives",
      {
        headers: {
          Tenant: leagueName + ".ttleagues.com",
        },
      }
    );
    const archiveCompetitions = await archiveCompetitionsResponse.json();

    const allCompetitions = archiveCompetitions
      .concat(activeCompetition)
      .reverse();

    return allCompetitions;
  } catch (error) {
    console.log(error);
    throw Error(String(error));
  }
};

export default fetchCompetitions;
