import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = Array.from(textRef.current.querySelectorAll('.word'));
      gsap.from(words, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power3.out'
      });
      
      gsap.to('.bg-parallax', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: 100,
        ease: 'none'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const wrapWords = (text, className = '') => {
    return text.split(' ').map((w, i) => <span key={i} className={`word inline-block mr-2 lg:mr-3 ${className}`}>{w}</span>);
  };

  return (
    <section ref={sectionRef} className="relative w-full py-48 lg:py-64 bg-dark text-white overflow-hidden z-10 flex flex-col items-center justify-center text-center px-6">
      <div 
        className="bg-parallax absolute top-[-20%] left-0 w-full h-[140%] opacity-[0.2] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518131336127-6f77ccab25b5?q=80&w=3000&auto=format&fit=crop")' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12" ref={textRef}>
        <h2 className="text-2xl md:text-4xl font-sans text-white/50 leading-relaxed font-light">
          {wrapWords("Most companies focus on:")} <br/>
          {wrapWords("managing headcount and constant hiring.")}
        </h2>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-drama italic text-white leading-tight">
          {wrapWords("We focus on:")} <br/>
          {wrapWords("autonomous", "text-accent")} {wrapWords("scale.")}
        </h2>
      </div>
    </section>
  );
};
