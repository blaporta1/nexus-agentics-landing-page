import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Core Agent', price: '$1,200', period: '/mo', features: ['1 Autonomous Agent', 'Standard Integrations', 'Email Support', 'Monthly Summary'], cta: 'Deploy Basic', highlight: false },
  { name: 'Growth', price: '$2,800', period: '/mo', features: ['3 Autonomous Agents', 'Advanced Integrations', 'Priority Support', 'Bi-weekly Report'], cta: 'Initialize Scaling', highlight: false },
  { name: 'Enterprise Scale', price: '$2,950', period: '/mo', features: ['Unlimited Agents', 'Unlimited Integrations', 'Dedicated CSM', 'Real-time Dashboard'], cta: 'Initialize Unlimited', highlight: true },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-32 px-6 lg:px-12 bg-background z-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6 text-center tracking-tight">Protocol Tiers</h2>
        <p className="font-mono text-dark/70 max-w-xl text-center mb-20 text-sm md:text-base">Select the autonomous capacity required to hit your scaling metrics. No hidden execution fees.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {plans.map((plan, i) => (
            <div key={i} className={`panel flex flex-col p-8 transition-transform duration-500 hover:-translate-y-2 ${plan.highlight ? 'ring-2 ring-accent md:scale-105 shadow-2xl relative z-10 bg-white/70' : 'opacity-90'}`}>
              <h3 className="font-sans font-bold text-2xl mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-mono text-4xl font-bold text-accent">{plan.price}</span>
                <span className="font-mono text-sm opacity-60">{plan.period}</span>
              </div>
              <ul className="flex flex-col gap-4 mb-12 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 font-sans text-sm font-medium text-dark/80">
                    <Check size={18} strokeWidth={3} className="text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`magnetic-btn w-full ${plan.highlight ? 'magnetic-btn-primary' : 'bg-transparent border border-dark/20 text-dark py-4 hover:bg-dark/5'}`}>
                {plan.highlight && <div className="hover-bg"></div>}
                <span className="relative z-10">{plan.cta}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
