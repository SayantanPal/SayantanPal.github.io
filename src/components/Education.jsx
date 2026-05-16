import React from 'react';

const Education = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto">
      <div className="mb-24 fade-up" id="education">
        <h3 className="font-label-caps text-label-caps text-outline mb-8 text-center">Academic Excellence</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-4 px-6 py-4 glass-card rounded-full">
            <span className="material-symbols-outlined text-primary">school</span>
            <div>
              <p className="font-bold text-on-surface">BITS Pilani</p>
              <p className="text-xs text-outline">M.Tech Software Engineering (8.06/10)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 glass-card rounded-full">
            <span className="material-symbols-outlined text-secondary">school</span>
            <div>
              <p className="font-bold text-on-surface">BPPIMT</p>
              <p className="text-xs text-outline">B.Tech CSE (9.10/10)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-up" id="stack">
        <h3 className="font-label-caps text-label-caps text-outline mb-12 text-center uppercase tracking-widest">Technological Arsenal</h3>
        <div className="tech-stack-scroll overflow-hidden py-10 relative">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center opacity-50 hover:opacity-100 transition-opacity">
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Java</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Spring Boot</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Python</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">SQL</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">SAP BTP</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Cloud Foundry</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">HANA DB</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Kubernetes</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Docker</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Dynatrace</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Kibana</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Grafana</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Git</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Jenkins</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Postman</span>
            {/* Duplicate for seamless marquee */}
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Java</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Spring Boot</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">Python</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">SQL</span>
            <span className="font-headline-md text-2xl hover:text-primary transition-colors">SAP BTP</span>
            <span className="font-headline-md text-2xl hover:text-secondary transition-colors">Cloud Foundry</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
