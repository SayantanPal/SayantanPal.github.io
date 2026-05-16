import React from 'react';

const ImpactMetrics = () => {
  return (
    <section className="py-16 bg-surface-container-lowest relative overflow-hidden border-y border-white/5" id="impact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 fade-up">
            <p className="font-display-lg text-4xl font-bold text-primary">4100→2</p>
            <p className="font-label-caps text-label-caps text-outline">API Calls Optimized</p>
          </div>
          <div className="space-y-2 fade-up" style={{ transitionDelay: '100ms' }}>
            <p className="font-display-lg text-4xl font-bold text-secondary">70%</p>
            <p className="font-label-caps text-label-caps text-outline">Scalability Increase</p>
          </div>
          <div className="space-y-2 fade-up" style={{ transitionDelay: '200ms' }}>
            <p className="font-display-lg text-4xl font-bold text-primary">99.99%</p>
            <p className="font-label-caps text-label-caps text-outline">Uptime Achieved</p>
          </div>
          <div className="space-y-2 fade-up" style={{ transitionDelay: '300ms' }}>
            <p className="font-display-lg text-4xl font-bold text-secondary">€47K/mo</p>
            <p className="font-label-caps text-label-caps text-outline">Cost Savings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
