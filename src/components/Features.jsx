import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Sales Agent', desc: 'Outbound sequences, CRM updates, booking.' },
    { id: 2, title: 'Research Agent', desc: 'Market analysis, lead enrichment.' },
    { id: 3, title: 'Ops Agent', desc: 'Task routing, SOP execution.' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="panel h-80 w-full flex flex-col p-8">
      <h3 className="font-sans font-bold text-xl mb-2">Dedicated Agent Roles</h3>
      <p className="text-sm opacity-70 mb-8">Deploy pre-configured specialists for exact workflows.</p>
      <div className="relative flex-1 flex justify-center items-center">
        {cards.map((c, i) => (
          <div 
            key={c.id}
            className="absolute w-full max-w-[200px] p-4 bg-background border border-dark/10 rounded-2xl shadow-sm transition-all duration-[800ms]"
            style={{
              transform: `translateY(${i * 15 - 15}px) scale(${1 - i * 0.05})`,
              zIndex: 3 - i,
              opacity: 1 - i * 0.3,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="font-mono text-xs font-bold text-accent mb-1">0{c.id}</div>
            <div className="font-sans font-bold text-sm">{c.title}</div>
            <div className="text-xs opacity-70 mt-1">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "SYSTEM ONLINE. Agents scaling outbound volume. CRM synced. Optimization routine active. Execution metrics logging...";
  const index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.substring(0, index.current));
      index.current++;
      if (index.current > fullText.length + 15) {
        index.current = 0; // restart after delay
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="panel h-80 w-full flex flex-col p-8 bg-dark text-white">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        <span className="font-mono text-xs text-accent">LIVE FEED</span>
      </div>
      <h3 className="font-sans font-bold text-xl mb-2 text-primary">Ongoing Optimization</h3>
      <p className="text-sm text-primary/70 mb-4">24/7 autonomous execution and learning.</p>
      <div className="flex-1 bg-black/50 rounded-xl p-4 border border-white/10 font-mono text-xs text-primary/80 leading-relaxed overflow-hidden">
        {text}<span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse"></span>
      </div>
    </div>
  );
};

const CursorProtocolScheduler = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(null);
  const [pressed, setPressed] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.set(cursorRef.current, { x: 10, y: 120, opacity: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.5 })
        // Move to Wednesday (index 3)
        .to(cursorRef.current, { x: 125, y: 20, duration: 1, ease: 'power2.inOut' })
        // Click
        .add(() => setPressed(true))
        .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .add(() => {
          setPressed(false);
          setActiveDay(3);
        })
        // Move to save
        .to(cursorRef.current, { x: 200, y: 80, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .add(() => setPressed(true))
        .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .add(() => setPressed(false))
        .to(cursorRef.current, { opacity: 0, duration: 0.5 })
        .add(() => setActiveDay(null));
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="panel h-80 w-full flex flex-col p-8">
      <h3 className="font-sans font-bold text-xl mb-2">Turnkey Deployment</h3>
      <p className="text-sm opacity-70 mb-6">Fully configured and live in 5 days.</p>
      
      <div className="relative flex-1 bg-dark/5 rounded-xl border border-dark/10 p-4 pt-8">
        <div className="flex justify-between w-full mb-6 relative z-10">
          {days.map((d, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono transition-colors duration-300 ${activeDay === i ? 'bg-accent text-white' : 'bg-background text-dark'}`}
            >
              {d}
            </div>
          ))}
        </div>
        
        <div className="w-full flex justify-end relative z-10">
          <button className={`bg-dark text-white px-4 py-2 text-xs font-mono rounded-full transition-transform ${pressed && activeDay === 3 ? 'scale-95' : ''}`}>SAVE CONFIG</button>
        </div>

        {/* Cursor SVG */}
        <div ref={cursorRef} className="absolute top-0 left-0 z-20 pointer-events-none" style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 3L18 11.5L11 13L9 21L4.5 3Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section id="features" className="w-full py-32 px-6 lg:px-12 max-w-7xl mx-auto z-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorProtocolScheduler />
      </div>
    </section>
  );
};
