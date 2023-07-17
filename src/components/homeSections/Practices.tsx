import React from "react";
import Wave from "../svgs/Wave";
import TableGraphic from "../graphics/TableGraphic";

const Practices = () => {
  return (
    <>
      <div className="bg-white px-2">
        <div className="max-w-7xl mx-auto grid place-items-center px-4 py-12 lg:py-36 xl:py-48">
          <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-40 px-20">
            <div className="w-64 md:w-96 flex flex-col justify-center mx-auto">
              <TableGraphic />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-3xl lg:text-4xl text-darkBlue leading-tight tracking-tighter text-center">
                Club Practice Nights
              </p>
              <p className=" text-center font-medium text-base sm:text-lg lg:text-xl text-blue leading-normal lg:py-4 max-w-lg">
                We have four high quality tables available for practice. We have
                a range of abilities from beginner up to national league.
              </p>
              <table className="table-auto my-4 mx-auto">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wednesday</td>
                    <td>7:30-9:30pm</td>
                    <td>Members Only</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>8-10pm</td>
                    <td>£5</td>
                  </tr>
                </tbody>
              </table>
              <p className=" text-center font-medium text-base sm:text-lg lg:text-xl text-blue leading-normal lg:py-4 max-w-lg">
                If planning to come along, please contact the club so we have a
                rough idea of numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Wave color="white" />
    </>
  );
};

export default Practices;
