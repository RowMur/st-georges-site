import React from "react";
import Image from "next/image";
import practiceImage from "../../public/practiceImage.png";
import Wave from "./Wave";

const Hero = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid place-items-center py-12 lg:py-36 xl:py-48">
        <div className="flex flex-col lg:flex-row justify-between items-center w-4/5 gap-8">
          <div>
            <p className="text-center lg:text-left font-black text-5xl lg:text-6xl text-darkBlue leading-tight tracking-tighter">
              Come and play table tennis.
            </p>
            <p className="text-center lg:text-left font-bold text-2xl lg:text-3xl text-blue leading-normal lg:py-4">
              Friday nights 8-10pm
            </p>
            <div className="mx-auto lg:mx-0 mt-4 lg:mt-8 flex justify-center lg:justify-start flex-row gap-2">
              <a className="sm:mx-0 w-fit border-solid border-red border-2 rounded-2xl hover:cursor-pointer text-red lg:text-lg font-bold px-8 py-2 hover:bg-red hover:text-grey duration-300">
                Where
              </a>
              <a className="sm:mx-0 w-fit border-solid border-red border-2 rounded-2xl hover:cursor-pointer hover:text-red lg:text-lg font-bold px-8 py-2 bg-red hover:bg-opacity-0 text-grey duration-300">
                Contact
              </a>
            </div>
          </div>
          <Image
            src={practiceImage}
            alt="Practice Image"
            className="w-3/4 md:w-2/4 lg:w-2/5"
          />
        </div>
      </div>
      <Wave color="#E9EEF2" />
    </>
  );
};

export default Hero;
