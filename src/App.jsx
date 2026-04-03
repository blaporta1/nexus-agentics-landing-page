import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Logo } from './components/Logo';

gsap.registerPlugin(ScrollTrigger);

const Button = ({ children, className = '', primary = false, ...props }) => {
  return (
    <button 
      className={`magnetic-btn ${primary ? 'magnetic-btn-primary' : 'bg-transparent text-current border border-current px-6 py-3'} ${className}`} 
      {...props}
    >
      {primary && <div className="hover-bg"></div>}
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
};

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div 
        ref={navRef}
        className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 w-full max-w-5xl ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border border-dark/10 text-dark shadow-lg' 
            : 'bg-transparent text-white border border-transparent'
        }`}
      >
        <Logo scrolled={scrolled} align="start" className="transform scale-90 origin-left" />
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide font-medium">
          <a href="#agents" className="interactive-lift">Agents</a>
          <a href="#protocol" className="interactive-lift">Protocol</a>
          <a href="#pricing" className="interactive-lift">Pricing</a>
        </div>
        <Button primary className="text-sm px-6 py-2.5">
          Deploy Agent
        </Button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from(btnRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100dvh] w-full flex items-end pb-24 overflow-hidden">
      {/* Background Image & Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888049684-28b975af48ea?q=80&w=3000&auto=format&fit=crop")' }}
      />
      {/* Heavy gradient from black to transparent */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start justify-end h-full">
        <div ref={textRef} className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2">
          <h1 className="flex flex-col text-white">
            <span className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
              Command the <br/>
            </span>
            <span className="font-drama italic text-7xl md:text-8xl lg:text-9xl leading-none mt-2 text-primary">
              Workforce.
            </span>
          </h1>
          <p className="mt-8 text-white/80 font-mono text-sm md:text-base max-w-md leading-relaxed">
            Stop hiring. Start deploying. Nexus Agentics gives your business AI employees that show up every day, never call in sick, and scale instantly.
          </p>
        </div>
        
        <div ref={btnRef} className="mt-12">
          <Button primary className="text-lg">
            Initialize Deployment <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="relative w-full bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;
