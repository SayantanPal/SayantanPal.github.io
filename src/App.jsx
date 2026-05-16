import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ProjectsModal from './components/ProjectsModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="grain-overlay"></div>
      <Navigation onContactClick={() => setIsContactOpen(true)} />
      
      <main>
        <Hero 
          onContactClick={() => setIsContactOpen(true)} 
          onProjectsClick={() => setIsProjectsOpen(true)} 
        />
        <ImpactMetrics />
        <Competencies />
        <Experience />
        <Education />
      </main>

      <Footer />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ProjectsModal isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
    </>
  );
}

export default App;
