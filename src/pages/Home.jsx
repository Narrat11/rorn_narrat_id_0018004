import React, { useEffect } from 'react';
import Typed from 'typed.js';
import heroBg from '../assets/img/narrat.jpg';

export default function Home() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* ប្រើប្រាស់រូបភាពពីfolder assets/img */}
      <img src={heroBg} alt="Hero Background" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }} data-aos="fade-up" data-aos-delay="100">
        <h2>Rorn Narrat</h2>
        <p>I'm <span className="typed" style={{ letterSpacing: '1px', borderBottom: '2px solid #149ddd' }}></span></p>
      </div>
    </section>
  );
}