import React from "react";
import Card from "./Card";
import './Explore.css';


import primaryImage from "../assets/images/primary.jpg";


const Explore = () => {
  return (
    <div className="Explore">
      <h1>Explore Properties</h1>
      <p>
        Discover a variety of properties available for sale or rent worldwide
      </p>
      <div className="card-container">
        <Card
          image={primaryImage}
          title="Residential Homes"
          description="Browse the best residential homes for sale in Kenya and worldwide"
          link="../Pages/PropertiesPage.js"
        />
      </div>
    </div>
  );
}

export default Explore;
