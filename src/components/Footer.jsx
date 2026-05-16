import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
        </div>
        <div className="flex gap-8">
          <a className="text-outline hover:text-primary transition-all duration-300 transform hover:scale-110" href="https://linkedin.com/in/sayantan-pal-developer" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-outline hover:text-primary transition-all duration-300 transform hover:scale-110" href="https://github.com/SayantanPal" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-outline hover:text-primary transition-all duration-300 transform hover:scale-110" href="mailto:sayantan.pal.jobs@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
