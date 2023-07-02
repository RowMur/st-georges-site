import React from "react";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";

// const callsToAction = [
//   {
//     name: "Come and Practice",
//     shortName: "Play",
//     href: "#practice",
//     icon: FaTableTennis,
//   },
//   {
//     name: "Competitive Play",
//     shortName: "Compete",
//     href: "#compete",
//     icon: FaMedal,
//   },
//   {
//     name: "Where to Find Us",
//     shortName: "Find Us",
//     href: "#find",
//     icon: FaMapMarkerAlt,
//   },
//   {
//     name: "Contact the Club",
//     shortName: "Contact",
//     href: "#contact",
//     icon: FaUser,
//   },
// ];

// const sessions = [
//   { day: "Fridays", time: "8-10pm", note: "£5 per evening, all are welcome." },
//   {
//     day: "Wednesdays",
//     time: "7:30-9:30pm",
//     note: "Out of season (summer), members only.",
//   },
// ];

// const emails = ["stgeorgesttclub@gmail.com", "info@stgeorgesclub.org.uk"];

const UpsideDownWave = () => {
  return (
    <div className="rotate-180">
      <Wave />
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-grey">
      <NavBar />
      <Wave />
      <Hero />
      <UpsideDownWave />
    </div>
  );
};

export default Home;
