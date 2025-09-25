import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from './api';
import './Styles.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/register', { name, email, password });
            alert('Signup successful! Please login.');
            navigate('/login');
        } catch (error) {
            alert('Error during signup: ' + (error.response?.data || error.message));
        }
    };

    return (
        <div className="auth-layout">
            <nav className="auth-navbar">
                <Link to="/" className="logo">EventFlow</Link>
            </nav>
            <form className="form-card" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;