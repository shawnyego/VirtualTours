import React from "react";
import LoginCard from "../Components/LoginCard";
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';
import '../Components/Login.css'; 

const Login = () => {
    return (
        <>
            <div className="Login">
                <div className="log-in-section">
                    <LoginCard />
                </div>
                <div className="sign-up-section">
                    <div className="sign-up">
                        <h2>Don't have an account?</h2>
                        <p>Join us and get access to our exclusive features!</p>
                        <Link to="/SignUp" className="create" id="submit">Create One!</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
