import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// នាំចូលរូបភាពទម្រង់មុខ (Profile Image) តាមរយៈវិធីសាស្ត្រ import
import profileImg from '../assets/img/my-profile-img.jpg';

export default function Sidebar() {
    // State សម្រាប់គ្រប់គ្រងការ បើក/បិទ ម៉ឺនុយនៅលើទូរស័ព្ទដៃ
    const [isOpen, setIsOpen] = useState(false);

    // អនុគមន៍សម្រាប់ប្តូរស្ថានភាព បើក/បិទ
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* ប៊ូតុង Toggle (សញ្ញា ☰ ឬ X) បង្ហាញខ្លួនតែនៅលើអេក្រង់តូច d-xl-none เท่านั้น[cite: 1] */}
            <i
                className={`header-toggle d-xl-none bi ${isOpen ? 'bi-x' : 'bi-list'}`}
                onClick={toggleMenu}
                style={{ cursor: 'pointer', zIndex: 9999 }}
            ></i>

            {/* បន្ថែម class "header-show" នៅពេលដែល isOpen ស្មើ true ដើម្បីបង្ហាញ Sidebar នៅលើទូរស័ព្ទ[cite: 4, 5] */}
            <header id="header" className={`header dark-background d-flex flex-column ${isOpen ? 'header-show' : ''}`}>

                {/* ផ្នែករូបថតទម្រង់មុខ (Profile) */}
                <div className="profile-img">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="img-fluid rounded-circle"
                        style={{
                            width: '120px',
                            height: '120px',
                            objectFit: 'cover', // ការពារមិនឱ្យរូបថតរួមសំប៉ែត ឬខូចទ្រង់ទ្រាយមុខ
                            border: '8px solid rgba(255, 255, 255, 0.15)'
                        }}
                    />
                </div>

                {/* ផ្នែកឈ្មោះម្ចាស់ Portfolio */}
                <a href="/" className="logo d-flex align-items-center justify-content-center">
                    <h1 className="sitename">Rorn Narrat</h1>
                </a>

                {/* ផ្នែកតំណភ្ជាប់បណ្តាញសង្គម (Social Links) */}
                <div className="social-links text-center">
                    <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

                {/* ផ្នែកបញ្ជីម៉ឺនុយធ្វើដំណើរ (Navigation Menu) */}
                <nav id="navmenu" className="navmenu">
                    <ul>
                        {/* រាល់ពេលចុចលើ NavLink នីមួយៗ យើងហៅ onClick={() => setIsOpen(false)} ដើម្បីឱ្យវារួញបិទទៅវិញអូតូនៅលើទូរស័ព្ទ[cite: 5] */}
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