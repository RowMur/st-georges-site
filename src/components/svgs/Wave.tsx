import React from "react";

interface WaveProps {
  color: string;
}

const Wave = ({ color }: WaveProps) => {
  return (
    <div className={color == "#E9EEF2" ? "bg-white" : "bg-grey"}>
      <svg
        width="1440"
        height="52"
        viewBox="0 0 1440 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 40C432 80 1008 0 1440 40V0H0V40Z" fill={color} />
      </svg>
    </div>
  );
};

export default Wave;
