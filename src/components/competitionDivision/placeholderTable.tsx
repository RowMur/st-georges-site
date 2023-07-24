import React from "react";
import LoadingSpinner from "../LoadingSpinner";

const PlaceholderTable = () => {
  return (
    <table className="text-xs md:text-base w-full h-full bg-white animate-pulse">
      <thead>
        <tr>
          <th className="h-1/6"></th>
        </tr>
      </thead>
      <tbody className="relative">
        {Array.from(Array(5)).map((e, index) => (
          <tr key={index} className="h-1/6">
            <td className={index % 2 == 0 ? "bg-white" : "bg-slate-50"}>
              <LoadingSpinner />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlaceholderTable;
