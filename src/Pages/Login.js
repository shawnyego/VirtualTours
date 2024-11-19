import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../Components/Login.css'; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Replace with your backend API endpoint
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password
            });

            if (response.data.success) {
                // Handle successful login (e.g., redirect, store token, etc.)
                alert("Login successful!");
                // Example: Store JWT in localStorage
                localStorage.setItem("token", response.data.token);
                window.location.href = "/dashboard";
            } else {
                setError(response.data.message || "Invalid credentials");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Login">
            <div className="log-in-section">
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Login</h2>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" id="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
            <div className="sign-up-section">
                <div className="sign-up">
                    <h2>Don't have an account?</h2>
                    <p>Join us and get access to our exclusive features!</p>
                    <Link to="/SignUp" className="create" id="submit">Create One!</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
