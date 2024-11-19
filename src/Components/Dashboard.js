import React from "react";
import "./Landlorddashboard.css";

const Dashboard = () => {
  return (
    <section id="overview">
      <h2>Dashboard Overview</h2>
      <div className="cards">
        <div className="card">
          <h3>Total Properties</h3>
          <p id="total-properties">8</p>
        </div>
        <div className="card">
          <h3>Total Messages</h3>
          <p id="total-messages">15</p>
        </div>
        <div className="card">
          <h3>Views Per Property</h3>
          <p id="avg-views">120</p>
        </div>
        <div className="card">
          <h3>Pending Approvals</h3>
          <p id="pending-approvals">2</p>
        </div>
      </div>
      <div className="quick-actions">
        <button className="btn primary">Add New Listing</button>
        <button className="btn secondary">Edit Existing Listing</button>
        <button className="btn secondary">View Messages</button>
      </div>
    </section>
  );
};

export default Dashboard;
