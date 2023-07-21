import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  competitionPlayerType,
  resultType,
  matchType,
} from "@/types/competitionPlayer";

interface RankingChartProps {
  player: competitionPlayerType | undefined;
}

const CompareMatches = (a: matchType, b: matchType) => {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  } else {
    return 0;
  }
};

const SortResults = (results: resultType[]) => {
  var resultsArr: matchType[] = [];
  results.forEach((e) => {
    resultsArr = resultsArr.concat(e.results);
  });
  resultsArr.sort(CompareMatches);
  return resultsArr;
};

const RankingChart = ({ player }: RankingChartProps) => {
  if (player) {
    return (
      <ResponsiveContainer height={"100%"} width={"100%"}>
        <AreaChart
          width={300}
          height={400}
          data={SortResults(player.results).map((e, index) => ({
            match: index + 1,
            ranking: e.rank,
          }))}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="match" />
          <YAxis domain={["dataMin - 100", "dataMax + 100"]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ranking"
            stroke="#326789"
            fill="#78A6C8"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
};

export default RankingChart;
