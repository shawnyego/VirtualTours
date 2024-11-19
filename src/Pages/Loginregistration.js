import React, { useState } from 'react';
import './Loginpage.css'; 

const Loginregistration = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  const handleRegisterClick = () => {
    setIsLoginActive(false);
  };

  return (
    <div className="full-page">
      <div className="login-page">
        <div className="form-box">
          <div className="button-box">
            <div
              id="btn"
              style={{ left: isLoginActive ? '0px' : '110px' }}
            ></div>
            <button
              type="button"
              onClick={handleLoginClick}
              className={`toggle-btn ${isLoginActive ? 'active' : ''}`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={handleRegisterClick}
              className={`toggle-btn ${!isLoginActive ? 'active' : ''}`}
            >
              Register
            </button>
          </div>
          <form
            id="login"
            className="input-group-login"
            style={{ left: isLoginActive ? '50px' : '-400px' }}
          >
            <input type="text" className="input-field" placeholder="Email address" required />
            <input type="password" className="input-field" placeholder="Enter Password" required />
            <div className="check-box">
              <input type="checkbox" />
              <span>Remember Password</span>
            </div>
            <button type="submit" className="submit-btn">Log In</button>
          </form>
          <form
            id="register"
            className="input-group-register"
            style={{ left: isLoginActive ? '450px' : '50px' }}
          >
            <input type="text" className="input-field" placeholder="First Name" required />
            <input type="text" className="input-field" placeholder="Last Name" required />
            <input type="email" className="input-field" placeholder="Email address" required />
            <input type="password" className="input-field" placeholder="Enter Password" required />
            <input type="password" className="input-field" placeholder="Confirm Password" required />
            <div className="check-box">
              <input type="checkbox" />
              <span>I agree to the terms and conditions</span>
            </div>
            <button type="submit" className="submit-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginregistration;
