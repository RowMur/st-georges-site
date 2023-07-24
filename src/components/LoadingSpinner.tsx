import TableTennisRacket from "./svgs/TableTennisRacket";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-1/12 left-2/4 bottom-2/4 absolute origin-bottom-left animate-spin">
      <TableTennisRacket />
    </div>
  );
};

export default LoadingSpinner;
