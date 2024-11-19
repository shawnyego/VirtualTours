// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import PropertiesPage from "./Pages/PropertiesPage";  // Updated component name
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import PropertyDetails from "./Pages/PropertyDetails"; // Updated component name
import { AuthProvider } from './Components/AuthContext';
import Footer from "./Components/Footer.js";
import ContactUs from "./Pages/ContactUs.js";
import PropertyCard from "./Components/PropertyCard.js";
import Loginregistration from "./Pages/Loginregistration.js";
import Landlorddashboard from "./Pages/Landlorddashboard.js";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Properties" element={<PropertiesPage />} />
            
            <Route path="/Login" element={<Loginregistration />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/property/:name" element={<PropertyCard />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            {/* <Route path="/Landlorddashboard" element={<Landlorddashboard />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;