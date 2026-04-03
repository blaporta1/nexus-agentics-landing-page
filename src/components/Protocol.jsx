import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: '01', title: 'Audit & Map', desc: 'Identify bottlenecks. Standardize inputs. Define the autonomous vector.', bg: 'bg-[#F5F3EE]' },
  { id: '02', title: 'Configure & Bind', desc: 'Integrate existing tools. Bind logical chains. Initialize prompt layer.', bg: 'bg-[#EDEDE5]' },
  { id: '03', title: 'Deploy & Monitor', desc: 'Activate agents. Track output efficiency. Optimize live workflows.', bg: 'bg-[#E3E0D6]' }
];

export const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: containerRef.current,
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: gsap.timeline()
            .to(card, { scale: 0.9, opacity: 0.5, filter: 'blur(10px)', ease: 'none' }, 0)
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-background" id="protocol">
      {steps.map((step, i) => (
        <div 
          key={i} 
          className={`protocol-card relative h-[100dvh] w-full flex items-center justify-center p-6 lg:p-12 ${step.bg}`}
          style={{ zIndex: i }}
        >
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col gap-6 lg:gap-8">
              <span className="font-mono text-3xl md:text-5xl lg:text-7xl text-accent font-bold opacity-80">{step.id}</span>
              <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-dark">{step.title}</h2>
              <p className="font-sans text-xl md:text-2xl lg:text-3xl text-dark/70 max-w-md font-medium leading-normal">{step.desc}</p>
            </div>
            <div className="w-full aspect-square panel flex items-center justify-center relative">
              {/* Background abstract texture/color for panel */}
              {i === 0 && (
                <div className="relative w-48 h-48 border-[3px] border-dark/20 rounded-full animate-spin [animation-duration:15s]">
                  <div className="absolute top-0 left-1/2 w-8 h-8 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(230,59,46,0.5)]"></div>
                </div>
              )}
              {i === 1 && (
                <div className="w-full h-full flex flex-col justify-center gap-8 px-12">
                  <div className="w-full h-2 bg-dark/10 relative overflow-hidden rounded-full"><div className="absolute top-0 left-0 h-full w-1/4 bg-accent rounded-full animate-[slide_2s_ease-in-out_infinite]"></div></div>
                  <div className="w-3/4 h-2 bg-dark/10 relative overflow-hidden rounded-full"><div className="absolute top-0 left-0 h-full w-1/3 bg-dark rounded-full animate-[slide_3.5s_ease-in-out_infinite_reverse]"></div></div>
                  <div className="w-5/6 h-2 bg-dark/10 relative overflow-hidden rounded-full"><div className="absolute top-0 left-0 h-full w-1/2 bg-accent rounded-full animate-[slide_2.5s_ease-in-out_infinite]"></div></div>
                </div>
              )}
              {i === 2 && (
                <svg width="80%" height="200" viewBox="0 0 400 200" className="stroke-accent stroke-[4px] fill-none stroke-dasharray-[1000] stroke-dashoffset-[1000] animate-[dash_4s_ease-in-out_infinite]">
                  <path d="M0,100 L120,100 L150,20 L180,180 L210,100 L400,100" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }
        @keyframes dash { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
};
