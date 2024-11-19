import React from "react";
import "./Landlorddashboard.css"; // Import your styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo_details">
        <i className="bx bxl-audible icon"></i>
        <div className="logo_name">Landlord Dashboard</div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="#overview" className="active">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#profile">
            <i className="bx bx-user"></i>
            <span className="link_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#analytics">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="link_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#reviews">
            <i className="bx bx-chat"></i>
            <span className="link_name">Reviews</span>
          </a>
          <span className="tooltip">Reviews</span>
        </li>
        <li>
          <a href="#properties">
            <i className="bx bx-folder"></i>
            <span className="link_name">Posted Properties</span>
          </a>
          <span className="tooltip">Posted Properties</span>
        </li>
        <li>
          <a href="#inquiries">
            <i className="bx bx-cart-alt"></i>
            <span className="link_name">Inbox</span>
          </a>
          <span className="tooltip">Inbox</span>
        </li>
        <li>
          <a href="#settings">
            <i className="bx bx-cog"></i>
            <span className="link_name">Settings</span>
          </a>
          <span className="tooltip">Settings</span>
        </li>
        <li className="profile">
          <div className="profile_details">
            <img src="profile.jpeg" alt="profile image" />
            <div className="profile_content">
              <div className="name">Anna Jhon</div>
              <div className="designation">Admin</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
