import React from "react";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Components/Dashboard";
import Properties from "../Components/Properties";
import "../Components/Landlorddashboard.css"; // Ensure you include the styles

const Landlorddashboard = () => {
  return (
    <div className="home-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main">
        <Dashboard />
        <Properties />
      </div>
    </div>
  );
};

export default Landlorddashboard;
