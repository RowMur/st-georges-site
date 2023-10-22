"use client";

import React from "react";
import Image from "next/image";
import practiceImage from "../../../public/practiceImage.png";
import Wave from "../svgs/Wave";
import Button from "../Button";

const Hero = () => {
  const WhereSectionScroll = () => {
    document.getElementById("whereSection")?.scrollIntoView(true);
  };

  const ContactSectionScroll = () => {
    document.getElementById("contactSection")?.scrollIntoView(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto grid place-items-center py-12 lg:py-36 xl:py-48">
        <div className="flex flex-col lg:flex-row justify-between items-center w-4/5 gap-8">
          <div>
            <h1 className="text-center lg:text-left font-black text-5xl lg:text-6xl text-darkBlue leading-tight tracking-tighter py-2">
              St Georges Table Tennis Club
            </h1>
            <div className="py-2">
              {[
                "St George's Church Hall, Cambridge",
                "Friday nights 8-10pm",
              ].map((e) => {
                return (
                  <p
                    key={e}
                    className="text-center lg:text-left font-bold text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 text-blue"
                  >
                    {e}
                  </p>
                );
              })}
            </div>
            <div className="mx-auto lg:mx-0 lg:mt-8 flex justify-center lg:justify-start flex-row gap-2">
              <Button
                onClick={ContactSectionScroll}
                text="Contact"
                hierachy="secondary"
                fit={true}
              />
              <Button
                onClick={WhereSectionScroll}
                text="Where"
                hierachy="primary"
                fit={true}
              />
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
