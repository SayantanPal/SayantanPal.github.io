import React, { useEffect, useState } from 'react';

const Navigation = ({ onContactClick }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (id) => 
    `font-body-md text-body-md transition-colors duration-300 ${activeSection === id ? 'nav-link-active' : 'text-on-surface-variant hover:text-primary'}`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-[60px] border-b border-white/10 shadow-sm">
      <div className="flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto">
        <span className="font-headline-md text-headline-md font-bold text-on-surface">Sayantan Pal</span>
        <div className="hidden md:flex space-x-8 items-center">
          <a className={navClass('competencies')} href="#competencies">Competencies</a>
          <a className={navClass('impact')} href="#impact">Impact</a>
          <a className={navClass('experience')} href="#experience">Experience</a>
          <a className={navClass('education')} href="#education">Education</a>
          <a className={navClass('stack')} href="#stack">Stack</a>
          <button 
            className="px-6 py-2 bg-primary-container text-on-primary-container rounded-full font-bold hover:scale-105 transition-all shimmer-btn" 
            onClick={onContactClick}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
