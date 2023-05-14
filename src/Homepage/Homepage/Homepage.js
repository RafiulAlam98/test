import React from "react";
import Explore from "../Explore/Explore/Explore";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <hr />
      <Hero />
      <Explore />
    </React.Fragment>
  );
};

export default Homepage;
