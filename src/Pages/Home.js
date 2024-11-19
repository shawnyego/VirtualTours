import React from "react";
import Hero from "../Components/Hero";
import Explore from "../Components/Explore";
import AboutUs from "../Components/AboutUs";
import WhyUs from "../Components/WhyUs";
import CallToAction from "../Components/CallToAction";


const Home = () => {
  return (
    <div className="home">
      <div className="body">
      <Hero/>
      <Explore/>
      <AboutUs />
      <WhyUs />
      <CallToAction />
      </div>
    </div>
  );
};

export default Home;
