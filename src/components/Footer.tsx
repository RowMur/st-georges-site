import React from "react";
import Wave from "./svgs/Wave";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import sgLogo from "../../public/stGeorgesLogo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-white top-0">
        <div className="rotate-180">
          <Wave color="white" />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row p-8 max-w-4xl justify-between mx-auto">
          <a href="/">
            <Image
              src={sgLogo}
              alt="St Georges Logo"
              className="h-8 sm:h-12 w-auto"
            />
          </a>
          <div className="sm:w-[30%]">
            <h6 className="text-md font-bold text-darkBlue">Where?</h6>
            <p className="text-sm text-blue">
              St George&apos;s Church Hall, Chesterfield Road, Cambridge, CB4
              1LN
            </p>
          </div>
          <div className="sm:w-[30%]">
            <h6 className="text-md font-bold text-darkBlue">Contact</h6>
            <a
              target="_blank"
              href="mailto: stgeorgesttclub@gmail.com"
              className="inline text-blue"
            >
              <MdEmail className="h-4 w-fit aspect-square inline mr-1" />
              stgeorgesttclub@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
