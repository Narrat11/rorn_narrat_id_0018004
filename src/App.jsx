import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos'; // នាំចូលបណ្ណាល័យ AOS
import 'aos/dist/aos.css'; // នាំចូល AOS CSS 

// នាំចូល Sidebar និង Pages
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  useEffect(() => {
    // ហៅឱ្យ AOS ដំណើរការនៅពេល Componentលោតឡើង[cite: 5, 9]
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="index-page">

      {/* បង្ហាញ Sidebar នៅខាងឆ្វេង */}
      <Sidebar />

      {/* ផ្ទុកមាតិកានៅខាងស្តាំ */}
      <main id="main" className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </div>
  );
}