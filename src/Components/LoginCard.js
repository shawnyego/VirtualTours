import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from './AuthContext';


const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { login } = useContext(AuthContext);


  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Email:', email);
    console.log('Password:', password);

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      console.log('Login successful');
      login();
      setErrorMessage('');
      navigate('/Home'); // Redirect to the Home page on successful login
    } else {
      console.log('Login failed');
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="signup-box">
      <div className="signup-header">
        <header>Login</header>
      </div>
      <form onSubmit={handleSubmit}>
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-submit">
          <button className="submit-btn" id="submit" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
