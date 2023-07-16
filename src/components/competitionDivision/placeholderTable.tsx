import React from "react";

const PlaceholderTable = () => {
  return (
    <table className="text-xs md:text-base w-full h-full bg-white animate-pulse">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {Array(8).map((index) => (
          <tr key={index}></tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlaceholderTable;
