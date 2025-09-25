import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from './api';
import './Styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, password });
            localStorage.setItem('userName', response.data.name);
            navigate('/dashboard');
        } catch (error) {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="auth-layout">
            <nav className="auth-navbar">
                <Link to="/" className="logo">EventFlow</Link>
            </nav>
            <form className="form-card" onSubmit={handleSubmit}>
                <h2>Welcome Back!</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;