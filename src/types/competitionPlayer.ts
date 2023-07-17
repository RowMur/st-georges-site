export interface competitionPlayerType {
  id: string;
  competition: {
    key: number;
    value: string;
  };
  division: {
    key: number;
    value: string;
  };
  team: {
    key: number;
    value: string;
  };
  club: {
    key: number;
    value: string;
  };
  results: resultType[];
  average: {
    played: number;
    won: number;
  };
  name: string;
  localRanking: {
    position: number;
    score: number;
    category: string;
  };
  form: formType[];
  rankings: rankingType[];
}

export interface resultType {
  team: {
    key: number;
    value: string;
  };
  results: matchType[];
}

interface rankingType {
  position: number;
  score: number;
  category: string;
}

interface formType {
  matchId: number;
  versus: {
    key: number;
    value: string;
  };
  won: number;
  played: number;
  form: number;
  date: string;
}

export interface matchType {
  opponent: {
    key: string;
    value: string;
  };
  date: string;
  games: gameType[];
  type: 2;
  team: {
    key: number;
    value: string;
  };
  setId: number;
  for: number;
  against: number;
  versus: {
    key: number;
    value: string;
  };
  matchId: number;
  divisionId: number;
  competitionId: number;
  score: number;
  rank: number;
}

interface gameType {
  for: number;
  against: number;
}
