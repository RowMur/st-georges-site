import React from "react";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Practices from "@/components/Practices";
import LocalLeagues from "@/components/LocalLeagues";
import Where from "@/components/Where";
import Contact from "@/components/Contact";

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
