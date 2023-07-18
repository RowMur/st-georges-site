import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { competitionPlayerType, resultType } from "@/types/competitionPlayer";

interface MatchResultsChartProps {
  player: competitionPlayerType | undefined;
}

interface dataType {
  name: string;
  value: number;
}

const compareCounts = (a: dataType, b: dataType) => {
  if (a.value < b.value) {
    return 1;
  } else if (a.value > b.value) {
    return -1;
  } else {
    return 0;
  }
};

const exportResults = (results: resultType[]) => {
  const resultsMap = new Map();
  results.forEach((e) => {
    e.results.forEach((match) => {
      const key = `${match.for}-${match.against}`;
      const prev = resultsMap.get(key);
      resultsMap.set(key, prev ? prev + 1 : 1);
    });
  });

  var data: dataType[] = [];
  resultsMap.forEach((value: number, key: string, map) => {
    data.push({
      name: key,
      value: value,
    });
  });

  const sortedData = data.sort(compareCounts);
  console.log(sortedData);
  return sortedData;
};

const MatchResultsChart = ({ player }: MatchResultsChartProps) => {
  return (
    <>
      {player && (
        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={exportResults(player?.results)}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#78A6C8"
            label
          />
          <Tooltip />
        </PieChart>
      )}
    </>
  );
};

export default MatchResultsChart;
