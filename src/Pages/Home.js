import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Explore from "../Components/Explore";
import Footer from "../Components/Footer ";

const Home = () => {
  return (
    <div className="home">
      <div className="body">
      <Hero/>
      <Explore/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
