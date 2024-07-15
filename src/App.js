// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import PrimarySchool from "./Pages/PrimarySchool";
import HighSchool from "./Pages/HighSchool";
import Universities from "./Pages/Universities";
import Colleges from "./Pages/Colleges";
import TVETS from "./Pages/TVETS";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import { AuthProvider } from './Components/AuthContext';

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Primary-Schools" element={<PrimarySchool />} />
          <Route path="/High-Schools" element={<HighSchool />} />
          <Route path="/Universities" element={<Universities />} />
          <Route path="/Colleges" element={<Colleges />} />
          <Route path="/TVETS" element={<TVETS />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<Signup/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
