import React from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  hierachy: "primary" | "secondary";
  fit: boolean;
}

const Button = ({ onClick, text, hierachy, fit }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`sm:mx-0 border-solid border-red border-2 rounded-2xl hover:cursor-pointer mt-4 lg:text-lg font-bold px-8 py-2 duration-300 outline-none outline-offset-4 ${
        fit ? "w-fit" : ""
      } ${
        hierachy == "primary"
          ? "text-grey bg-red hover:text-red hover:bg-opacity-0 focus:outline-red"
          : "bg-opacity-0 text-red hover:bg-red hover:text-grey focus:outline-red"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
