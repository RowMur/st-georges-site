export interface divisionStandingType {
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

export interface divisionAverageType {
  competitionId: number;
  divisionId: number;
  userId: string;
  competition: string;
  division: string;
  name: string;
  teamFullName: string;
  team: string;
  teamId: number;
  club: string;
  clubId: number;
  played: number;
  won: number;
  loss: number;
  percentage: number;
  updated: string;
  reserve: boolean;
}

export interface divisionDoublesAverageType {
  competitionId: number;
  divisionId: number;
  userOneId: string;
  userTwoId: string;
  competition: string;
  division: string;
  nameOne: string;
  nameTwo: string;
  teamFullName: string;
  team: string;
  teamId: number;
  club: string;
  clubId: number;
  played: number;
  won: number;
  loss: number;
  percentage: number;
  updated: string;
  reserveOne: boolean;
  reserveTwo: boolean;
}

export interface divisionPotmType {
  userId: string;
  name: string;
  teamId: number;
  team: string;
  clubId: number;
  club: string;
  played: number;
}

export interface divisionType {
  divisionId: number;
  competitionId: number;
  name: string;
  competition: string;
  standings: divisionStandingType[];
}
