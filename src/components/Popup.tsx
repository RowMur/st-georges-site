"use client";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Popup = () => {
  const [hidden, setHidden] = useState(false);

  const hidePopup = () => {
    setHidden(true);
  };

  return (
    <>
      {!hidden && (
        <div className="fixed bottom-8 right-8 lg:bottom-16 lg:right-16 w-24 sm:w-36 aspect-square rounded-full bg-gradient-dark-to-light-blue grid place-items-center animate-float">
          <button onClick={hidePopup} className="absolute top-0 right-0">
            <RxCross2 />
          </button>
          <div>
            {["All are welcome!", "First session free."].map((e) => {
              return (
                <p
                  key={e}
                  className="text-center lg:text-left font-bold text-xs sm:text-sm max-w-lg mx-auto lg:mx-0 text-white my-0"
                >
                  {e}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
