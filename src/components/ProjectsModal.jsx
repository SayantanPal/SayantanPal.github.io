import React from 'react';

const ProjectsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative glass-card p-10 rounded-3xl max-w-2xl w-full transform transition-all duration-500 scale-100 opacity-100 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-8">
          <h2 className="font-headline-md text-3xl">Projects</h2>
          <button className="text-outline hover:text-on-surface transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-surface-container border border-white/5 hover:border-primary/50 transition-all duration-300">
            <h3 className="font-headline-md text-xl text-primary mb-2">SAP Innovator's Challenge Hackathon 2k21 (Farmer's Friend)</h3>
            <div className="flex flex-wrap gap-2 text-sm font-label-caps text-outline mb-4">
              <span>SAP Labs India Pvt Ltd</span>
              <span>•</span>
              <span>Apr 2021 - Oct 2021</span>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed">Developed ML code and integrated end-to-end 3 platforms: SAPUI5, SAP Business Intelligence (BI) Platform, SAP Analytics Cloud (SAC) Platform.</p>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container border border-white/5 hover:border-primary/50 transition-all duration-300">
            <h3 className="font-headline-md text-xl text-primary mb-2">InnoVision Hackathon 2k21 (Validation of Warranty Claims)</h3>
            <div className="flex flex-wrap gap-2 text-sm font-label-caps text-outline mb-4">
              <span>SAP Labs India Pvt Ltd</span>
              <span>•</span>
              <span>Apr 2021 - May 2021</span>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed">Developed and deployed mtar app of SAP Cloud Platform Business Rules to create domain and business rules to be deployed on on-prem existing ABAB application using Cloud connector service and explored CPBR services.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
