import React from 'react';

const Competencies = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto" id="competencies">
      <div className="text-center mb-16 fade-up">
        <h2 className="font-headline-lg text-headline-lg mb-4">Core Competencies</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-2xl fade-up" style={{ transitionDelay: '100ms' }}>
          <span className="material-symbols-outlined text-primary text-4xl mb-6">cloud_done</span>
          <h3 className="font-headline-md text-2xl mb-6">Cloud Platform Engineering</h3>
          <ul className="space-y-4 text-on-surface-variant font-body-md">
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> SAP BTP Neo & CF Environments</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> SaaS Registry & Multi-tenant Architecture</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Automated CI/CD Pipeline Design</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Infrastructure as Code (IaC)</li>
          </ul>
        </div>
        <div className="glass-card p-8 rounded-2xl fade-up" style={{ transitionDelay: '200ms' }}>
          <span className="material-symbols-outlined text-secondary text-4xl mb-6">settings_input_component</span>
          <h3 className="font-headline-md text-2xl mb-6">Backend & Microservices</h3>
          <ul className="space-y-4 text-on-surface-variant font-body-md">
            <li className="flex items-start gap-3"><span className="text-secondary mt-1">▹</span> Java Spring Boot Ecosystem</li>
            <li className="flex items-start gap-3"><span className="text-secondary mt-1">▹</span> REST & oData Enterprise APIs</li>
            <li className="flex items-start gap-3"><span className="text-secondary mt-1">▹</span> HANA DB Performance Tuning</li>
            <li className="flex items-start gap-3"><span className="text-secondary mt-1">▹</span> Type-safe SQL with JOOQ</li>
          </ul>
        </div>
        <div className="glass-card p-8 rounded-2xl fade-up" style={{ transitionDelay: '300ms' }}>
          <span className="material-symbols-outlined text-primary text-4xl mb-6">analytics</span>
          <h3 className="font-headline-md text-2xl mb-6">Observability & AI</h3>
          <ul className="space-y-4 text-on-surface-variant font-body-md">
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Dynatrace, Kibana & Grafana Stack</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> AI-assisted Dev with LLMs</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Chaos Engineering Principles</li>
            <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Real-time Monitoring & Alerting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
