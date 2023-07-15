export interface divisionStanding {
  entrantId: number;
  teamId: number;
  fullName: string;
  name: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  setsFor: number;
  setsAgainst: number;
  gamesFor: number;
  gamesAgainst: number;
  gamePointsFor: number;
  gamePointsAgainst: number;
  adjustment: number;
  pointsAgainst: number;
  points: number;
  competitionId: number;
}

export interface division {
  divisionId: number;
  competitionId: number;
  name: string;
  competition: string;
  standings: divisionStanding[];
}