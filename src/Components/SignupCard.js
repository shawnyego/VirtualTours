import React, { useState, useContext} from 'react';
import axios from 'axios'; // for making API requests
import { AuthContext } from './AuthContext';
import { useNavigate} from 'react-router-dom';

const SignupCard = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/signup', {
        first_name: firstName,
        email: email,
        password: password,
      });

      console.log('Response:', response); // Log the entire response

      if (response.status==201) {

        setFirstName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage(null);
        console.log('Signup successful:', response.data.message); // Log success message
        login();
        navigate('/Home'); // Redirect to the Home page on successful login

      } else {
        setErrorMessage('Signup failed!');
        console.error('Signup failed:', response.data.error); // Log error message
      }
    } catch (error) {
      console.error('Signup failed:', error); // Log detailed error message
      setErrorMessage('Signup failed. Please try again later.');
    }
  };

  return (
    <div className="signup-box">
      <div className="signup-header">
        <header>Sign Up</header>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            autoComplete="on"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            autoComplete="on"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            autoComplete="off"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-submit">
          <button className="submit-btn" id="submit" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupCard;
