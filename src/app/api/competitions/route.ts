import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { league } = await request.json();

    const activeCompetitionResponse = await fetch(
      "https://ttleagues-api.azurewebsites.net/api/competitions/all",
      {
        headers: {
          Tenant: league + ".ttleagues.com",
        },
      }
    );
    const activeCompetition = await activeCompetitionResponse.json();

    const archiveCompetitionsResponse = await fetch(
      "https://ttleagues-api.azurewebsites.net/api/competitions/archives",
      {
        headers: {
          Tenant: league + ".ttleagues.com",
        },
      }
    );
    const archiveCompetitions = await archiveCompetitionsResponse.json();

    const allCompetitions = archiveCompetitions.concat(activeCompetition);

    return NextResponse.json(allCompetitions);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong!",
    });
  }
};
