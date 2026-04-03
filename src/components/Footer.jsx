import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="w-full bg-dark text-white rounded-t-[3rem] lg:rounded-t-[4rem] pt-24 pb-12 px-6 lg:px-12 mt-12 relative z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="md:col-span-2 flex flex-col gap-6">
          <Logo scrolled={false} align="start" className="transform scale-110 origin-left mb-2" />
          <p className="font-mono text-sm text-white/50 max-w-sm leading-relaxed">
            Stop hiring. Start deploying. AI employees that work, learn, and execute autonomously without management overhead.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </div>
            <span className="font-mono text-[11px] text-white/60 tracking-widest font-bold">SYSTEM OPERATIONAL</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-bold text-white/80 mb-2">Platform</h4>
          <a href="#agents" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Agents</a>
          <a href="#protocol" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Protocol</a>
          <a href="#pricing" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Pricing</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-bold text-white/80 mb-2">Legal</h4>
          <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Terms</a>
          <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">Security</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
        <span className="font-mono text-xs text-white/40">© 2026 Nexus Agentics.</span>
        <span className="font-mono text-xs text-white/30 hidden md:block">DEPLOYMENT_v0.9.4</span>
      </div>
    </footer>
  );
};
