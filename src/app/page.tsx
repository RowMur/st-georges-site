import React from "react";
import stGeorgesLogo from "../../public/St Georges Logo.jpg";
import practiceImage from "../../public/Practice Time_003.jpg";
import Image from "next/image";
import { FaTableTennis, FaMedal, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const callsToAction = [
  {
    name: "Come and Practice",
    shortName: "Play",
    href: "#practice",
    icon: FaTableTennis,
  },
  {
    name: "Competitive Play",
    shortName: "Compete",
    href: "#compete",
    icon: FaMedal,
  },
  {
    name: "Where to Find Us",
    shortName: "Find Us",
    href: "#find",
    icon: FaMapMarkerAlt,
  },
  {
    name: "Contact the Club",
    shortName: "Contact",
    href: "#contact",
    icon: FaUser,
  },
];

const sessions = [
  { day: "Fridays", time: "8-10pm", note: "£5 per evening, all are welcome." },
  {
    day: "Wednesdays",
    time: "7:30-9:30pm",
    note: "Out of season (summer), members only.",
  },
];

const emails = ["stgeorgesttclub@gmail.com", "info@stgeorgesclub.org.uk"];

const Home = () => {
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            {/* <img src={stGeorgesLogo} /> */}
            <Image
              src={stGeorgesLogo}
              alt="St Georges Logo"
              className="h-12 w-auto"
            />
          </div>
          <div
            className="grid grid-cols-4 lg:flex divide-x lg:divide-gray-900/5"
            id="navbar-default"
          >
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
              >
                <item.icon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                <p className="hidden lg:block">{item.name}</p>
                <p className="hidden sm:block lg:hidden">{item.shortName}</p>
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main>
        <div
          className="container mx-auto my-2 p-10 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center"
          id="practice"
        >
          <div className="w-4/5 md:w-2/4 px-2 my-2">
            <h1 className="text-center font-bold text-lg">
              Club Practice Nights
            </h1>
            <p className="text-center font-light text-sm">
              We have four high quality tables available for practice. We have a
              range of abilities from beginner up to national league.
            </p>
            <div className="my-3">
              {sessions.map((session) => (
                <div className="container my-2 text-center" key={session.day}>
                  <p>
                    {session.day} {session.time}
                  </p>
                  <p className="font-light text-sm">{session.note}</p>
                </div>
              ))}
            </div>
            <p className="text-center font-light text-xs">
              You are encouraged to email{" "}
              <a
                href="mailto: stgeorgesttclub@gmail.com"
                className="text-blue-400"
              >
                stgeorgesttclub@gmail.com
              </a>{" "}
              if planning to come along, so that we have a rough idea of how
              many people to expect on an evening.
            </p>
          </div>
          <Image
            src={practiceImage}
            alt="Practice Session"
            className="h-auto w-4/5 md:w-2/4"
          />
        </div>
        <div className="container mx-auto my-2 p-10 rounded-3xl" id="compete">
          <h1 className="text-center font-bold text-lg">Local Leagues</h1>
          <p className="text-center font-light my-2">
            For the 2022-23 season, we have 5 teams playing in the{" "}
            <a
              href="https://cambridge.ttleagues.com/"
              className="text-blue-400"
            >
              Cambridge & District Table Tennis League
            </a>{" "}
            and 2 teams in the{" "}
            <a
              href="https://elydistrict.ttleagues.com/"
              className="text-blue-400"
            >
              Ely and District Table Tennis League
            </a>
            . League matches start in October, and home nights are Mondays and
            Wednesdays.
          </p>
        </div>
        <div
          className="container mx-auto my-2 p-10 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center"
          id="find"
        >
          <div className="w-4/5 md:w-2/4 px-2 my-2">
            <h1 className="text-center font-bold text-lg">Where to Find Us</h1>
            <p className="text-center font-light my-1">
              St George&apos;s Church Hall Chesterfield Road Cambridge CB4 1LN
            </p>
            <p className="text-center font-light text-xs">
              There are 8 parking spaces available in the car park,
              alternatively there is plenty of space to park on the road.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.061692689269!2d0.13987197758941497!3d52.22409695809388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d870f83a147275%3A0xd83b666dae161c6f!2sSt%20Georges%20Table%20tennis%20club!5e0!3m2!1sen!2suk!4v1687599768637!5m2!1sen!2suk"
            // width="600"
            height="450"
            className="w-4/5 md:w-2/4"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        <div className="container mx-auto my-2 p-10 rounded-3xl" id="contact">
          <h1 className="text-center font-bold text-lg">Contact the Club</h1>
          {emails.map((email) => (
            <div
              key={email}
              className="container flex justify-center items-center"
            >
              <MdOutlineEmail />
              <p>{email}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
