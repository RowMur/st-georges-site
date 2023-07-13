import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/homeSections/Hero";
import Practices from "@/components/homeSections/Practices";
import LocalLeagues from "@/components/homeSections/LocalLeagues";
import Where from "@/components/homeSections/Where";
import Contact from "@/components/homeSections/Contact";
import Popup from "@/components/Popup";

const Home = () => {
  return (
    <div className="bg-grey">
      <Header />
      <Hero />
      <Practices />
      <LocalLeagues />
      <Where />
      <Contact />
      <Popup />
    </div>
  );
};

export default Home;
