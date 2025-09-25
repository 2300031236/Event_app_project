import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles.css';

// --- SVG ICONS ---
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M4 11H2V4h2zM8 11H6V7h2zm4 0h-2V2h2z" /><path d="M12.5 1h-11a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M12 13H1.5V2H12z" /></svg>;
const EventsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" /></svg>;
const AttendeesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.49 5.49 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" /></svg>;
const ReportsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" /><path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" /></svg>;

const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const mockEvents = [
        { title: "Annual Tech Summit 2025", date: "October 15, 2025", status: "Live", statusClass: "live" },
        { title: "Marketing Strategy Workshop", date: "November 02, 2025", status: "Upcoming", statusClass: "upcoming" }
    ];

    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (name) {
            setUserName(name);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userName');
        navigate('/');
    };

    return (
        <div className="app-layout">
            <aside className="sidebar">
                <Link to="/dashboard" className="logo">EventFlow</Link>
                <ul className="sidebar-nav">
                    <li><a href="#" className="active"><DashboardIcon /> Dashboard</a></li>
                    <li><a href="#"><EventsIcon /> Events</a></li>
                    <li><a href="#"><AttendeesIcon /> Attendees</a></li>
                    <li><a href="#"><ReportsIcon /> Reports</a></li>
                </ul>
            </aside>

            <main className="main-content">
                <header className="dashboard-header">
                    <h1>Welcome, {userName}!</h1>
                    <button onClick={handleLogout} className="btn">
                        <LogoutIcon />
                        Logout
                    </button>
                </header>

                <section className="metric-cards">
                    <div className="metric-card">
                        <div className="icon green"><EventsIcon /></div>
                        <div>
                            <div className="value">2</div>
                            <div className="label">Live Events</div>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="icon orange"><EventsIcon /></div>
                        <div>
                            <div className="value">5</div>
                            <div className="label">Upcoming Events</div>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="icon blue"><AttendeesIcon /></div>
                        <div>
                            <div className="value">1,284</div>
                            <div className="label">Total Attendees</div>
                        </div>
                    </div>
                </section>

                <section className="events-section">
                    <h2>Current Events</h2>
                    <div className="event-cards-container">
                        {mockEvents.map((event, index) => (
                            <div key={index} className={`event-card ${event.statusClass}`}>
                                <div className="event-card-content">
                                    <span className={`status ${event.statusClass}`}>{event.status}</span>
                                    <h3>{event.title}</h3>
                                    <p className="date">{event.date}</p>
                                </div>
                                <div className="actions">
                                    <button className="btn">Manage</button>
                                    <button className="btn btn-secondary">View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;