import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { league } = await request.json();

    const response = await fetch(
      "https://ttleagues-api.azurewebsites.net/api/divisions/standings/published",
      {
        headers: {
          Tenant: league + ".ttleagues.com",
        },
      }
    );
    const leagueDivisions = await response.json();

    return NextResponse.json(leagueDivisions);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong!",
    });
  }
};
