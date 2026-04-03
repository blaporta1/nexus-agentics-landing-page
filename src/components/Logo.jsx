import React from 'react';

export const Logo = ({ scrolled = false, align = 'center', className = '' }) => {
  return (
    <div className={`flex flex-col justify-center ${align === 'start' ? 'items-start' : 'items-center'} ${className}`}>
      <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 drop-shadow-md">
        {/* Antennae */}
        <path d="M 36 28 Q 38 18 45 28" stroke="#D4534A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M 64 28 Q 62 18 55 28" stroke="#D4534A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Arms */}
        <path d="M 24 50 C 10 40 10 65 24 60 Z" fill="#B33E37" />
        <path d="M 76 50 C 90 40 90 65 76 60 Z" fill="#B33E37" />
        {/* Body */}
        <circle cx="50" cy="50" r="32" fill="#D4534A" />
        {/* Legs */}
        <rect x="42" y="75" width="6" height="12" fill="#B33E37" />
        <rect x="52" y="75" width="6" height="12" fill="#B33E37" />
        {/* Eyes */}
        <circle cx="41" cy="43" r="5.5" fill="#111111" />
        <circle cx="41" cy="43" r="2.5" fill="#56CDBD" />
        <circle cx="59" cy="43" r="5.5" fill="#111111" />
        <circle cx="59" cy="43" r="2.5" fill="#56CDBD" />
      </svg>
      <div className="font-heading font-black text-[24px] tracking-tight leading-none flex gap-[8px] mb-1">
        <span style={{ color: '#D4534A' }}>NEXUS</span>
        <span style={{ color: '#56CDBD' }}>AGENTICS</span>
      </div>
      <div className={`font-sans font-bold text-[9px] tracking-[0.18em] leading-none ${scrolled ? 'text-dark/80' : 'text-white/90'}`}>
        OPENCLAW DEPLOYMENT SPECIALISTS
      </div>
    </div>
  );
};
