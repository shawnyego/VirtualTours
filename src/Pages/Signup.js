import React from "react";
import SignupCard from "../Components/SignupCard";
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';
import '../Components/Signup.css'; // Import the CSS file

const Signup = () => {
    return (
        <>
            <div className="Signup">
                <div className="login-section">
                    <div className="login">
                        <h2>Already have an account?</h2>
                        <p>Login to access our features!</p>
                        <Link to="/Login" className="create" id="submit">Login!</Link>
                    </div>
                </div>
                <div className="Signup-section">
                    <SignupCard />
                </div>
            </div>
        </>
    );
}

export default Signup;
