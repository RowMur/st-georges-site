import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { competitionPlayerType, resultType } from "@/types/competitionPlayer";

interface MatchResultsChartProps {
  player: competitionPlayerType | undefined;
}

interface dataType {
  name: string;
  count: number;
}

const compareCounts = (a: dataType, b: dataType) => {
  if (a.count < b.count) {
    return 1;
  } else if (a.count > b.count) {
    return -1;
  } else {
    return 0;
  }
};

export const exportGameResults = (results: resultType[]) => {
  const gamesMap = new Map();
  results.forEach((resultGroup) => {
    resultGroup.results.forEach((match) => {
      match.games.forEach((game) => {
        const key = `${game.for}-${game.against}`;
        const prev = gamesMap.get(key);
        gamesMap.set(key, prev ? prev + 1 : 1);
      });
    });
  });

  var data: dataType[] = [];
  gamesMap.forEach((value: number, key: string, map) => {
    data.push({
      name: key,
      count: value,
    });
  });

  return data.sort(compareCounts);
};

const GameResultsChart = ({ player }: MatchResultsChartProps) => {
  if (!player) {
    return;
  }
  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        width={500}
        height={300}
        data={exportGameResults(player.results)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#78A6C8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GameResultsChart;
