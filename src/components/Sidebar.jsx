import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <header id="header" className="header dark-background d-flex flex-column">
            <div className="profile-img">
                <img src="/src/assets/img/team1.png" alt="Profile" className="img-fluid rounded-circle" />
            </div>

            <a href="/" className="logo d-flex align-items-center justify-content-center">
                <h1 className="sitename">Rorn Narrat</h1>
            </a>

            <div className="social-links text-center">
                <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>

            <nav id="navmenu" className="navmenu">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="bi bi-house navicon"></i>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="bi bi-person navicon"></i> About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="bi bi-file-earmark-text navicon"></i> Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="bi bi-envelope navicon"></i> Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}