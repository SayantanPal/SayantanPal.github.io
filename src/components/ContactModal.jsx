import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative glass-card p-10 rounded-3xl max-w-lg w-full transform transition-all duration-500 scale-100 opacity-100">
        <div className="flex justify-between items-start mb-8">
          <h2 className="font-headline-md text-3xl">Let's Connect</h2>
          <button className="text-outline hover:text-on-surface" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-white/5 hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary">mail</span>
            <div>
              <p className="text-xs text-outline uppercase font-bold">Email</p>
              <p className="text-on-surface select-all">sayantan.pal.jobs@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-white/5 hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary">call</span>
            <div>
              <p className="text-xs text-outline uppercase font-bold">Phone</p>
              <p className="text-on-surface select-all">+91-7003565208</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-white/5 hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary">link</span>
            <div>
              <p className="text-xs text-outline uppercase font-bold">LinkedIn</p>
              <p className="text-on-surface">in/sayantan-pal-developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
