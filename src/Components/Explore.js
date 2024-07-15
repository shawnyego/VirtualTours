import React from "react";
import './Explore.css';
import Card from "./Card";

// Import images
import primaryImage from "../assets/images/primary.jpg";
import highSchoolImage from "../assets/images/Dummy School.avif";
import higherEducationImage from "../assets/images/University.jpg";

const Explore = () => {
  return (
    <div className="Explore">
      <h1>Explore</h1>
      <p>
        Explore various schools in Kenya and worldwide
      </p>
      <div className="card-container">
        <Card
          image={primaryImage}
          title="Primary Schools"
          description="Find the best primary schools in Kenya and beyond"
          link="/primary-schools"
        />
        <Card
          image={highSchoolImage}
          title="High Schools"
          description="Discover top high schools for your education journey"
          link="/high-schools"
        />
        <Card
          image={higherEducationImage}
          title="Higher Education"
          description="Explore universities and colleges worldwide"
          link="/higher-education"
        />
        {/* Add more cards for other categories as needed */}
      </div>
    </div>
  );
}

export default Explore;
