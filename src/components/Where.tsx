import React from "react";
import Wave from "./Wave";

const Where = () => {
  return (
    <>
      <div id="whereSection" className="bg-white">
        <div className="max-w-7xl mx-auto grid place-items-center px-4 py-12 lg:py-36 xl:py-48">
          <p className="font-bold text-3xl lg:text-4xl text-darkBlue leading-tight tracking-tighter">
            Where to find us
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4888.186016906861!2d0.142297!3d52.223528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d870f83a147275%3A0xd83b666dae161c6f!2sSt%20Georges%20Table%20tennis%20club!5e0!3m2!1sen!2suk!4v1688331340535!5m2!1sen!2suk"
            loading="lazy"
            className="w-full lg:w-3/4 aspect-square p-4 lg:p-12"
          ></iframe>
        </div>
      </div>
      {/* <div className="grid place-items-center bg-white p-8"> */}

      <Wave color="white" />
    </>
  );
};

export default Where;
