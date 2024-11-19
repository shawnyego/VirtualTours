// Logout.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; 

const Logout = () => {
  const { logout } = useContext(AuthContext);

  // Function to handle logout action
  const handleLogout = () => {
    //Call the logout function from AuthContext
    logout(); 
    
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
