import React from "react";
import NavBar from "@/components/Navbar";
import Hero from "@/components/homeSections/Hero";
import Practices from "@/components/homeSections/Practices";
import LocalLeagues from "@/components/homeSections/LocalLeagues";
import Where from "@/components/homeSections/Where";
import Contact from "@/components/homeSections/Contact";

const Home = () => {
  return (
    <div className="bg-grey">
      <NavBar />
      <Hero />
      <Practices />
      <LocalLeagues />
      <Where />
      <Contact />
    </div>
  );
};

export default Home;
