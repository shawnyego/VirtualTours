import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleContactClick = () => {
    // Scroll to the footer section
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <p className="black">
        Virtual<span className="green">Tours</span>
      </p>
      <ul>
        {/* <li>
          <NavLink to="/Landlorddashboard">Dashboard</NavLink>
          </li> */}
      <li>
      
      <NavLink to="/Home">Home</NavLink> 
      </li>
      <li>
      <NavLink to="/Properties">Properties</NavLink>
      </li>
      <li>
      <NavLink to="/ContactUs" onClick={handleContactClick}>Contact Us</NavLink>
      </li>

        <li>
          {isLoggedIn ? (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <a href="/Login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
