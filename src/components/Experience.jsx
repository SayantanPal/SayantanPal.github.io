import React from 'react';

const Experience = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface-container-low/30" id="experience">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 fade-up">
            <h2 className="font-headline-lg text-headline-lg sticky top-32">Experience Timeline</h2>
            <p className="mt-4 text-outline font-body-md">Architecting robust systems for global enterprise scale at SAP Labs.</p>
          </div>
          <div className="md:w-2/3 space-y-12">
            <div className="relative pl-8 border-l-2 border-primary/30 fade-up">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_#7c3aed]"></div>
              <div className="space-y-4">
                <span className="font-label-caps text-primary">Mar 2022 – Present</span>
                <h3 className="font-headline-md text-2xl text-on-surface">Java Spring Boot Backend Developer</h3>
                <p className="text-secondary font-medium">SAP Labs India</p>
                <div className="p-6 bg-surface-container rounded-xl border border-white/5">
                  <p className="text-on-surface-variant mb-4">Leading core backend development for mission-critical SaaS platforms.</p>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span className="material-symbols-outlined">trending_down</span>
                    <span>Reduced API response from 1min 36sec to near-zero</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/30 fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline"></div>
              <div className="space-y-4">
                <span className="font-label-caps text-outline">Aug 2020 – Mar 2022</span>
                <h3 className="font-headline-md text-2xl text-on-surface">VT Scholar</h3>
                <p className="text-secondary font-medium">SAP Labs India</p>
                <div className="p-6 bg-surface-container rounded-xl border border-white/5">
                  <p className="text-on-surface-variant mb-4">Built API automation suites and complex permissions framework for SAP Conversational AI.</p>
                  <p className="text-primary-fixed-dim text-sm italic opacity-80">"Pioneered automated testing workflows for global NLP services."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
