import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import profileImg from '../assets/img/narrat.jpg';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // អនុគមន៍សម្រាប់ប្តូរស្ថានភាព បើក/បិទ
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <i
                className={`header-toggle d-xl-none bi ${isOpen ? 'bi-x' : 'bi-list'}`}
                onClick={toggleMenu}
                style={{ cursor: 'pointer', zIndex: 9999 }}
            ></i>

            <header id="header" className={`header dark-background d-flex flex-column ${isOpen ? 'header-show' : ''}`}>

                <div className="profile-img">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="img-fluid rounded-circle"
                        style={{
                            width: '120px',
                            height: '120px',
                            objectFit: 'cover',
                            border: '8px solid rgba(255, 255, 255, 0.15)'
                        }}
                    />
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
                            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
                                <i className="bi bi-house navicon"></i>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
                                <i className="bi bi-person navicon"></i> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
                                <i className="bi bi-file-earmark-text navicon"></i> Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
                                <i className="bi bi-envelope navicon"></i> Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    );
}