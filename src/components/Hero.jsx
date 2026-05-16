import React from 'react';

const Hero = ({ onContactClick, onProjectsClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-margin-mobile md:px-gutter relative overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
      </div>
      <div className="max-w-container-max w-full z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 fade-up">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-label-caps text-label-caps">
            AI Augmented <span style={{ letterSpacing: '1.2px' }}>Cloud</span> Software Development Engineer
          </div>
          <h1 className="font-display-lg text-display-lg leading-tight">
            Sayantan <span className="text-primary">Pal</span>
          </h1>
          <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl">
            Cloud AI SDE | Distributed Systems | Platform Engineering
          </p>
          <p className="font-body-lg text-on-surface/80 max-w-2xl leading-relaxed">
            Engineered cloud-native microservices at scale — optimizing SaaS platforms serving 11+ country teams with measurable performance gains.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              className="px-10 py-4 bg-primary-container text-on-primary-container rounded-lg font-bold text-lg shimmer-btn hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all" 
              onClick={onContactClick}
            >
              Get In Touch
            </button>
            <button 
              className="px-10 py-4 border border-outline/30 hover:border-primary/50 transition-colors rounded-lg font-bold text-lg glass-card" 
              onClick={onProjectsClick}
            >
              View Projects
            </button>
          </div>
        </div>
        <div className="flex-1 hidden lg:block fade-up" style={{ transitionDelay: '200ms' }}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
            <img 
              alt="Cyberpunk Technical Illustration" 
              className="relative rounded-2xl border border-white/10 glass-card object-cover h-[500px] w-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBClCD7CaxZJvI1EFUokm3Bq6wXjH6PV1MSfCWs31pHYEN59kiXLLSPXedwB36DU8JOAsfwU3ROHsa3I66GnHT8yWRs2qdd8LF5M0u3eAjzaFvOk8RsZO0qp5OwHLO6g97fwimhoZPQ3xvVUR6Ul0CzuvEJuIWPSjLULOPTox2KGhp5Rw2zq8cp1_iwKA7nN1Y1lVqzzeA8Lkx-IEalE_sfi_eJJsG-YEOBkZI3d-dQlVYTBHIjuaJUtUsN1ZxJJad1zZQGzjOUa0M" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
