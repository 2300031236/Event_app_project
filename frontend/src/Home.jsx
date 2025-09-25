import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const Home = () => {
    return (
        <>
            <nav className="home-navbar">
                <Link to="/" className="logo">EventFlow</Link>
                <div className="nav-links">
                    <Link to="/login" className="btn btn-secondary">Login</Link>
                    <Link to="/signup" className="btn">Sign Up</Link>
                </div>
            </nav>

            <div className="hero-container">
                <div className="hero-content">
                    <h1>Manage Your Events Seamlessly</h1>
                    <p>
                        Welcome to EventFlow, the ultimate solution for event planning and attendee management.
                        Organize, track, and execute your events with precision and ease.
                    </p>
                    <div className="button-group">
                        <Link to="/signup" className="btn">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;