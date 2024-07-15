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

  return (
    <nav className="navbar">
      <p className="black">
        Edu<span className="green">Search</span>
      </p>
      <ul>
        <li>
          <NavLink exact to="/Home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Primary-Schools" activeClassName="active">
            Primary Schools
          </NavLink>
        </li>
        <li>
          <NavLink to="/High-Schools" activeClassName="active">
            High Schools
          </NavLink>
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          <span>Higher Education</span>
          <div className={dropdownOpen ? 'dropdown-content open' : 'dropdown-content'}>
            <NavLink to="/Universities">Universities</NavLink>
            <NavLink to="/Colleges">Colleges</NavLink>
            <NavLink to="/TVETS">TVETs</NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/about-us" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          {isLoggedIn ? (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <NavLink to="/Login" activeClassName="active">
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
