import React from "react";
import "./Landlorddashboard.css";

const Properties = () => {
  return (
    <section id="properties">
      <h2>Posted Properties</h2>
      <div className="property-cards">
        <div className="property-card">
          <h3>Cozy Apartment</h3>
          <p><strong>Location:</strong> Downtown</p>
          <p><strong>Rent:</strong> $1200/month</p>
          <button className="btn secondary">Edit</button>
          <button className="btn danger">Delete</button>
        </div>
        <div className="property-card">
          <h3>Luxury Villa</h3>
          <p><strong>Location:</strong> Suburbs</p>
          <p><strong>Rent:</strong> $3500/month</p>
          <button className="btn secondary">Edit</button>
          <button className="btn danger">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
