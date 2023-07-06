import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ExternalLinkProps {
  href: string;
  text: string;
  hierachy: "primary" | "secondary";
}

const ExternalLink = ({ href, text, hierachy }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={` mx-auto md:mx-0 w-fit flex whitespace-nowrap items-center border-solid border-red border-2 rounded-2xl hover:cursor-pointer lg:text-lg font-bold px-8 py-2 duration-300 outline-none outline-offset-4 ${
        hierachy == "primary"
          ? "text-grey bg-red hover:text-red hover:bg-opacity-0 focus:outline-red"
          : "bg-opacity-0 text-red hover:bg-red hover:text-grey focus:outline-red"
      }`}
    >
      {text}
      <FaExternalLinkAlt className="h-4 ml-1" />
    </a>
  );
};

export default ExternalLink;
